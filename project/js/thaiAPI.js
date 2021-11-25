fetch("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=558ac716-5fe7-4b58-80e0-2021093d7492874e72").then(response => {
    return response.json();
  }).then(res => {
    
    totalDose = res.data.cumulative_vaccines.toLocaleString('en-US');
    document.getElementById('totalDos1').innerHTML =  totalDose;
    


  }).catch(err => {

  })

fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
  return response.json();
}).then(res => {

  for (var i = 0; i <= res.length; i++) {
    newCases = res[i].new_case.toLocaleString('en-US');
    document.getElementById('newCases').innerHTML = "+ " + newCases;
    newDeaths = res[i].new_death.toLocaleString('en-US');
    document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
    newRecovered = res[i].new_recovered.toLocaleString('en-US');
    document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
    totalCases = res[i].total_case.toLocaleString('en-US');
    document.getElementById('totalCases').innerHTML = totalCases;
    document.getElementById('totalCases2').innerHTML = totalCases;
    totalDeaths = res[i].total_death.toLocaleString('en-US');
    document.getElementById('totalDeaths').innerHTML = totalDeaths;
    document.getElementById('totalDeath2').innerHTML = totalDeaths;
    totalRecovered = res[i].total_recovered.toLocaleString('en-US');
    document.getElementById('totalRecovered').innerHTML = totalRecovered;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[i].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);
        document.getElementById('dateText2').innerHTML =  today.toLocaleDateString("en-US", options);
        document.getElementById('dateText3').innerHTML =  today.toLocaleDateString("en-US", options);
  }

}).catch(err => { })

function today_function() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
    return response.json();
  }).then(res => {

    for (var i = 0; i <= res.length; i++) {
      newCases = res[i].new_case.toLocaleString('en-US');
      document.getElementById('newCases').innerHTML = "+ " + newCases;
      newDeaths = res[i].new_death.toLocaleString('en-US');
      document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
      newRecovered = res[i].new_recovered.toLocaleString('en-US');
      document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
      totalCases = res[i].total_case.toLocaleString('en-US');
      document.getElementById('totalCases').innerHTML = totalCases;
      totalDeaths = res[i].total_death.toLocaleString('en-US');
      document.getElementById('totalDeaths').innerHTML = totalDeaths;
      totalRecovered = res[i].total_recovered.toLocaleString('en-US');
      document.getElementById('totalRecovered').innerHTML = totalRecovered;
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[i].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);
    }

  }).catch(err => { })
}

function yester_function() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
    return response.json();
  }).then(res => {
    var num = res.length - 2;
    newCases = res[num].new_case.toLocaleString('en-US');
    document.getElementById('newCases').innerHTML = "+ " + newCases;
    newDeaths = res[num].new_death.toLocaleString('en-US');
    document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
    newRecovered = res[num].new_recovered.toLocaleString('en-US');
    document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
    totalCases = res[num].total_case.toLocaleString('en-US');
    document.getElementById('totalCases').innerHTML = totalCases;
    totalDeaths = res[num].total_death.toLocaleString('en-US');
    document.getElementById('totalDeaths').innerHTML = totalDeaths;
    totalRecovered = res[num].total_recovered.toLocaleString('en-US');
    document.getElementById('totalRecovered').innerHTML = totalRecovered;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[num].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);

  }).catch(err => {

  })
}

function weekly_function() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
    return response.json();
  }).then(res => {
    var num = res.length - 8;
    newCases = res[num].new_case.toLocaleString('en-US');
    document.getElementById('newCases').innerHTML = "+ " + newCases;
    newDeaths = res[num].new_death.toLocaleString('en-US');
    document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
    newRecovered = res[num].new_recovered.toLocaleString('en-US');
    document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
    totalCases = res[num].total_case.toLocaleString('en-US');
    document.getElementById('totalCases').innerHTML = totalCases;
    totalDeaths = res[num].total_death.toLocaleString('en-US');
    document.getElementById('totalDeaths').innerHTML = totalDeaths;
    totalRecovered = res[num].total_recovered.toLocaleString('en-US');
    document.getElementById('totalRecovered').innerHTML = totalRecovered;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[num].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);

  }).catch(err => {

  })
}

function month_function() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
    return response.json();
  }).then(res => {
    var num = res.length - 31;
    newCases = res[num].new_case.toLocaleString('en-US');
    document.getElementById('newCases').innerHTML = "+ " + newCases;
    newDeaths = res[num].new_death.toLocaleString('en-US');
    document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
    newRecovered = res[num].new_recovered.toLocaleString('en-US');
    document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
    totalCases = res[num].total_case.toLocaleString('en-US');
    document.getElementById('totalCases').innerHTML = totalCases;
    totalDeaths = res[num].total_death.toLocaleString('en-US');
    document.getElementById('totalDeaths').innerHTML = totalDeaths;
    totalRecovered = res[num].total_recovered.toLocaleString('en-US');
    document.getElementById('totalRecovered').innerHTML = totalRecovered;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[num].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);

  }).catch(err => {

  })

}



