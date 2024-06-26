// dados.js (Node.js)
import fs from 'fs';
//const fs = require('fs');
import fetch from 'node-fetch';
//const fetch = require('node-fetch');

async function fetchAndSaveData() {
    try {
        const userResponse = await fetch('https://api.github.com/users/JeanCarlos0112');
        const repoResponse = await fetch('https://api.github.com/users/JeanCarlos0112/repos');
        const userData = await userResponse.json();
        const repoData = await repoResponse.json();

        const data = {
            name: userData.name,
            image: userData.avatar_url,
            email: userData.email,
            followers: userData.followers,
            following: userData.following,
            link: userData.html_url,
            location: userData.location,
            repos: repoData.map(repo => ({
                repoName: repo.name,
                repoLink: repo.html_url,
                repoDescription: repo.description,
                repoLanguage: repo.language,
                repoStars: repo.stargazers_count,
                repoForks: repo.forks_count,
                repoLicense: repo.license ? repo.license.name : 'N/A',
                repoBorn: repo.created_at,
                repoLastUpdate: repo.updated_at
            }))
        };

        const db = { dados: data };
        fs.writeFileSync('../../../db/db.json', JSON.stringify(db, null, 2));
        console.log('Data saved to db.json');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Atualiza os dados a cada minuto
setInterval(fetchAndSaveData, 60000);
fetchAndSaveData();


