! function (a, b, c) {
  function d(b) {
    this.settings = a.extend({}, f, b), this._defaults = f, this._name = e, this.init()
  }
  var e = "fatNav",
    f = {};
  a.extend(d.prototype, {
    init: function () {
      var b = this,
        c = this.$nav = a(".fat-nav"),
        d = this.$hamburger = a('<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>');
      this._bodyOverflow = a("body").css("overflow"), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && c.children().css({
        height: "110%",
        transform: "translateY(-5%)"
      }), a("body").append(d), a().add(d).add(c.find("a")).on("click", function (a) {
        b.toggleNav()
      })
    },
    toggleNav: function () {
      var b = this;
      this.$nav.fadeToggle(400), b.toggleBodyOverflow(), a().add(this.$hamburger).add(this.$nav).toggleClass("active")
    },
    toggleBodyOverflow: function () {
      var b = this,
        c = a("body");
      c.toggleClass("no-scroll");
      var d = c.hasClass("no-scroll");
      c.css("overflow", d ? "hidden" : b._bodyOverflow)
    }
  }), "undefined" == typeof a[e] && (a[e] = function (a) {
    return new d(this, a)
  })
$(document).click(function(event){
        var target = $(event.target);
        if(target.hasClass('no-scroll')) {
	        $("body").removeClass("no-scroll").css({"overflow":"visible"});
            $(".fat-nav").fadeToggle(400).toggleClass("active");
            $(".hamburger").toggleClass("active");
            $('.hamburger-ps').append($('.hamburger'));
        }
    });
}(jQuery, window, document);