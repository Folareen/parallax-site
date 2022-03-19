const MACBOOK_BTN = document.querySelector(".macbook-btn");
// const 



MACBOOK_BTN.addEventListener('click', displayMacbookImage);


function displayMacbookImage(){
    let macbookImageContainer = document.createElement('div');
    macbookImageContainer.className = "macbook-image-container";
    const MACBOOK_IMAGE = document.createElement('img');
    MACBOOK_IMAGE.src = "images/macbook2.jpg"
    macbookImageContainer.append(MACBOOK_IMAGE);
    const CLOSE_BUTTON = document.createElement('button');
    CLOSE_BUTTON.innerText = "X";
    CLOSE_BUTTON.className = 'close-btn';
    macbookImageContainer.append(CLOSE_BUTTON);
    CLOSE_BUTTON.addEventListener('click', closeImage);
    function closeImage(){
        macbookImageContainer.style.display = "none"
    }
    document.body.append(macbookImageContainer);
}