const inputField = document.getElementById("cityInput");

function updatePlaceholder() {
    const width = inputField.offsetWidth;

    if (width > 350) {
        inputField.placeholder = "Type your city here...";
    } else if (width <= 350 && width > 250) {
        inputField.placeholder = "Type your city...";
    } else {
        inputField.placeholder = "City...";
    }
}

// Update placeholder on window resize
window.addEventListener("resize", updatePlaceholder);

const apikey="992070f36c1a6dc89afb33518e206aba";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&";
async function checkweather(city) {
    const response=await fetch(apiurl+`q=${city}&`+"&appid="+apikey);
    if(response.status==404){
        document.querySelector(".error").style="display:block";
        document.querySelector(".weather").style="display:none";
        return;
    }
   
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed;
    const weatherconditions=(data.weather[0].main);
    console.log(weatherconditions);
    
    if(weatherconditions=="Clouds"){
        document.querySelector(".weathericon").src="images/clouds.png"
    }
   else if(weatherconditions=="Clear"){
        document.querySelector(".weathericon").src="images/clear.png"
    }
   else if(weatherconditions=="Rain"){
        document.querySelector(".weathericon").src="images/rain.png"
    }
   else if(weatherconditions=="Drizzle"){
        document.querySelector(".weathericon").src="images/drizzle.png"
    }
   else if(weatherconditions=="Mist"){
        document.querySelector(".weathericon").src="images/mist.png"
    }
   else if(weatherconditions=="Snow"){
        document.querySelector(".weathericon").src="snow.png"
    }
    document.querySelector(".weather").style="display:block;";
    document.querySelector(".error").style="display:none";
}
function getvalue(){
    let searchbox=document.querySelector("input").value;
    checkweather(searchbox);
    // document.querySelector("input").value="";
} 
