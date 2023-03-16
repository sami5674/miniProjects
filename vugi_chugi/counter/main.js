let count = 0;

document.getElementById('reduceBtn').onclick = function(){
    count-=1;
    document.getElementById('counter').innerHTML = count;
}

document.getElementById('addBtn').onclick = function(){
    count+=1;
    document.getElementById('counter').innerHTML = count;
}

