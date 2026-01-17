function filterPublications() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const publications = document.querySelectorAll('.publication-item');
    let visibleCount = 0;

    publications.forEach(pub => {
        const title = pub.querySelector('.pub-title').textContent.toLowerCase();
        const keywords = pub.getAttribute('data-keywords').toLowerCase();
        
        if (title.includes(searchTerm) || keywords.includes(searchTerm) || searchTerm === '') {
            pub.style.display = 'block';
            visibleCount++;
        } else {
            pub.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}
