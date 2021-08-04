function updateScreen(value)
{
    document.getElementById("result").innerHTML +=value;
}
function solve()
{
    try{
        let r=eval(document.getElementById('result').innerHTML);
        document.getElementById('result').innerHTML=r;
    }
    catch(e)
    {
        document.getElementById('result').innerHTML="Syntax Error";
    }
    
}
function clr()
{
    document.getElementById("result").innerHTML = ' ';
}
function backspace()
{
    let str = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=str.substring(0,str.length-1);
}