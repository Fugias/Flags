// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const mode = document.querySelector('.mode');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

mode.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
