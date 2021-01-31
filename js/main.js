document.addEventListener("DOMContentLoaded", function () {
const holidayEl= document.getElementById("holyday");
const date= document.getElementById("date");
const observedDate= document.getElementById("obdate");
const federal= document.getElementById("fediral");
const provincesele = document.getElementById("provincesele");






function creatHoliday(response){
    // console.log(response.holiday.nameEn);
    console.log(response);
   holidayEl.innerHTML= `<h1 class="name">${response.holiday.nameEn}<h1>`;
   date.innerHTML= `${response.holiday.date}`;
   observedDate.innerHTML= `<h1 class="name">${response.holiday.observedDate}<h1>`;
    if (response.holiday.federal===0) {
        federal.innerHTML= `<h1 class="name">federal<h1>`;
    } else {
        federal.innerHTML= `<h1 class="name">Not federal<h1>`;
    }

    for (let i = 0; i < response.holiday.provinces.length; i++) {
        const provinces = response.holiday.provinces[i];
        console.log(provinces.nameEn);
        provincesele.innerHTML=`${provinces.nameEn}`
    }

    // for (let provencesItems = 0; provencesItems < provinces.length; provencesItems++) {
    //     const element = provinces[provencesItems];
    //     console.log(element)
    // }
    // provinces.innerHTML=`<h1 class="name">${response.holiday.provinces.nameEn}<h1>`
    // const provinces = response.holiday.provinces[0];
    // console.log(provinces);
    
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
