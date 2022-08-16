function Alert_text() {
    alert("teste");
}

function acertou(){
    acertou(1);
}


function trocarJanela(alvo) {

    let pagAlvo = window.getComputedStyle(document.querySelector(alvo));

    if (pagAlvo.className === "amostra") {
        document.getElementById(alvo).className.add('amostra');
    }

    switch (alvo) {

        case 1:
            document.getElementById("1").className.add('a-amostra');
            document.getElementById("1").className.remove('amostra');
            break;

    }


}

function errou() {

}

