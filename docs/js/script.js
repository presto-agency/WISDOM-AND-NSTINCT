 const runAnimation = () => {
     let animationObj = document.querySelector('.dashboard');
     let addActive = () => {
         animationObj.classList.add('active');
         setTimeout(removeActive, 9200);
     }
     let removeActive = () => {
         animationObj.classList.remove('active');
     }
     addActive();
     setInterval(addActive, 9300);
 }
runAnimation();










