if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(); // Safari
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(); // IE/Edge
      }