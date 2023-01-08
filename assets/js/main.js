// ================ GENERATE COLOR
// ================ GENERATE COLOR

element = 0;
function generateColor(){
    for (var i = 0; i < element; i++){
        var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        var hex__color = "";
        for(var j = 0; j < 6; j++){
            var random__index = Math.floor(Math.random()*hex.length)
            hex__color += hex[random__index];
        }
        var colorItem = document.getElementsByClassName('color-item');
        console.log(hex__color)
        colorItem[i].style.backgroundColor = '#' + hex__color;
    }
}

$('#addNew').click(function(){
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
        alert('Лимит')
    }
})

$(document).on('click', '.btn--delete', function(){
    if (element != 0 && element > 0){
        element--;
        $(this).parent().remove();
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

$(document).on('click', '.about', function(){
    const aboutText = document.querySelector('.modal__window-inner');
    aboutText.innerHTML='';
    aboutText.innerHTML = 
    `
    <div class="btn__overlay" onclick="remove()"></div>
    <p class="modal__window-text" style="text-align: center; font-size: 25px; line-height: 30px;">
        Я просто учу такой язык JavaScript<br>
        и это один из моих проектов.
    </p>
    `
});

$(document).on('click', '.how--work', function(){
    const aboutText = document.querySelector('.modal__window-inner');
    aboutText.innerHTML='';
    aboutText.innerHTML = 
    `
    <div class="btn__overlay" onclick="remove()"></div>
    <p class="modal__window-text">
        Все очень просто.<br>
        Чтобы появились колонки с цветами нажмите на "+". Максимум 5.<br>
        Удалять вы их можете наводясь на них.<br>
        Нажимая на кнопку "Сгенерировать" появляются
        цвета рандомной генерации.
    </p>
    `
});