function updateTime() {
  //Los Angelese

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  //Barcellona

  let barcellonaElement = document.querySelector("#barcellona");
  let barcellonaDateElement = barcellonaElement.querySelector(".date");
  let barcellonaTimeElement = barcellonaElement.querySelector(".time");
  let barcellonaTime = moment().tz("Europe/Barcellona");

  barcellonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  barcellonaTimeElement.innerHTML = barcellonaTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
}
updateTime;
setInterval(updateTime, 1000);
