function preload() {
  for (i = 0; i < n; i++) {
    img[i] = loadImage("Image/" + String(i) + ext);
  }
  for (i = 0; i <= canvasPixelX; i++) Poi.push([]);
}

function imgLeft() {
  var x = 0;
  for (i = 0; i < n; i++) if (AddedImg[i] == 0) x++;
  return x;
}

function imgWid(x) {
  var _h = img[x].height;
  var _w = img[x].width;
  return _w / imageScaleDiv;
}

function imgHei(x) {
  var _h = img[x].height;
  return _h / imageScaleDiv;
}
