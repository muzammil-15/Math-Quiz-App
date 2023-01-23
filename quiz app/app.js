let n1 = Math.floor(Math.random() *20 + 1);
let n2 = Math.floor(Math.random() *20 + 1);

document.querySelector('.random-no').innerText = n1;
document.querySelector('.random-no-2').innerText = n2;

let mul = n1 * n2 ;

function game(){
    var user = document.getElementById('ans').value;
    

    if(user == mul){
        (document.getElementById('score').innerHTML)++;
        document.getElementById('remarks').innerHTML = `Wow..${mul} is Correct Answer`;
        document.getElementById('remarks').style.color = 'green';
        document.querySelector('.random-no').innerText = '';
        document.querySelector('.random-no-2').innerText = '';
        var user = document.getElementById('ans').value = " ";    
    }
    else{
        document.getElementById('score').innerHTML -= 1;
        document.getElementById('remarks').innerHTML = `Sorry.. But ${mul} is Correct Answer`;
        document.getElementById('remarks').style.color = 'red';
        document.querySelector('.random-no').innerText = '';
        document.querySelector('.random-no-2').innerText = '';
        var user = document.getElementById('ans').value = " ";
    }

    document.getElementById('next').addEventListener('click', ()=>{
        var user = document.getElementById('ans').value = " ";

        document.getElementById('remarks').innerHTML = "";

        n1 = Math.floor(Math.random() *20 + 1);
        n2 = Math.floor(Math.random() *20 + 1);

        document.querySelector('.random-no').innerText = n1;
        document.querySelector('.random-no-2').innerText = n2;

        mul = n1 * n2 ;
    })
}