
const button = document.getElementById("mod");
const bod = document.querySelector('.for_mod');
const projectBox = document.querySelectorAll('.project-box');
const blogs = document.querySelectorAll('.artical');
let mode = localStorage.getItem("dark-mode");
 const enabledark=()=>{
    bod.classList.add('darkmode');
    projectBox.forEach(query=>{
        query.classList.add('darkmodep');
    });
    blogs.forEach(query=>{
        query.classList.add('darkmodep');
    });
    button.classList.add('back');
    localStorage.setItem("dark-mode", "enabled");
};


const disabledark=()=>{
    bod.classList.remove('darkmode');
    projectBox.forEach(query=>{
        query.classList.remove('darkmodep');
    });
    blogs.forEach(query=>{
        query.classList.remove('darkmodep');
    });
    button.classList.remove('back');
    localStorage.setItem("dark-mode", "disabled");
};



button.addEventListener('click',()=>{
      mode = localStorage.getItem("dark-mode");
        if (mode === "disabled") {
          enabledark();
        } else {
          disabledark();
        }
});