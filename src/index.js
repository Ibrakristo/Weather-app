let weather = function(){
    let _findCity = function(city){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551555a3ed5a322f85777705cea21b8c`)
    }
    let _getInfoCity = async function(citypro){   
        let x = await citypro;
        return await x.json();
    }
    let city = function (city){
        let citypro = _findCity(city);
         return _getInfoCity(citypro);
    }
    return {
        city
    };
}()

let domstuff = function(){
    let _input = document.querySelector("input");
    let _submit = document.querySelector("button");
    _submit.addEventListener("click",(e)=>{
        let name = _input.value;
        if(name == "")return;
        weather.city(name).then(function(info){
            document.querySelector(".city").lastElementChild.innerText = " " + name.charAt(0).toUpperCase() + name.substring(1,name.length);
            for(let x in info){
                let target = document.querySelector(`.${x}`);
                if(target == undefined) continue;
                if(typeof info[x] == "object"){
                for(let j in info[x]){
                    let specific;
                    if(j.search(new RegExp("[1-9]")) != 0){
                     specific = document.querySelector(`.${j}`);
                    }
                    else{
                     specific = document.querySelector(`.${x + j}`);}
                    if(specific == null) continue;
                    specific.innerText = info[x][j];
                }
            }
                else{
                    target.innerText = info[x];
                }
            }
            let weatherContainer = document.querySelector(".weather-container");
            weatherContainer.innerHTML = "";
            let counter = 0;
            for(let i of info.weather){
                if(counter >0 && counter<info.weather.length) weatherContainer.innerText +=", ";
                let weather = document.createElement("span");
                weather.innerText = i.main + " : " + i.description;
                weatherContainer.appendChild(weather);
                counter++;
            }
            let spans = document.querySelectorAll("span");
            for(let span of spans){
                if(span.innerText != "")continue;
                span.innerText = "Can't get information";
            }
            
        }).catch(function(err){
            document.querySelector(".error").innerText = "ERROR : " + err; 
        });
        
    })
}();

