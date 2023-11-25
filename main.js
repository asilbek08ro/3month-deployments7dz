let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper');
let btn2 = document.getElementById('btn2');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display == 'none') {
        text.style.display = 'block';
        btn2.disabled = true;

        wrapper.style.left = '50%';
        wrapper.style.top = '50%';
        wrapper.style.transform = 'translate(-50%, -50%)';

    }
}



var border = document.querySelector('.border');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBorderColor() {
    border.style.borderColor = getRandomColor();
}

document.getElementById('btn').addEventListener('click', changeBorderColor);
document.getElementById('btn2').addEventListener('click', changeBorderColor);
