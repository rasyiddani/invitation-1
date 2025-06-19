// Animasi masuk
gsap.from("#gebyok",      { y: -200, opacity: 0, duration: 1 });
gsap.from("#treeLeft",    { x: -200, opacity: 0, duration: 1 });
gsap.from("#treeRight",   { x: 200,  opacity: 0, duration: 1 });
gsap.from("#flowerLeft",  { y: 200,  opacity: 0, duration: 1, delay: 0.2 });
gsap.from("#flowerRight", { y: 200,  opacity: 0, duration: 1, delay: 0.2 });
gsap.from("#flowerCenter",{ y: 200,  opacity: 0, duration: 1, delay: 0.3 });
gsap.from("#wayangLeft",  { x: -100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#wayangRight", { x: 100,  opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#title",       { y: 30,   opacity: 0, duration: 1, delay: 0.7 });
gsap.from("#openBtn",     { opacity: 0, duration: 1, delay: 1 });

// Animasi kupu-kupu
gsap.to("#butterfly1", {
  y: "-=15",
  rotation: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to("#butterfly2", {
  y: "-=15",
  rotation: 165,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#gununganleft", {
  rotation: 5,
  transformOrigin: "bottom center",
  duration: 1.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to("#gununganright", {
  rotation: 175,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to("#flowerLeft", {
  x: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Flower kanan gerak kiri-kanan (mirror + delay)
gsap.to("#flowerRight", {
  x: -15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  delay: 0.5,
  ease: "sine.inOut"
});

gsap.to("#flowerRightCenter", {
  rotation: 5,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to("#flowerLeftCenter", {
  rotation: -5,
  transformOrigin: "bottom center",
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to("#openBtn", {
  scale: 1.1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
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
    }
  });
});
