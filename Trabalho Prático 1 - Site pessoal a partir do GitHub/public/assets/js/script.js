// src/script.js
async function loadData() {
    try {
        const response = await fetch('http://localhost:3000/dados');
        const data = await response.json();

        const name = document.getElementById('nome');
        const image = document.getElementById('imgPerfil');
        //const email = document.getElementById('email');
       // const followers = document.getElementById('followers');
        //const following = document.getElementById('following');
        //const link = document.getElementById('link');
        const location = document.getElementById('local');
        //const repos = document.getElementById('repos');

        name.innerHTML = data.name;
        image.src = data.image;
        //email.innerHTML = data.email;
        //followers.innerHTML = `Followers: ${data.followers}`;
        //following.innerHTML = `Following: ${data.following}`;
        //link.href = data.link;
        //link.innerHTML = 'GitHub Profile';
        location.innerHTML = data.location;

        /*
        repos.innerHTML = ''; // Clear existing repositories
        data.repos.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.className = 'repo';
            repoDiv.innerHTML = `
                <h3>${repo.repoName}</h3>
                <p>${repo.repoDescription}</p>
                <p>Language: ${repo.repoLanguage}</p>
                <p>Stars: ${repo.repoStars}</p>
                <p>Forks: ${repo.repoForks}</p>
                <p>License: ${repo.repoLicense}</p>
                <p>Created at: ${repo.repoBorn}</p>
                <p>Last update: ${repo.repoLastUpdate}</p>
                <a href="${repo.repoLink}">Link</a>
            `;
            repos.appendChild(repoDiv);
            
        });
        */
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

window.onload = async () => {
    await loadData();
    setInterval(loadData, 60000);
};