function date_select() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all").then(response => {
    return response.json();
  }).then(res => {

    for (var i = 0; i <= res.length; i++) {
      var my_data = res[i].txn_date;
      var date = document.getElementById("selectDate").value;
      if (my_data == date) {
        newCases = res[i].new_case.toLocaleString('en-US');
        document.getElementById('newCases').innerHTML = "+ " + newCases;
        newDeaths = res[i].new_death.toLocaleString('en-US');
        document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
        newRecovered = res[i].new_recovered.toLocaleString('en-US');
        document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
        totalCases = res[i].total_case.toLocaleString('en-US');
        document.getElementById('totalCases').innerHTML = totalCases;
        totalDeaths = res[i].total_death.toLocaleString('en-US');
        document.getElementById('totalDeaths').innerHTML = totalDeaths;
        totalRecovered = res[i].total_recovered.toLocaleString('en-US');
        document.getElementById('totalRecovered').innerHTML = totalRecovered;



        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[i].txn_date);
        document.getElementById('dateText').innerHTML = "Data as at "+ today.toLocaleDateString("en-US", options);
      }
    }

  }).catch(err => {

  })


  fetch("https://covid19.ddc.moph.go.th/api/Cases/round-1to2-all").then(response => {
    return response.json();
  }).then(res => {

    for (var i = 0; i <= res.length; i++) {
      var my_data = res[i].txn_date;
      var date = document.getElementById("selectDate").value;
      if (my_data == date) {
        newCases = res[i].new_case.toLocaleString('en-US');
        document.getElementById('newCases').innerHTML = "+ " + newCases;
        newDeaths = res[i].new_death.toLocaleString('en-US');
        document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
        newRecovered = res[i].new_recovered.toLocaleString('en-US');
        document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
        totalCases = res[i].total_case.toLocaleString('en-US');
        document.getElementById('totalCases').innerHTML = totalCases;
        totalDeaths = res[i].total_death.toLocaleString('en-US');
        document.getElementById('totalDeaths').innerHTML = totalDeaths;
        totalRecovered = res[i].total_recovered.toLocaleString('en-US');
        document.getElementById('totalRecovered').innerHTML = totalRecovered;



        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[my_data].txn_date);
        document.getElementById('dateText').innerHTML = today.toLocaleDateString("en-US", options);
      }
    }

  }).catch(err => {

  })
}




//********************************************************************************* */



fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces").then(response => {
  return response.json();
}).then(res => {
  for (var i = 0; i <= res.length; i++) {
    var pro = document.createElement('option')
    var province = document.getElementById('province')
    var c = res[i].province;
    pro.innerHTML = c;
    province.appendChild(pro)

  }

}).catch(err => {

})


function provinces_selected() {

  fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces").then(response => {
    return response.json();
  }).then(res => {

    for (var i = 0; i <= res.length; i++) {
      var select_province = document.getElementById('selectProvinces2').value;
      var data_province = res[i].province;
      if (select_province == data_province) {
        document.getElementById('province_new').textContent = "New Case Excludeabroad";
        var text = document.getElementById('province_total');
        text.textContent = "Total Case Excludeabroad";
        
        newCases = res[i].new_case.toLocaleString('en-US');
        document.getElementById('newCases').innerHTML = "+ " + newCases;
        newDeaths = res[i].new_death.toLocaleString('en-US');
        document.getElementById('newDeaths').innerHTML = "+ " + newDeaths;
        newRecovered = res[i].new_case_excludeabroad.toLocaleString('en-US');
        document.getElementById('newRecovered').innerHTML = "+ " + newRecovered;
        totalCases = res[i].total_case.toLocaleString('en-US');
        document.getElementById('totalCases').innerHTML = totalCases;
        totalDeaths = res[i].total_death.toLocaleString('en-US');
        document.getElementById('totalDeaths').innerHTML = totalDeaths;
        totalRecovered = res[i].total_case_excludeabroad.toLocaleString('en-US');
        document.getElementById('totalRecovered').innerHTML = totalRecovered;


        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(res[i].txn_date);
        document.getElementById('dateText').innerHTML = today.toLocaleDateString("en-US", options);

      }

    }

    

  }).catch(err => {

  })


}







