const returnFirstTwoDrivers = function(driversArray){
    const firstTwoDrivers = driversArray.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(driversArray){
    const lastTwoDrivers = driversArray.slice(-2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    const fare = x;
    function fareMultiplier(){
        let newFare = x * x;
        return newFare;
    }
    return fareMultiplier;
}

const fareDoubler = function(createFareMultiplier){
    const doubledFare = (createFareMultiplier * 2);
    return doubledFare;
}

const fareTripler = function(createFareMultiplier){
    const tripledFare = (createFareMultiplier * 3)
    return tripledFare;
}

function selectDifferentDrivers(driversArray, driversFunction) {
    const differentDrivers = driversFunction(driversArray);
    return differentDrivers;
}