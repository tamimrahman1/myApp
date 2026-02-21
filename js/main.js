

function setFrame(url){
    var frame = document.querySelector('.frame-holder .frame');
    frame.src = url;
}

setInterval(function(){
    var currentPage = localStorage.getItem('currentPage');
    if(currentPage == 'home'){
        document.querySelector('.foot-nav-bar .tab-btns .tab-btn#home').className='tab-btn active';
    }

    else{
        document.querySelector('.foot-nav-bar .tab-btns .tab-btn#home').className='tab-btn';
    }
}, 10);


var theme = localStorage.getItem('theme');
if(theme!='dark'){
    localStorage.setItem('theme', 'light');
}

setInterval(function(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.body.className='light';
    }
    else if(theme == 'dark'){
        document.body.className='dark';
    }
}, 0);

function toggleTheme(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        localStorage.setItem('theme', 'dark');
    }
    else if(theme == 'dark'){
        localStorage.setItem('theme', 'light');
    }
}