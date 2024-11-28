document.addEventListener("DOMContentLoaded", function() {
    // Fetch and display live feed data
    const dateFilter = document.getElementById("date-filter");
    const actionsFeed = document.getElementById("actions-feed");

    function fetchActions(date) {
        fetch(`https://api.example.com/actions?date=${date}`)
            .then(response => response.json())
            .then(data => {
                actionsFeed.innerHTML = ""; // Clear existing actions
                data.forEach(action => {
                    const actionElement = document.createElement("div");
                    actionElement.classList.add("action-item");
                    actionElement.innerHTML = `
                        <h3>${action.title}</h3>
                        <p><strong>Issued by:</strong> ${action.office}</p>
                        <p><strong>Date:</strong> ${action.date}</p>
                        <p><strong>Category:</strong> ${action.category}</p>
                        <a href="${action.link}" target="_blank">Read more</a>
                    `;
                    actionsFeed.appendChild(actionElement);
                });
            })
            .catch(error => {
                console.error("Error fetching actions:", error);
            });
    }

    // Event listener for date filter
    dateFilter.addEventListener("change", function() {
        const selectedDate = dateFilter.value;
        fetchActions(selectedDate);
    });

    // Fetch actions for today on load
    fetchActions(new Date().toISOString().split('T')[0]);
});
