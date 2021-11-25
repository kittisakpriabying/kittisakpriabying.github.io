var employeeLabel = [], employeeSalaryData = [], employeeAgeData = [],recoveredData=[];

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Total cases',
            
            borderColor: '#36b9cc',
            data: employeeSalaryData
        },
        {
          label: 'Total deaths',
          
          borderColor: '#146875',
          data: employeeAgeData
      },{
        label: 'Total recovered',
        
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
  const apiUrl = "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all"

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.map((x) => x.total_case)
  console.log(salary)
  const age = barChatData.map((x) => x.total_death)
  const name = barChatData.map((x) => x.txn_date)
  const new_recove = barChatData.map((x) => x.total_recovered)

 employeeSalaryData = salary
 employeeAgeData = age
 employeeLabel = name
 recoveredData = new_recove;
}


