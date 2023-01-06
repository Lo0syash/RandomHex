function fun(){
    range__input.innerHTML = range.value;
}

function current(){
    var click=0;
    if (click != 5){
        console.log(click++)
        changeColor();
    }
    else{
        alert('Достигнут лимит')
    }
}

function changeColor(){
    if (range.value > 0){
        document.querySelector('.color-list').innerHTML += '<li class="color-item"></li>';
    }
    else{
        alert('Выберите диапазон')
    }
}
