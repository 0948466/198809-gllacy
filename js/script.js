var linksearch = document.querySelector(".search");
var popupsearch = document.querySelector(".modal-content-search");
            
linksearch.addEventListener("click", function (event) {
  event.preventDefault();
  popupsearch.classList.add("show");
});

var linkentrance = document.querySelector(".entrance");
var popupentrance = document.querySelector(".modal-content-entrance");

linkentrance.addEventListener("click", function (evententrance) {
  evententrance.preventDefault();
  popupentrance.classList.add("show");
});

var linkfeedback = document.querySelector(".feedback-form");
var popupfeedback = document.querySelector(".modal-content-feedback");
var closefeedback = document.querySelector(".modal-feedback-close");

linkfeedback.addEventListener("click", function (eventfeedback) {
  eventfeedback.preventDefault();
  popupfeedback.classList.add("show");
});

closefeedback.addEventListener("click", function (eventclosefeedback) {
    eventclosefeedback.preventDefault();
    popupfeedback.classList.remove("show");
});