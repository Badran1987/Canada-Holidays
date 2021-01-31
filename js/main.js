document.addEventListener("DOMContentLoaded", function () {
const holidayEl= document.getElementById("holyday");
// const provinces = document.getElementById("provList"); 
// provinces.length = 0;   
// const option = document.getElementById("option")


function creatHoliday(response){
    console.log(response.holiday.nameEn);
   const badran = "badran"; 
   holidayEl.innerHTML= `<h1>${response.holiday.nameEn}<h1>`;
    console.log(badran)
    console.log(response);

}


function holiday(){

    fetch("https://canada-holidays.p.rapidapi.com/api/v1/holidays/2?year=2021", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
            "x-rapidapi-host": "canada-holidays.p.rapidapi.com"
        }
    })
    .then((response)=> response.json())
    .then(response => {
        creatHoliday(response)
        // console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
   
}
holiday();
});

// function provinceList(){
//     fetch("https://canada-holidays.p.rapidapi.com/api/v1/provinces?year=2021", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "6601598254mshe2206a0f002367bp10fd4bjsn2c18bcef824c",
// 		"x-rapidapi-host": "canada-holidays.p.rapidapi.com"
// 	}
// })
// .then((response)=> response.json())
// .then((response) => console.log(response))
// .catch(err => {
// 	console.error(err);
// })
//     };
//  console.log (provinceList())

// 