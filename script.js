let imageBox = document.getElementById("QRBox")
let QRImage = document.getElementById("QRImage")
let QRText = document.getElementById("QRText")

function generateQR() {
    if(QRText.value.length > 0) {
        QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  QRText.value;
        QRBox.classList.add("show-img");
    }
    
    else {
        document.querySelector(".input-space label").style.border = "2px solid rgba(250, 125, 125)"
        document.querySelector(".input-space label").style.transition = "all 0.2s linear"
    }
}