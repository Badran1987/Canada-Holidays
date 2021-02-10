document.addEventListener("DOMContentLoaded", function () {

const refreshBtn = document.getElementById("refreshBtn");

const dropdown = document.getElementById("provList");
dropdown.length = 0;
const defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;


// All Holidays view create ***

// function createAllHolidays(response){
//   console.log(response , "badran");
//   document.getElementById("singleHoliday").innerHTML = `<p>federal</p>`;
//   }


function creatHolidays(response){

  for (let i = 0; i < response.length; i++) {
    console.log(response[i].nameEn,"create")
    // console.log(response[i].date,"create name")
    // document.getElementById("fediral").innerHTML += `federal`
    document.getElementById("contaner").innerHTML += `<div class="singleHoliday" id="singleHoliday">
        <h1 id="holydayName"> Holiday name : ${response[i].nameEn} </h1>
        <p class="holydayDate">  Date : ${response[i].date} </p>
        <p class="obsDate"> Obs Data : ${response[i].observedDate}</p>
        <p class="fediral" id="fediral"> Fediral / Not Fediral : Not Fediral  </p>
      </div>`

  }
  
  // // console.log(response[i].nameEn)
  // if (response[i].federal===0) {
  //     
  // } else {
  //     document.getElementById("contaner").innerHTML += `<div class="left">
  //     <h1 id="holydayName"> Holiday name : ${response[i].nameEn} </h1>
  //    
  //     <p class="holydayDate"> Date : ${response[i].date} </p>
  //     <p class="obsDate"> Obs Data : ${response[i].observedDate}</p>
  //     <p class="fediral" id="fediral">  Fediral / Not Fediral :  Fediral</p>
    
  //   </div>`
     
  // }
}


  
function creatProvinces(response){
  // console.log(response)

    // to fill drop down list
    for (let i = 0; i < response.provinces.length; i++) {
      const optionlist = document.createElement('option') ;
      optionlist.setAttribute("id", "option1");
      optionlist.text = response.provinces[i].nameEn;
      optionlist.value = response.provinces[i].id;
      dropdown.add(optionlist);
      }
      refreshBtn.addEventListener("click", function () {
       
        selectprov = document.getElementById("provList");
        output = selectprov.value; 
        for (let i = 0; i < response.provinces.length; i++) {
          provID=response.provinces[i].holidays
          console.log(response.provinces[i].id)
          if(response.provinces[i].id === "AB" && output === "AB"){
           
            c = response.provinces[i].holidays
            creatHolidays(c)

          } else if(response.provinces[i].id === "ON" && output === "ON"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "NS" && output === "NS"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "NT" && output === "NT"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "NU" && output === "NU"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "BC" && output === "BC"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "MB" && output === "NB"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "NB" && output === "NB"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "NL" && output === "NL"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "PE" && output === "QC"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "QC" && output === "QC"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "SK" && output === "SK"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }else if(response.provinces[i].id === "YT" && output === "YT"){
            c = response.provinces[i].holidays
            creatHolidays(c)
          }
}});}

function getprovances(){

        fetch("https://canada-holidays.p.rapidapi.com/api/v1/provinces?year=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
                "x-rapidapi-host": "canada-holidays.p.rapidapi.com"
            }
        })
        .then((response)=> response.json())
        .then(response => {
            creatProvinces(response);
            // console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
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
  createAllHolidays(response)
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
getHolidays();
getprovances()
});

