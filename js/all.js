document.addEventListener("DOMContentLoaded", function () { 
   const singleHoliday = document.getElementById("holisays");
function createAllHolidays(response){

    console.log(response , "badran");
   

  for (let i = 0; i < response.holidays.length; i++) {
       
    r = response.holidays[i].provinces
    console.log(r, "r")
   
    
    for (let x = 0; x < r.length; x++) {
        // console.log(r[x].nameEn,"array of Object")
         badran =r[x].nameEn;
         console.log(badran,"badran array")
         
     
        }
        if (response.holidays[i].federal===0) {
    singleHoliday.innerHTML += `<div class="singleHoliday" id="singleHoliday">
                <h1 id="holidayName"> Holiday Name: ${response.holidays[i].nameEn} </h1>
                <h2 id="data"> Date : ${response.holidays[i].date}</h2>
                <h2 id="fnf">Fideral Or Not : Not Fediral</h2>
                <h2 id="prov">Provinces :</h2>
                <ul id="provUlID">
                <li id="provLiID">${badran}</li>
                </ul>
                </div>`
        }else {
          singleHoliday.innerHTML += `<div class="singleHoliday" id="singleHoliday">
          <h1 id="holidayName"> Holiday Name: ${response.holidays[i].nameEn} </h1>
          <h2 id="data"> Date : ${response.holidays[i].date}</h2>
          <h2 id="fnf">Fideral Or Not : Fediral</h2>
          <h2 id="prov">Provinces :</h2>
          <ul id="provUlID">
          <li id="provLiID">All Provinces</li>
          </ul>
          </div>`

        }
                selectprov = document.getElementById("provUlID");
                output = selectprov.innerHTML; 
                
                // document.getElementById("data").innerHTML += response.holidays[i].date
                // document.getElementById("holidayName").innerHTML += response.holidays[i].nameEn
                output += `<li id="provLiID">${badran}</li>`
                console.log(output)
      console.log(response.holidays[i]);
  
} 


    // document.getElementById("singleHoliday").innerHTML = `<p>federal</p>`;
    }







    function getHolidays(){
        fetch("https://canada-holidays.p.rapidapi.com/api/v1/holidays?year=2021", {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
              "x-rapidapi-host": "canada-holidays.p.rapidapi.com"
          }
      })
      .then((response)=> response.json())
      .then(response => {
        createAllHolidays(response);
        //  console.log(response);
      })
      .catch(err => {
          console.error(err);
      });
      }
      getHolidays();

});