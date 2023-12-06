// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to sort and filter cards based on filter buttons
const filterAndSortCards = (selectedFilter) => {
    filterableCards.forEach(card => {
        const cardDataNames = card.dataset.name.split(' '); // Split data names
        const isMatching = selectedFilter === "all" || cardDataNames.includes(selectedFilter);
        
        if (isMatching) {
            card.style.order = -1; // Move matching cards to the top
            card.classList.remove("hide");
        } else {
            card.style.order = 0; // Reset order for non-matching cards
            card.classList.add("hide");
        }
    });
}

// Function to handle filter button clicks
const handleFilterClick = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    const selectedFilter = e.target.dataset.filter;
    filterAndSortCards(selectedFilter);
}

filterButtons.forEach(button => button.addEventListener("click", handleFilterClick));
