const agencies = [
    { agency: "Department of Justice", id: "DOJ" },
    { agency: "Department of Defense", id: "DOD" },
    { agency: "Federal Reserve", id: "FED" },
    { agency: "Environmental Protection Agency", id: "EPA" },
    { agency: "Federal Bureau of Investigation", id: "FBI" },
    { agency: "Central Intelligence Agency", id: "CIA" },
    { agency: "National Aeronautics and Space Administration", id: "NASA" },
    { agency: "U.S. Treasury", id: "UST" },
    { agency: "Department of State", id: "DOS" },
    { agency: "Department of Homeland Security", id: "DHS" },
    { agency: "Department of Health and Human Services", id: "HHS" },
    { agency: "National Institutes of Health", id: "NIH" },
    { agency: "Department of Labor", id: "DOL" },
    { agency: "Department of Transportation", id: "DOT" },
    { agency: "Department of Veterans Affairs", id: "VA" },
    { agency: "Social Security Administration", id: "SSA" },
    // Add more agencies as needed
];

// Populate the dropdown with agency names
function populateAgencyDropdown() {
    const dropdown = document.getElementById("agency-list");
    agencies.forEach((agency) => {
        const option = document.createElement("option");
        option.value = agency.id;
        option.textContent = agency.agency;
        dropdown.appendChild(option);
    });
}

// Display actions based on selected agency (placeholder data for now)
function displayAgencyActions(agencyId) {
    const agencyActions = document.getElementById("agency-actions");
    const selectedAgency = agencies.find(agency => agency.id === agencyId);

    if (selectedAgency) {
        // This would be replaced with dynamic content based on real data
        agencyActions.innerHTML = `
            <h3>Actions for ${selectedAgency.agency}</h3>
            <p>Sample action: Agency took a policy decision on XYZ topic.</p>
            <p>Sample action: Agency announced a new initiative related to ABC.</p>
        `;
    }
}

// Event listener for the dropdown to load actions when a selection is made
document.getElementById("agency-list").addEventListener("change", (event) => {
    const agencyId = event.target.value;
    displayAgencyActions(agencyId);
});

// Load the agency dropdown when the page loads
window.onload = () => {
    populateAgencyDropdown();
};
