document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('rss-feed-container');

    const feeds = [
        "https://www.govinfo.gov/rss/bills-enr.xml",
        "https://www.govinfo.gov/rss/bills.xml",
        // Add more RSS feeds here
    ];

    feeds.forEach(feedUrl => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
            .then(response => response.json())
            .then(data => {
                data.items.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
                    feedContainer.appendChild(listItem);
                });
            })
            .catch(error => console.error(`Failed to fetch ${feedUrl}:`, error));
    });
});
