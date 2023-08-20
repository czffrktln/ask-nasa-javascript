var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd


var dateControl = document.querySelector('input[type="date"]');
var inputValue = dateControl.value;
dateControl.value = today
dateControl.max = today

const pictureElement = document.getElementById('picture');
const explanationElement = document.getElementById('explanation');
const titleElement = document.getElementById('title');



// function getOlderDateData(event) {
//     console.log("hello")
//     console.log(event.target.value);
//     fetch ('https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E${dateControl.value}')
//     .then (res => res.json())
//     .then (data => {
//         if (data.media_type === "video") {
//             pictureElement.innerHTML = `<iframe id="video-of-the-day" src='${data.url}'/>`
//         } else if (data.media_type === "image") {
//         pictureElement.innerHTML = `<img id="photo-of-the-day" src='${data.url}' onclick="window.open('${data.hdurl}', '_blank')"/>`
//         }
//         explanationElement.innerHTML = `<p>${data.explanation}</p>`
//         titleElement.innerHTML = `<p>${data.title}</p>`
//     })
// }

dateControl.addEventListener('change', akarmi)

function akarmi() {
    console.log("hello")
};


function getDataOfTheDay() {
    console.log(dateControl.value);
    fetch (`https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E&date=${dateControl.value}`)
    .then (res => res.json())
    .then (data => {
        if (data.media_type === "video") {
            pictureElement.innerHTML = `<iframe id="video-of-the-day" src='${data.url}'/>`
        } else if (data.media_type === "image") {
        pictureElement.innerHTML = `<img id="photo-of-the-day" src='${data.url}' onclick="window.open('${data.hdurl}', '_blank')"/>`
        }
        explanationElement.innerHTML = `<p>${data.explanation}</p>`
        titleElement.innerHTML = `<p>${data.title}</p>`
        
    })
}



/*
function getPhotoOfTheDay() {
    fetch ('https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E')
    .then (res => res.json())
    .then (data => {
        if (data.media_type === "video") {
            pictureElement.innerHTML = `<iframe id="video-of-the-day" src='${data.url}'/>`
        } else {
        pictureElement.innerHTML = `<img id="photo-of-the-day" src='${data.url}' onclick="window.open('${data.hdurl}', '_blank')"/>`
        }
    })
}
function getExplanation() {
    fetch ('https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E')
    .then (res => res.json())
    .then (data => {
        explanationElement.innerHTML = `<p>${data.explanation}</p>`
    })
}

function getTitle() {
    fetch ('https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E')
    .then (res => res.json())
    .then (data => {
        titleElement.innerHTML = `<p>${data.title}</p>`
    })
}

const pictureOfTheDay = document.getElementById('photo-of-the-day');


*/
/*
function pickingDate() {
        fetch ('https://api.nasa.gov/planetary/apod?api_key=7aWVNmfw64Zo4iFNN9nmry858gkPArtOrajwVQ6E&date=${dateControl.value}')
    }
*/


