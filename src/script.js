// Definera array av namn
let people;

export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const resultDisplay = document.getElementById("resultDisplay")
  const searchBtn = document.getElementById("searchBtn")
  const searchInput = document.getElementById("searchInput")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    let input = searchInput.value
    
    // 2. Skapa en boolean för found
    let found = false
    
    // 3. Loopa igenom people-arrayen
    for (let person of people) {
      if (input === person) {
        found = true
      }
    }
    if (found) {
        resultDisplay.textContent = `Namn hittades: ${input}`
      } else {
        resultDisplay.textContent = "Namn hittades inte."
        found = false
      }
  })
    // 4. Jämför texten med varje namn i arrayen
    
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    
};




// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
