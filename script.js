

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseFloat(interest);
    var result = document.getElementById("result");

    //Validate that principal input is non-zero and non-negative.
    if(principal < 1){
        alert("Enter a positive number.")
        document.getElementById("principal").focus()
        return;
    }

    principal.replace

    //update result span.
    result.innerHTML="If you deposit <span class=highlight>"+principal+"</span>,\<br\>at an interest rate of <span class=highlight>"+
    rate+"%</span>\<br\>You will receive an amount of <span class=highlight>"+amount+
    "</span>,\<br\>in the year <span class=highlight>"+year+"</span>\<br\>"
    
}

        