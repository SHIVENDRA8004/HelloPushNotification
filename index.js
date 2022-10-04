const button = document.querySelector("button");
button.addEventListener("click",()=>{
    Notification.requestPermission().then(perm =>{
        if(perm==="granted"){
            new Notification("Hello Notification");
            alert("Nice yrr");
        }
        else{
            alert(perm);
        }
    });
});