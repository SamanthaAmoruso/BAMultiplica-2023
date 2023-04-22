document.addEventListener("DOMContentLoaded", function() {
    function disableScrollTop(event) {
      event.preventDefault();
    }

    const merchLink = document.querySelector('#merch-link');
    merchLink.addEventListener('click', disableScrollTop);

    const ciroIzquierda = document.querySelector('#ciroIzquierda');
    ciroIzquierda.addEventListener('click', disableScrollTop);
    
  });

function checkCurrentPage(link) 
{
  var currentPage = window.location.href;
  var linkUrl = link.href;
    if (currentPage === linkUrl) 
    {
        return false;
    } else {
        return true;
    }
}
