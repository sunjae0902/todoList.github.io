const bgImages = [
'../asset/image/1.jpg',
'../asset/image/2.jpg',
'../asset/image/3.jpg',
'../asset/image/4.jpg',
'../asset/image/5.jpg',
'../asset/image/6.jpg',
'../asset/image/7.jpg',
]

changeBgImage();
setInterval(changeBgImage, 10000);

function changeBgImage(){
    const image = bgImages[Math.floor(Math.random() * bgImages.length)];
    
 
    document.body.style.backgroundImage = "url("+image+")"
    document.body.style.transition = 'background-image 2s ease-out';
    document.body.style.backgroundSize = 'cover'




}