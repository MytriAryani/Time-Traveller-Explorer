const KEY='jWeC6NeJ7a50zzH5hCIKAVFiQKDl9sVb3XMIl16U';
console.log(KEY);

function getdate(){
    let date=new Date(document.querySelector("#date-input").value);
    if(!date) return;
    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    console.log(date);
    console.log(day);   
    console.log(month);
    console.log(year);  
    return `${year}-${month+1}-${day}`;    
}

let nasadata= async(event)=>{
    event.preventDefault();
    if(getdate()===undefined){
         return;
    }
    let url=`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${getdate()}`;
    try{
        let result=await fetch(url);
        let data=await result.json();
        console.log(data);
        let apodimg=data.hdurl||data.url;
        let info=data.explanation;
        let title=data.title;
        let imgContainer=document.querySelector("#apod-image-div");
        imgContainer.innerHTML=`<img src="${apodimg}" alt="NASA APOD" id="apod-image">`;
        let titleHTML=document.querySelector("#apod-title");
        titleHTML.innerHTML=title;
        let infoHTML=document.querySelector("#apod-explanation");
        infoHTML.innerHTML=info;
    }catch(err){
        console.log(err);
    }
}
let submitbutton=document.querySelector("#submit-button");
submitbutton.addEventListener('click',nasadata);


