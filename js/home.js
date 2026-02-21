localStorage.setItem('currentPage', 'home');

setInterval(function(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.body.className='light';
    }
    else if(theme == 'dark'){
        document.body.className='dark';
    }
}, 0);