const world = new XMLHttpRequest();
world.open('GET', 'https://corona.lmao.ninja/v2/all');
world.send();
world.onload = () => {
    console.log(world);
    if (world.status == 200) {
        var data = JSON.parse(world.response);
        var world_case = String(data.cases);
        document.getElementById('worldcase').innerHTML = '<br>' + (world_case);
        var world_newcase = String(data.todayCases);
        document.getElementById('worldnewcase').innerHTML = '<br> + ' + (world_newcase);
        var world_newdeath = String(data.todayDeaths);
        document.getElementById('worldnewdeath').innerHTML = '<br> + ' + (world_newdeath);
        var recover = String(data.recovered);
        document.getElementById('recover').innerHTML = '<br>' + (recover);
        var deaths = String(data.deaths);
        document.getElementById('deaths').innerHTML = '<br>' + (deaths);
    } 
}
const thai = new XMLHttpRequest();
thai.open('GET', 'https://corona.lmao.ninja/v2/countries/thailand');
thai.send();
thai.onload = () => {
    console.log(thai);
    if (thai.status == 200) {
        var data = JSON.parse(thai.response);
        var thai_case = String(data.cases);
        document.getElementById('thaicase').innerHTML = '<br>' + (thai_case);
    }
}
