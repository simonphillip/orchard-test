const modal = document.querySelector('.modal');
const preview = document.querySelectorAll(".img-container img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector('.caption');

//anchor console clicks
const anchorClicks = document.querySelectorAll(".read-more");

preview.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        //Change image and text based on src
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./images/main/${originalSrc}-2x.jpg`;
        const altText = preview.alt;
        imgText.textContent = altText;
        console.log(originalSrc + 'clicked');
    })
});

//I chose not to have a standard X to close and instead close the image when you select anything other than the image or text. 
//If I were to add an X I would create a span with 'X' in the corner and close it that way.
modal.addEventListener('click', e => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})

//get anchor clicks to log to console
anchorClicks.forEach(anchorClick => {
    anchorClick.addEventListener("click", () => {
        const originalSrc = anchorClick.getAttribute("data-original");
        console.log(originalSrc + ' was clicked');
    })
});