const axios = require('axios');
const express = require('express');
const myApp = express();
const port = 4000;
const config = {
    url: 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces',
    headers: {
        'Content-Type': "application/json"

    },
    method: 'get',
};

myApp.get('/covid', async (req, res) => {
    try {
        const response = await axios(config);
        //date
        var date = response.data[0].txn_date
        //north
        const north_new_case = response.data[70].new_case + response.data[71].new_case + response.data[23].new_case + response.data[31].new_case + response.data[75].new_case + response.data[76].new_case + response.data[46].new_case + response.data[47].new_case + response.data[67].new_case;
        const north_new_death = response.data[70].new_death + response.data[71].new_death + response.data[23].new_death + response.data[31].new_death + response.data[75].new_death + response.data[76].new_death + response.data[46].new_death + response.data[47].new_death + response.data[67].new_death;
        const north_total_case = response.data[70].total_case + response.data[71].total_case + response.data[23].total_case + response.data[31].total_case + response.data[75].total_case + response.data[76].total_case + response.data[46].total_case + response.data[47].total_case + response.data[67].total_case;
        const north_total_death = response.data[70].total_death + response.data[71].total_death + response.data[23].total_death + response.data[31].total_death + response.data[75].total_death + response.data[76].total_death + response.data[46].total_death + response.data[47].total_death + response.data[67].total_death;

        //Northeast
        const northEast_new_case = response.data[3].new_case + response.data[5].new_case + response.data[10].new_case + response.data[17].new_case + response.data[18].new_case + response.data[24].new_case + response.data[25].new_case + response.data[37].new_case + response.data[38].new_case + response.data[40].new_case + response.data[41].new_case + response.data[74].new_case+ response.data[48].new_case+ response.data[49].new_case+ response.data[60].new_case+ response.data[62].new_case+ response.data[63].new_case+ response.data[65].new_case+ response.data[66].new_case+ response.data[69].new_case;
        const northEast_new_death = response.data[3].new_death + response.data[5].new_death + response.data[10].new_death + response.data[17].new_death + response.data[18].new_death + response.data[24].new_death + response.data[25].new_death + response.data[37].new_death + response.data[38].new_death + response.data[40].new_death + response.data[41].new_death + response.data[74].new_death+ response.data[48].new_death+ response.data[49].new_death+ response.data[60].new_death+ response.data[62].new_death+ response.data[63].new_death+ response.data[65].new_death+ response.data[66].new_death+ response.data[69].new_death;
        const northEast_total_case = response.data[3].total_case + response.data[5].total_case + response.data[10].total_case + response.data[17].total_case + response.data[18].total_case + response.data[24].total_case + response.data[25].total_case + response.data[37].total_case + response.data[38].total_case + response.data[40].total_case + response.data[41].total_case + response.data[74].total_case+ response.data[48].total_case+ response.data[49].total_case+ response.data[60].total_case+ response.data[62].total_case+ response.data[63].total_case+ response.data[65].total_case+ response.data[66].total_case+ response.data[69].total_case;
        const northEast_total_death = response.data[3].total_death + response.data[5].total_death + response.data[10].total_death + response.data[17].total_death + response.data[18].total_death + response.data[24].total_death + response.data[25].total_death + response.data[37].total_death + response.data[38].total_death + response.data[40].total_death + response.data[41].total_death + response.data[74].total_death+ response.data[48].total_death+ response.data[49].total_death+ response.data[60].total_death+ response.data[62].total_death+ response.data[63].total_death+ response.data[65].total_death+ response.data[66].total_death+ response.data[69].total_death;


        res.json([{
            name: 'North',
            date: date,
            new_case: north_new_case,
            new_death: north_new_death,
            total_case: north_total_case,
            total_death: north_total_death,

        },{
            name: 'Northeast',
            date: date,
            new_case: northEast_new_case,
            new_death: northEast_new_death,
            total_case: northEast_total_case,
            total_death: northEast_total_death,
        }]);

    } catch (err) {
        res.json({ Error: `${err}` })
    }
});


myApp.listen(port, () => {
    console.log(`Problem3 listening at http://localhost:${port}/covid`)
});



    
  
  
  