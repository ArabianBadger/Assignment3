"use strict";

const $ = (selector) => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    $("#dateArrival").focus();

    $("#Reservation").addEventListener("submit", (eve) => {
        eve.preventDefault();

        const nights = $("#nights").value.trim();
        const name = $("#name").value.trim();
        const emailAddress = $("#email").value.trim();
        const phoneNumber = $("#phone").value.trim();
        const adults = $("#adults").value.trim();
        const children = $("#children").value.trim();
        const arrivalDate = $("#dateArrival").value.trim();

        const typeOfRoom = $('input[name="typeOfRoom"]:checked');
        const typeOfBed = $('input[name="typeOfBed"]:checked');

        let isValid = true;

        clearErrors();

        if (name === "") {
            displayError("#name", "This field is required.");
            isValid = false;
        }

        if (emailAddress === "") {
            displayError("#email", "This field is required.");
            isValid = false;
        } else if (!emailPattern.test(emailAddress)) {
            displayError("#email", "Please enter a valid email address.");
            isValid = false;
        }

        if (nights === "") {
            displayError("#nights", "This field is required.");
            isValid = false;
        } else if (isNaN(nights) || nights <= 0) {
            displayError("#nights", "Please enter a valid number of nights.");
            isValid = false;
        }

        if (adults === "" && children === "") {
            displayError("#adults", "At least one adult or child must be selected.");
            isValid = false;
        }

        if (arrivalDate === "") {
            displayError("#dateArrival", "This field is required.");
            isValid = false;
        }

        if (!typeOfRoom || !typeOfRoom.value) {
            displayError("#typeOfRoom", "Please select a room type.");
            isValid = false;
        }

        if (!typeOfBed || !typeOfBed.value) {
            displayError("#typeOfBed", "Please select a bed type.");
            isValid = false;
        }

        if (phoneNumber === "") {
            displayError("#phone", "This field is required.")
            isValid = false
        }

        if (isValid) {
            alert("Form submitted successfully!");
            window.location.href = ('index5.html')
        }
        
    });
});

const displayError = (selector, message) => {
    const identifer = $(selector); 
    const error = document.createElement("span");  
    error.className = "error";  
    error.textContent = "* " + message;  
    identifer.parentElement.appendChild(error); 
};



const clearErrors = () => {
    const error = document.querySelectorAll(".error");
    error.forEach((error) => error.remove());
};

