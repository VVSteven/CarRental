
window.onload = function(){
    const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");
    estimateTotalCostButton.onclick = estimateTotalCostButtonClicked;
}

function estimateTotalCostButtonClicked(){
    const order = {};

    const carRentPerDay = 29.99;
    const under25Surcharge = .30;
    const electronicTollTagPrice = 3.95;
    const gpsPrice = 2.95;
    const roadsideAssistancePrice = 2.95;

    // Get Pickup Date Information and Number Of days
    //gets the date of pick up
    order.pickupDate = document.getElementById("pickupDateInput").value;
    // gets the number of days to rent
    order.numberOfDays = parseFloat(document.getElementById("numberOfDaysInput").value);

    order.numberOfDaysPrice = order.numberOfDays * carRentPerDay;

    //Gets selected options
    const optionElectronicTollTag = document.getElementById("electronicTollTag");
    const optionGPS = document.getElementById("gps");
    const optionRoadsideAssistance = document.getElementById("roadsideAssistance");

    order.selectedElectronicTollTag = optionElectronicTollTag.checked;
    order.selectedGPS = optionGPS.checked;
    order.selectedRoadsideAssistance = optionRoadsideAssistance.checked;
      
    order.selectedOptions = 0;
    if(order.selectedElectronicTollTag = true){
        order.electronicTollTag = "Yes";
        order.selectedOptions += electronicTollTagPrice * order.numberOfDays;
    }
    if(order.selectedGPS){
        order.gps = "Yes";
        order.selectedOptions += gpsPrice * order.numberOfDays;
    }
    if(order.selectedRoadsideAssistance){
        order.roadsideAssistance = "Yes";
        order.selectedOptions += roadsideAssistancePrice * order.numberOfDays;
    }
    order.selectedOptions = +order.selectedOptions.toFixed(2);
    
    //Gets the price if user is under 25
    const noRadio = document.getElementById("noRadio");
    const yesRadio = document.getElementById("yesRadio");

    if (noRadio.checked) {
        order.under25 = "No";
        order.surcharge = 0;
    } else if(yesRadio.checked) {
        order.under25 = "Yes";
        order.surcharge = order.numberOfDaysPrice * under25Surcharge;
    }
    order.surcharge = +order.surcharge.toFixed(2);

    
    //Calculates Total
    order.total = order.numberOfDaysPrice + order.surcharge + order.selectedOptions;
    order.total = order.total.toFixed(2);
    
    //Sends Values to displayOrderDetails function
    displayOrderDetails(order)
}

function displayOrderDetails(order){
    document.getElementById("pickupDateDisplay").innerText = order.pickupDate;
    document.getElementById("numberOfDayDisplay").innerText = order.numberOfDays;
    document.getElementById("optionElectronicTollTag").innerText = order.electronicTollTag;
    document.getElementById("optionGPS").innerText = order.gps;
    document.getElementById("optionRoadsideAssistance").innerText = order.roadsideAssistance;
    document.getElementById("under25Display").innerText = order.under25;
    document.getElementById("carRentalPriceDisplay").innerText = order.numberOfDaysPrice.toFixed(2);
    document.getElementById("optionDisplay").innerText = order.selectedOptions;
    document.getElementById("surchargeDisplay").innerText = order.surcharge;
    document.getElementById("totalDisplay").innerText = order.total;

}