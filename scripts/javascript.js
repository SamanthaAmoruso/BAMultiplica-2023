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

// esto es para la flecha que sube hasta el inicio de la pagina //
$(document).ready(function()
{
	$('.ir-arriba').click(function()
  {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function()
  {
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});


$(document).ready(function() 
{
  $(window).scroll(function()
  {
    if(document.body.scrollTop > 300)
            $('respmenu').fadeIn( "slow", function() { });
    else    
            $('respmenu').fadeOut( "slow", function() { });
  });
  $('a#srolltotop').click(function()
  {
    $('html, body').animate({scrollTop:0}, 100);
    return false;
  });

});