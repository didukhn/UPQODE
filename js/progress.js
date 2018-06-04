var ProgressControl = (function () {
  function isVisible($element) {
    return (window.innerHeight + window.scrollY) >= $element.offset().top
  }

  function ctor() {
    this.elements = jQuery('.progress-control');
  }

  ctor.prototype.start = function () {
    var context = this;
    context.elements.each(function (index, element) {
      var jelement = jQuery(element);
      var handler = function () {
        if (isVisible(jelement)) {
          context.animate(jelement, 2000);
          jQuery(window).off('scroll', handler);
        }
      }

      jQuery(window).on('scroll', handler);

    });
  }

  ctor.prototype.animate = function (element, duration) {
    var label = element.find('.progress-control-label'),

        progress = element.find('.progress'),
        progressWidth = progress.width(),
        progressBar = progress.find('.progress-bar'),
        progressFrom = progressBar.attr('aria-valuemin'),
        progressTo = progressBar.attr('aria-valuenow');

    progressBar.css({width: progressFrom + 'px'});

    progressBar.animate({
      width: progressTo * progressWidth / 100
    }, {
      duration: duration,
      step: function (value) {
        var persent = Math.ceil(value * 100 / progressWidth);
        label.text(persent + '%');
      }
    });
  }

  return ctor;
})();
