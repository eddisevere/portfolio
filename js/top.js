// JavaScript Document

//загрузка главного фона
$(function() {
  allhide()
  $('#backdrop').hide()

  topvis()
})

function allhide() {
  $('#backdrop').hide()
}

function topvis() {
  $('#backdrop')
      .delay(1000)
      .fadeIn(1000)
}

// fade

// открыть/закрыть пункты меню
$(function() {
  var Menu = function () {
    // bio, menu, faq, contact
    this.currentMenu = undefined
    this.timeout = undefined
    this.interval = 1000
  }
  Menu.prototype = {
    getNameFrom$menu: function ($menu) {
      return $menu.length ? $menu.attr('id').split('_')[1] : undefined
    },
    show: function (name) {
      this.currentMenu = name
      $('#btn_' + name).addClass('is-active')
      $('#' + name + '_slice').addClass('is-visible')
      $('#all_menu').addClass('is-visible')
    },
    hide: function (name) {
      if (this.currentMenu === name) {
        this.currentMenu = undefined
      }
      $('#btn_' + name).removeClass('is-active')
      $('#' + name + '_slice').removeClass('is-visible')
      $('#all_menu').removeClass('is-visible')
    },
    toggle: function (name) {
      var self = this
      clearTimeout(self.timeout)
      switch (self.currentMenu) {
        case undefined:
          self.show(name)
          break
        case name:
          self.hide(name)
          break
        default: // откроется еще одно меню
          self.hide(self.currentMenu)
          self.timeout = setTimeout(function () {
            self.show(name)
          }, self.interval)
          break
      }
    }
  }

  var menu = new Menu();

  $('.menu a').on('click', function () {
    var name = menu.getNameFrom$menu($(this).closest('.menu'))
    menu.toggle(name)
  })
})



// gallery


$(function(){
 $('#gallery01,#gallery02,#gallery03,#gallery04').scroll(function(){
  if($(this).hasClass("active")){
   $('#gallery_left').addClass("is-visible");
  } else {
    $('#gallery_left').removeClass("is-visible");
  }
 });
});





// hover

$(function() {
  $('#btn_menu a').hover(function() {
    if ($("#btn_menu a").hasClass('active')) {
      $("#btn_menu a").removeClass('active');
      $("#btn_menu a").removeClass('on')
    } else {
      $("#btn_menu a").addClass('active');
      $("#btn_menu a").addClass('on')
    }
  })
})

$(function() {
  $('#btn_contact a').hover(function() {
    if ($("#btn_contact a").hasClass('active')) {
      $("#btn_contact a").removeClass('active');
      $("#btn_contact a").removeClass('on')
    } else {
      $("#btn_contact a").addClass('active');
      $("#btn_contact a").addClass('on')
    }
  })
})


$(function() {
  $('#btn_faq a').hover(function() {
    if ($("#btn_faq a").hasClass('active')) {
      $("#btn_faq a").removeClass('active');
      $("#btn_faq a").removeClass('on')
    } else {
      $("#btn_faq a").addClass('active');
      $("#btn_faq a").addClass('on')
    }
  })
})

$(function() {
  $('#btn_bio a').hover(function() {
    if ($("#btn_bio a").hasClass('active')) {
      $("#btn_bio a").removeClass('active');
      $("#btn_bio a").removeClass('on')
    } else {
      $("#btn_bio a").addClass('active');
      $("#btn_bio a").addClass('on')
    }
  })
})

// TEL
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
        e.preventDefault();
    });
}


// скорость скролла страниц
$(document).ready(function() {
  var isGallery = false

  $('#fullpage').fullpage({
    controlArrows: false,
    scrollingSpeed: 1000,
    css3: true,
    easingcss3: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  })
});

