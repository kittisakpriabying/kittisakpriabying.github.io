function x() {
  return fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces")
    .then(response => response.json())
}
var dataset1 = x();

function y() {
  return fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces")
    .then(response => response.json())
}
var dataset2 = y();

var nCase1 
var nDeath1
var tCase1
var tDeath1
var nCase2 
var nDeath2
var tCase2
var tDeath2

function compare1() {
    dataset1.then(async(res) => {
      
      res.forEach(comp1)
      await Promise.all(res)
    })
    async function comp1(x){
      var my_data = x.txn_date;
      var select_province = document.getElementById('selectProvinces1').value;
      var data_province = x.province;
      var date = document.getElementById('selectDate1').value;
      if (select_province == data_province && my_data == date) {
        newCases1 = x.new_case.toLocaleString('en-US');
        document.getElementById('newCase1').innerHTML = "+ " + newCases1;
        newDeaths1 = x.new_death.toLocaleString('en-US');
        document.getElementById('newDeath1').innerHTML = "+ " + newDeaths1;
        totalCases1 = x.total_case.toLocaleString('en-US');
        document.getElementById('totalCase1').innerHTML = totalCases1;
        totalDeaths1 = x.total_death.toLocaleString('en-US');
        document.getElementById('totalDeath1').innerHTML = totalDeaths1;
        pro = x.province.toLocaleString('en-US');
        document.getElementById('pro1').innerHTML = pro;
        date = x.txn_date.toLocaleString('en-US');
        document.getElementById('date1').innerHTML = date;
        nCase1 = x.new_case;
        nDeath1 = x.new_death;
        tCase1 = x.total_case;
        tDeath1 = x.total_death;
      }
    } 
  }
  
  
  function compare2() {
  
    dataset2.then(async(res) => {
      
      res.forEach(comp2)
      await Promise.all(res)
    })
    async function comp2(x){
      var my_data = x.txn_date;
      var select_province = document.getElementById('selectProvinces2').value;
      var data_province = x.province;
      var date = document.getElementById('selectDate2').value;
      if (select_province == data_province && my_data == date) {
        newCases2 = x.new_case.toLocaleString('en-US');
        document.getElementById('newCase2').innerHTML = "+ " + newCases2;
        newDeaths2 = x.new_death.toLocaleString('en-US');
        document.getElementById('newDeath2').innerHTML = "+ " + newDeaths2;
        totalCases2 = x.total_case.toLocaleString('en-US');
        document.getElementById('totalCase2').innerHTML = totalCases2;
        totalDeaths2 = x.total_death.toLocaleString('en-US');
        document.getElementById('totalDeath2').innerHTML = totalDeaths2;
        pro = x.province.toLocaleString('en-US');
        document.getElementById('pro2').innerHTML = pro;
        date = x.txn_date.toLocaleString('en-US');
        document.getElementById('date2').innerHTML = date;
        nCase2 = x.new_case;
        nDeath2 = x.new_death;
        tCase2 = x.total_case;
        tDeath2 = x.total_death;
      }
    } 
  }
  
  function comparison() {
    
    var keys = Object.keys(province_th_map);
    var values = Object.values(province_th_map);
    var prov1 = document.getElementById('selectProvinces1').value;
    var day1 = document.getElementById('selectDate1').value;
    var newC1 = document.getElementById('newCase1').value;
    var newD1 = document.getElementById('newDeath1').value;
    var totalC1 = document.getElementById('totalCase1').value;
    var totalD1 = document.getElementById('totalDeath1').value;
  
    var prov2 = document.getElementById('selectProvinces2').value;
    var day2 = document.getElementById('selectDate2').value;
    var newC2 = document.getElementById('newCase2').value;
    var newD2 = document.getElementById('newDeath2').value;
    var totalC2 = document.getElementById('totalCase2').value;
    var totalD2 = document.getElementById('totalDeath2').value;
    
    var c1 = parseInt(nCase1);
    var c2 = parseInt(nCase2);
    var c12 = c1-c2;
    var c21 = c2-c1;
    var c3 = c12.toLocaleString('en-US');
    var c4 = c21.toLocaleString('en-US');
    var c5 = c1.toLocaleString('en-US');

    var d1 = parseInt(nDeath1);
    var d2 = parseInt(nDeath2);
    var d12 = d1-d2;
    var d21 = d2-d1;
    var d3 = d12.toLocaleString('en-US');
    var d4 = d21.toLocaleString('en-US');
    var d5 = d1.toLocaleString('en-US');

    
    var tc1 = parseInt(tCase1);
    var tc2 = parseInt(tCase2);
    var tc12 = tc1-tc2;
    var tc21 = tc2-tc1;
    var tc3 = tc12.toLocaleString('en-US');
    var tc4 = tc21.toLocaleString('en-US');
    var tc5 = tc1.toLocaleString('en-US');

    var td1 = parseInt(tDeath1);
    var td2 = parseInt(tDeath2);
    var td12 = td1-td2;
    var td21 = td2-td1;
    var td3 = td12.toLocaleString('en-US');
    var td4 = td21.toLocaleString('en-US');
    var td5 = td1.toLocaleString('en-US');

    for (var i = 0; i <= values.length; i++){
      var value1 = values[i];
      if (value1 == prov1){
        var p = values.indexOf(prov1);
        var p1 = keys[p];
        // document.getElementById('prov1').innerHTML = p1;
      }
    }

    for (var i = 0; i <= values.length; i++){
      var value2 = values[i];
      if (value2 == prov2){
        var p = values.indexOf(prov2);
        var p2 = keys[p];
        // document.getElementById('prov2').innerHTML = p2;
      }
    }
   
    // document.getElementById('day1').innerHTML = day1;
    // document.getElementById('day2').innerHTML = day2;
    if (c1 > c2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newC').innerHTML = "New Cases: " + p1 + " more than " + p2 + " " + c3 + " cases"; 
    }
    else if (c2 > c1) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newC').innerHTML = "New Cases: " + p2 + " more than " + p1 + " " + c4 + " cases";
    }
    else if (c1 == c2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newC').innerHTML = "New Cases: " + p1 + " is the same as " + p2 + " " + c5 + " cases";
    }

    if (d1 > d2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newD').innerHTML = "New Deaths: " + p1 + " more than " + p2 + " " + d3 + " cases"; 
    }
    else if (d2 > d1) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newD').innerHTML = "New Deaths: " + p2 + " more than " + p1 + " " + d4 + " cases";
    }
    else if (d1 == d2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newD').innerHTML = "New Deaths: " + p1 + " is the same as " + p2 + " " + d5 + " cases";
    }
    
    if (tc1 > tc2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTC').innerHTML = "Total Cases: " + p1 + " more than " + p2 + " " + tc3 + " cases"; 
    }
    else if (tc2 > tc1) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTC').innerHTML = "Total Cases: " + p2 + " more than " + p1 + " " + tc4 + " cases";
    }
    else if (tc1 == tc2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTC').innerHTML = "Total Cases: " + p1 + "is the same as " + p2 + " " + tc5 + " cases";
    }

    if (td1 > td2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTD').innerHTML = "Total Deaths: " + p1 + " more than " + p2 + " " + td3 + " cases"; 
    }
    else if (td2 > td1) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTD').innerHTML = "Total Deaths: " + p2 + " more than " + p1 + " " + td4 + " cases";
    }
    else if (td1 == td2) {
      document.getElementById('com').innerHTML = "Compare between " + p1 + " on " + day1  + " and " + p2 + " on " + day2;
      document.getElementById('newTD').innerHTML = "Total Deaths: " + p1 + " is the same as " + p2 + " " + td5 + " cases";
    }
  }

  // function percent(x,y){

  // }

  // google.charts.load('current', {'packages':['corechart']});
  //     google.charts.setOnLoadCallback(drawVisualization);

  //     function drawVisualization() {
  //       // Some raw data (not necessarily accurate)
  //       var data = google.visualization.arrayToDataTable([
  //         ['Province', 'New cases', 'New Deaths', 'New Recovered', 'Total cases', 'Total Deaths', 'Total Recovered'],
  //         ['Khon Kaen',  165,      938,         522,             998,           450,      614.6],
  //         ['Bangkok',  135,      1120,        599,             1268,          288,      682],
          
  //       ]);

  //       var options = {
  //         title : 'Monthly Coffee Production by Country',
  //         vAxis: {title: 'case'},
  //         hAxis: {title: 'Province'},
  //         seriesType: 'bars',
  //         series: {6: {type: 'line'}}
  //       };

  //       var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  //       chart.draw(data, options);
  //     }



