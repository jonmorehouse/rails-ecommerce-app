// Generated by CoffeeScript 1.6.2
(function() {
  require(["jQuery"], function(jquery) {
    return jquery.fn.extend({
      mobileGallery: function(options) {
        var log, setting, settings;

        settings = {
          option1: true,
          option2: true,
          debug: false
        };
        setting = jquery.extend(settings, options);
        log = function(msg) {
          if (settings.debug) {
            return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
          }
        };
        return this.each(function() {
          return log("HELLO WORLD");
        });
      }
    });
  });

}).call(this);
