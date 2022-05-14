let dateUpdate
let numberZeroFunction

numberZeroFunction = function (date){
    if (date <= 9){
        return '0' + date
    }
    if (date > 9){
        return date
    }
}

dateUpdate = function() {
    let date = new Date();
    let hawaiiDate = new Date();
    let tokyoDate = new Date()
    let dayWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let presentDateMoscow
    let presentDateReykjavik
    let presentDateTokyo
    let presentDateHawaii


    hawaiiDate.setHours(date.getHours()-13)
    tokyoDate.setHours(date.getHours()+6)


    presentDateMoscow = dayWeek[date.getDay()] + ' ' + numberZeroFunction(date.getHours()) + ':' + numberZeroFunction(date.getMinutes()) + ':' + numberZeroFunction(date.getSeconds());
    presentDateReykjavik = dayWeek[date.getUTCDay()] + ' ' + numberZeroFunction(date.getUTCHours()) + ':' + numberZeroFunction(date.getMinutes()) + ':' + numberZeroFunction(date.getSeconds());
    presentDateTokyo = dayWeek[tokyoDate.getDay()] + ' ' + numberZeroFunction(tokyoDate.getHours()) + ':' + numberZeroFunction(tokyoDate.getMinutes()) + ':' + numberZeroFunction(tokyoDate.getSeconds());
    presentDateHawaii = dayWeek[hawaiiDate.getDay()] + ' ' + numberZeroFunction(hawaiiDate.getHours()) + ':' + numberZeroFunction(hawaiiDate.getMinutes()) + ':' + numberZeroFunction(hawaiiDate.getSeconds());


    document.getElementById('timeMoscow').innerText = presentDateMoscow;
    document.getElementById('timeReykjavik').innerText = presentDateReykjavik;
    document.getElementById('timeTokyo').innerText = presentDateTokyo;
    document.getElementById('timeHawaii').innerText = presentDateHawaii;
}

setTimeout(function update() {
    dateUpdate()
    setTimeout(update, 1000);
}, 1000);

dateUpdate()