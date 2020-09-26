window.addEventListener("load", function(){
    var wrapper = document.querySelector("#wrapper");
    var tbodyNode = wrapper.querySelector("table tbody");
    var delButton = wrapper.querySelector(".del-button");
    var swapButton = wrapper.querySelector(".swap-button");
    var overAll = wrapper.querySelector(".over-all");
    
    overAll.onchange = function() {
        var inputAll = tbodyNode.querySelectorAll("input[type='checkbox']");
        console.log(inputAll);
        console.log(overAll.value);
        console.log(overAll.checked);
        
        for(var i=0; i < inputAll.length; i++) {
            inputAll[i].checked = overAll.checked;
        }        
    }

    delButton.onclick = function() {
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

        console.log(inputs.length);
        for(var i=0; i < inputs.length; i++) {
            inputs[i].parentElement.parentElement.remove();
        }
    }

    swapButton.onclick = function() {
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length > 2) {
            alert("2개 이상선택 불가");
            return;
        }

        var trs = [];
        for(var i=0; i<inputs.length; i++) {
            trs.push(inputs[i].parentElement.parentElement);
        }

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
        
    }

})