const thai = new XMLHttpRequest();
thai.open('GET', 'https://corona.lmao.ninja/v2/countries/thailand');
thai.send();
var daily_case, daily_death, daily_recover, total_case, otal_death, total_recover = '';
thai.onload = () => {
  console.log(thai);
  if (thai.status == 200) {
    var data = JSON.parse(thai.response);
    daily_case = String(data.todayCases);
    document.getElementById('dailyCase').innerHTML = '<br> + ' + (daily_case);
    daily_recover = String(data.todayRecovered);
    document.getElementById('dailyRecover').innerHTML = '<br> + ' + (daily_recover);
    daily_death = String(data.todayDeaths);
    document.getElementById('dailyDeath').innerHTML = '<br> + ' + (daily_death);
    total_case = String(data.cases);
    document.getElementById('totalCase').innerHTML = '<br> ' + (total_case);
    total_death = String(data.deaths);
    document.getElementById('totalDeath').innerHTML = '<br> ' + (total_death);
    total_recover = String(data.recovered);
    document.getElementById('totalRecover').innerHTML = '<br>  ' + (total_recover);
  }
}

function today_function() {
  document.getElementById('dailyCase').innerHTML = '<br> + ' + (daily_case);
  document.getElementById('dailyRecover').innerHTML = '<br> + ' + (daily_recover);
  document.getElementById('dailyDeath').innerHTML = '<br> + ' + (daily_death);
  document.getElementById('totalCase').innerHTML = '<br> ' + (total_case);
  document.getElementById('totalDeath').innerHTML = '<br>  ' + (total_death);
  document.getElementById('totalRecover').innerHTML = '<br>  ' + (total_recover);
};

function yester_function() {
  document.getElementById('dailyCase').innerHTML = '<br> + ' + (daily_death);
  document.getElementById('dailyRecover').innerHTML = '<br> + ' + (daily_death);
  document.getElementById('dailyDeath').innerHTML = '<br> + ' + (daily_case);
  document.getElementById('totalCase').innerHTML = '<br> ' + (total_recover);
  document.getElementById('totalDeath').innerHTML = '<br> ' + (total_death);
  document.getElementById('totalRecover').innerHTML = '<br> ' + (total_case);
};


var months = new Array();
            months[1] = "January"; months[2] = "February"; months[3] = "March";
            months[4] = "April"; months[5] = "May"; months[6] = "June";
            months[7] = "July"; months[8] = "August"; months[9] = "September";
            months[10] = "October"; months[11] = "November"; months[12] = "December";
            var todaysdate = new Date();
            var date = todaysdate.getDate(); var day = todaysdate.getDay() + 1;
            var month = todaysdate.getMonth() + 1; var yy = todaysdate.getYear();
            var year = (yy < 1000) ? yy + 1900 : yy;
            var year2 = year - (2000 * 1); year2 = (year2 < 10) ? "0" + year2 : year2;
            document.getElementById("datetime").innerHTML = date + " " + months[month] + ", " + year;
