setInterval(function(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.body.className='light';
    }
    else if(theme == 'dark'){
        document.body.className='dark';
    }
}, 0);



setFolders(get('path'));

function setFolders(path){
    var pathLength = path.split("-").filter(Boolean).length;
    var pathSections = path.split("-").filter(Boolean).map(Number);
    var directory = courses[pathSections[0]];
    if(pathLength>1){
        for(var i=1;i<pathLength;i++){
            directory = directory.content[pathSections[i]];
        }
    }
    console.log(directory.content);

    var cards = '';
    for(var i=0; i<directory.content.length; i++){
        if(directory.content[i].type == 'folder'){
            cards+=`<div class="folder" onclick="window.location='folder.html?path=`+path+`-`+i+`';">
                <div class="thumbnail-holder">
                    <div style="background-image:url(`+directory.content[i].thumbnail+`);" class="thumbnail"></div>
                </div>
                <div class="texts">
                    <div class="title">`+directory.content[i].title+`</div>
                    <div class="description">`+directory.content[i].description+`</div>
                </div>
            </div>`;
        }
        else if(directory.content[i].type == 'video'){
            cards+=`<div class="video" onclick="window.location='class.html?path=`+path+`-`+i+`';">
                <div class="thumbnail-holder">
                    <div style="background-image:url(`+directory.content[i].thumbnail+`);" class="thumbnail"></div>
                </div>
                <div class="texts">
                    <div class="title">`+directory.content[i].title+`</div>
                    <div class="description">`+directory.content[i].description+`</div>
                    <div class="author"><i class="fa fa-user" aria-hidden="true"></i> `+directory.content[i].author+`</div>
                    <div class="date"><i class="fa fa-calendar" aria-hidden="true"></i> `+directory.content[i].date+`</div>
                </div>
            </div>`;
        }
    }
    document.querySelector('.container').innerHTML=cards;
    document.querySelector('.page-title').innerHTML=directory.title;
}

function get(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}