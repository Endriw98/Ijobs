var menuif = document.getElementById('menuif');
var menu2 = document.getElementById('menu2');
var op = document.getElementById('op');
var msg = document.getElementById('msg');
var inputin = document.getElementById('input');
var enviar = document.getElementById('Enviar');
var texto = document.getElementById('p');

var i = false;
function evento(){
    
    if(i == false){
        menuif.style.display = 'block';
        menuif.style.transitionDuration = '2s';
        
        i=true;
        if (i==true){
            colorOn();
        }
    }
    else if(i==true){
        menuif.style.display = 'none';
        menuif.style.transitionDuration = '2s';
        
        i=false;
        if(i==false){
            colorOf();
        }
    }
}
function colorOn(){
    op.style.transform = 'rotate(45deg)';
    op.style.color = 'red';
    op.style.border = '4px solid red';
    op.style.backgroundColor = 'rgb(36, 36, 36)';
    op.addEventListener('mouseout',()=>{
        if(op.style.backgroundColor == 'red'&& op.style.transform == 'rotate(45deg)'){
            op.style.backgroundColor = 'rgb(36, 36, 36)';
            op.style.color = 'red';
            op.style.border = '4px solid red';
        } 
    });
    op.addEventListener('mouseover',()=>{
         if(op.style.backgroundColor == 'rgb(36, 36, 36)' && op.style.transform == 'rotate(45deg)'){
            op.style.backgroundColor = 'red';
            op.style.color = 'aliceblue';
            op.style.border = '4px solid aliceblue';
        }
    });
}
function colorOf(){
    op.style.transform = 'rotate(0deg)';
    op.style.color = 'white';
    op.style.border = '4px solid white';
    op.style.backgroundColor = 'rgb(36, 36, 36)';
    
    op.addEventListener('mouseover',()=>{
        if(op.style.color == 'white' && op.style.transform == 'rotate(0deg)'){
            op.style.color = 'rgb(61, 255, 22)';
            op.style.border = '4px solid rgb(61, 255, 22)';
        }else{
            op.style.color = 'white';
            op.style.border = '4px solid white';
        }
    });
    op.addEventListener('mouseout',()=>{
        if(op.style.color == 'rgb(61, 255, 22)' && op.style.transform == 'rotate(0deg)'){
        op.style.color = 'white';
        op.style.border = '4px solid white';
        }           
    });
}
function mostrarInfo(){
    menuif.style.display = "block";
    menuif.style.margin = '0px';
    menu2.style.marginTop = '0px';
}

menu2.addEventListener('click', ()=>
    {
        evento();
    });


function config(){
    
    alert('Bem vindo(a) '+valor);
}
function info(){
    alert("Botão Info clicado!");
}
function esconderInfo(){

}
var i = 0;
function send(){
    var valor = inputin.value;
    var text = document.getElementById('text');
    texto.style.display = 'block';
    texto.innerHTML = valor;
    inputin.value = "";
    
    if(i==0){
        texto.style.display = 'block';
        texto.innerHTML = valor;
        inputin.value = "";
    }else if(i==i+1){
        text.innerHTML = "<p>"+valor+"</p>";
        inputin.value = "";
    }
    i++;
    
}


