const txttask = document.getElementById("txttask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");


sub.addEventListener("click", function(e) {
    if(txttask.value.length>0){
        e.preventDefault()
        const listItem =document.createElement("li");
        const addItem = document.createElement("span");
        const delButton = document.createElement("button");
        const doneButton = document.createElement("button");

        addItem.classList.add("item");
        addItem.innerText = txttask.value;
        delButton.classList.add("del");
        delButton.innerText = "Del";
        doneButton.classList.add("done");
        doneButton.innerText = "Done";

        listItem.appendChild(addItem);
        listItem.appendChild(delButton);
        listItem.appendChild(doneButton);
        results.appendChild(listItem);

        delButton.addEventListener("click",function(){
            results.removeChild(listItem);
        })

        doneButton.addEventListener("click",function(){
        const span = listItem.querySelector(".item")
        span.style.color="red";
        span.style.textDecoration = "line-through";
        })

        txttask.value = '';
        txttask.focus();

    }else{
        e.preventDefault();
    }

});