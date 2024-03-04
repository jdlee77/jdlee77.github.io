function cycleImage(currentImage, setId) {
    const set = document.getElementById(setId);
    const images = set.getElementsByTagName('img');
    let found = false;
    for (let i = 0; i < images.length; i++) {
        if (found) {
            images[i].style.display = 'block';
            break;
        }
        if (images[i] === currentImage) {
            images[i].style.display = 'none';
            found = true;
        }
    }
    if (!found || images[images.length - 1] === currentImage) {
        images[0].style.display = 'block';
    }
}
