document.addEventListener("DOMContentLoaded", function () {
// const holidayEl[]= 
const date= document.getElementById("date");
const observedDate= document.getElementById("obdate");
const federal= document.getElementById("fediral");
const provincesele = document.getElementById("provincesele");


function creatHolidays(response){

for (let i = 0; i < response.holidays.length; i++) {
  
    // console.log(response.holidays.length);
  const holidays = response.holidays[i];
  console.log(holidays);

if (response.holidays[i].federal===0) {
    document.getElementById("fediral").innerHTML += `federal`
    document.getElementById("contaner").innerHTML += `<div class="left">
    <h1 id="holydayName"> ${response.holidays[i].nameEn} </h1>
    <p class="provincesName"> Ontario ..</p>
    <p class="holydayDate">  ${response.holidays[i].date} </p>
    <p class="obsDate">${response.holidays[i].observedDate}</p>
    <p class="fediral" id="fediral"> Fediral  </p>
  
  </div>`
} else {
    document.getElementById("contaner").innerHTML += `<div class="left">
    <h1 id="holydayName"> ${response.holidays[i].nameEn} </h1>
    <p class="provincesName"> Ontario ..</p>
    <p class="holydayDate">  ${response.holidays[i].date} </p>
    <p class="obsDate">${response.holidays[i].observedDate}</p>
    <p class="fediral" id="fediral">  Not Fediral</p>
  
  </div>`
   
}


  
    


}

}





// function holiday(){

//     fetch("https://canada-holidays.p.rapidapi.com/api/v1/holidays/2?year=2021", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
//             "x-rapidapi-host": "canada-holidays.p.rapidapi.com"
//         }
//     })
//     .then((response)=> response.json())
//     .then(response => {
//         creatHolidays(response)
//         // console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
   
// }


function getHolidays(){

    fetch("https://canada-holidays.p.rapidapi.com/api/v1/holidays?year=2021&federal=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
            "x-rapidapi-host": "canada-holidays.p.rapidapi.com"
        }
    })
    .then((response)=> response.json())
    .then(response => {
        creatHolidays(response);
        // console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
// holiday();
getHolidays();
});

