let imgobject = {
  1: `"../new img/img1.webp"`,
  2: '"new img/images1.webp" ',
  3: '"new img/img2.webp" ',
  4: '"new img/myimage1.webp" ',
  5: '"new img/myimage2.webp" ',
  6: '"new img/myimage3.webp" ',
  7: '"new img/myimage4.webp" ',
  8: '"new img/myimage5.webp" ',
  9: '"new img/myimage6.webp" ',
  10: '"new img/myimage7.webp" ',
  11: '"new img/myimage8.webp" ',
  12: '"new img/myimage9.webp" ',
  13: '"new img/myimage10.webp" ',
  14: '"new img/myimage11.webp"',
};

function changeimg() {
  let imgcover = document.querySelector(".imgcover");
  let imgplus = 0;
  let imgplus2 = 0;
  setInterval(() => {
    if (imgplus === 14) {
      imgplus = 1;
      imgplus2 = imgplus;
    } else {
      imgplus++;
    }
    imgcover.style.backgroundImage=`url(${imgobject[imgplus]})`; // agar hame value null mili to khali string rakho
  }, 3000);
}
setInterval(() => {
  
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
    const rotateX = (-y / height) * 40; // negative to invert
    const rotateY = (x / width) * 20;

    mover.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${
      (x / width) * 25
    }deg)`;
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
      document.querySelector('.serveses').addEventListener('click',()=>toorBlock.remove())
    }
  }
  const fristvisite = JSON.parse(localStorage.getItem("fristTimeVisite"));
  toor(fristvisite);
}
toorofTheWebsite();
if (window.innerWidth<=550) {
  let toor_block =document.querySelector('.toor_block')
  toor_block.style.color='white'
  toor_block.style.height='15px'
  toor_block.style.left='57vw'
  toor_block.style.fontSize='8px'
  toor_block.style.top='5vh'
}