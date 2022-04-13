var start = document.querySelector(".butons");
var arti = document.querySelector(".arti");
var eksi = document.querySelector(".eksi");
var resetbutton = document.querySelector(".reset");
var stop = document.querySelector(".stop");
var small = document.querySelector("small");
var result = document.querySelector(".result");
var uyarialani = document.querySelector(".uyari-alani");
var sayac = document.querySelector(".sayac")

kronometre()
kronometre_reset()
arti_eksi()

var hedef = 0;
var saniye = 0;
var reset = 0;
var dakika = 0;
var eksi_deneme = 0


function kronometre() {
    start.addEventListener("click", (e) => {
        e.preventDefault();
        if (hedef < 0) {
            alert("hedef 0 dan küçük")
        } else if (hedef === 0) {
            alert("başlamak için arttır")
        } else {
            const bastir = setInterval(() => {
                result.querySelector("span").textContent = `${dakika} : ${saniye}`;
                if (dakika == hedef) {
                    clearInterval(bastir)
                    sayac.classList.add("end")
                    eksi.disabled = false
                    uyarialani.innerHTML = ' <div class="uyari"><p>Süren bitti</p></div>'


                } else {
                    saniye++;
                }
                if (saniye === 60) {
                    dakika += 1;
                    saniye = 0;
                }
                stop.addEventListener("click", (e) => {
                    start.disabled = false;
                    e.preventDefault();
                    clearInterval(bastir)
                })
            }, 1000 / 60);
        }
    });
}

function arti_eksi() {
    arti.addEventListener("click", (e) => {
        const small = document.querySelector("small");
        e.preventDefault();
        hedef += 5;
        small.textContent = hedef;
    })
    eksi.addEventListener("click", (e) => {
        const small = document.querySelector("small");
        e.preventDefault();
        hedef -= 5;
        small.textContent = hedef;

    })
}

function kronometre_reset() {
    resetbutton.addEventListener("click", (e) => {
        start.disabled = false;
        e.preventDefault();
        result.querySelector("span").textContent = `${reset}`;
        small.textContent = `${reset}`;
        hedef = 0;
        saniye = 0;
        dakika = 0;
        sayac.classList.remove("end")

    })
}
var tiklanmasayisi = 0;
start.addEventListener("click", function() {
    eksi.disabled = true
    if (hedef > 0) {
        uyarialani.innerHTML = ' <div class="uyari"><p>start disable edildi</p></div>'
        start.disabled = true;
    } else {
        start.disabled = false;
    }

})
stop.addEventListener("click", function() {
    uyarialani.innerHTML = ' <div class="uyari"><p>start enable edildi</p></div>'
    uyarialani.style.display = "flex"
})
resetbutton.addEventListener("click", function() {
    uyarialani.innerHTML = ''
    uyarialani.style.display = "flex"
    eksi.disabled = false
})
uyarialani.addEventListener("click", () => {
    uyarialani.style.display = "none"
})