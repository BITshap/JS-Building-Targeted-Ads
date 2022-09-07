// get user's data


// get user's coordinates
async function getCordinates() {
    pos = await new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
// get user's time
function getUserTime(){
    const date = new Date()
    return date.getHours()
}

// helper functions
function AD (){
    const tod = getUserTime()

    if (tod > 19) {return 'late-night snack'}
    else if (tod > 15) {return 'dinner'}
    else if (tod > 10) {return 'lunch'}
    else {return 'breakfast'}
}
// check time of day


// build ads
// build ad 1
function ad1 (){
    let mealTime = AD()

    let content = document.querySelector('.ad1')
    let pgraph = document.createElement('p')

    pgraph.innerHTML = ("We've got the best <span>" +  mealTime  + "</span> in town")
    content.append(pgraph)
}


// build ad 2
// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}




// event listeners
// on load, build ads
window.onload = async () => {
    ad1()
    const coords = await getCordinates()
    buildAd2(coords)
}
