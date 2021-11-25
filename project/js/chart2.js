

var employeeLabel = [], employeeSalaryData = [], employeeAgeData = [],recoveredData=[];

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart1').getContext('2d');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'New cases',
            backgroundColor: "#36b9cc",
            borderColor: '#36b9cc',
            data: employeeSalaryData
        },
        {
          label: 'New deaths',
          backgroundColor: '#146875',
          borderColor: '#146875',
          data: employeeAgeData
      },{
        label: 'Total recovered',
        backgroundColor: "#1cc88a",
        borderColor: '#1cc88a',
        data: recoveredData
    }
      ]
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index'
      },
      scales: {
        x: {
          min: -100,
          max: 100,
        },
        y: {
          min: -100,
          max: 100,
        }
      }
    }
})}

dummyChart()


//Fetch Data from API

async function getDummyData() {
  const apiUrl = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.map((x) => x.new_case)
  console.log(salary)
  const age = barChatData.map((x) => x.new_death)
  const name = barChatData.map((x) => x.province)
  const new_recove = barChatData.map((x) => x.new_case)

 employeeSalaryData = salary
 employeeAgeData = age
 employeeLabel = name
 recoveredData = new_recove
}