// main.js

let projects=[
    {   name:"React Flickr Gallery",
        src:" images/project11.jpg",
        alt: "project eleven react flickr gallery",
        description: "Image gallery built using React and the Flickr api along with routing and a search function",
        projectUrl: "https://github.com/B-AlexiaYoung/project11-react-photo-viewer/blob/master/public/index.html",
        projectRepo:"",

    },
    {   name:"Employee Directory",
        src:" images/project10.jpg",
        alt: "project ten an employee directory",
        description: "An employee directory built using Javascript, html, css and an api. When an individual is clicked a modal window opens to display more details.",
        projectUrl: "projects/project10/index.html",
        projectRepo:"",

    },
    {   name:"Web App Dashboard",
        src:" images/project9.jpg",
        alt: "project ten web app dashboard",
        description: "Built to a mockup this dashboard displays javascipt driven charts, the use of local storage and an autocompete search function.",
        projectUrl: "projects/project9/index.html",
        projectRepo:"",

    },
    {   name:"SVG Animations",
        src:" images/project8.jpg",
        alt: "project eight svg animations",
        description: "This project uses optomized SVG images. Paths were used to change the appearance of the svgs and css animations and transitions were employed.",
        projectUrl: "projects/project8/index.html",
        projectRepo:"",

    },
    {   name:"Build A Game Show App",
        src:" images/project7.jpg",
        alt: "project seven build a game show app",
        description: "A word guessing game built using Javascript, CSS and Html. The game keeps track of correct and incorrecy choices.",
        projectUrl: "projects/project7/index.html",
        projectRepo:"",

    },
    {   name:"Interactive Video Player",
        src:" images/project6.jpg",
        alt: "project six interactive video player",
        description: "A video player using the mediaelement library. The controls were configured and a transcript add that hightlights as the video is played.  ",
        projectUrl: "projects/project6/index.html",
        projectRepo:"",

    },
    {   name:"Build a Web Style Guide",
        src:" images/project5.jpg",
        alt: "project five build a web style guide",
        description: "This is a sass project using partials, mixins, variables and extends. The BEM naming convention is also used.",
        projectUrl: "projects/project5/index.html",
        projectRepo:"",

    },
    {   name:"Interactive Photo Gallery",
        src:" images/project4.jpg",
        alt: "project four interactive photo gallery",
        description: "A photo gallery built using Javascript, and Jquery.  It includes  a search funtion that displays only matched results.",
        projectUrl: "projects/project4/index.html",
        projectRepo:"",

    },
    {   name:"Online Registration Form",
        src:" images/project3.jpg",
        alt: "project three online registration form",
        description: "A form built to a mockup using html and CSS. The form contains required and placeholder attributes.",
        projectUrl: "projects/project3/index.html",
        projectRepo:"",

    },
    

]
let displayContainer= document.getElementById("displayContainer");
// loop through projects array to display photos.
let getProjects = () => {
for(i=0; i<projects.length; i++){
    //console.log(projects.length);
    let card = document.createElement("div");
    card.setAttribute("id", "display");


    displayContainer.appendChild(card);
let newphoto= document.createElement("img");
newphoto.setAttribute("data-cardNumber", i);
//console.log(projects[i].alt);
newphoto.src= projects[i].src;
newphoto.alt= projects[i].alt;
newphoto.classList.add("imgStyle");
display[i].appendChild(newphoto);
display[i].classList.add("work");
let newLine= document.createElement("br");
display[i].appendChild(newLine);
let  link= document.createElement("a");
link.innerHTML = projects[i].name;
link.href =  projects[i].projectUrl;
display[i].appendChild(link);

}
};



getProjects();
// function to display project details in a modal
let modalMore=document.getElementById("modalMore");
let modal= document.getElementById("modal");

console.log(modalMore);

function more(projectNum){
   


    //clear modal of children
    while (modalMore.firstChild) {
        modalMore.removeChild(modalMore.firstChild);
     }
    //add new children for employee card
    let span = document.createElement('span');
    span.innerHTML="&times;";
    span.setAttribute("id","close");
    modalMore.appendChild(span);

    //insert project image into modal
       let detailImage = document.createElement("img");

       detailImage.src=projects[projectNum].src;
       detailImage.classList.add("imgStyle");
       modalMore.appendChild(detailImage);
     // insert project name into modal 
       let name= projects[projectNum].name;
       let namepara= document.createElement("p");
       modalMore.appendChild(namepara);
       namepara.innerHTML= name;

     //insert project description into modal;
     let description=projects[projectNum].description;
     let desPara= document.createElement("p");
     modalMore.appendChild(desPara);
       desPara.innerHTML= description;
//add event listener to close modal 
let modalListener = document.getElementById("close");
modalListener.addEventListener("click", (event) =>{
    modal.style.display="none";
});

// add previous and next to modal
if( projectNum > 0){
let prev=document.createElement("button");
 modalMore.appendChild(prev);
 prev.classList.add("prev");
 prev.innerHTML=" < prev";
  // listener on buttons
  prev.addEventListener("click",(event)=>{
    more(projectNum - 1);
 });
 }
 if(projectNum <8){
 let next=document.createElement("button");
 modalMore.appendChild(next);
 next.classList.add("next");
 next.innerHTML="next >";
 // listener on buttons
 next.addEventListener("click",(event)=>{
     console.log (projectNum++);
    more(projectNum= (projectNum ++));
 });
 }

}
// add event Listener to open modal on photos
let photoListener = document.getElementById("displayContainer");
photoListener.addEventListener("click",(event)=>{
    modal.style.display ="block";
    let projectMore = $(event.target).closest("img");
    console.log(projectMore[0].getAttribute("data-cardNumber"));
    let projectNum= projectMore[0].getAttribute("data-cardNumber");
    more(projectNum);
    modalMore.style.display="block";
});

