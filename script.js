const weddingDate = new Date("July 27, 2025 08:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Acara telah dimulai";
  }
}, 1000);

// ------------------- nama undangan -------------------------- //

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nama = urlParams.get("nama");

if (nama) {
  document.getElementById("nama-undangan").innerHTML = `Untuk : <br> ${nama}`;
}
// ------------------- animasi animasu -------------------------- //
// Animasi masuk
gsap.from("#gebyok", { y: -200, opacity: 0, duration: 1 });
gsap.from("#treeLeft", { x: -200, opacity: 0, duration: 1 });
gsap.from("#treeRight", { x: 200, opacity: 0, duration: 1 });
gsap.from("#flowerLeft", { y: 200, opacity: 0, duration: 1, delay: 0.2 });
gsap.from("#flowerRight", { y: 200, opacity: 0, duration: 1, delay: 0.2 });
gsap.from("#flowerCenter", { y: 200, opacity: 0, duration: 1, delay: 0.3 });
gsap.from("#wayangLeft", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#wayangRight", { x: 100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#title", { y: 30, opacity: 0, duration: 1, delay: 0.7 });
gsap.from("#openBtn", { opacity: 0, duration: 1, delay: 1 });

// Animasi kupu-kupu
gsap.to("#butterfly1", {
  y: "-=15",
  rotation: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
gsap.to("#butterfly2", {
  y: "-=15",
  rotation: 165,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#gununganleft", {
  rotation: 5,
  transformOrigin: "bottom center",
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

gsap.to("#gununganright", {
  rotation: 175,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

gsap.to("#flowerLeft", {
  x: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Flower kanan gerak kiri-kanan (mirror + delay)
gsap.to("#flowerRight", {
  x: -15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  delay: 0.5,
  ease: "sine.inOut",
});

gsap.to("#flowerRightCenter", {
  rotation: 5,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

gsap.to("#flowerLeftCenter", {
  rotation: -5,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});

gsap.to("#openBtn", {
  scale: 1.1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Transisi ke halaman utama
document.getElementById("openBtn").addEventListener("click", () => {
  gsap.to("#coverPage", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("coverPage").style.display = "none";
      document.getElementById("mainPage").style.display = "flex";
      gsap.from("#mainPage", { opacity: 0, duration: 1 });
    },
  });
});

gsap.from("#flower-left-bride", { opacity: 0, duration: 1, delay: 0.2 });
gsap.from("#flower-right-bride", { opacity: 0, duration: 1, delay: 0.2 });

gsap.to("#flower-left-bride", {
  x: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Flower kanan gerak kiri-kanan (mirror + delay)
gsap.to("#flower-right-bride", {
  x: -15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  delay: 0.5,
  ease: "sine.inOut",
});

gsap.from("#gunungan-left-detail", { left: -200, duration: 1, delay: 0.2 });
gsap.from("#gunungan-right-detail", { right: -200, duration: 1, delay: 0.2 });
gsap.from("#wayangLeft-detail", { left: -200, duration: 1, delay: 0.2 });
gsap.from("#wayangRight-detail", { right: -200, duration: 1, delay: 0.2 });

gsap.to("#gunungan-left-detail", {
  y: "-=15",
  x: "-=15",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#gunungan-right-detail", {
  y: "15",
  x: "15",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#wayangLeft-detail", {
  x: "-10",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#wayangRight-detail", {
  x: "10",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#butterfly-photo", {
  y: "-=15",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#flower-photo-left1", {
  y: "-=5",
  x: "-=5",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#flower-photo-left2", {
  y: "-=5",
  x: "-=5",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#flower-photo-right1", {
  y: "5",
  x: "5",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to("#flower-photo-right2", {
  y: "5",
  x: "5",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.from("#gebyok-thanks", { y: 200, duration: 1, delay: 0.2 });
gsap.from("#treeLeft-thanks", { x: -200, y: 200, duration: 1, delay: 0.2 });
gsap.from("#treeRight-thanks", { x: 200, y: 200, duration: 1, delay: 0.2 });
gsap.from("#gununganleft-thanks", {
  x: -200,
  y: -200,
  duration: 1,
  delay: 0.2,
});
gsap.from("#gununganright-thanks", {
  x: 200,
  y: -200,
  duration: 1,
  delay: 0.2,
});
gsap.from("#wayangLeft-thanks", { x: -200, y: -200, duration: 1, delay: 0.2 });
gsap.from("#wayangRight-thanks", { x: 200, y: -200, duration: 1, delay: 0.2 });
gsap.from("#flowerCenter-thanks1", { y: 200, duration: 1, delay: 0.2 });
gsap.from("#flowerCenter-thanks2", { y: 200, duration: 1, delay: 0.2 });
gsap.from("#flowerLeft-thanks", { y: 200, duration: 1, delay: 0.2 });
gsap.from("#flowerRight-thanks", { y: 200, duration: 1, delay: 0.2 });

gsap.to("#gununganleft-thanks", {
  rotation: 7,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#gununganright-thanks", {
  rotation: 173,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#wayangLeft-thanks", {
  x: "1",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#wayangRight-thanks", {
  x: "1",
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#flowerCenter-thanks1", {
  rotation: 7,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#flowerCenter-thanks2", {
  rotation: 173,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#flowerLeft-thanks", {
  rotation: 7,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#flowerRight-thanks", {
  rotation: 173,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

if (nama) {
  document.getElementById("nama-undangan-inner").innerHTML = `${nama}`;
}

// ------------------- form undangan -------------------------- //
if (nama) {
  document.getElementById("nama-form").value = decodeURIComponent(nama);
}

const submitBtn = document.getElementById("submitBtn");
document
  .getElementById("form-undangan")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.textContent = "Mengirim Data...";
    submitBtn.disabled = true;

    const data = {
      nama: document.getElementById("nama-form").value,
      doa: document.getElementById("doa").value,
      kehadiran: document.getElementById("kehadiran").value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyZEoewFqxDiwWp60V_4PY8PmNFqWwLJtwL6XANTXR9YBjHS2MlvokakUDfk0cKc89Wvg/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        document.getElementById("status").textContent =
          "🙏 Terima kasih, data Anda sudah tersimpan!";
        document.getElementById("form-undangan").reset();
      } else {
        document.getElementById("status").textContent =
          "⚠️ Gagal menyimpan data.";
        document.getElementById("status").style.color = "red";
      }
    } catch (err) {
      document.getElementById("status").textContent =
        "⚠️ Terjadi kesalahan jaringan.";
      document.getElementById("status").style.color = "red";
    } finally {
      submitBtn.textContent = "Kirim";
      submitBtn.disabled = false;
    }
  });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
