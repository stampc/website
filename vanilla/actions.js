let contentItems = document.getElementsByClassName('content');
let menuItems = document.getElementsByClassName('menu-item');
let imageName = './assets/images/' + Math.floor(Math.random() * 4) + '.jpg';
let profileTextInitialized = false;

let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function randomColor() {
    let hexColor = '#'

    for (var i = 0; i < 6; i++) {
        hexColor = hexColor + hex[Math.floor(Math.random() * 15)]
    }

    return hexColor
}

function setBackgroundColor() {
    document.getElementsByClassName('outer-content-container')[0].style.backgroundImage = `linear-gradient(-90deg,${randomColor()},${randomColor()})`;
}

function changeContent(e, contentType) {
    if (!profileTextInitialized) {
        profileTextInitialized = true;
        document.getElementById('profile-text').style.display = 'flex';
        document.getElementById('initial-image-container').style.display = 'none';
        document.getElementsByClassName('header-container')[0].classList.add('header-container-initialized');
        document.getElementsByClassName('header-container-initialized')[0].classList.remove('header-container');
        document.getElementsByClassName('inner-content-container')[0].style.display = "block";
    }

    for (var item of menuItems) {
        item.style.borderBottom = "none";
    }

    //insert underline for currently selected menu item
    event.target.style.borderBottom = "1px solid black"

    // change main content
    for (var item of contentItems) {
        if (item.id === contentType) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    }
}

function timeSinceLastChampionship() {
    var currentDate = new Date().getTime();
    var championshipDate = new Date("Oct 28, 1991 4:30:00").getTime();
    var timeSince = currentDate - championshipDate
    console.log(timeSince);
}