let rewnumberOfImages = 4;
let  reviewscounter = 2;
let reviewsbtnPrev = document.getElementById('reviews-button-left');
let reviewsbtnNext = document.getElementById('reviews-button-right');
let reviewsimg = document.getElementById('reviews-photo-main-img');
let reviewsimg1 = document.getElementById('reviews-photo-img1');
let reviewsimg3 = document.getElementById('reviews-photo-img3');
let reviewsimg4 = document.getElementById('reviews-photo-img4');

reviewsimg.style.width = '180px';
reviewsimg.style.height = '269px';

reviewsimg1.style.width = '134px';
reviewsimg1.style.height = '200px';

reviewsimg3.style.width = '130px';
reviewsimg3.style.height = '193px';

reviewsimg4.style.width = '130px';
reviewsimg4.style.height = '193px';


reviewsbtnNext.addEventListener("click", function () {
  if(reviewscounter === numberOfImages ) {
    reviewscounter=1;
  } else if (reviewscounter === (numberOfImages +1)) {
     reviewscounter = 2;
  } else {
    reviewscounter++;
  }
 
  console.log('reviewscounter =' + reviewscounter)
  reviewsimg.src = 'images/team/person-'+ reviewscounter + '.png';
  if(reviewscounter > 1) {
    reviewsimg1.src = 'images/team/person-'+ (reviewscounter -1)+ '.png';
  } else {
    reviewsimg1.src = 'images/team/person-'+ 4 + '.png';
  }

  if(reviewscounter < 4){
    reviewsimg3.src = 'images/team/person-'+ (reviewscounter + 1)+ '.png';
  } else {
    reviewsimg3.src = 'images/team/person-'+ 1 + '.png';
  }

  if((reviewscounter+1) < 4) {
    reviewsimg4.src = 'images/team/person-'+ (reviewscounter + 2)+ '.png';
  } else {
    reviewsimg4.src = 'images/team/person-'+ (reviewscounter - 2)+ '.png';
  }

  if(reviewscounter === numberOfImages) {
    reviewscounter=0
  } 
});

reviewsbtnPrev.addEventListener("click", function () {
  if(reviewscounter === 1) {
    reviewscounter=rewnumberOfImages
  }  if(reviewscounter === 0) {
    reviewscounter=rewnumberOfImages-1
  } else {
  reviewscounter--;
  }
  console.log('reviewscounter =' + reviewscounter)
  reviewsimg.src = 'images/team/person-'+ reviewscounter + '.png';
  if(reviewscounter > 1) {
    reviewsimg1.src = 'images/team/person-'+ (reviewscounter - 1)+ '.png';
  } else {
    reviewsimg1.src = 'images/team/person-'+ rewnumberOfImages + '.png';
  }

  if(reviewscounter < numberOfImages){
    reviewsimg3.src = 'images/team/person-'+ (reviewscounter + 1)+ '.png';
  } else {
    reviewsimg3.src = 'images/team/person-'+ 1 + '.png';
  }

  if((reviewscounter + 1)  < numberOfImages) {
    reviewsimg4.src = 'images/team/person-'+ (reviewscounter + 2) + '.png';
  }else {
    reviewsimg4.src = 'images/team/person-'+ (reviewscounter - 2)+ '.png';
  }

  if(reviewscounter === 1) {
    reviewscounter =(rewnumberOfImages+1)
  } 
});

//commit