// Propiedades slider

var propSlider = {

  slider: document.getElementById('slider'),
  primerSlide: null

}

// Métodos slider

var metSlider = {

  inicio: function () {
    // setInterval(metSlider.moverSlide, 3000)
  },

  moverSlide: function() {
    propSlider.slider.style.transition = 'all 1s ease'
    propSlider.slider.style.marginLeft = '-100%'

  }

}

metSlider.inicio()