document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("character-container");

    // Function to fetch a random character from the API
    function fetchRandomCharacter() {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => {
                // Get a random character from the API
                const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];

                // Clear existing character information
                characterContainer.innerHTML = "";

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
    }

    // Initial fetch and display of a random character
    fetchRandomCharacter();

    // Bind the fetchRandomCharacter function to the button click event
    const regenerateButton = document.getElementById("regenerate-button");
    if (regenerateButton) {
        regenerateButton.addEventListener("click", fetchRandomCharacter);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const characterTableBody = document.getElementById("character-table-body");

    let characters = [
        { name: 'Rick Sanchez', episodes: '69' },
        { name: 'Morty Smith', episodes: '69' },
        { name: 'Summer Smith', episodes: '60' },
        { name: 'Beth Smith', episodes: '58' },
        { name: 'Jerry Smith', episodes: '48' },
        { name: 'Birdperson', episodes: '11' },
        { name: 'Mr. Poopybutthole', episodes: '9' },
        { name: 'Evil Morty', episodes: '6' },
        // ... more characters
    ];

    function displayCharactersInTable(characterArray) {
        characterTableBody.innerHTML = ""; // Clear existing content
        characterArray.forEach(character => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = character.name;

            const episodesCell = document.createElement("td");
            episodesCell.textContent = character.episodes;

            row.appendChild(nameCell);
            row.appendChild(episodesCell);
            characterTableBody.appendChild(row);
        });
    }

    function sortCharacters() {
        const sortCriteria = document.getElementById("sortCriteria").value;
        characters = sortArrayByCriteria(characters, sortCriteria);
        console.log("Sorted characters:", characters); // Log the sorted characters
        displayCharactersInTable(characters);
    }

    function sortArrayByCriteria(array, criteria) {
        return array.sort((a, b) => {
            if (criteria === 'name') {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            } else if (criteria === 'episodes') {
                return b.episodes - a.episodes;
            }
        });
    }

    function sortTable(criteria) {
        characters = sortArrayByCriteria(characters, criteria);
        console.log("Sorted characters:", characters); // Log the sorted characters
        displayCharactersInTable(characters);
    }

    // Display characters in the table when the page loads
    displayCharactersInTable(characters);
});
