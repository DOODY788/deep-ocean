const spinner =document.querySelector('.spinner');
const form = document.querySelector('.ins');

function openuser(root){
    spinner.style.display = 'block';
    setTimeout(() => {
        if(form.value === 'krutika_aaa11'){
            window.open('./user-identification','_parent');
        }else{
            document.querySelector('.fr_label').innerHTML = 'User not found';
            document.querySelector('.fr_label').style.color ='rgb(200,10,10)';
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500);
        }
    }, 1000);
}