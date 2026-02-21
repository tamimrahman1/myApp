setInterval(function(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.body.className='light';
    }
    else if(theme == 'dark'){
        document.body.className='dark';
    }
}, 0);



var path = get('path');
var pathLength = path.split("-").filter(Boolean).length;
    var pathSections = path.split("-").filter(Boolean).map(Number);
    var directory = courses[pathSections[0]];
    if(pathLength>1){
        for(var i=1;i<pathLength;i++){
            directory = directory.content[pathSections[i]];
        }
}


setClass(directory);
function setClass(directory){
    document.querySelector('.container .part-1 .video').src = directory.videoSrc;
    document.querySelector('.container .part-1 .texts .title').innerHTML = directory.title;
    document.querySelector('.container .part-1 .texts .description').innerHTML = directory.description;
    document.querySelector('.container .part-1 .texts .author span').innerHTML = directory.author;
    document.querySelector('.container .part-1 .texts .date span').innerHTML = directory.date;
}

setMaterials(directory)
function setMaterials(directory){
    var materials = directory.materials;
    var materialsContent = '';
    for(var i=0; i<materials.length; i++){
        var label = materials[i].label;
        var url = materials[i].src;
        materialsContent += `<div class="material">
                    <label for="box`+i+`">
                        <div class="toggleBtn" role="button" tabindex="`+(i+1)+`">
                            `+label+`
                        </div>
                    </label>
                    <input type="checkbox" id="box`+i+`">
                    <iframe class="frame" src="`+url+`"></iframe>
                </div>`;
    }
    materialsContent = materialsContent!=''?materialsContent:'<span class="text-msg">No materials available</span>';
    document.querySelector('.container .part-1 .materials').innerHTML = materialsContent;
}

function get(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}