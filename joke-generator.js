async function fetchRandomJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
        const data = await response.json();
        
        if (data.type === 'single') {
            return data.joke;
        } else {
            return `${data.setup}\n${data.delivery}`;
        }
    } catch (error) {
        return 'Error fetching joke: ' + error.message;
    }
}

// Example usage:
fetchRandomJoke().then(joke => {
    console.log('Random Joke:');
    console.log(joke);
});
