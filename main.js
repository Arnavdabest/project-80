function getpara1(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para1_input" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showpara1").innerHTML = inputs.join(". ")
}

function getpara2(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para2_input" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showpara2").innerHTML = inputs.join(". ")
}