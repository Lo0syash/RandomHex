var element = 5;

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

function addBlock(){
    if(element != 5 && element < 5){
        element++;

    }
    else{
        alert('Лимит')
    }
}


function deleteBlock(e){
    var array = [document.querySelector('.color-list')];
    array.pop();

}

