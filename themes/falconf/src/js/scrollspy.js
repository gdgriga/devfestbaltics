
window.$ = window.jQuery = require('jquery')
var scrollspy = require('scrollspy')
 

$('.scroll-class').each(function() {
    var me = this
    var $me = $(me)
    scrollspy.add(me, {
        scrollIn: function() {
            $(`a[href="#${$me[0].id}"`).addClass("active");
            switch ($me[0].id) {
              case "cover":
                $("body").removeClass();
                break;
              case "about":
                if ($("body").scrollTop() === 0 ) $("body").removeClass();
                $("body").addClass("active-about");
                break;
              case "figures":
                $("body").addClass("active-about");
                break;
              case "previous-event":
                $("body").addClass("active-previous-videos");
                break;
              case "tweets":
                $("body").addClass("active-tweets");
                break;
              case "about-previous":
                $("body").addClass("active-about-previous");
                break;
              case "photos":
                $("body").addClass("active-about-previous");
                break;
              case "subscribe":
                $("body").addClass("active-subscribe");
                break;
              default:
                break;
            }
        },
        scrollOut: function() {
          $(`a[href="#${$me[0].id}"`).removeClass("active");
          switch ($me[0].id) {
            case "about":
              $("body").removeClass("active-about");
              break;
            case "previous-event":
              $("body").removeClass("active-previous-videos");
              break;
            case "tweets":
              $("body").removeClass("active-tweets");
              break;
            case "about-previous":
              $("body").removeClass("active-about-previous");
              break;
            case "subscribe":
              $("body").removeClass("active-subscribe");
              break;
            default:
              break;
          }
        }
    })
})