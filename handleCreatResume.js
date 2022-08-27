const todoName = document.getElementById('post-name');
const todoEmail = document.getElementById('post-email');
const todoAge = document.getElementById('post-age');
const todoJob = document.getElementById('post-job');
const todoWorkexpreience = document.getElementById('post-workexperience');
const todoNationality = document.getElementById('post-nationality');
const todoLanguage = document.getElementById('post-language');
const todoResume = document.getElementById('post-resume');
const listItem  = document.getElementById('form');
const image_input = document.getElementById('image_input');




const saverLCResume = localStorage.getItem('resumelist');
const parseSavedLCResume = JSON.parse(saverLCResume) || [];
console.log(saverLCResume);
let saveResume = [...parseSavedLCResume];


const creatNewResume = (id,name,email,age,job,nationality,language,resume,workexperience) => {

    const Divmain = document.createElement('div');
    Divmain.className = 'Divmain';
    Divmain.id = id;

    // line1
    const Div1 = document.createElement('div');
    Div1.setAttribute("class"," d-flex justify-content-evenly ");
    const creatName = document.createElement('h3');
    creatName.innerHTML = 'WELLCOME'+name;
    const creatEmail = document.createElement('h4');
    creatEmail.innerHTML = 'Email:'+email;

    Div1.appendChild(creatName);
    Div1.appendChild(creatEmail);
    
    // line2
    const Div2 = document.createElement('div');
    Div2.setAttribute("class", "d-flex justify-content-center");
    const DivDisplay = document.createElement('div');
    DivDisplay.setAttribute("class", "border border-3");
    DivDisplay.id = "display_image";
    Div2.appendChild(DivDisplay);
    
    // line3
    const Div3 = document.createElement('div');
    Div3.setAttribute("class","d-flex justify-content-around");
    const creatAge = document.createElement('h3');
    creatAge.innerHTML = 'Age:'+age;
    const creatJob = document.createElement('h3');
    creatJob.innerHTML = 'job:'+job;
    const creatWorkexperience = document.createElement('h3');
    creatWorkexperience.innerHTML = 'Work experience:'+workexperience;

    Div3.appendChild(creatAge);
    Div3.appendChild(creatJob);
    Div3.appendChild(creatWorkexperience);

    // lin4
    const Div4 = document.createElement('div');
    Div4.setAttribute("class"," d-flex justify-content-evenly");
    const creatNationality = document.createElement('h3');
    creatNationality.innerText = 'Nationality:'+nationality;
    const creatLanuage = document.createElement('h3');
    creatLanuage.innerHTML = 'Language:'+language;
    Div4.appendChild(creatNationality);
    Div4.appendChild(creatLanuage);

    // line5
    const Div5 = document.createElement('div');
    Div5.setAttribute("class", " d-flex justify-content-between");
    const Div0=document.createElement('div')
    const creatResume= document.createElement('h3');
    creatResume.innerText = 'Resume:';
    const creatParaResume = document.createElement('h4');
    creatParaResume.innerHTML = resume;
    Div0.appendChild(creatResume);
    Div0.appendChild(creatParaResume);
    Div5.appendChild(Div0);
    const creatImg = document.createElement('img')
    creatImg.id = "heart";
    creatImg.src = "./img/icons8-heart-50.png";
    Div5.appendChild(creatImg);


    


    Divmain.appendChild(Div1); 
    Divmain.appendChild(Div2); 
    Divmain.appendChild(Div3); 
    Divmain.appendChild(Div4); 
    Divmain.appendChild(Div5);

    const todoActions = `<div>
      
      <button type="button"  class="btn btn1 btn-success">DEL</button>
      
      
      </div>`;
      Divmain.innerHTML += todoActions;

    listItem.appendChild(Divmain);




}






for (let index = 0; index < parseSavedLCResume.length; index++) {
    console.log(parseSavedLCResume[index]);
    creatNewResume(parseSavedLCResume[index].id ,  parseSavedLCResume[index].name, parseSavedLCResume[index].email ,parseSavedLCResume[index].age ,parseSavedLCResume[index].job ,parseSavedLCResume[index].workexperience ,parseSavedLCResume[index].nationality ,parseSavedLCResume[index].language ,parseSavedLCResume[index].resume , )
 }
export const handleCreatResume = (event) => {
    event.preventDefault();

    
    

    console.log("kaveh")
   


    const newResume = {
        id: Date.now(),
        name: todoName.value,
        email: todoEmail.value,
        age: todoAge.value,
        job: todoJob.value,
        nationality: todoNationality.value,
        language: todoLanguage.value,
        resume: todoResume.value,
        workexperience: todoWorkexpreience.value,
    }
    saveResume.push(newResume);
    console.log(saveResume);
    localStorage.setItem("resumelist", JSON.stringify(saveResume));
    
    for (let index = 0; index < parseSavedLCResume.length; index++) {
        console.log(parseSavedLCResume[index]);
        creatNewResume(parseSavedLCResume[index].id ,  parseSavedLCResume[index].name, parseSavedLCResume[index].email ,parseSavedLCResume[index].age ,parseSavedLCResume[index].job ,parseSavedLCResume[index].workexperience ,parseSavedLCResume[index].nationality ,parseSavedLCResume[index].language ,parseSavedLCResume[index].resume , )
    }
    
}

listItem.addEventListener('click', (e) => {
    if (e.target.innerText === 'DEL') {
        const todoEL = e.target.parentElement.parentElement;
        console.log(todoEL.id);
        const filtredTodos = saveResume.filter(
            item => item.id !== Number(todoEL.id)
        );
        localStorage.setItem('resumelist', JSON.stringify(filtredTodos));
        location.reload();
    }
});




