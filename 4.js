document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[inp="subject"]');
    const suggestionsDiv = document.querySelector('.suggestions');
    const links = Array.from(suggestionsDiv.querySelectorAll('a'));

    // Show suggestions when the input is focused
    input.addEventListener('focus', () => {
        if (input.value.trim()) {
            suggestionsDiv.style.display = 'block';
        }
    });

    // Handle input typing and filtering
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

    // Fill the input field with the selected link's text
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            input.value = link.textContent.trim(); // Set input value
            suggestionsDiv.style.display = 'none'; // Hide suggestions
        });
    });

    // Hide suggestions when the input loses focus (unless a link is clicked)
    input.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionsDiv.style.display = 'none';
        }, 200); // Delay to allow clicking suggestions
    });
});
