// Code your solution in this file!
const headquaters = 42
function distanceFromHqInBlocks(someValue){
    if (someValue >= headquaters) {
    return someValue - headquaters
}
    if (someValue < headquaters) {
        return headquaters - someValue
    }
    }
    distanceFromHqInBlocks(43)
    const block = 264
    function distanceFromHqInFeet(someValue){
        if (someValue >= headquaters)    {
        return (someValue - headquaters) * block
    } 
    if (someValue < headquaters){
        return (headquaters - someValue) * block
    }
    }
    distanceFromHqInFeet(43)
    function distanceTravelledInFeet(start, destination){
        if (start >= destination){
            return (start - destination) * block
        }
        if (start < destination){
            return (destination - start) * block 
        }
    }
function calculatesFarePrice(start, destination){
    const price = 0.02
    if ((((destination - start) * block) > 2000) && (((destination - start) * block) <= 2500)){
        return 25
    }
    if (((start - destination) * block) <= 400){
        return 0
    }
    if ((((start - destination) * block) > 400) && (((start - destination) * block) <= 2000)){
        return ((((start - destination) * block)- 400) * price)
    }
   if (((start - destination) * block) > 2500){
    return 'cannot travel that far'
   }
}

