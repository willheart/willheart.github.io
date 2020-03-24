$(function() {
  $(window).on("resize", function() {

    let clientW = $(window).width()
    let isShowBigImage = clientW >= 800
    let $allItems = $("#carousel .carousel-item")
    // console.log($allItems)

    //Traversal
    $allItems.each(function(index, item) {

      //get pic source
      let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
      let imgUrl = 'url("' + src + '")'
      // console.log(imgUrl)

      //set background
      $(item).css({
        backgroundImage: imgUrl
      })

      //set img label
      if(!isShowBigImage){
        let $img = "<img src='" + src + "'>"
        $(item).empty().append($img)
      }else{
        $(item).empty()
      }

    })
  })
  $(window).trigger("resize")
})
