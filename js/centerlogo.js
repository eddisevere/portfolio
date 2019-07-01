// JavaScript Document

//Load
jQuery(document).ready(function($) {
  //PC
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#name-svg01,#name-svg02').center()
  } else {
    //中央揃え
    jQuery.fn.center = function() {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', (jQuery(window).height() - this.height()) / 2 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#name-svg01,#name-svg02').center()
  }
})

//Resize
jQuery(window).resize(function($) {
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#name-svg01,#name-svg02').center()
  } else {
    //リサイズ対応
    function setCenterPC(ele) {
      var l = Math.floor((jQuery(window).width() - jQuery(ele).width()) / 2)
      var t = Math.floor((jQuery(window).height() - jQuery(ele).height()) / 2)
      jQuery(ele).css({
        top: t,
        left: l
      })
    }
    setCenterPC('#name-svg01,#name-svg02')
  }
})

// forIE

//Load
jQuery(document).ready(function($) {
  //PC
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#mainLogo_ie').center()
  } else {
    if (window.matchMedia('(min-width: 1026px)').matches) {
      //中央揃え
      jQuery.fn.center = function() {
        //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
        this.css('position', 'absolute')
        this.css('top', (jQuery(window).height() - this.height()) / 2 + 'px')
        this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
        return this
      }
      jQuery('#mainLogo_ie').center()

      //SP
    } else {
      if (window.matchMedia('(min-width: 600px)').matches) {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 200 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_ie').center()
      } else {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 125 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_ie').center()
      }
    }
  }
})

//Resize
jQuery(window).resize(function($) {
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#mainLogo_ie').center()
  } else {
    //PC
    if (window.matchMedia('(min-width: 1026px)').matches) {
      //リサイズ対応
      function setCenterPC(ele) {
        var l = Math.floor((jQuery(window).width() - jQuery(ele).width()) / 2)
        var t = Math.floor((jQuery(window).height() - jQuery(ele).height()) / 2)
        jQuery(ele).css({
          top: t,
          left: l
        })
      }
      setCenterPC('#mainLogo_ie')

      //SP
    } else {
      if (window.matchMedia('(min-width: 600px)').matches) {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 200 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_ie').center()
      } else {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 125 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_ie').center()
      }
    }
  }
})

// tablet/sp

//Load
jQuery(document).ready(function($) {
  //PC
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#mainLogo_sp img').center()
  } else {
    if (window.matchMedia('(min-width: 1026px)').matches) {
      //中央揃え
      jQuery.fn.center = function() {
        //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
        this.css('position', 'absolute')
        this.css('top', (jQuery(window).height() - this.height()) / 2 + 'px')
        this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
        return this
      }
      jQuery('#mainLogo_sp img').center()

      //SP
    } else {
      if (window.matchMedia('(min-width: 600px)').matches) {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 200 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_sp img').center()
      } else {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 135 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_sp img').center()
      }
    }
  }
})

//Resize
jQuery(window).resize(function($) {
  var _ua = (function() {
    return {
      ltIE6:
        typeof window.addEventListener == 'undefined' &&
        typeof document.documentElement.style.maxHeight == 'undefined',
      ltIE7:
        typeof window.addEventListener == 'undefined' &&
        typeof document.querySelectorAll == 'undefined',
      ltIE8:
        typeof window.addEventListener == 'undefined' &&
        typeof document.getElementsByClassName == 'undefined',
      ltIE9: document.uniqueID && typeof window.matchMedia == 'undefined',
      gtIE10: document.uniqueID && window.matchMedia,
      Trident: document.uniqueID,
      Gecko: 'MozAppearance' in document.documentElement.style,
      Presto: window.opera,
      Blink: window.chrome,
      Webkit:
        typeof window.chrome == 'undefined' &&
        'WebkitAppearance' in document.documentElement.style,
      Touch: typeof document.ontouchstart != 'undefined',
      Mobile:
        typeof window.orientation != 'undefined' ||
        navigator.userAgent.indexOf('Windows Phone') != -1,
      ltAd4_4:
        typeof window.orientation != 'undefined' &&
        typeof EventSource == 'undefined',
      Pointer: window.navigator.pointerEnabled,
      MSPoniter: window.navigator.msPointerEnabled
    }
  })()
  if (_ua.ltIE8) {
    jQuery.fn.center = function($) {
      //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
      this.css('position', 'absolute')
      this.css('top', 200 + 'px')
      this.css('left', (jQuery(window).width() - this.width()) / 2 + 'px')
      return this
    }
    jQuery('#mainLogo_sp img').center()
  } else {
    //PC
    if (window.matchMedia('(min-width: 1026px)').matches) {
      //リサイズ対応
      function setCenterPC(ele) {
        var l = Math.floor((jQuery(window).width() - jQuery(ele).width()) / 2)
        var t = Math.floor((jQuery(window).height() - jQuery(ele).height()) / 2)
        jQuery(ele).css({
          top: t,
          left: l
        })
      }
      setCenterPC('#mainLogo_sp img')

      //SP
    } else {
      if (window.matchMedia('(min-width: 600px)').matches) {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 200 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_sp img').center()
      } else {
        //中央揃え
        jQuery.fn.center = function() {
          //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
          this.css('position', 'absolute')
          this.css('top', 135 + 'px')
          this.css(
            'left',
            (jQuery(window).width() - this.width()) / 2 +
              jQuery(window).scrollLeft() +
              'px'
          )
          return this
        }
        jQuery('#mainLogo_sp img').center()
      }
    }
  }
})
