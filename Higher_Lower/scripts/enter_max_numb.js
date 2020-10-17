do{
    var max_num = parseInt(prompt("Please select a maximum number for the range: ", ""), 10);
    if(isNaN(max_num)){
        alert("that is not a valid number")
    }
    if(max_num < 1){
        alert("please select a value greater than zero")
    }
    document.getElementById("high_numb").innerHTML ="Please guess a number between 1 and " + max_num;
}while(isNaN(max_num) || max_num < 1);
