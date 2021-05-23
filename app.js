let t = 5000

let images = [];
i = 0
window.onload = () => {
    if(document.body.clientWidth > 600){
    images[0] = 'd2.jpg'
    images[1] = 'd3.jpg'
    images[2] = 'd1.jpg'
    }
    else{
    images[0] = 'm2.jpg'
    images[1] = 'm3.jpg'
    images[2] = 'm1.jpg'
    }

}


let introHeading = []
introHeading[0] = 'Manufactured with the best materials'
introHeading[1] = 'We are available all across the globe'
introHeading[2] = 'Discover innovative ways to decorate'

let introPara = []
introPara[0] = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
introPara[1] = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."

introPara[2] = 'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in yourown style with our collection and make your property a reflection of you and what you love.'
function changeBg() {


    document.getElementById('hero').style.backgroundImage = `url(images/${images[i]})`
    document.getElementById('heading-intro').innerHTML = introHeading[i]
    document.getElementById('para-intro').innerHTML = introPara[i]
    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0
    }
}
console.log(i)
setInterval(changeBg, t);
document.getElementById('menu').addEventListener('click', () =>{
    let x =  document.querySelector('.nav-list')
    let y = document.getElementById('menu')
    
    if(x.style.display === '' || x.style.display === 'none'){
        x.style.display = 'block'
        y.style.backgroundImage = "url(/images/icon-close.svg)"
    }else{
    x.style.display = 'none'
    y.style.backgroundImage = "url(/images/icon-hamburger.svg)"
    }
})
