const spinner =document.querySelector('.spinner');
function cont(){
    document.querySelector('.bstn').style.display = 'none';
    spinner.style.display = 'block';
    setTimeout(() => {
        callload();
    }, 2500);
}
function callload(){
    setTimeout(() => {
        document.querySelector('.caller').style.top = '35%';
    }, 150);
    document.querySelector('.opack').style.display = 'block';
}