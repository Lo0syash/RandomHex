// ================ ADVERT VARIABLE
// ================ ADVERT VARIABLE

element = 0;
var message = "";

// ================ GENERATE COLOR
// ================ GENERATE COLOR

function generateColor(){
    for (var i = 0; i < element; i++){
        var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        var hex__color = "";
        for(var j = 0; j < 6; j++){
            var random__index = Math.floor(Math.random()*hex.length)
            hex__color += hex[random__index];
        }
        var colorItem = document.getElementsByClassName('color-item');
        colorItem[i].style.backgroundColor = '#' + hex__color;
        console.log(colorItem[i].attributes[1].nodeValue)
    }
}

function addColor(){
    if (element != 5 && element < 5){
        element++;
        var container = $('#some_id');
        var li = document.createElement('li');
        li.innerHTML = 
                        `
                        <li class="color-item">
                            <div class="btn btn--delete">&#128465;</div>
                        </li>
                        `;
        container.append(li)
        generateColor()
    }
    else{
        message = "Максимум 5 колонок"
        notification(message);
    }
}

$(document).on('click', '.btn--delete', function(){
    if (element != 0 && element > 0){
        element--;
        $(this).parent().remove();
    }
})

document.addEventListener('keydown', ()=>{
    if(event.code == 'Space'){
        if (element === 0){
            message = "Нету колонки!"
            notification(message)
        }
        else{
            generateColor();
        }
    }
})

// ================ MODAL WINDOW
// ================ MODAL WINDOW

function add(){
    document.querySelector('.modal__wrapper').classList.add('active')
}

function remove(){
    document.querySelector('.modal__wrapper').classList.remove('active')
}

$(document).on('click', '.how--work', function(){
    const aboutContainer = document.querySelector('.modal__window-inner');
    aboutContainer.innerHTML='';
    aboutContainer.innerHTML = 
    `
    <div class="btn__overlay" onclick="remove()"></div>
    <p class="modal__window-text">
        Все очень просто.<br>
        Чтобы появились колонки с цветами нажмите на "+".<br>
        Удалять вы их можете наводясь на них.<br>
        Нажимая на кнопку "Сгенерировать" появляются
        цвета рандомной генерации.
    </p>
    `
});

// ================ NOTIFICATION
// ================ NOTIFICATION

function notification(message){
    const notificationContainer = document.querySelector('.notification__inner');
    notificationContainer.innerHTML = '';
    notificationContainer.innerHTML = message;
    document.querySelector('.notification-wrapper').classList.add('active')
    setTimeout(function() {
        document.querySelector('.notification-wrapper').classList.remove('active')
    }, 2000);
}
