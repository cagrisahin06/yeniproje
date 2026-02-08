// search.js

/**
 * Search and filter functionality for documentation.
 * @param {Array} data - Array of documentation items.
 * @param {string} query - User's search query.
 * @returns {Array} - Filtered results based on the search query.
 */
function searchAndFilter(data, query) {
    if (!query) return data; // return all data if query is empty
    
    return data.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) ||
               item.description.toLowerCase().includes(query.toLowerCase());
    });
}

// Example usage:
const documentationItems = [
    { title: 'Getting Started', description: 'Introduction to the project.' },
    { title: 'API Reference', description: 'Details of the API endpoints.' },
    { title: 'Contributing', description: 'How to contribute to the project.' }
];

const query = 'getting';
const results = searchAndFilter(documentationItems, query);
console.log(results);