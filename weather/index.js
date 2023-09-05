const button = document.getElementById("Search-btn");
const input = document.getElementById("input-city");


const CityName = document.getElementById("city-name");
const city_time = document.getElementById("city-time");
const city_temp = document.getElementById("city-temp");

//create an api call
async function GetData(city) {
  let response =await fetch(
`http://api.weatherapi.com/v1/current.json?key=609808ad841c48298ea60435230509 &q=${city}&aqi=yes` );

  // console.log(response.json());

  return await response.json()
  
  
}


button.addEventListener("click", async() => {
  const value = input.value;
  const result = await GetData(value)

  CityName.innerText = `${result.location.name}, ${result.location.region}---${result.location.country}`

  city_time.innerText = result.location.localtime

  city_temp.innerText = result.current.temp_c 

//   console.log(result)
});

//https://api.weatherapi.com/v1/current.json?key=%20609808ad841c48298ea60435230509&q=London&aqi=yes
