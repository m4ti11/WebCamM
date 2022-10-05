navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream)=> {    
    console.log(stream)  

    let video = document.getElementById('video')

    video.srcObject = stream

}).catch((err)=>console.log(err))          

document.getElementById("foto").addEventListener("click", ()=> {
capturarfoto();
})

function capturarfoto() {
    const canvas = document.getElementById("goncho");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 1280, 720);

}