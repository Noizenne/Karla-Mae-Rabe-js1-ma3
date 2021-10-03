// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=930f3820ae934782bc02fc7a5949d8a8";


const resultsContainer = document.querySelector(".container");


async function gamesList() {

    try {
        const response = await fetch(url);
        
        const results = await response.json();

        console.log(results);

        const games = results.results;

        console.log(games.length);

        for (let i = 0; i < games.length; i++) {

            console.log(games[i].name);
            console.log(games[i].rating);
            console.log(games[i].tags.length);

            if ( i === 8) {
                break;
            }

            resultsContainer.innerHTML = `
            <div class="results">
            <h2>Name: ${games[i].name}</h2>
            <h2>Rating: ${games[i].rating}</h2>
            <h2>Tags: ${games[i].tags.length}</h2>
            </div>`;

            console.log(results[i]);


        }
    
    } catch (error) {
        console.log("An error has occured.");
        resultsContainer.innerHTML = "";
        resultsContainer.innerHTML += `<div class="error">Error.</div>`;
    }

    finally {
        console.log("Finally.")
    }
}

gamesList();
