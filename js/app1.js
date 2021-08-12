let numberOfImages = 4;
let count = 2;
//let btnPrev = document.getElementById('button-prev');
let btnNext = document.getElementById('team-button-next');
let img = document.getElementById('team-photo-main-img');
let img1 = document.getElementById('team-photo-img1');
let img3 = document.getElementById('team-photo-img3');
let img4 = document.getElementById('team-photo-img4');

img.style.width = '197px';
img.style.height = '293px';

img1.style.width = '130px';
img1.style.height = '193px';

img3.style.width = '130px';
img3.style.height = '193px';

img4.style.width = '130px';
img4.style.height = '193px';


btnNext.addEventListener("click", function () {
 count++
 
  console.log('count =' + count)
  img.src = 'images/team/person-'+ count + '.png';

  if(count > 1) {
    img1.src = 'images/team/person-'+ (count -1)+ '.png';
  } else {
    img1.src = 'images/team/person-'+ numberOfImages + '.png';
  }
  if(count < numberOfImages){
    img3.src = 'images/team/person-'+ (count + 1)+ '.png';
  } else {
    img3.src = 'images/team/person-'+ 1 + '.png';
  }
  if((count+1) < numberOfImages) {
    img4.src = 'images/team/person-'+ (count + 2)+ '.png';
  } else {
    img4.src = 'images/team/person-'+ (count - 2)+ '.png';
  }

  if(count === numberOfImages) {
    count=0
  } 
});