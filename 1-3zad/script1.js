function btnMIN()
{
    var x, y;
    x=document.getElementById('textMIN1').value;
    x=parseInt(x);

    y=document.getElementById('textMIN2').value;
    y=parseInt(y);

    document.getElementById('result').innerHTML=min(x,y);
}
function min(x,y)
{
    if (x < y)
    {
    return parseInt(x);
    }
    else 
    {
        return parseInt(y);
    }
}