document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("character-container");

    // Fetch data from Rick and Morty API
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            // Get a random character from the API
            const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];

            // Create elements to display character information
            const characterName = document.createElement("h2");
            characterName.textContent = randomCharacter.name;

            const characterImage = document.createElement("img");
            characterImage.src = randomCharacter.image;
            characterImage.alt = randomCharacter.name;

            const characterInfo = document.createElement("p");
            characterInfo.textContent = `Status: ${randomCharacter.status}\nSpecies: ${randomCharacter.species}`;

            // Append elements to the character container
            characterContainer.appendChild(characterName);
            characterContainer.appendChild(characterImage);
            characterContainer.appendChild(characterInfo);
        })
        .catch(error => console.error(error));
});
