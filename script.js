document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
  if (e.key === '' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    return false;
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Music
function playMusic() {
  const audio = document.getElementById("bgm");
  audio.play().catch(() => {
    alert("⚠️ แตะหน้าจอก่อนเพื่อเปิดเพลงนะครับ");
  });
  alert("เพลงวันเกิดกำลังเล่นน้าาา 🎶 สุขสันต์วันเกิดอีกครั้งนะครับ 💖");
}

