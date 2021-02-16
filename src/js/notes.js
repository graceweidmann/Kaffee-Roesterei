import throttle from 'lodash/throttle'

class StickyHeader {
    constructor () {
        this.navBar = document.querySelector (".bg_light")
        this.events =
    }

    events () {
        window.addEventListener ("scroll", throttle (() =>this.runOnScroll(), 200))
    } 
runOnScroll () {
    if this.
    
    
    (window.scrollY > 60) {
this.navBar.classList.add("navbar--dark")
    } else {
this.navBar.classList.remove("navbar--dark")
    }
}

}



export default  StickyHeader