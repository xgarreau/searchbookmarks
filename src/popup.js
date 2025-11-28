let allBookmarks = [];
let searchTimeout = null;

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').placeholder = chrome.i18n.getMessage('searchPlaceholder');
  document.getElementById('noResults').textContent = chrome.i18n.getMessage('noResults');
});

// Récupère tous les bookmarks au chargement
chrome.bookmarks.getTree((bookmarkTreeNodes) => {
  allBookmarks = flattenBookmarks(bookmarkTreeNodes);
  updateSearchCount(allBookmarks.length);
});

// Aplatit l'arbre de bookmarks et conserve le chemin
function flattenBookmarks(bookmarkNodes, path = []) {
  let results = [];

  for (let node of bookmarkNodes) {
    const currentPath = node.title ? [...path, node.title] : path;

    if (node.url) {
      results.push({
        id: node.id,
        title: node.title || chrome.i18n.getMessage('untitled'),
        url: node.url,
        path: currentPath.slice(0, -1).join(' > ')
      });
    }

    if (node.children) {
      results = results.concat(flattenBookmarks(node.children, currentPath));
    }
  }

  return results;
}

// Recherche dans les bookmarks
function searchBookmarks(query) {
  if (!query.trim()) {
    return allBookmarks;
  }

  // Sépare la requête en mots individuels
  const words = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);

  return allBookmarks.filter(bookmark => {
    const searchText = (
      bookmark.title + ' ' +
      bookmark.url + ' ' +
      bookmark.path
    ).toLowerCase();

    // Vérifie que TOUS les mots sont présents (recherche AND)
    return words.every(word => searchText.includes(word));
  });
}

// Surligne les termes recherchés
function highlightText(text, query) {
  if (!query.trim()) {
    return text;
  }

  // Sépare la requête en mots individuels et surligne chacun
  const words = query.split(/\s+/).filter(word => word.length > 0);
  let result = text;

  words.forEach(word => {
    const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
    result = result.replace(regex, '<span class="highlight">$1</span>');
  });

  return result;
}

// Échappe les caractères spéciaux pour regex
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Affiche les résultats
function displayResults(bookmarks, query) {
  const resultsContainer = document.getElementById('results');
  const noResultsDiv = document.getElementById('noResults');

  resultsContainer.innerHTML = '';

  if (bookmarks.length === 0) {
    resultsContainer.style.display = 'none';
    noResultsDiv.style.display = 'block';
    updateSearchCount(0);
    return;
  }

  resultsContainer.style.display = 'block';
  noResultsDiv.style.display = 'none';
  updateSearchCount(bookmarks.length);

  bookmarks.forEach(bookmark => {
    const item = document.createElement('div');
    item.className = 'bookmark-item';

    const favicon = document.createElement('img');
    favicon.className = 'bookmark-favicon';
    favicon.src = `https://www.google.com/s2/favicons?domain=${new URL(bookmark.url).hostname}&sz=32`;
    favicon.onerror = () => {
      favicon.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><text y="14" font-size="14">📄</text></svg>';
    };

    const content = document.createElement('div');
    content.className = 'bookmark-content';

    const title = document.createElement('div');
    title.className = 'bookmark-title';
    title.innerHTML = highlightText(bookmark.title, query);

    const url = document.createElement('div');
    url.className = 'bookmark-url';
    url.innerHTML = highlightText(bookmark.url, query);

    content.appendChild(title);
    content.appendChild(url);

    if (bookmark.path) {
      const path = document.createElement('div');
      path.className = 'bookmark-path';
      path.innerHTML = highlightText(bookmark.path, query);
      content.appendChild(path);
    }

    item.appendChild(favicon);
    item.appendChild(content);

    item.addEventListener('click', () => {
      chrome.tabs.create({ url: bookmark.url });
    });

    resultsContainer.appendChild(item);
  });
}

// Met à jour le compteur
function updateSearchCount(count) {
  const searchCount = document.getElementById('searchCount');
  if (count === allBookmarks.length) {
    searchCount.textContent = chrome.i18n.getMessage('totalBookmarks', [count.toString()]);
  } else {
    searchCount.textContent = chrome.i18n.getMessage('resultsFound', [count.toString()]);
  }
}

// Gestion de la recherche avec debounce
document.getElementById('searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    const query = e.target.value;
    const results = searchBookmarks(query);
    displayResults(results, query);
  }, 150);
});

// Affiche tous les bookmarks au démarrage
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    displayResults(allBookmarks, '');
  }, 100);
});

// Gestion du clavier
document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    e.target.value = '';
    const results = searchBookmarks('');
    displayResults(results, '');
  }
});
