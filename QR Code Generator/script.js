const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
      imgBox.classList.add("show-img");    
  }else{
    setTimeout(() => {
      qrText.classList.add('error');
    }, 1000);
  }
}
