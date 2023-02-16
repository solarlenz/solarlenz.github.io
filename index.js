//////////////////////////////////////////////
// Spinner
//////////////////////////////////////////////

window.addEventListener('load', function() {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = '<div></div><div></div><div></div><div></div>';
  document.body.appendChild(spinner);
  setTimeout(function() {
    spinner.remove();
      document.body.style.backgroundColor = "linear-gradient(180deg, rgba(51,50,50,1) 3%, rgba(226,113,0,1) 100%)";
  }, 1000);
});


//////////////////////////////////////////////
// Stars
//////////////////////////////////////////////

const header = document.querySelector('header');
const dotCount = 40;

for (let i = 0; i < dotCount; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.top = Math.floor(Math.random() * header.clientHeight) + 'px';
  dot.style.left = Math.floor(Math.random() * header.clientWidth) + 'px';
  header.appendChild(dot);
}
