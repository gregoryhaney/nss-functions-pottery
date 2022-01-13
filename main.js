
// fn for puchasing clay
const buyClay = () => {
    const myPurchase = {  }  // an empty object, by design
        return myPurchase
}

// fn to make pottery
const makePottery = (myPurchase) => {
        myPurchase.shape = "Bowl"
            return myPurchase
}

// fn to assign readiness for glazing
const bisqueFire = (myPurchase) => {
        myPurchase.readyForGlazing = true
            return myPurchase
}

// fn to check if pottery has been bisque-fired already
const glazedPottery = (myPurchase) => {
        if (myPurchase.readyForGlazing === false) {
            console.log("Make sure you bisque fire the pottery before you glaze it")
        } else {
            myPurchase.glazing = "Midnight Blue"
                return myPurchase
        }
}

// fn for final firing of the pottery item
const finalFiring = (myPurchase, temperature) => {
        if (temperature > 1200) {
            myPurchase.cracked = true
        } else {
            myPurchase.cracked = false
        }
            return myPurchase
}

// test the temperature IF conditions:
const firedPottery1400 = finalFiring(glazedPottery, 1400)
console.log(firedPottery1400)

const firedPottery1200 = finalFiring(glazedPottery, 1200)
console.log(firedPottery1200)



const getThatClay = buyClay()
console.log(getThatClay)

const letMeMakeThatBowl = makePottery(getThatClay)
console.log(letMeMakeThatBowl)

const lobsterBisqueFire = bisqueFire(getThatClay)
console.log(lobsterBisqueFire)

const iWannaGlazeSomething = glazedPottery(getThatClay)
console.log(iWannaGlazeSomething)
