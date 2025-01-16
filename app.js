string=" ";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        
        if(e.target.innerHTML=="ANS"){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="x"){
            string=string+"*";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="÷"){
            string=string+"/";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1);
            document.querySelector("input").value=string;
        }
        else{
            π=3.141592653;
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
        
    });
});