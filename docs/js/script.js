 const runAnimation = () => {
     let animationObjs = document.querySelectorAll('.dashboard');
     animationObjs.forEach(animationObj => {
         let addActive = () => {
             animationObj.classList.add('active');
             setTimeout(removeActive, 9200);
         }
         let removeActive = () => {
             animationObj.classList.remove('active');
         }
         addActive();
         setInterval(addActive, 9300);
     })
 }
runAnimation();










