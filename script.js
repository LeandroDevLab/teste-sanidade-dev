const input = document.querySelectorAll('input')
const inputFront = document.getElementsByClassName('front');
const inputBack = document.getElementsByClassName('back');
const inputSanidade = document.getElementsByClassName('sanidade');

function onBack(){
    inputSanidade[0].checked = false
}
    
function onSanidade(){
    inputBack[0].checked = false 
}

function onFront(){
  if(inputSanidade[0].checked === false){
    inputSanidade[0].checked = true
  }
}


