window.onload = function() {
  var loadingDiv = document.getElementById('loading');
  var spinnerImg = loadingDiv.querySelector('img');
  var pageBody = document.querySelector('body');

  // Set the initial background color
  pageBody.style.backgroundColor = '#000';

  // Hide the loading animation when the page is fully loaded
  loadingDiv.style.display = 'none';

  // Fade in the page content and change the background color
  spinnerImg.onload = function() {
    loadingDiv.style.opacity = '1';
    setTimeout(function() {
      loadingDiv.style.display = 'none';
      pageBody.style.backgroundColor = '#f48c06';
      pageBody.style.transition = 'background-color 1s ease-in-out';
      pageBody.style.opacity = '1';
      loadingDiv.style.opacity = '0';
    }, 1000);
  };
};
