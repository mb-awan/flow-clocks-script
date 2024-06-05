document.addEventListener("DOMContentLoaded", function () {
  alert("Hello, World from cdn!");
  function rotateClock5Hands() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsAngle = seconds * 6 - 30; // Each second represents 6 degrees (360 degrees / 60 seconds)
    const hourDeg = (hours % 12) * 30 + minutes * 0.5 + 60;
    const minuteDeg = minutes * 6 + seconds * 0.1 - 60;

    const clocks = document.getElementsByClassName("clock5");

    Array.from(clocks).forEach((clock) => {
      const secondsHand = clock.getElementById("seconds-hand");
      const hourHand = clock.getElementById("hour-hand");
      const minuteHand = clock.getElementById("minute-hand");

      if (secondsHand) {
        secondsHand.setAttribute(
          "transform",
          `rotate(${secondsAngle} 53 49.9)`
        );
      }
      if (hourHand) {
        hourHand.setAttribute(
          "transform",
          `rotate(${hourDeg} 53.0132 49.9054)`
        );
      }
      if (minuteHand) {
        minuteHand.setAttribute(
          "transform",
          `rotate(${minuteDeg} 53.0132 49.9054)`
        );
      }
    });
  }

  setInterval(rotateClock5Hands, 1000);
  rotateClock5Hands(); // Initial call to set the clock hands correctly

  function rotateClock1Hands() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsAngle = seconds * 6 - 162; // Each second represents 6 degrees (360 degrees / 60 seconds)
    const hourDeg = (hours % 12) * 30 + minutes * 0.5 - 60;
    const minuteDeg = minutes * 6 + seconds * 0.1 + 60;

    const clocks = document.getElementsByClassName("clock1");

    Array.from(clocks).forEach((clock) => {
      const secondsHand = clock.getElementById("seconds-hand");
      const hourHand = clock.getElementById("hour-hand");
      const minuteHand = clock.getElementById("minute-hand");

      if (secondsHand) {
        secondsHand.setAttribute(
          "style",
          `transform-origin: center; transform: rotate(${secondsAngle}deg)`
        );

        if (secondsAngle < 0 || secondsAngle > 162) {
          secondsHand?.children?.[0]?.setAttribute("x", "37");
        } else {
          secondsHand?.children?.[0]?.setAttribute("x", "40.6395");
        }
      }

      if (hourHand) {
        hourHand.setAttribute(
          "style",
          `transform-origin: center; transform: rotate(${hourDeg}deg)`
        );
        if (hourDeg > 100 && hourDeg < 270) {
          hourHand?.children?.[0]?.setAttribute("x", "70");
        } else {
          hourHand?.children?.[0]?.setAttribute("x", "67.2215");
        }
      }

      if (minuteHand) {
        minuteHand.setAttribute(
          "style",
          `transform-origin: center; transform: rotate(${minuteDeg}deg);`
        );

        if (minuteDeg > 100 && minuteDeg < 270) {
          minuteHand?.children?.[0]?.setAttribute("x", "16");
        } else {
          minuteHand?.children?.[0]?.setAttribute("x", "20.2826");
        }
      }
    });
  }

  setInterval(rotateClock1Hands, 1000);
  rotateClock1Hands(); // Initial call to set the clock hands correctly
});
