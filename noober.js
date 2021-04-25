// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

// 🔥 YOUR CODE GOES HERE 🔥
// Write the recipe (algorithm) in the comments. Then, write the code.
// Figure out what kind of car the passenger needs
// Check if it is Noober Purple, as that overrides all other ride types
  if (ride.purpleRequested == true) {
// We'll output rideType as Noober Purple if above holds
    rideType = `Noober Purple`
// If the condition isn't met, check if there are more than 3 passengers
  } else if (ride.numberOfPassengers > 3) {
// We'll output rideType as Noober XL if above holds
    rideType = `Noober XL`
// If neither of the above are true, default to Noober X
  } else {
    rideType = `Noober X`
  }
// Retrieve the passenger's first and last name from the profile, store it in memory
  let passengerFirstname = ride.passengerDetails.first
  let passengerLastname = ride.passengerDetails.last
// Retrieve their phone number, store in memory
  let passengerPhone = ride.passengerDetails.phoneNumber
// Retrieve their address details, store the text in pickupDetails
  let location = ride.pickupLocation
  let pickupDetails = `${location.address}, ${location.city}, ${location.state}, ${location.zip}`
// Retrieve their dropoff details, store the text in dropoffDetails
let dropLocation = ride.dropoffLocation
let dropoffDetails = `${dropLocation.address}, ${dropLocation.city}, ${dropLocation.state}, ${dropLocation.zip}`
// Let driver know the number of passengers
let passengerAmount = ride.numberOfPassengers
// Display the full details of the ride in the console
  console.log(`${rideType} Passenger: ${passengerFirstname} ${passengerLastname} - ${passengerPhone}. Pickup at: ${pickupDetails}. Dropoff at: ${dropoffDetails}. Expected number of riders: ${passengerAmount}`)

// 🔥 YOUR CODE ENDS HERE 🔥
})
