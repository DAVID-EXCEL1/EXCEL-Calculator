// Value Function ------------------------------

function myValue(values) {
    for (i = 0; i <= values; i++) {
        console.log(values);
        display.innerHTML = `${i}`;
    }
}

// AC Function ------------------------------
function del(del) {
    let inputValue = document.getElementById("display").innerHTML;
    if (inputValue === "") {
        alert("Nothing to delete");
    } else {
        alert("About deleting your last digit")
        display.innerHTML = ""
    }
}


// Equals To Function ---------------------------------------


function solve() {
    if (display.innerHTML === "") {
        alert("Don't Cause Bug")
    }else{
        let answer = document.getElementById("ans");
        confirm("Have you solved it");
        answer = myValue(values);
    }
}