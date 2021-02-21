function getpara1()
{
var inputs = [];
for(var i=1;i<=12;i++)
{
inputs.push(document.getElementById("box_" + i).value);
inputs.join(". ");
}

document.getElementById("showPara1").innerHTML=inputs.join(". ");
}
