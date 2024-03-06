const bgImages = [
'../../asset/image/1.jpg',
'../../asset/image/2.jpg',
'../../asset/image/3.jpg',
'../../asset/image/4.jpg',
'../../asset/image/5.jpg',
'../../asset/image/6.jpg',
'../../asset/image/.jpg',
]

changeBgImage();
setInterval(changeBgImage, 10000);

function changeBgImage(){
    const image = bgImages[Math.floor(Math.random() * bgImages.length)];
    
    const img = new Image();
    img.onload = function() {
        document.body.style.backgroundImage = "url(" + image + ")";
        document.body.style.transition = 'background-image 2s ease-out';
        document.body.style.backgroundSize = 'cover';
    };
    img.onerror = function() {
        console.error("Failed to load image: " + image);
        document.body.style.backgroundColor = "#55CBCD";
        // You can handle the error here, for example, load a default image.
    };
    img.src = image;




}