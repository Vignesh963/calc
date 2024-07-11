let opertor= "";
let firstnumber= "";
let secondnumber= "";


function operate(op){
    opertor=op;
}

function clearresult(){
    opertor="";
    firstnumber= "";
    secondnumber= "";
    document.getElementById("result").value=""
}
function append(num){
    if(opertor==""){
        firstnumber+=num;
        document.getElementById("result").value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById("result").value=secondnumber;
    }
}
function result(){
    let res="";
    switch(opertor){
        case '+':
            res=parseInt(firstnumber)+parseInt(secondnumber);
            break;
         case '-':
            res=parseInt(firstnumber)-parseInt(secondnumber);
            break;
        case '*':
            res=parseInt(firstnumber)*parseInt(secondnumber);
            break;
        case '/':
            res=parseInt(firstnumber)/parseInt(secondnumber);
            break;
    }
    document.getElementById('result').value=res;
}


