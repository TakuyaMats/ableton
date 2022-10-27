const button = document.getElementById('more__info');

function changeData(parameter) {
    if (parameter === 0) {
        document.getElementById('nav-info').classList.toggle('active');
    };
}

function changeValue() {
    if (button.value == "More +") {
        button.value = "More -";
    } else {
        button.value = "More +";
    }
}