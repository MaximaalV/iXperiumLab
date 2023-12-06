document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
  
    function filterIcons(searchQuery) {
       const nothingfound = document.getElementById("nothing-alert");
       let number = 0;
        cards.forEach(function (card) {
        const name = card.querySelector("h4").textContent.toLowerCase();
  
        if (name.includes(searchQuery.toLowerCase())) {
         nothingfound.style.display = "none";
          card.style.display = "flex";
        number++;
        } else {
          card.style.display = "none";
        }
      });
     if(number == 0){
        nothingfound.style.display = "block";
     }
    }
  
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.trim();
      filterIcons(searchQuery);
    });
  });

