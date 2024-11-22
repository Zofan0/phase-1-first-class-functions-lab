// Code your solution in this file!
const returnFirstTwoDrivers = function (a) {
    return [a[0],a[1]]
}

const returnLastTwoDrivers = function (a) {
    return [a[a.length-2],a[a.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function (fare) {
        return fare*n
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}