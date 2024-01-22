// Value Function ------------------------------
arrayNumbers = []

function myValue(values) {
    console.log(values);
    arrayNumbers = values
    display.innerHTML = arrayNumbers;
}


// AC Function ------------------------------
function del(del) {
    var inputValue = document.getElementById("display").innerHTML;
    if (arrayNumbers === "") {
        alert("Nothing to delete");
    } else {
        arrayNumbers.splice(del,1);
        console.log(arrayNumbers.splice(del,1));
    }
}