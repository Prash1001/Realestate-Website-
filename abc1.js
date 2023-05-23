const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');



select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});
});

var matchEnterdDate=0;
//function to set back date opacity for non supported browsers
    window.onload =function(){
        var input = document.createElement('input');
        input.setAttribute('type','date');
        input.setAttribute('value', 'some text'); 
        if(input.value === "some text"){
            allDates = document.getElementsByClassName("xDateContainer");
            matchEnterdDate=1;
            for (var i = 0; i < allDates.length; i++) {
                allDates[i].style.opacity = "1";
            } 
        }
    }
//function to convert enterd date to any format
function setCorrect(xObj,xTraget){
    var date = new Date(xObj.value);
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    if(month!='NaN'){
        document.getElementById(xTraget).value=day+" / "+month+" / "+year;
    }else{
        if(matchEnterdDate==1){document.getElementById(xTraget).value=xObj.value;}
    }
}
