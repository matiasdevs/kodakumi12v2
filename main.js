let isFrontCover = true;

let delay = -0.1;
function changeCover(){
  delay = delay + 0.1;
  if (isFrontCover == true) {
        document.querySelector('#you').src = 'assets/back-1.jpg';
        document.querySelector('#birthday-eve').src = 'assets/back-2.jpg';
        document.querySelector('#ddd').src = 'assets/back-3.jpg';
        document.querySelector('#shake-it-up').src = 'assets/back-4.jpg';
        document.querySelector('#lies').src = 'assets/back-5.jpg';
        document.querySelector('#feel').src = 'assets/back-6.jpg';
        document.querySelector('#candy').src = 'assets/back-7.jpg';
        document.querySelector('#no-regret').src = 'assets/back-8.jpg';
        document.querySelector('#ima-sugu-hoshii').src = 'assets/back-9.jpg';
        document.querySelector('#kamen').src = 'assets/back-10.jpg';
        document.querySelector('#wind').src = 'assets/back-11.jpg';
        document.querySelector('#someday').src = 'assets/back-12.jpg';
        isFrontCover = !isFrontCover;
  } else {
        document.querySelector('#you').src = 'https://img.imageimg.net/artist/koda/img/product_1005901.jpg';
        document.querySelector('#birthday-eve').src = 'https://img.imageimg.net/artist/koda/img/product_1005902.jpg';
        document.querySelector('#ddd').src = 'https://img.imageimg.net/artist/koda/img/product_1005903.jpg';
        document.querySelector('#shake-it-up').src = 'https://img.imageimg.net/artist/koda/img/product_1005904.jpg';
        document.querySelector('#lies').src = 'https://img.imageimg.net/artist/koda/img/product_1005905.jpg';
        document.querySelector('#feel').src = 'https://img.imageimg.net/artist/koda/img/product_1005906.jpg';
        document.querySelector('#candy').src = 'https://img.imageimg.net/artist/koda/img/product_1005907.jpg';
        document.querySelector('#no-regret').src = 'https://img.imageimg.net/artist/koda/img/product_1005908.jpg';
        document.querySelector('#ima-sugu-hoshii').src = 'https://img.imageimg.net/artist/koda/img/product_1005909.jpg';
        document.querySelector('#kamen').src = 'https://img.imageimg.net/artist/koda/img/product_1005910.jpg';
        document.querySelector('#wind').src = 'https://img.imageimg.net/artist/koda/img/product_1005911.jpg';
        document.querySelector('#someday').src = 'https://img.imageimg.net/artist/koda/img/product_1005912.jpg';
        isFrontCover = !isFrontCover;
      }
  }
