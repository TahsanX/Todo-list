let ol = document.querySelector("ol");
let input = document.querySelector("input");
let button = document.querySelector("button");
button.addEventListener("click",function(){
    if (input.value!="") {
        let li = document.createElement("li");
        let dlt = document.createElement("button");
        dlt.innerText = "Delete";
        dlt.addEventListener("click",function(event){
            console.log(event.target.tagName);
            // dlt.parentElement.style.display = "none";
            dlt.parentElement.remove();
        })
        li.innerText = input.value;
        ol.appendChild(li);
        li.appendChild(dlt);
    }
    input.value = "";
});
// kichu comment add kori tahole bhalo lagbe ig
// this dile tag ta or jinish ja chilo oita trigger hoy
// event dile ki kaj hoise oita trigger hoy

