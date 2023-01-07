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