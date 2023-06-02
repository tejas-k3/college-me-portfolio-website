let ThemeDots = document.getElementsByClassName("theme-dot");

for(var i=0;i<ThemeDots.length;i++)
{
    ThemeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}
function setTheme(mode)
{
    if(mode == 'light')
    {
        document.getElementById('theme-style').href = "default.css";
    }
    if(mode == 'dark')
    {
        document.getElementById('theme-style').href = "dark.css";
    }
    if(mode == 'blue')
    {
        document.getElementById('theme-style').href = "blue.css";
    }
    if(mode == 'purple')
    {
        document.getElementById('theme-style').href = "purple.css";
    }
}

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});