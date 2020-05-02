var imageGal = document.querySelector('.portfolio-gallery');

var imgList = []

for (var i = 1; i <= 103; i++) {
  var img;
  if (i < 10) {
    img = '00' + i.toString()
  } else if (i < 100) {
    img = '0' + i.toString()
  } else {
    img = i.toString()
  }
  imgList.push(img)
};

imgList.reverse()

for (var i = 0; i < imgList.length; i++) {
  imageGal.innerHTML += '<img class="image-list-item" src="portfolio/' + imgList[i] + '.jpg" />';
}