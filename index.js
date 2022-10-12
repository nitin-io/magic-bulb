document.querySelector('.switch-btn-on').addEventListener('click', function() {
    document.querySelector('img').setAttribute('src', 'images/bulb-on.jpg');
    document.querySelector('.switch-btn-on').style.backgroundColor = 'white';
    document.querySelector('.switch-btn-on').style.color = 'black';
    document.querySelector('.switch-btn-off').style.backgroundColor = 'black';
    document.querySelector('.switch-btn-off').style.color = 'white';
});

document.querySelector('.switch-btn-off').addEventListener('click', function(){
    document.querySelector('img').setAttribute('src', 'images/bulb-off.jpg');
    document.querySelector('.switch-btn-off').style.backgroundColor = 'white';
    document.querySelector('.switch-btn-off').style.color = 'black';
    document.querySelector('.switch-btn-on').style.backgroundColor = 'black';
    document.querySelector('.switch-btn-on').style.color = 'white';
})