var province_th_map = {
  'krabi': 'กระบี่',
  'bangkok': 'กรุงเทพมหานคร',
  'kanchanaburi': 'กาญจนบุรี',
  'kalasin': 'กาฬสินธุ์',
  'kamphaengphet': 'กำแพงเพชร',
  'khonkaen': 'ขอนแก่น',
  'chanthaburi': 'จันทบุรี',
  'chachoengsao': 'ฉะเชิงเทรา',
  'chonburi': 'ชลบุรี',
  'chainat': 'ชัยนาท',
  'chaiyaphum': 'ชัยภูมิ',
  'chumphon': 'ชุมพร',
  'chiangrai': 'เชียงราย',
  'chiangmai': 'เชียงใหม่',
  'trang': 'ตรัง',
  'trat': 'ตราด',
  'tak': 'ตาก',
  'nakhonnayok': 'นครนายก',
  'nakhonpathom': 'นครปฐม',
  'nakhonphanom': 'นครพนม',
  'nakhonratchasima': 'นครราชสีมา',
  'nakhonsithammarat': 'นครศรีธรรมราช',
  'nakhonsawan': 'นครสวรรค์',
  'nonthaburi': 'นนทบุรี',
  'narathiwat': 'นราธิวาส',
  'nan': 'น่าน',
  'buriram': 'บุรีรัมย์',
  'pathumthani': 'ปทุมธานี',
  'prachuapkhirikhan': 'ประจวบคีรีขันธ์',
  'prachinburi': 'ปราจีนบุรี',
  'pattani': 'ปัตตานี',
  'ayutthaya': 'พระนครศรีอยุธยา',
  'phayao': 'พะเยา',
  'phangnga': 'พังงา',
  'phatthalung': 'พัทลุง',
  'phichit': 'พิจิตร',
  'phitsanulok': 'พิษณุโลก',
  'phetchaburi': 'เพชรบุรี',
  'phetchabun': 'เพชรบูรณ์',
  'phrae': 'แพร่',
  'phuket': 'ภูเก็ต',
  'mahasarakham': 'มหาสารคาม',
  'mukdahan': 'มุกดาหาร',
  'maehongson': 'แม่ฮ่องสอน',
  'yasothon': 'ยโสธร',
  'yala': 'ยะลา',
  'roiet': 'ร้อยเอ็ด',
  'ranong': 'ระนอง',
  'rayong': 'ระยอง',
  'ratchaburi': 'ราชบุรี',
  'lopburi': 'ลพบุรี',
  'loei': 'เลย',
  'lampang': 'ลำปาง',
  'lamphun': 'ลำพูน',
  'sisaket': 'ศรีสะเกษ',
  'sakonnakhon': 'สกลนคร',
  'songkhla': 'สงขลา',
  'satun': 'สตูล',
  'samutprakan': 'สมุทรปราการ',
  'samutsongkhram': 'สมุทรสงคราม',
  'samutsakhon': 'สมุทรสาคร',
  'sakaeo': 'สระแก้ว',
  'saraburi': 'สระบุรี',
  'singburi': 'สิงห์บุรี',
  'sukhothai': 'สุโขทัย',
  'suphanburi': 'สุพรรณบุรี',
  'suratthani': 'สุราษฎร์ธานี',
  'surin': 'สุรินทร์',
  'nongkhai': 'หนองคาย',
  'nongbualamphu': 'หนองบัวลำภู',
  'angthong': 'อ่างทอง',
  'amnatcharoen': 'อำนาจเจริญ',
  'udonthani': 'อุดรธานี',
  'uttaradit': 'อุตรดิตถ์',
  'uthaithani': 'อุทัยธานี',
  'ubonratchathani': 'อุบลราชธานี',
  'betong': 'เบตง'
}