function check() {

    var n = document.getElementById("num").value;

    if (n === "") {
        document.getElementById("ans").innerHTML = "plz enter something";
    }
    else {

        n = Number(n);   
if (n % 2 === 0) {
            document.getElementById("ans").innerHTML = n + " is even";
        }
        else {
            document.getElementById("ans").innerHTML = n + " is odd";
        }
    }
} 