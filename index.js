const hqLocal = 42
const blockInFt = 264


function distanceFromHqInBlocks(stPickup) {
    return  Math.abs(`${stPickup}` - hqLocal)
    
}
// console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(stPickup) {
    let blocksAway = Math.abs(`${stPickup}` - hqLocal)
     return blocksAway * blockInFt
    
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((startBlock - endBlock) * blockInFt)
}

function calculatesFarePrice(startBlock, endBlock) {
    let ftTravelled = Math.abs((startBlock - endBlock) * blockInFt)
    let price = 0.02 * (ftTravelled - 400)

    if (ftTravelled >= 2000 && ftTravelled < 2500) {
    return 25
    }
    else if (ftTravelled >= 2500) {
        return 'cannot travel that far'
    }
    if (price > 0) {
        return price
    }
    else if (price < 0) {
        return 0
    }
}

console.log(calculatesFarePrice(44,44))