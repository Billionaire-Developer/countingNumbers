let decreaseBtn = document.getElementById("decreaseBtn");
let restBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    document.getElementById("countingNumber").textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    document.getElementById("countingNumber").textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    document.getElementById("countingNumber").textContent = count;
}