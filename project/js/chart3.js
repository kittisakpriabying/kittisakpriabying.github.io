fetch("js/response.json").then(response => {
      return response.json();
    }).then(res => {
    
          document.getElementById('ll').innerHTML = "Regions";
          document.getElementById('t1').innerHTML = "New cases";
          document.getElementById('t2').innerHTML = "New deaths";
          document.getElementById('t3').innerHTML = "Total cases";
          document.getElementById('t4').innerHTML = "Total deaths";
    
          document.getElementById('t11').innerHTML = res[0].name;
          document.getElementById('t12').innerHTML = res[0].new_case.toLocaleString('en-US');
          document.getElementById('t13').innerHTML = res[0].new_death.toLocaleString('en-US');
          document.getElementById('t14').innerHTML = res[0].total_case.toLocaleString('en-US');
          document.getElementById('t15').innerHTML = res[0].total_death.toLocaleString('en-US');
    
          document.getElementById('t111').innerHTML = res[1].name;
          document.getElementById('t122').innerHTML = res[1].new_case.toLocaleString('en-US');
          document.getElementById('t133').innerHTML = res[1].new_death.toLocaleString('en-US');
          document.getElementById('t144').innerHTML = res[1].total_case.toLocaleString('en-US');
          document.getElementById('t155').innerHTML = res[1].total_death.toLocaleString('en-US');
    
          document.getElementById('t111A').innerHTML = res[2].name;
          document.getElementById('t122A').innerHTML = res[2].new_case.toLocaleString('en-US');
          document.getElementById('t133A').innerHTML = res[2].new_death.toLocaleString('en-US');
          document.getElementById('t144A').innerHTML = res[2].total_case;
          document.getElementById('t155A').innerHTML = res[2].total_death.toLocaleString('en-US');
    
          document.getElementById('t111b').innerHTML = res[3].name;
          document.getElementById('t122b').innerHTML = res[3].new_case.toLocaleString('en-US');
          document.getElementById('t133b').innerHTML = res[3].new_death.toLocaleString('en-US');
          document.getElementById('t144b').innerHTML = res[3].total_case.toLocaleString('en-US');
          document.getElementById('t155b').innerHTML = res[3].total_death.toLocaleString('en-US');
    
          document.getElementById('t111c').innerHTML = res[4].name;
          document.getElementById('t122c').innerHTML = res[4].new_case.toLocaleString('en-US');
          document.getElementById('t133c').innerHTML = res[4].new_death.toLocaleString('en-US');
          document.getElementById('t144c').innerHTML = res[4].total_case.toLocaleString('en-US');
          document.getElementById('t155c').innerHTML = res[4].total_death.toLocaleString('en-US');
    
          document.getElementById('t111h').innerHTML = res[5].name;
          document.getElementById('t122h').innerHTML = res[5].new_case.toLocaleString('en-US');
          document.getElementById('t133h').innerHTML = res[5].new_death.toLocaleString('en-US');
          document.getElementById('t144h').innerHTML = res[5].total_case.toLocaleString('en-US');
          document.getElementById('t155h').innerHTML = res[5].total_death.toLocaleString('en-US');
    
    }).catch(err => {
    
    })