localStorage.setItem('currentPage', 'courses');

setInterval(function(){
    var theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.body.className='light';
    }
    else if(theme == 'dark'){
        document.body.className='dark';
    }
}, 0);


loadCourses();

function loadCourses(){
    if(courses.length == 0){
        document.querySelector('.container').innerHTML = '<div class="msg"><i class="fa fa-bookmark" aria-hidden="true"></i>No courses found</div>';
    }
    else{
        var cards='';
        for(var i=0; i<courses.length; i++){
            cards+=`<div class="course-card" onclick="window.location='folder.html?path=`+i+`';">
                <div class="thumbnail-holder">
                    <div style="background-image:url(`+courses[i].thumbnail+`);" class="thumbnail"></div>
                </div>
                <div class="texts">
                    <div class="title">`+courses[i].title+`</div>
                    <div class="description">`+courses[i].description+`</div>
                </div>
            </div>`;
        }
        document.querySelector('.container').innerHTML = cards;
    }
}