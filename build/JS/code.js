const initapp=()=>{
    console.log("This is being loaded");
    const hamburgerbtn=document.getElementById('hamburger-button');
    const mobilemenu=document.getElementById('mobile-menu');
    const togglemenu=()=>{
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle('flex')
        hamburgerbtn.classList.toggle('toggle-btn')
        head.classList.toggle('sticky')
    }
   hamburgerbtn.addEventListener('click',togglemenu);
   mobilemenu.addEventListener('click',togglemenu);
}
document.addEventListener('DOMContentLoaded', initapp)

const response = document.querySelector("#submit");
const data= document.querySelector("#textarea1");
if(response){
    response.addEventListener("click",async()=>{
        const respon = await fetch("https://icanhazdadjoke.com",{
            method: "GET",
            headers : {
                Accept : "application/json"
            } 
        });const respons = await respon.json();
        data.value = respons.joke;
    }
    );

}
else{
    console.log("invalid response")
}

