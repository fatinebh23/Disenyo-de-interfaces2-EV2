$(document).ready(function() {
    const myList = $("#myList");

    function deleteList() {
        myList.empty();
    }

    function restoreList() {
        myList.html("<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>");
    }

    function addItemEnd() {
        myList.append("<li>New Item</li>");
    }

    function addItemStart() {
        myList.prepend("<li>New Item</li>");
    }

    function deleteLastItem() {
        myList.children(":last").remove();
    }

    function deleteFirstItem() {
        myList.children(":first").remove();
    }

    function deleteFirstTwoItems() {
        myList.children(":lt(2)").remove();
    }

    function deleteLastTwoItems() {
        myList.children(":gt(" + (myList.children().length - 3) + ")").remove();
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
