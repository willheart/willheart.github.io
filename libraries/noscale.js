pageset = function() {
  var ios = navigator.userAgent.indexOf('iphone'); //判断是否为ios
  //禁止页面缩放、上下滑动
  window.onload()
  if (ios == -1) {
    //ios下运行
    var divEl = this //你需要滑动的dom元素
    iosTrouchFn(divEl);
  }
}

window.onload = function() {
  // 阻止双击放大
  var lastTouchEnd = 0;
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener('touchend', function(event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // 阻止双指放大
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
  });
}

iosTrouchFn = function(el) {
  //el需要滑动的元素
  el.addEventListener('touchmove', function(e) {
    e.isSCROLL = true;
  })
  document.body.addEventListener('touchmove', function(e) {
    if (!e.isSCROLL) {
      e.preventDefault(); //阻止默认事件(上下滑动)
    } else {
      //需要滑动的区域
      var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离
      var scrollH = el.scrollHeight; //含滚动内容的元素大小
      var offsetH = el.offsetHeight; //网页可见区域高
      var cScroll = top + offsetH; //当前滚动的距离

      //被滑动到最上方和最下方的时候
      if (top == 0) {
        top = 1; //0～1之间的小数会被当成0
      } else if (cScroll === scrollH) {
        el.scrollTop = top - 0.1;
      }
    }
  }, {
    passive: false
  }) //passive防止阻止默认事件不生效
}
