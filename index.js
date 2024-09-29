let zero = document.getElementById("zero");
let add = document.getElementById("add");
let equalto= document.getElementById("equalto")
let subtract= document.getElementById("subtract")
let AC= document.getElementById("ac")
let del= document.getElementById("del")
let division= document.getElementById("division")
let multiple = document.getElementById("multiple")
let modulo = document.getElementById("modulo")
let dot= document.getElementById("dot")
let zeros = document.getElementById("zeros")
let three = document.getElementById("three")
let one = document.getElementById("one")
let two = document.getElementById("two")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six= document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let displayPara = document.getElementById("displayPara");
let btn = document.querySelectorAll("btn");
res = "";

zero.addEventListener("click",(e)=>{
    e.preventDefault();
    res += zero.textContent
    displayPara.innerText = res
});
one.addEventListener("click",(e)=>{
    e.preventDefault();
    res += one.textContent;
    displayPara.innerText = res
})
two.addEventListener("click",(e)=>{
    e.preventDefault();
    res += two.textContent;
    displayPara.innerText = res
});
three.addEventListener("click",(e)=>{
    e.preventDefault();
    res+= three.textContent;
    displayPara.innerText = res
});
four.addEventListener("click",(e)=>{
    e.preventDefault();
    res += four.textContent;
    displayPara.innerText = res
});
five.addEventListener("click",(e)=>{
    e.preventDefault();
    res += five.textContent;
    displayPara.innerText = res
});
six.addEventListener("click",(e)=>{
    e.preventDefault();
   res += six.textContent;
   displayPara.innerText = res;
});
seven.addEventListener("click",(e)=>{
    e.preventDefault();
   res  += seven.textContent;
   displayPara.innerText = res
});
eight.addEventListener("click",(e)=>{
    e.preventDefault();
    res += eight.textContent
    displayPara.innerText = res
});
nine.addEventListener("click",(e)=>{
    e.preventDefault();
    res += nine.textContent;
    displayPara.innerText= res
});
zeros.addEventListener("click",(e)=>{
    e.preventDefault();
    res += zeros.textContent
    displayPara.innerText= res
});
dot.addEventListener("click",(e)=>{
    e.preventDefault();
    res += dot.textContent
    displayPara.innerText= res
});
AC.addEventListener("click",(e)=>{
    e.preventDefault();
    res= "";
    displayPara.innerHTML= res;
});
del.addEventListener("click",(e)=>{
    e.preventDefault();
    if(res.length){
         res = res.slice(0,res.length-1)
    }
    displayPara.innerHTML = res;
});
modulo.addEventListener("click",(e)=>{
    e.preventDefault();
    res+= modulo.textContent;
    displayPara.innerText = res
});
division.addEventListener("click",(e)=>{
    e.preventDefault();
    res = res +  "/";
    displayPara.innerHTML = res
});
multiple.addEventListener("click",(e)=>{
    e.preventDefault();
    res += "*"
    displayPara.innerHTML = res
});
add.addEventListener("click",(e)=>{
    e.preventDefault();
    res += add.innerHTML;
    displayPara.innerHTML = res
});
subtract.addEventListener("click",(e)=>{
    e.preventDefault();
    res += subtract.textContent;
    displayPara.innerHTML = res
});
equalto.addEventListener("click", (e)=>{
    e.preventDefault();
    let a= eval(res);
    res = a;
    displayPara.innerHTML = res;
});