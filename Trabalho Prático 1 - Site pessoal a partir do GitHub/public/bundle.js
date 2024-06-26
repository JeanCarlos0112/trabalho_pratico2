/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/script.js":
/*!************************************!*\
  !*** ./public/assets/js/script.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// src/script.js\r\nasync function loadData() {\r\n    try {\r\n        const response = await fetch('http://localhost:3000/dados');\r\n        const data = await response.json();\r\n\r\n        const name = document.getElementById('nome');\r\n        const image = document.getElementById('imgPerfil');\r\n        //const email = document.getElementById('email');\r\n       // const followers = document.getElementById('followers');\r\n        //const following = document.getElementById('following');\r\n        //const link = document.getElementById('link');\r\n        const location = document.getElementById('local');\r\n        //const repos = document.getElementById('repos');\r\n\r\n        name.innerHTML = data.name;\r\n        image.src = data.image;\r\n        //email.innerHTML = data.email;\r\n        //followers.innerHTML = `Followers: ${data.followers}`;\r\n        //following.innerHTML = `Following: ${data.following}`;\r\n        //link.href = data.link;\r\n        //link.innerHTML = 'GitHub Profile';\r\n        location.innerHTML = data.location;\r\n\r\n        /*\r\n        repos.innerHTML = ''; // Clear existing repositories\r\n        data.repos.forEach(repo => {\r\n            const repoDiv = document.createElement('div');\r\n            repoDiv.className = 'repo';\r\n            repoDiv.innerHTML = `\r\n                <h3>${repo.repoName}</h3>\r\n                <p>${repo.repoDescription}</p>\r\n                <p>Language: ${repo.repoLanguage}</p>\r\n                <p>Stars: ${repo.repoStars}</p>\r\n                <p>Forks: ${repo.repoForks}</p>\r\n                <p>License: ${repo.repoLicense}</p>\r\n                <p>Created at: ${repo.repoBorn}</p>\r\n                <p>Last update: ${repo.repoLastUpdate}</p>\r\n                <a href=\"${repo.repoLink}\">Link</a>\r\n            `;\r\n            repos.appendChild(repoDiv);\r\n            \r\n        });\r\n        */\r\n    } catch (error) {\r\n        console.error('Error loading data:', error);\r\n    }\r\n}\r\n\r\nwindow.onload = async () => {\r\n    await loadData();\r\n    setInterval(loadData, 60000);\r\n};\r\n\n\n//# sourceURL=webpack:///./public/assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;