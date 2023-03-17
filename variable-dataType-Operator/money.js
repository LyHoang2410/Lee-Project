let money= get.ElementById('money').value;
let from= get.ElementById('from').value;
let to = get.ElementById('to').value;
if(from === to){
    alert(money+from);
}
else {
    if(from == 'VND')
    {
        alert(money/23000 + to)
    }
    else {
        alert(money*23000 + to);
    }
}