const imgContainer =  document.getElementsByClassName('img-container');
const loader = document.getElementsByClassName('loader');

let images = [];

const count = 10;
const apiKey = 'lZ2oBsJQ7jGjdBOl9g0kjcCcI4B0I4WJ8fb_w5Zq7uI';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function displayPhotos() {
    
    images.forEach(photo => {
        // <a> elemente
        const link = document.createElement('a')
        link.setAttribute('href', photo.links.html);
        link.setAttribute('target', '_blank');

        // img element
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt.description)
        img.setAttribute('title', photo.alt.description)

        link.appendChild(img)
        imgContainer.appendChild(link)
    });
}

async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        images = await response.json;
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

getPhotos();
