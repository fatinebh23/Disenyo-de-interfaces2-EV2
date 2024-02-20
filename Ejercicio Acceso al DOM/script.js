document.addEventListener("DOMContentLoaded", function() {
    const myList = document.getElementById("myList");

    function deleteList() {
        myList.innerHTML = "";
    }

    function restoreList() {
        myList.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>";
    }

    function addItemEnd() {
        const newItem = document.createElement("li");
        newItem.textContent = "New Item";
        myList.appendChild(newItem);
    }

    function addItemStart() {
        const newItem = document.createElement("li");
        newItem.textContent = "New Item";
        myList.insertBefore(newItem, myList.firstChild);
    }

    function deleteLastItem() {
        const lastItem = myList.lastElementChild;
        if (lastItem) {
            myList.removeChild(lastItem);
        }
    }

    function deleteFirstItem() {
        const firstItem = myList.firstElementChild;
        if (firstItem) {
            myList.removeChild(firstItem);
        }
    }

    function deleteFirstTwoItems() {
        for (let i = 0; i < 2; i++) {
            const firstItem = myList.firstElementChild;
            if (firstItem) {
                myList.removeChild(firstItem);
            }
        }
    }

    function deleteLastTwoItems() {
        for (let i = 0; i < 2; i++) {
            const lastItem = myList.lastElementChild;
            if (lastItem) {
                myList.removeChild(lastItem);
            }
        }
    }

    window.deleteList = deleteList;
    window.restoreList = restoreList;
    window.addItemEnd = addItemEnd;
    window.addItemStart = addItemStart;
    window.deleteLastItem = deleteLastItem;
    window.deleteFirstItem = deleteFirstItem;
    window.deleteFirstTwoItems = deleteFirstTwoItems;
    window.deleteLastTwoItems = deleteLastTwoItems;
});
