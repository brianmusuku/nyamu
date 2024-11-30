document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[inp="subject"]');
    const suggestionsDiv = document.querySelector('.suggestions');
    const links = Array.from(suggestionsDiv.querySelectorAll('a'));

    console.log(input, suggestionsDiv, links)

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();

        // Filter links based on the text content
        const filteredLinks = links.filter(link =>
            link.textContent.toLowerCase().includes(query)
        );

        // Show or hide suggestions based on matches
        if (query && filteredLinks.length > 0) {
            suggestionsDiv.style.display = 'block';
            links.forEach(link => {
                link.style.display = filteredLinks.includes(link) ? 'block' : 'none';
            });
        } else {
            suggestionsDiv.style.display = 'none';
        }
    });

    // Hide suggestions when the input loses focus (optional)
    input.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionsDiv.style.display = 'none';
        }, 200); // Delay to allow clicking suggestions
    });
});
