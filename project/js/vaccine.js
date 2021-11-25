
fetch("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=558ac716-5fe7-4b58-80e0-2021093d7492874e72").then(response => {
  return response.json();
}).then(res => {   
  
  vacToday1 = parseInt(res.data.daily_vaccine1);
  vacToday2 = parseInt(res.data.daily_vaccine2);
  vacToday3 = parseInt(res.data.daily_vaccine3);
  vactodayAllInt = vacToday1 + vacToday2 + vacToday3;

  firstDose = res.data.daily_vaccine1.toLocaleString('en-US');
  document.getElementById('firstDose').innerHTML = "+ " + firstDose;
  secondDose = res.data.daily_vaccine2.toLocaleString('en-US');
  document.getElementById('secondDose').innerHTML = "+ " + secondDose;
  thirdDose = res.data.daily_vaccine3.toLocaleString('en-US');
  document.getElementById('thirdDose').innerHTML = "+ " + thirdDose;
  todaySum = parseInt(firstDose) + parseInt(secondDose)
  totalPpl = res.data.cumulative_vaccine1.toLocaleString('en-US');
  document.getElementById('totalPpl').innerHTML =  totalPpl;
  vacToday = firstDose
  document.getElementById('vacToday').innerHTML = "+ " + vactodayAllInt.toLocaleString('en-US');
  totalDose = res.data.cumulative_vaccines.toLocaleString('en-US');
  document.getElementById('totalDose').innerHTML =  totalDose;
  



}).catch(err => { })

function today_function() {

  fetch("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=558ac716-5fe7-4b58-80e0-2021093d7492874e72").then(response => {
    return response.json();
  }).then(res => {

    firstDose = res.data.daily_vaccine1.toLocaleString('en-US');
    document.getElementById('firstDose').innerHTML = "+ " + firstDose;
    totalPpl = res.data.cumulative_vaccines.toLocaleString('en-US');
    document.getElementById('totalPpl').innerHTML = "+ " + totalPpl;
    secondDose = res.daily_vaccine2.toLocaleString('en-US');
    document.getElementById('secondDose').innerHTML = "+ " + secondDose;
    


  }).catch(err => {

  })
}

function _function(yester) {

  fetch("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=558ac716-5fe7-4b58-80e0-2021093d7492874e72").then(response => {
    return response.json();
  }).then(res => {
    noDosesToday = res.data.yesterday_covid_general.toLocaleString('en-US');
    document.getElementById('noDosesToday').innerHTML = "+ " + noDosesToday;
    firstDose = res.data.yesterday_covid_deaths.toLocaleString('en-US');
    document.getElementById('firstDose').innerHTML = "+ " + firstDose;
    totalPpl = res.data.cumulative_vaccines.toLocaleString('en-US');
    document.getElementById('totalPpl').innerHTML = "+ " + totalPpl;
    secondDose = res.data.yesterday_cumulative_covid_cases.toLocaleString('en-US');
    document.getElementById('secondDose').innerHTML = secondDose;

  }).catch(err => {

  })
}
