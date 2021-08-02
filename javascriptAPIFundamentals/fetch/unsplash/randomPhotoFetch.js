let randomImage = document.querySelector('.random-image');
console.log('Random Image:', randomImage)

fetch('https://source.unsplash.com/random')
.then(function(response) {
    if(!response.ok){
        console.log(response);
        return new Error(response);
    }
    console.log('Response: ', response);
    return response.blob();
})
.then(function(photoBlob) {
    console.log('My Blob ', photoBlob)
    let objectURL = URL.createObjectURL(photoBlob);
    console.log('Object URL: ', objectURL)

    console.log('RandomImage.src ', randomImage.src);
})
.catch(function(err) {
    console.log(err);
})