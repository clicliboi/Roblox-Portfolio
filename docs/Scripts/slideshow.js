class Slider {
  constructor(slider) {
    this.Slider = slider;
    this.index = 1;
    this.Sliders = this.Slider.getElementsByClassName("mySlides");

    // Create a container for dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots';
    this.Slider.appendChild(dotsContainer);

    // Create a dot for each slide
    for (let i = 0; i < this.Sliders.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.onclick = () => this.showSlides(i + 1);
      dotsContainer.appendChild(dot);

      const numbertext = document.createElement('div');
      numbertext.className = 'numbertext';
      numbertext.innerText = `${i + 1} / ${this.Sliders.length}`;
      this.Sliders[i].insertBefore(numbertext, this.Sliders[i].firstChild);
    }

    // Create prev/next buttons
    const prev = document.createElement('a');
    prev.className = 'prev';
    prev.innerHTML = '&#10094;';
    prev.onclick = () => this.showSlides(this.index - 1);
    this.Slider.appendChild(prev);

    const next = document.createElement('a');
    next.className = 'next';
    next.innerHTML = '&#10095;';
    next.onclick = () => this.showSlides(this.index + 1);
    this.Slider.appendChild(next);

    // Show the first slide
    this.showSlides(this.index);
  }

  showSlides(n) {
    let i;
    const slides = this.Sliders;
    const dots = this.Slider.getElementsByClassName("dot");
    if (n > slides.length) { this.index = 1; }
    else if (n < 1) { this.index = slides.length; }
    else { this.index = n; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.index - 1].style.display = "block";
    dots[this.index - 1].className += " active";
  }
}

window.SetSlider = function(slider) {
  new Slider(slider);
}