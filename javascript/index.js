function updateTime() {
  let positanoElement = document.querySelector("#positano");
  let positanoDateElement = positanoElement.querySelector(".date");
  let positanoTimeElement = positanoElement.querySelector(".time");
  let positanoTime = moment().tz("CET");

  positanoDateElement.innerHTML = positanoTime.format("Do MMMM YYYY");
  positanoTimeElement.innerHTML = positanoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  let newOrleansElement = document.querySelector("#new-orleans");
  let newOrleansDateElement = newOrleansElement.querySelector(".date");
  let newOrleansTimeElement = newOrleansElement.querySelector(".time");
  let newOrleansTime = moment().tz("US/Central");

  newOrleansDateElement.innerHTML = newOrleansTime.format("Do MMMM YYYY");
  newOrleansTimeElement.innerHTML = newOrleansTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")} </small> </div>
        </div>
        <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
