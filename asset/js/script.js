const container = document.querySelectorAll("main .container2");
const warna = document.querySelectorAll("main .warna");
const nav = document.querySelectorAll("nav ul>*");
const main = document.querySelectorAll("main>*");
const navUtama = document.querySelector("nav");
const tombol = document.getElementById("tombol");

for (let a = 0; a < container.length; a++) {
    container[a].style.backgroundColor = warna[a].textContent;
}

for (let a = 0; a < nav.length; a++) {
    main[a].classList.add("hidden");
    main[0].classList.remove("hidden");
    nav[0].classList.add("dipilih");
    nav[a].addEventListener("click", function () {
        for (let b = 0; b < main.length; b++) {
            main[b].classList.add("hidden");
            nav[b].classList.remove("dipilih");
        }
        // navUtama.classList.remove('tampil');
        main[a].classList.remove("hidden");
        nav[a].classList.add("dipilih");
    });
}

tombol.addEventListener("click", function () {
    navUtama.classList.toggle("sembunyi");
});
