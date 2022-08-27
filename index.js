import { handleCreatResume } from "./handleCreatResume.js";
// const listItem = document.getElementById('form');
const todoSubmit = document.getElementById('post-submit');
todoSubmit.addEventListener('click', handleCreatResume);

const todoLove = document.getElementById('heart');




// image profile
let Uploaded_image = '';
image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        Uploaded_image = reader.result;
       document.querySelector('#display_image').style.backgroundImage=`url(${Uploaded_image})`;
    }); 
    reader.readAsDataURL(this.files[0]);
});

// like
todoLove.addEventListener('click',() => {
    todoLove.src = 'img/4.png';
});

// clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();











// const creatNewResume = () => {


//     // line1
//     const Div1 = document.createElement('div');
//     Div1.setAttribute("class"," d-flex justify-content-evenly");
//     const creatName = document.createElement('h3');
//     creatName.innerText = 'WELLCOME';
//     const creatEmail = document.createElement('h4');
//     creatEmail.innerHTML = 'Email:';

//     Div1.appendChild(creatName);
//     Div1.appendChild(creatEmail);
    

//     // line3
//     const Div3 = document.createElement('div');
//     Div3.setAttribute("class","d-flex justify-content-around");
//     const creatAge = document.createElement('h3');
//     creatAge.innerHTML = 'Age:';
//     const creatJob = document.createElement('h3');
//     creatJob.innerHTML = 'job:';
//     const creatWorkexperience = document.createElement('h3');
//     creatWorkexperience.innerHTML = 'Work experience:';

//     Div3.appendChild(creatAge);
//     Div3.appendChild(creatJob);
//     Div3.appendChild(creatWorkexperience);

//     // lin4
//     const Div4 = document.createElement('div');
//     Div4.setAttribute("class"," d-flex justify-content-evenly");
//     const creatNationality = document.createElement('h3');
//     creatNationality.innerText = 'Nationality:';
//     const creatLanuage = document.createElement('h3');
//     creatLanuage.innerHTML = 'Language:';
//     Div4.appendChild(creatNationality);
//     Div4.appendChild(creatLanuage);

//     // line5
//     const Div5 = document.createElement('div');
//     Div5.setAttribute("class", " d-flex justify-content-between");
//     const Div0=document.createElement('div')
//     const creatResume= document.createElement('h3');
//     creatResume.innerText = 'Resume:';
//     const creatParaResume = document.createElement('h4');
//     creatParaResume.innerHTML = '';
//     Div0.appendChild(creatResume);
//     Div0.appendChild(creatParaResume);
//     Div5.appendChild(Div0);
//     const creatImg = document.createElement('img')
//     creatImg.id = "heart";
//     creatImg.src = "./img/icons8-heart-50.png";
//     Div5.appendChild(creatImg);





//     listItem.appendChild(Div1); 
//     listItem.appendChild(Div3); 
//     listItem.appendChild(Div4); 
//     listItem.appendChild(Div5);

// }
// creatNewResume();
