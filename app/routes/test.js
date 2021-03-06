$(document).ready(function(){
        $.ajax({
          type : 'GET',
              dataType : 'json',
              async: false,
                url: '/data/data.json',
                success : function(data) {
                var obj = data;

                      // ************************
                      //    elements desktop
                      // ************************
                      var curCat = 'cars';
                      var outputDesktop="<ul>";
                      for (var i in data) {

                          if(data[i].category == curCat){
                            outputDesktop+=
                            "<li class='ad'><h4>" + data[i].title + "</h4><div class='picture' style='background: url(" + data[i].img + ")';></div><span class='price'> $" + data[i].price+"</span></li>";
                          }

                      }
                      outputDesktop+="</ul>";

                      document.getElementById("ads").innerHTML=outputDesktop;

                      // ************************
                      //    elements tablet
                      // ************************
                      var outputTablet="<button class='next'></button><button class='prev'></button><ul class='container'>";
                      for (var t in data) {

                        if(data[t].category == curCat){
                          outputTablet+=
                           "<li class='ad'><h4>" + data[t].title + "</h4><div class='picture' style='background: url(" + data[t].img + ")';></div><span class='price'> $" + data[t].price+"</span></li>";
                        }

                      }
                      outputMobile+="</ul>";

                      document.getElementById("slidertablet").innerHTML=outputTablet;


                      // ************************
                      //    sliders - controls
                      // ************************

                      var outputMobile="<button class='next'></button><button class='prev'></button><ul class='container'>";
                      for (var j in data) {
                        if(data[j].category == curCat){
                          outputMobile+=
                           "<li class='ad'><h4>" + data[j].title + "</h4><div class='picture' style='background: url(" + data[j].img + ")';></div><span class='price'> $" + data[j].price+"</span></li>";
                        }

                      }
                      outputMobile+="</ul>";

                      document.getElementById("slidermobile").innerHTML=outputMobile;

                }
            });

// ************************
//      sliders Tablet
// ************************

var cIndexTablet = 0,
  tabletItems = $('#slidertablet .container li'),
  tabletItemAmt = tabletItems.length;

function tabletItemsSlider() {
  var tabletItem = $('#slidertablet .container li').slice( 0, cIndexTablet);
  tabletItems.hide();
  tabletItem.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  cIndexTablet += 1;
  if (cIndexTablet > tabletItemAmt - 1) {
    cIndexTablet = 0;
  }
  tabletItemsSlider();
}, 3000);

//slider tablet - controls
  $('#slidertablet .next').click(function() {
    clearInterval(autoSlide);
    cIndexTablet += 1;
    if (cIndexTablet > tabletItemAmt - 2) {
      cIndexTablet = 3;
    }
    tabletItemsSlider();
  });

  $('#slidertablet .prev').click(function() {
    clearInterval(autoSlide);
    cIndexTablet -= 1;
    if (cIndexTablet < 0) {
      cIndexTablet = tabletItemAmt - 2;
    }
    tabletItemsSlider();
  });


  // ************************
  //    sliders - controls - tablet
  // ************************

// slider mobile
var cIndexMobile = 0,
  mobileItems = $('#slidermobile .container li'),
  mobileItemAmt = mobileItems.length;

function mobileItemsSlider() {
  var mobileItem = $('#slidermobile .container li').eq(cIndexMobile);
  mobileItems.hide();
  mobileItem.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  cIndexMobile += 1;
  if (cIndexMobile > mobileItemAmt - 1) {
    cIndexMobile = 0;
  }
  mobileItemsSlider();
}, 3000);

// ************************
//    sliders - controls - tablet
// ************************
  $('#slidermobile .next').click(function() {
    clearInterval(autoSlide);
    cIndexMobile += 1;
    if (cIndexMobile > mobileItemAmt - 1) {
      cIndexMobile = 0;
    }
    mobileItemsSlider();
  });

  $('#slidermobile .prev').click(function() {
    clearInterval(autoSlide);
    cIndexMobile -= 1;
    if (cIndexMobile < 0) {
      cIndexMobile = mobileItemAmt - 1;
    }
    mobileItemsSlider();
  });

});
