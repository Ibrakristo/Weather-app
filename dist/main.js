/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSwwRUFBMEUsS0FBSztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsRUFBRTtBQUM3RDtBQUNBO0FBQ0EsMkRBQTJELE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZTAwMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgd2VhdGhlciA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IF9maW5kQ2l0eSA9IGZ1bmN0aW9uKGNpdHkpe1xuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD01NTE1NTVhM2VkNWEzMjJmODU3Nzc3MDVjZWEyMWI4Y2ApXG4gICAgfVxuICAgIGxldCBfZ2V0SW5mb0NpdHkgPSBhc3luYyBmdW5jdGlvbihjaXR5cHJvKXsgICBcbiAgICAgICAgbGV0IHggPSBhd2FpdCBjaXR5cHJvO1xuICAgICAgICByZXR1cm4gYXdhaXQgeC5qc29uKCk7XG4gICAgfVxuICAgIGxldCBjaXR5ID0gZnVuY3Rpb24gKGNpdHkpe1xuICAgICAgICBsZXQgY2l0eXBybyA9IF9maW5kQ2l0eShjaXR5KTtcbiAgICAgICAgIHJldHVybiBfZ2V0SW5mb0NpdHkoY2l0eXBybyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNpdHlcbiAgICB9O1xufSgpXG5cbmxldCBkb21zdHVmZiA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IF9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBsZXQgX3N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgX3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcbiAgICAgICAgbGV0IG5hbWUgPSBfaW5wdXQudmFsdWU7XG4gICAgICAgIGlmKG5hbWUgPT0gXCJcIilyZXR1cm47XG4gICAgICAgIHdlYXRoZXIuY2l0eShuYW1lKS50aGVuKGZ1bmN0aW9uKGluZm8pe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0ID0gXCIgXCIgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSxuYW1lLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IobGV0IHggaW4gaW5mbyl7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3h9YCk7XG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0ID09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGluZm9beF0gPT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqIGluIGluZm9beF0pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY2lmaWM7XG4gICAgICAgICAgICAgICAgICAgIGlmKGouc2VhcmNoKG5ldyBSZWdFeHAoXCJbMS05XVwiKSkgIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICBzcGVjaWZpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2p9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7eCArIGp9YCk7fVxuICAgICAgICAgICAgICAgICAgICBpZihzcGVjaWZpYyA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWMuaW5uZXJUZXh0ID0gaW5mb1t4XVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9IGluZm9beF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpIG9mIGluZm8ud2VhdGhlcil7XG4gICAgICAgICAgICAgICAgaWYoY291bnRlciA+MCAmJiBjb3VudGVyPGluZm8ud2VhdGhlci5sZW5ndGgpIHdlYXRoZXJDb250YWluZXIuaW5uZXJUZXh0ICs9XCIsIFwiO1xuICAgICAgICAgICAgICAgIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgd2VhdGhlci5pbm5lclRleHQgPSBpLm1haW4gKyBcIiA6IFwiICsgaS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO1xuICAgICAgICAgICAgZm9yKGxldCBzcGFuIG9mIHNwYW5zKXtcbiAgICAgICAgICAgICAgICBpZihzcGFuLmlubmVyVGV4dCAhPSBcIlwiKWNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJDYW4ndCBnZXQgaW5mb3JtYXRpb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKS5pbm5lclRleHQgPSBcIkVSUk9SIDogXCIgKyBlcnI7IFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSlcbn0oKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9