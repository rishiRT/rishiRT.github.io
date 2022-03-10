window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 90){
        document.querySelector('header').classList.add('header-bg');

    }else{
        document.querySelector('header').classList.remove('header-bg');
    }
});