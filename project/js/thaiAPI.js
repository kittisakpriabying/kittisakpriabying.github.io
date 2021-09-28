const thai = new XMLHttpRequest();
thai.open('GET', 'https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=558ac716-5fe7-4b58-80e0-2021093d7492874e72');
thai.send();
thai.onload = () => {
    console.log(thai);
    if (thai.status == 200) {
        var data = JSON.parse(thai.response);
        var thai_case = String(data.daily_covid_general);
        document.getElementById('thaicase').innerHTML = '<br>' + (thai_case);
    }
}