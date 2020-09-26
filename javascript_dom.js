// EX6 : 노드조작
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var titleInput = section.querySelector(".title-input");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    var menuList = section.querySelector(".menu-list");

    addButton.onclick = function() {
        var title = titleInput.value;
        menuList.innerHTML += '<li><a href="">'+title+'</a></li>'

        /*
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        aNode.href="";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);

        menuList.appendChild(liNode);
        */
    };

    delButton.onclick = function() {
        // var txtNode = menuList.childNodes[0];
        var liNode = menuList.children[0];
        menuList.removeChild(liNode);
    }
})

// EX5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var colorInput = section.querySelector(".color-input");
    var btn = section.querySelector(".btn");
    var img = section.querySelector(".img");

    btn.onclick = function() {
        console.log(colorInput.value);
        img.src = "imgs/" + srcInput.value;
        img.style.borderColor = colorInput.value;
        // img.src = "imgs/" + imgSelect.value;
    };
})

//Ex4 : childeNodes
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];   // .childNodes[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "Okay";
})

// EX3 : querySelector
window.addEventListener("load", function(){
    var section3 = document.querySelector('#section3');
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    }

})

window.addEventListener('load', function() {

    var section2 = document.getElementById('section2');
    var txtX = section2.getElementsByClassName('txt-x')[0];
    var txtY = section2.getElementsByClassName('txt-y')[0];
    var btnAdd = section2.getElementsByClassName('btn-add')[0];
    var txtSum = section2.getElementsByClassName('txt-sum')[0];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    }
})

window.addEventListener('load', function() {
    var section2 = document.getElementById('section2');
    var inputs = section2.getElementsByTagName('input');
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x+y;

    }
})

window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-add");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        console.log(txtX.value);
        console.log(x);
        console.log(txtY.value);
        console.log(y);

        txtSum.value = x+y;
    }
})