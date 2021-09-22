
var models = [
    {
        name : "Bmw 418d",
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : "Mazda CX-3",
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : "Volvo S60",
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2017/1-5-t3-advance'
    },
    {
        name : "Skoda Superb",
        image : 'img/SKODA.JPG',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : "Honda Civic",
        image : 'img/HONDA.JPG',
        link : 'http://www.arabalar.com.tr/honda/civic/2019/1-6-elegance'
    }
];

var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '2000',
    random : false
}
var interval;

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){

    index--;

    if(index < 0){
        index = slaytCount - 1;
    }

    showSlide(index);

});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    if(index === slaytCount){
        index = 0;
    }

    showSlide(index);
    
});

function init(settings){

    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index==prev)
            prev = index;
        }else{
            if(slaytCount == index + 1)
            {
                index = -1;
            }

            index++;
        }

        showSlide(index);
    },settings.duration)
}

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
});

function showSlide(index){
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

