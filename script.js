// Value Function ------------------------------

function myValue(values) {
    for (i=0; i <= values; i++){
    console.log(values);
    display.innerHTML = `${i}`;
}
}

// AC Function ------------------------------
function del(del) {
    var inputValue = document.getElementById("display").innerHTML;
    if (inputValue === "") {
        alert("Nothing to delete");
    } else {
        alert("About deleting your last digit")
        display.innerHTML = "D"
    }
}