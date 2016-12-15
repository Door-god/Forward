;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tuichu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.653003 495.405043 768.424945 310.184575c-9.079145-9.078773-23.800007-9.078773-32.884269 0l-37.440215 37.438681c-9.079145 9.078773-9.079145 23.804149 0 32.882921l81.706161 81.702813L407.380563 462.20899c-12.838926 0-23.246376 10.408047-23.246376 23.246447l0 52.952003c0 12.842493 10.40745 23.251563 23.246376 23.251563l372.244928 0-81.706161 81.702813c-9.079145 9.077749-9.079145 23.804149 0 32.881898l37.445331 37.439704c9.079145 9.078773 23.805124 9.078773 32.884269 0L916.206648 565.731762c0-0.005117 0.005117-0.005117 0.005117-0.005117l37.445331-37.443797C962.731124 519.204076 962.731124 504.482793 953.653003 495.405043L953.653003 495.405043zM634.548497 64.021106 133.71476 64.021106c-38.519847 0-69.751408 31.230282-69.751408 69.74855l0 756.327658c0 38.524408 31.231561 69.749574 69.751408 69.749574l500.833737 0c38.52087 0 69.751408-31.225165 69.751408-69.749574l0-98.134041c0-12.837376-10.408474-23.251563-23.252516-23.251563l-50.396825 0c-12.837902 0-23.252516 10.414187-23.252516 23.251563l0 37.331233c-0.25379 19.037589-15.762631 34.398438-34.864447 34.398438L194.759522 863.692944c-19.257365 0-34.872634-15.615653-34.872634-34.877345L159.886888 194.241936c0-19.257599 15.609129-34.874275 34.872634-34.874275l377.774078 0c19.10591 0 34.610657 15.356756 34.864447 34.398438l0 38.431288c0 12.842493 10.414614 23.251563 23.252516 23.251563l50.396825 0c12.844042 0 23.252516-10.409071 23.252516-23.251563L704.299905 133.769656C704.299905 95.251388 673.068343 64.021106 634.548497 64.021106L634.548497 64.021106zM634.548497 64.021106"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msnui-save" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M950.5 205.68q7.721 8.816 8.816 20.381t1.093 18.195v591.743q0 51.8-35.261 87.063t-93.657 35.261h-636.949q-59.524 0-94.221-29.762t-34.698-90.378v-644.638q0-59.524 34.698-95.316t94.221-35.826h584.056q11.037 0 22.038 2.749t15.445 7.159zM755.461 166.009q-2.222-34.169-36.355-34.169h-480.456q-16.539-1.093-26.448 8.816t-9.909 23.132v179.627q0 11.037 4.972 22.603t13.787 20.946 20.381 15.445 24.791 6.065h418.745q29.762 0 50.143-17.632t20.381-52.895v-171.906zM755.461 661.909q0-47.392-48.485-48.485h-455.101q-25.354 0-37.484 13.223t-12.13 35.261v160.903h553.203v-160.903z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)