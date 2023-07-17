let Num = 0;
let Count = document.getElementById("Count").onclick = function ()
{
    Num+=1;
    document.getElementById("Number").innerHTML = Num;
}

let Coun = document.getElementById("Coun").onclick = function ()
{
    Num-=1;
    document.getElementById("Number").innerHTML = Num;
}

document.getElementById("Img1").onclick = function ()
{
    document.getElementById("IMG").src = "./images/image-product-1.jpg"
}
document.getElementById("Img2").onclick = function ()
{
    document.getElementById("IMG").src ="./images/image-product-2.jpg"
}
document.getElementById("Img3").onclick = function ()
{
    document.getElementById("IMG").src ="./images/image-product-3.jpg"
}
document.getElementById("Img4").onclick = function ()
{
    document.getElementById("IMG").src ="./images/image-product-4.jpg"
}