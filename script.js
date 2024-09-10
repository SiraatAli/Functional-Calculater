let displayValue="";
function appendValue(value){
    displayValue+=value;
    document.getElementById('display').value=displayValue;
}
function clearDisplay(){
 displayValue="";
 document.getElementById('display').value=displayValue;
}
function deleteLast(){
    displayValue=displayValue.slice(0,-1);
    document.getElementById('display').value=displayValue;
}
function calculateResult(){
    try{
        displayValue=eval(displayValue);
        document.getElementById('display').value=displayValue;
    }catch(e){
        document.getElementById('display').value='Error';
    }
}