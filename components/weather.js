async function weatherComponent(){
    const weathers = document.getElementsByClassName("weather-component");
    for(var i=0;i<weathers.length;i++){
        const id = details[i].getAttribute("city");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        try{
            const rs = await fetch(url);
            const data = await rs.json();
            const icon = data.weather[0].icon;
            const iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            const html = `<div class="card mb-3" style="width: 18rem;">
                            <h3 class="fw-bold">${data.name}</h3>
                            <p>Nhiệt độ:${data.main.temp}<sup>°</sup>C</p>
                            <img src="${iconurl}" alt="${data.weather[0].description}">
                            <p>${data.weather[0].description}</p>
                        </div>`;
            weathers[i].innerHTML = html;
        }catch(error){

        }
    }
}
weatherComponent();