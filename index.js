var darkmode = false;



const button = document.getElementById("mod");
const bod = document.querySelector('.for_mod');
const projectBox = document.querySelectorAll('.project-box');
const blogs = document.querySelectorAll('.artical');


button.addEventListener('click',()=>{

    bod.classList.toggle('darkmode');
    projectBox.forEach(query=>{
        query.classList.toggle('darkmodep');
    });
    blogs.forEach(query=>{
        query.classList.toggle('darkmodep');
    });
    button.classList.toggle('back');
    darkmode = true;
});