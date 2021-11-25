function x() {
    return fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces")
      .then(response => response.json())
  }
var dataset1 = x();

function compare1() {
    dataset1.then(async(res) => {
      
      res.forEach(comp1)
      await Promise.all(res)
    })
    async function comp1(x){
      var my_data = x.txn_date;
      var select_province = document.getElementById('selectProvinces10').value;
      var data_province = x.province;
      var date = document.getElementById('selectDate10').value;
      if (select_province == data_province && my_data == date) {
        newCases = x.new_case.toLocaleString('en-US');
        document.getElementById('Pncase').innerHTML = "+ " + newCases;
        newDeaths = x.new_death.toLocaleString('en-US');
        document.getElementById('Pndeath').innerHTML = "+ " + newDeaths;
        totalCases = x.total_case.toLocaleString('en-US');
        document.getElementById('Ptcase').innerHTML = totalCases;
        totalDeaths = x.total_death.toLocaleString('en-US');
        document.getElementById('Ptdeath').innerHTML = totalDeaths;
        pro = x.province.toLocaleString('en-US');
        document.getElementById('Pprov').innerHTML = pro;
        date = x.txn_date.toLocaleString('en-US');
        document.getElementById('Pdate').innerHTML = date;
      }
    } 
  }