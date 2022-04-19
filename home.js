// all buttons and image src
const BUTTON_ARRAYS = document.querySelectorAll('ul button');
const NAV_BUTTON = document.querySelector('.hamburger')
const NAV = document.querySelector('ul');

const BTN_IMAGE_SRC_OBJ = {
    "macbook-btn" : "images/macbook.jpg",
    "ipad-mini-btn" : "images/ipad-mini-6.jpg",
    "imac-btn" : "images/imac-24.jpg",
    "airpod-btn" : "images/airpod-3.jpg",
    "iphone-13-btn" : "images/iphone-13.jpg",
    "ipad-pro-btn" : "images/ipad-pro.jpg",
    "apple-watch-btn" : "images/apple-watch-7.jpg"
}

// event listener
BUTTON_ARRAYS.forEach(btn => {btn.addEventListener('click', displayfunc)});
NAV_BUTTON.addEventListener('click', nav)

// functions
function displayfunc(){
   displayImage(BTN_IMAGE_SRC_OBJ[this.className]);
}

function displayImage(imageSrc){
    let imageContainer = document.createElement('div');
    imageContainer.className = "image-container";
    const IMAGE = document.createElement('img');
    IMAGE.src = imageSrc;
    imageContainer.append(IMAGE);
    const CLOSE_BUTTON = document.createElement('button');
    CLOSE_BUTTON.innerText = "X";
    CLOSE_BUTTON.style.cursor = "pointer";
    CLOSE_BUTTON.className = 'close-btn';
    imageContainer.append(CLOSE_BUTTON);
    CLOSE_BUTTON.addEventListener('click', closeImage);
    function closeImage(){
        imageContainer.style.display = "none"
    }
    document.body.append(imageContainer);
}

function nav(){
    NAV_BUTTON.classList.toggle("close")
    NAV.classList.toggle("open")
}