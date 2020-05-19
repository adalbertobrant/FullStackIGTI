window.addEventListener('load',start);

var inputFrequency = null;
var inputRange = null;

function start(){
    console.log("Dom Carregado");
   inputFrequency =  document.querySelector('#inputFrequency');
   inputRange = document.querySelector("#inputRange");
   //inputRange.addEventListener('change',handleRangeChance);
    inputRange.addEventListener('input',handleRangeChange);
}

function handleRangeChange(event){
    var frequencyValue = event.target.value;
    inputFrequency.value = frequencyValue;
}