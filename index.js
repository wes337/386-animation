export default function init386(options = {}) {
  var character = { height: 16, width: 8 };

  function loading() {
    if (options.fastLoad) {
      document.body.style.visibility = "visible";
      return;
    }

    var onePass = options.onePass,
      speedFactor = (1 / (options.speedFactor || 1)) * 165000,
      wrap = document.createElement("div"),
      bar = wrap.appendChild(document.createElement("div")),
      cursor = document.createElement("div"),
      // If the user specified that the visibility is hidden, then we
      // start at the first pass ... otherwise we just do the
      // cursor fly-by
      bodyVisibility = window
        .getComputedStyle(document.body, null)
        .getPropertyValue("visibility"),
      pass = bodyVisibility === "visible" ? 1 : 0,
      height = window.innerHeight,
      width = window.innerWidth,
      // this makes the loading of the screen proportional to the real-estate of the window.
      // it helps keep the cool sequence there while not making it waste too much time.
      rounds = (height * width) / speedFactor,
      column = width,
      row = height - character.height;

    wrap.id = "wrap386";
    bar.id = "bar386";
    cursor.id = "cursor386";

    if (options.background) {
      wrap.style.background = options.background;
      bar.style.background = options.background;
    }

    if (options.cursorColor) {
      bar.style.color = options.cursorColor;
      cursor.style.color = options.cursorColor;
    }

    cursor.innerHTML = bar.innerHTML = "&#9604;";

    // only inject the wrap if the pass is 0
    if (pass === 0) {
      document.body.appendChild(wrap);
      document.body.style.visibility = "visible";
    } else {
      document.body.appendChild(cursor);
      cursor.innerHTML = "";
      rounds /= 2;
      character.height *= 4;
    }

    var ival = setInterval(function () {
      for (var m = 0; m < rounds; m++) {
        column -= character.width;

        if (column <= 0) {
          column = width;
          row -= character.height;
        }
        if (row <= 0) {
          pass++;
          row = height - character.height;

          if (pass === 2) {
            document.body.removeChild(cursor);
            clearInterval(ival);
          } else {
            wrap.parentNode.removeChild(wrap);
            if (onePass) {
              clearInterval(ival);
            } else {
              document.body.appendChild(cursor);
              rounds /= 2;
              character.height *= 4;
            }
          }
        }

        if (pass === 0) {
          bar.style.width = column + "px";
          wrap.style.height = row + "px";
        } else {
          cursor.style.right = column + "px";
          cursor.style.bottom = row + "px";
        }
      }
    }, 1);
  }

  loading();
}
