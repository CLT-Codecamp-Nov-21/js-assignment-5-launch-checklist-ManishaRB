// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
       let planet = pickPlanet(listedPlanets);
       //console.log(planet);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
    let alertMessage ="";
    let list = document.getElementById('faultyItems');
    let form = document.querySelector("form");
    list.style.visibility = "hidden";
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //List DOM
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    });      
   
});