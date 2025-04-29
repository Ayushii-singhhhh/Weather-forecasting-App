let city=document.querySelector('#city');
city.innerHTML="Chhapra"
function enterweatherdetail(lat,long){

let latitude= lat ;
let longitude= long ;
console.log(lat);
console.log(long);
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`;
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=47.6062&lon=-122.3321';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ec607d4983msh18bb24d326d8cf5p118e88jsn428cad62c14e',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
getWeather(url,options);
}



enterweatherdetail(25.779566, 84.749886);

async function getWeather(url,options) {
    try {
        const response = await fetch(url, options);
         let result= await response.json()
         console.log(result.max_temp);
        //  let curr_temp=document.querySelector('#curr_temp');

		 let min_temp=document.querySelector('#min_temp');
		 let max_temp=document.querySelector('#max_temp');
		 let temp1=document.querySelector('#temp1');
		 let temp=document.querySelector('#temp');

		 let cloud_pct=document.querySelector('#cloud_pct');
		 let feels_like=document.querySelector('#feels_like');
		 let humidity1=document.querySelector('#humidity1');

		 let humidity=document.querySelector('#humidity');

		
		 let wind_speed1=document.querySelector('#wind_speed1');
		 let wind_speed=document.querySelector('#wind_speed');

		 let sunrise=document.querySelector('#sunrise');
		 let sunset=document.querySelector('#sunset');
	
		  max_temp .innerHTML= result.max_temp;
		  min_temp .innerHTML= result.min_temp;
          temp .innerHTML= result.temp;
		  temp1 .innerHTML= result.temp;
		   
		  cloud_pct .innerHTML =result.cloud_pct;
		  feels_like.innerHTML =result.feels_like;
			humidity.innerHTML =result.humidity;
			humidity1.innerHTML =result.humidity;
		
		  wind_speed1.innerHTML =result.wind_speed;
		  wind_speed.innerHTML =result.wind_speed;
			 sunrise.innerHTML =result.sunrise;
			  sunset.innerHTML =result.sunset;


    } catch (error) {
        console.error('Error: ', error);
    }
}
// defualut get weather of chapra




let form=document.querySelector('.d-flex');


form.addEventListener('submit',(eve)=>{
eve.preventDefault();
})



let long=document.querySelector('#long');
let lat=document.querySelector('#lat')
let submit=document.querySelector('#submit');
submit.addEventListener('click',()=>{

	city.innerHTML=cities.value;
	enterweatherdetail(lat.value,long.value)


})


// cloud_pct .innerHTML= result.cloud_pct
// 		feels_like .innerHTML= result.feels_like
// 		feels_like .innerHTML= result.feels_like
// 		max_temp .innerHTML= result.max_temp
// 		min_temp .innerHTML= result.min_temp
// 		sunrise .innerHTML= result.sunrise
// 		sunset .innerHTML= result.sunset
// 		temp .innerHTML= result.temp
// 		wind_degrees .innerHTML= result.wind_degrees
// 		wind_speed .innerHTML= result.wind_speed


