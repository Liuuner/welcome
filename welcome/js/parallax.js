function castParallax() {

    window.addEventListener("scroll", function (event) {

        let top = this.scrollY;

        let layers = document.getElementsByClassName("parallax");
        let layer, speed;
        for (let i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('speed');
            let yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

        }
    });

}

document.body.onload = castParallax;