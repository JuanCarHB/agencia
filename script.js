let destinations = [
    { name: 'Mazatlán', image: 'https://t4.ftcdn.net/jpg/03/24/98/03/360_F_324980368_A0qqp88tGc0hkhc3cNkL5byav8bfvbDw.jpg', description: 'Mazatlán es famoso por sus playas y su ambiente relajado.' },
    { name: 'Los Cabos', image: 'https://www.ranchotours.com/images/media/tour-7-2.jpg', description: 'Los Cabos ofrece una vida nocturna vibrante y hermosas playas.' },
    { name: 'Cancún', image: 'https://oasisblog.nyc3.cdn.digitaloceanspaces.com/2015/07/cancun.jpg', description: 'Cancún es conocido por sus playas de arena blanca y aguas cristalinas.' }
];

let packages = [
    { type: 'Solo Tour', price: '$200', recommendations: 'Recomendado para aventureros.', image: 'https://img.freepik.com/premium-photo/happy-women-travelers-pointing-destination-standing-skyline-grand-canyon-national-park-young-sisters-travel-with-paper-map-summer-holidays-tour-america-lifestyle-concept_678158-6449.jpg' },
    { type: 'Solo Hospedaje', price: '$150', recommendations: 'Ideal para descansar y disfrutar.', image: 'https://topmanagement.com.mx/wp-content/uploads/2017/10/PALLADIUM-TRS-CORAL1-620x350.jpg' },
    { type: 'Tour con Hospedaje', price: '$350', recommendations: 'Todo incluido para disfrutar al máximo.', image: 'https://www.mexicodestinos.com/blog/wp-content/uploads/2013/11/Dreams-Riviera-Cancun.jpg' }
];

let currentDestIndex = 0;
let currentPackageIndex = 0;

function changeDestination(direction) {
    if (direction === 'left') {
        currentDestIndex = (currentDestIndex === 0) ? destinations.length - 1 : currentDestIndex - 1;
    } else {
        currentDestIndex = (currentDestIndex === destinations.length - 1) ? 0 : currentDestIndex + 1;
    }
    updateDestination();
}

function changePackage(direction) {
    if (direction === 'left') {
        currentPackageIndex = (currentPackageIndex === 0) ? packages.length - 1 : currentPackageIndex - 1;
    } else {
        currentPackageIndex = (currentPackageIndex === packages.length - 1) ? 0 : currentPackageIndex + 1;
    }
    updatePackage();
}

function updateDestination() {
    document.getElementById('dest-image').style.backgroundImage = `url(${destinations[currentDestIndex].image})`;
    document.getElementById('dest-name').textContent = destinations[currentDestIndex].name;
    document.getElementById('dest-description').textContent = destinations[currentDestIndex].description;
}

function updatePackage() {
    document.getElementById('package-image').style.backgroundImage = `url(${packages[currentPackageIndex].image})`;
    document.getElementById('package-type').textContent = packages[currentPackageIndex].type;
    document.getElementById('package-price').textContent = `Precio: ${packages[currentPackageIndex].price}`;
    document.getElementById('package-recommendations').textContent = packages[currentPackageIndex].recommendations;
}

function changeColor(element) {
    element.style.backgroundColor = '#2980b9';
}

function resetColor(element) {
    element.style.backgroundColor = '#f9f9f9';
}

updateDestination();
updatePackage();


