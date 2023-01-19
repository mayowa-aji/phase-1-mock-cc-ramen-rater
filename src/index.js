const ramenMenu = document.querySelector('#ramen-menu');
const ramenDetail = document.querySelector('#ramen-detail');
const detailImage = document.querySelector('.detail-image');
const ramenName = document.querySelector('.name');
const restaurant = document.querySelector('.restaurant');
const ratingDisplay = document.querySelector('#rating-display');
const commentDisplay = document.querySelector('#comment-display');
const newRamenForm = document.querySelector('#new-ramen');



//Create a fetch request
fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => displayAllRamen(data))
    .then(data => setUpRamenForm(data));


//create a function that loops through the ramen list and displays them
function displayAllRamen(ramenList) {
    ramenList.forEach(data => displaySingularRamen(data));
}
//create a function that  shows one ramen object

function displaySingularRamen(ramenObj) {
    const ramenImage = document.createElement('img');
    ramenImage.src = ramenObj.image;
    ramenImage.alt = `${ramenObj.name} image`
    ramenImage.title = `${ramenObj.name} image`

    ramenImage.addEventListener('click', (e) => {
        // console.log('The click event works')
        detailImage.src = ramenObj.image
        ramenName.textContent = ramenObj.name
        restaurant.textContent = ramenObj.restaurant
        ratingDisplay.textContent = ramenObj.rating
        commentDisplay.textContent = ramenObj.comment

    })

    ramenMenu.append(ramenImage)
}

function setUpRamenForm() {
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target)
        // console.log(e.target['new-name'])
        const newRamenObj = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target["new-comment"].value
        }
        displaySingularRamen(newRamenObj)

    })
}
