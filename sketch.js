//Updatable Var
var n = 50;
var ext = ".jpeg";
var backgroundColor = [255, 255, 255];
var canvasPixelX = 1070;
var canvasPixelY = 720;
var imageScaleDiv = 1.5;
var revisionRender = 2;
//Updatable Var

var img = [];
var AddedImg = [];
var Poi = [];
var imgCount = 0;
var logged = false;
var renderTime = 0;

function AddImg(x) {
  var imgPlaced = false;
  var _x = 0;
  var _y = 0;
  var wid = imgWid(x);
  var hei = imgHei(x);
  if (imgCount == 0) {
    image(img[x], 0, 0, wid, hei);
    (_x = 0), (_y = 0);
    imgPlaced = true;
    AddedImg[x] = 1;
    imgCount++;
    console.log(x);
  } else {
    for (i = 0; i < canvasPixelX - wid; i++) {
      for (j = 0; j < canvasPixelY - hei; j++) {
        if (Poi[i][j] == 0) {
          var willAdd = true;
          for (k = i; k <= i + wid; k++) {
            for (l = j; l <= j + hei; l++) {
              //console.log("i = ", i, "j = ", j);
              if (Poi[k][l] == 1) {
                willAdd = false;
                break;
              }
            }
            if (willAdd == false) break;
          }
          //image(img, x, y, width, height);
          if (willAdd) {
            image(img[x], i, j, wid, hei);
            (_x = i), (_y = j);
            imgPlaced = true;
            AddedImg[x] = 1;
            imgCount++;
            console.log(x);
            break;
          }
        }
      }
      if (imgPlaced) break;
    }
  }
  if (imgPlaced == false) {
    setup();
  }
  console.log("Image Added!");
  for (i = _x; i <= _x + wid; i++) {
    for (j = _y; j <= _y + hei; j++) {
      //console.log("i = ", i, "j = ", j);
      Poi[i][j] = 1;
    }
  }
  willAddImage = true;
}

function setup() {
  console.log("setup()");
  createCanvas(canvasPixelX, canvasPixelY);
  background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  imgCount = 0;
  for (i = 0; i < n; i++) {
    AddedImg[i] = 0;
  }

  for (i = 0; i <= canvasPixelX; i++) {
    for (j = 0; j <= canvasPixelY; j++) {
      Poi[i][j] = 0;
    }
  }
}

function draw() {
  if (imgCount == n) {
    if (renderTime < revisionRender) {
      logged = false;
      setup();
      renderTime++;
    }
    if (logged == false) {
      logged = true;
      createP("Finished!");
    }
    return;
  } else if (imgLeft() <= n / 4) {
    for (i = 0; i < n; i++)
      if (AddedImg[i] == 0) {
        AddImg(i);
        break;
      }
  } else {
    var x = Math.round(random(0, n - 1));
    if (AddedImg[x] == 0) AddImg(x);
  }
}
