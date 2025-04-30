let imgobject = {
  1: `<div class="mobile2"><img  loading="lazy"  src="new img/img1.webp" alt="mobile2" ></div>`,
  2: '<div class="mobile2"><img  loading="lazy"  src="new img/images1.webp" alt="mobile2" ;"></div>',
  3: '<div class="mobile2"><img  loading="lazy"  src="new img/img2.webp" alt="mobile2" ;"></div>',
  4: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage1.webp" alt="mobile2" ;"></div>',
  5: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage2.webp" alt="mobile2" ;"></div>',
  6: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage3.webp" alt="mobile2" ;"></div>',
  7: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage4.webp" alt="mobile2" ;"></div>',
  8: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage5.webp" alt="mobile2" ;"></div>',
  9: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage6.webp" alt="mobile2" ;"></div>',
  10: '<div class="mobile2"><img loading="lazy" src="new img/myimage7.webp" alt="mobile2" ;"></div>',
  11: '<div class="mobile2"><img loading="lazy" src="new img/myimage8.webp" alt="mobile2" ;"></div>',
  12: '<div class="mobile2"><img loading="lazy" src="new img/myimage9.webp" alt="mobile2" ;"></div>',
  13: '<div class="mobile2"><img loading="lazy" src="new img/myimage10.webp" alt="mobile2" ;"></div>',
  14: '<div class="mobile2"><img loading="lazy" src="new img/myimage11.webp" alt="mobile2" ;"></div>',
};

function changeimg() {
  let imgmobile = document.querySelector(".imgmobile");
  let imgplus = 0;
  let imgplus2 = 0;
  setInterval(() => {
    if (imgplus === 14) {
      imgplus = 1;
      imgplus2 = imgplus;
    } else {
      imgplus++;
    }
    imgmobile.innerHTML = `${imgobject[imgplus]}` || ""; // agar hame value null mili to khali string rakho
  }, 3000);
}
setInterval(() => {
  let imgmobile = document.querySelector(".imgmobile img");
  imgmobile.className = "trans";

  let img = document.querySelector(".trans");
  img.style.animation = " roto 2.5s ease-in infinite";
}, 2800);
changeimg();

let index = 0;
let index2 = 0;
let str = [
  `created  by  dheeraj `,
  `Learn wev dev & dsa`,
  " web devalapar",
  "Becam  a  you tuber",
];
let typeWriterElement = document.querySelector(".typewriter");

function typeWriter() {
  if (index < str.length) {
    if (index2 < str[index].length) {
      typeWriterElement.textContent += str[index].charAt(index2);
      index2++;
      typeWriterElement.style.borderRight = "solid rgb(255, 255, 0) 3px";
      typeWriterElement.style.fontFamily = `"poppins", serif`;
    } else {
      typeWriterElement.textContent = "";
      index2 = 0;
      index++;
      let r1, r2, r3;
      r1 = Math.floor(Math.random() * 254) + 1;
      r2 = Math.floor(Math.random() * 254) + 1;
      r3 = Math.floor(Math.random() * 254) + 1;
      typeWriterElement.style.color = `rgb(${r1},${r2},${r3})`;
      typeWriterElement.style.fontFamily = `"poppins", serif`;
      typeWriterElement.style.borderRight = "solid rgb(255, 255, 0) 3px";
    }
  } else {
    index2 = 0;
    index = 0;
    typeWriterElement.style.borderRight = "none";
  }
}
setInterval(typeWriter, 300);

function effact() {
  const hero = document.querySelector(".hero");
  const mover = document.querySelector(".img");

  hero.addEventListener("mousemove", (e) => {
    const { width, height, left, top } = hero.getBoundingClientRect();

    // Mouse position relative to center
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    // Rotation calculation (adjust multiplier for more/less rotation)
    const rotateX = (-y / height) * 30; // negative to invert
    const rotateY = (x / width) * 30;

    mover.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${
      (x / width) * 25
    }deg)`;

    // Dynamic background color
    const r = Math.min(255, Math.max(0, 150 + x / 2));
    const g = Math.min(255, Math.max(0, 150 + y / 2));
    const b = Math.min(255, Math.max(0, 200 - x / 3));
    let imgmobile = document.querySelector(".imgmobile");
    mover.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    imgmobile.style.filter = `drop-shadow(4px 8px 20px rgb(${r}, ${g}, ${b}));`;
  });

  hero.addEventListener("mouseleave", () => {
    // Smooth reset when mouse leaves
    mover.style.transform = `rotateX(0deg) rotateY(0deg)`;
    mover.style.backgroundColor = `rgb(150, 150, 200,0.0)`;
  });
}
effact();

function toorofTheWebsite() {
  function toor(fristvisite) {
    if (fristvisite === null) {
      localStorage.setItem("fristTimeVisite", JSON.stringify(false));
    }
    if (!fristvisite) {
      console.log(fristvisite);
      let toorBlock = document.createElement("div");
      toorBlock.setAttribute("class", "toor_block");
      toorBlock.innerHTML = `<p> click hear to start my serveses <i>></i></p>
      `;
      document.querySelector(".hero").appendChild(toorBlock);
    }
  }
  const fristvisite = JSON.parse(localStorage.getItem("fristTimeVisite"));
  toor(fristvisite);
}
toorofTheWebsite();
