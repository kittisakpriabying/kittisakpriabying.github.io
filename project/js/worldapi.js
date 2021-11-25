const world = new XMLHttpRequest();
world.open('GET', 'https://corona.lmao.ninja/v2/all');
world.send();
world.onload = () => {
    console.log(world);
    if (world.status == 200) {
        var data = JSON.parse(world.response);
        var world_case = String(data.cases);
        document.getElementById('worldcase').innerHTML = '<br>' + commafy(world_case);
        var world_newcase = String(data.todayCases);
        document.getElementById('worldnewcase').innerHTML = '<br> + ' + commafy(world_newcase);
        var world_newdeath = String(data.todayDeaths);
        document.getElementById('worldnewdeath').innerHTML = '<br> + ' + commafy(world_newdeath);
        var recover = String(data.recovered);
        document.getElementById('recover').innerHTML = '<br>' + commafy(recover);
        var deaths = String(data.deaths);
        document.getElementById('deaths').innerHTML = '<br>' + commafy(deaths);
    } 
}


function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}