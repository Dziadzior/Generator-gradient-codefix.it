const gradientBlok = document.querySelector('.gradient-blok');
const wybierzMenu = document.querySelector('.wybierz-blok select')
const polaKolory = document.querySelectorAll('.kolory input');
const poleKodu = document.querySelector('textarea');
const odswiezPrzycisk = document.querySelector('.odswiez');
const kopiujPrzycisk = document.querySelector('.kopiuj');

const stworzLosowyKolor = () => {
    const losowyHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${losowyHex}`;
}

const generujGradient = (isRandom) => {
    if (isRandom) {
        polaKolory[0].value = stworzLosowyKolor();
        polaKolory[1].value = stworzLosowyKolor();
    }
    // Tworzenie gradientu uzywanej wartosci pola koloru przez wybierzMenu
    const gradient = `linear-gradient(${wybierzMenu.value}, ${polaKolory[0].value}, ${polaKolory[1].value})`;
    gradientBlok.style.background = gradient;
    poleKodu.value = `background: ${gradient};`;
}  

const kopiujKod = () => {
    navigator.clipboard.writeText(poleKodu.value);
    kopiujPrzycisk.innerText = "Skopiowane!";
    setTimeout(() => kopiujPrzycisk.innerText = "Kopiuj Kod", 1600)
}

polaKolory.forEach(input => {
    // generujGradient funkcja na kazdy kolor z pola input
    input.addEventListener('input', () => generujGradient(false));
});

wybierzMenu.addEventListener('change', () => generujGradient(false));
odswiezPrzycisk.addEventListener('click', () => generujGradient(true));
kopiujPrzycisk.addEventListener('click', kopiujKod);