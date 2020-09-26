window.addEventListener("load", function(){
    var wrapper = document.querySelector("#wrapper");
    var tbodyNode = wrapper.querySelector("table tbody");
    var currentNode = tbodyNode.firstElementChild;
    var upButton = wrapper.querySelector(".up-button");
    var downButton = wrapper.querySelector(".down-button");


    console.log(currentNode);

    downButton.onclick = function() {
        var nextNode = currentNode.nextElementSibling;
        console.log(nextNode);

        if(nextNode == null) {
            alert("더이상 없어요");
            return;
        }

        // tbodyNode.removeChild(nextNode);
        // tbodyNode.insertBefore(nextNode, currentNode);

        currentNode.insertAdjacentElement("beforebegin", nextNode);
    } 

    upButton.onclick = function() {
        var prevNode = currentNode.previousElementSibling;
        console.log(prevNode);
        
        if(prevNode == null) {
            alert("더 없음");
            return;
        }

        // tbodyNode.removeChild(prevNode);
        // tbodyNode.insertBefore(currentNode, prevNode);

        currentNode.insertAdjacentElement("afterend", prevNode);
    }



})