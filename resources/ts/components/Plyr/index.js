var thumbnail_width = 300;

var seek_thumbnail_config = {
  enabled: true,
  pic_num: 47, // total thumbnail numbers
  width: thumbnail_width, // per thumbnail item width
  height: (thumbnail_width * 9) / 16, // default height
  col: 6, // per thumbnail image columns
  row: 6, // per thumbnail image rows
  offsetX: 0,
  offsetY: 0,
  urls: [
    "https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/seek/_0.jpg",
    "https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/seek/_1.jpg",
  ],
};

function getSeekThumbnailHeight(imgWidth, imgHeight) {
  var aspectRatio = imgWidth / imgHeight;
  return Math.floor(thumbnail_width / aspectRatio);
}

var prevShowImage = null;

var video_start_time = 0;

function setPlayerStartingPosition(player) {
  if (video_start_time > 0) {
    player.on("loadeddata", function (event) {
      var instance = event.detail.plyr;
      if (video_start_time <= instance.duration) {
        instance.off("loadeddata", event);
        instance.currentTime = video_start_time;
      }
    });
  }
}

var videoSessionTracker = new BunnyStreamSessionTracker(
  "mediadelivery.net",
  "video-803.mediadelivery.net",
  179002,
  "c84c6062-78d3-4051-b44a-2045cb62b6fa",
  "803"
);
var errorEvents = {};

function loadUrl(url, onFinished) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        onFinished(xmlhttp.responseText);
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function IsMobile() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

document.addEventListener("DOMContentLoaded", async function () {
  var video = document.querySelector("video");
  var fragmentsLoaded = 0;
  var player = null;
  var isFairplay = false;
  var isEntDrm = false;
  var playOriginal = false;
  var originalUrl =
    "https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/original";
  var urlPlaylistUrl =
    "https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/playlist.m3u8";
  var isHlsSupported = !isFairplay && Hls.isSupported();
  var source = video.getElementsByTagName("source")[0].src;
  var isAdPaused = false;
  var cjs = null;
  var skipAirPlayEvents = 0;

  function isChromecastConnected() {
    return cjs != null && cjs.connected;
  }

  function manageChromecastAvailableTrigger(cjs) {
    if (isEntDrm == false) {
      $(".plyr__controls").append(
        $(
          '<button class="plyr__controls__item plyr__control chromecast chromecast-disconnected"><svg aria-hidden="true" focusable="false"><use xlink:href="#chromecast"></use></svg></button>'
        )
      );

      $(".chromecast").click(function () {
        if (cjs.available) {
          if (cjs.connected) {
            cjs.disconnect();
          } else {
            var castUrl = "";
            if (playOriginal) {
              castUrl = originalUrl;
            } else {
              castUrl = urlPlaylistUrl;
            }

            cjs.cast(castUrl, {
              poster:
                "https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/thumbnail.jpg",
              title:
                "Vid&#233;o sans titre ‐ R&#233;alis&#233;e avec Clipchamp.mp4",
              subtitles: [],
            });
          }
        }
      });
    }
  }

  function initChromecast() {
    cjs = new Castjs();

    cjs.on("error", function (e) {
      console.log("chromecast:" + e);
    });

    if (cjs.available) {
      manageChromecastAvailableTrigger(cjs);
    } else {
      cjs.on("available", function () {
        manageChromecastAvailableTrigger(cjs);
      });
    }

    cjs.on("event", function (e) {
      if (e == "pause") {
        cjs.seek(player.currentTime);
      } else if (e == "statechange") {
        switch (cjs.state) {
          case "ended":
            cjs.disconnect();
            break;

          case "connected":
            $(".chromecast").addClass("chromecast-connected");
            $(".chromecast").removeClass("chromecast-disconnected");
            break;

          case "disconnected":
            $(".chromecast").addClass("chromecast-disconnected");
            $(".chromecast").removeClass("chromecast-connected");
            break;

          case "playing":
            cjs.seek(player.currentTime);
            player.play();
            break;

          case "timeupdate":
            player.isChromecastSeeked = true;
            player.currentTime = cjs._player.currentTime;
            break;

          case "buffering":
            player.pause();
            cjs.seek(player.currentTime);
            break;
        }
      }
    });
  }

  var defaultOptions = {
    storage: {
      enabled: true,
      key: "plyr--lib-179002",
    },
    fullscreen: {
      enabled: true,
      fallback: true,
      iosNative: true,
    },
    iconUrl: "https://assets.mediadelivery.net/plyr/3.7.3.2/plyr.svg",
    captions: {
      active: false,
      language: "",
      update: true,
    },
    controls: [
      "play-large",
      "play",
      "rewind",
      "fast-forward",
      "progress",
      "current-time",
      "duration",
      "mute",
      "volume",
      "settings",
      "pip",
      "fullscreen",
    ],
    settings: ["quality", "speed", "loop"],
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
    },
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD",
      },
    },
    thumbnail: seek_thumbnail_config,
  };

  function initPlayer() {
    // needed for displaying right direction of the captions
    player.elements.captions.dir = "auto";

    $(
      '<div class="plyr__controls__item hide_mobile plyr__spacer"></div>'
    ).insertBefore(".plyr__progress__container");

    /* Heatmap Chart */

    $("video").on(
      "webkitbeginfullscreen webkitendfullscreen",
      function (event) {
        if (event.type === "webkitbeginfullscreen") {
          document.documentElement.style.setProperty(
            "--webkit-text-track-display",
            "block"
          );
        } else {
          document.documentElement.style.setProperty(
            "--webkit-text-track-display",
            "none"
          );
        }
      }
    );

    /* VAST management */
    document.addEventListener("visibilitychange", function (e) {
      if (!document.hidden && player.ads != null && player.ads.playing) {
        player.ads.manager.resume();
      }
    });

    setPlayerStartingPosition(player);

    /* Session tracking */
    player.on("play", function () {
      if (isChromecastConnected()) {
        cjs.play();
      }
    });

    player.on("pause", function () {
      if (isChromecastConnected()) {
        cjs.pause();
      }
    });

    player.on("seeked", function () {
      if (isChromecastConnected()) {
        if (player.isChromecastSeeked != null && !player.isChromecastSeeked) {
          cjs.seek(player.currentTime);
        }
        player.isChromecastSeeked = false;
      }
    });

    player.on("languagechange", function (e) {
      if (isChromecastConnected()) {
        cjs.subtitle(e.detail.plyr.captions.currentTrack);
      }
    });

    /* VR */

    /* Progress bar */
    var scrubbingPaused = false;
    var isMobile = IsMobile();
    $(".plyr__progress__container input").css("top", "-5px");
    $(".plyr__progress__container progress").css("top", "4px");
    $(".plyr__progress__container progress").css("opacity", "0.01");
    $(".plyr__progress").prepend($('<div class="plyr__pb"></div>'));
    var pb = new PB(".plyr__pb", ".plyr__progress__container input", {
      keyColor: "#5354FE",
      videoLength: 93,
      chapters: [],
      moments: [],
      onScrubbingChange: function (seekTime, offset) {
        var thumbWidth = $(".plyr__preview-thumb").width();
        var position = Math.max(thumbWidth / 2, offset);
        position = Math.min(
          $(".plyr__controls").width() -
            $(".plyr__preview-thumb").width() +
            thumbWidth / 4,
          position
        );
        $(".plyr__preview-thumb").css("left", position - 5.5 + "px");
      },
    });

    function subscribeAdManagerEvent() {
      if (player.ads != null) {
        Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
          player.ads.manager.addEventListener(
            google.ima.AdEvent.Type[e],
            function (e) {
              switch (e.type) {
                case "pause":
                  isAdPaused = true;
                  break;
                case "complete":
                case "allAdsCompleted":
                case "userClose":
                case "start":
                case "resume":
                case "loaded":
                  isAdPaused = false;
                  break;
                case "click":
                  if (isAdPaused) player.ads.manager.resume();
                  break;
              }
            }
          );
        });
      }
    }

    document.addEventListener("ready", function () {
      setSeekThumbnailHeight(player);
    });

    player.on("loadedmetadata", function () {
      pb.SetDuration(player.duration);
      if (player.ads != null && player.ads.manager == null) {
        if (player.ads.loader != null) {
          player.ads.loader.addEventListener(
            "adsManagerLoaded",
            function (e) {
              subscribeAdManagerEvent();
            },
            false
          );
        }
      } else {
        subscribeAdManagerEvent();
      }
    });

    setInterval(function () {
      pb.SetCurrentProgress(player.currentTime);

      pb.SetBufferProgress(player.duration * player.buffered);
    }, 16);
    /* Progress bar */

    function getStatusObject() {
      return {
        volume: player.volume,
        muted: player.muted,
        hideControls: player.hideControls,
        speed: player.speed,
        quality: player.quality,
        currentTime: player.currentTime,
        playing: player.playing,
        paused: player.paused,
        stopped: player.stopped,
        ended: player.ended,
        buffered: player.buffered,
        duration: player.duration,
        hasAudio: player.hasAudio,
        loop: player.loop,
        language: player.language,
        ratio: player.ratio,
      };
    }

    function sendEvent(name) {
      window.parent.postMessage(
        {
          channel: "bunnystream",
          video: "c84c6062-78d3-4051-b44a-2045cb62b6fa",
          event: name,
          status: getStatusObject(),
        },
        "*"
      );
    }

    function wireEvent(name) {
      player.on(name, function () {
        sendEvent(name);
      });
    }

    function wireUpEvents() {
      wireEvent("progress");
      wireEvent("ready");
      wireEvent("play");
      wireEvent("pause");
      wireEvent("timeupdate");
      wireEvent("seeking");
      wireEvent("seeked");
      wireEvent("ended");
      wireEvent("ratechange");
      wireEvent("enterfullscreen");
      wireEvent("exitfullscreen");
      wireEvent("captionsenabled");
      wireEvent("captionsdisabled");
      wireEvent("languagechange");
      wireEvent("ready");
    }

    window.onmessage = function (e) {
      var message = e.data;
      if (message.command == "activate") {
        wireUpEvents();
      } else if (message.command == "pause") {
        player.pause();
      } else if (message.command == "play") {
        player.play();
      } else if (message.command == "togglePlay") {
        if (message.parameter != null) player.togglePlay(message.parameter);
        else player.togglePlay();
      } else if (message.command == "destroy") {
        player.destroy();
      } else if (message.command == "increaseVolume") {
        if (message.parameter != null) player.increaseVolume(message.parameter);
        else player.increaseVolume(0.1);
      } else if (message.command == "decreaseVolume") {
        if (message.parameter != null) player.decreaseVolume(message.parameter);
        else player.decreaseVolume(0.1);
      } else if (message.command == "toggleCaptions") {
        if (message.parameter != null) player.toggleCaptions(message.parameter);
        else player.toggleCaptions();
      } else if (message.command == "toggleControls") {
        if (message.parameter != null) player.toggleControls(message.parameter);
        else player.toggleControls();
      } else if (message.command == "fullscreen.enter") {
        player.fullscreen.enter();
      } else if (message.command == "fullscreen.exit") {
        player.fullscreen.exit();
      } else if (message.command == "fullscreen.toggle") {
        player.fullscreen.toggle();
      } else if (message.command == "forward") {
        if (message.parameter != null) player.forward(message.parameter);
        else player.forward();
      } else if (message.command == "rewind") {
        if (message.parameter != null) player.rewind(message.parameter);
        else player.rewind();
      }
    };
  }

  if (isHlsSupported) {
    var hlsConfig = {
      debug: false,
      abrEwmaDefaultEstimate: 5000000,
      maxBufferLength: 120,
      minBufferLength: 20,

      autoStartLoad: true,
    };
    var hls = new Hls(hlsConfig);
    hls.loadSource(source);

    // From the m3u8 playlist, hls parses the manifest and returns
    // all available video qualities. This is important, in this approach,
    // we will have one source on the Plyr player.
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      if (window.hls.currentLevel == -1) {
        // Auto
        if (hls.levels.length == 1) {
          window.hls.currentLevel = 0;
        } else if (hls.levels.length == 2) {
          window.hls.currentLevel = 1;
        } else {
          window.hls.currentLevel = 2;
        }
      }

      // Transform available levels into an array of integers (height values).
      var availableQualities = hls.levels.map(function (l) {
        return l.height;
      });
      availableQualities.unshift(0); //prepend 0 to quality array;

      // New qualities to option
      defaultOptions.quality = {
        default: 0,
        options: availableQualities,
        // this ensures Plyr to use Hls to update quality level
        forced: true,
        onChange: function (e) {
          updateQuality(e);
        },
      };

      // Initialize here
      player = new Plyr(video, defaultOptions);
      initPlayer();
    });
    hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
      var span = document.querySelector(
        ".plyr__controls [data-plyr='quality'][value='0'] span"
      );
      if (span != null) {
        if (hls.autoLevelEnabled) {
          var height = hls.levels[data.level].height;
          span.innerHTML = "Auto (" + height + "p)";
        } else {
          span.innerHTML = "Auto";
        }
      }
    });

    hls.on(Hls.Events.ERROR, function (event, data) {
      if (errorEvents[data.details] == undefined) {
        errorEvents[data.details] = 0;
      }

      console.error("HLS error occured:", data);
      errorEvents[data.details] += 1;

      if (data.fatal) {
        console.error("HLS fatal error occured:", data);
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.log("fatal network error encountered, try to recover");
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover");
            hls.recoverMediaError();
            break;
          default:
            break;
        }
      }
    });

    setInterval(function () {
      var bandwidth = hls.abrController.bwEstimator.getEstimate();
      if (isNaN(bandwidth)) {
        bandwidth = 0;
      }
      if (!video.paused) {
        var errorEventsString = "";
        var keys = Object.keys(errorEvents);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = errorEvents[key];
          if (errorEventsString != "") {
            errorEventsString += ",";
          }
          errorEventsString += key + "=" + value;
        }

        loadUrl(
          "https://video-803.mediadelivery.net/.metrics/add?errorEvents=" +
            errorEventsString +
            "&bandwidth=" +
            bandwidth +
            "&zoneTier=" +
            "volume",
          function (data) {}
        );
        errorEvents = {};
      }
    }, 15000);

    function handleAirPlayEvent(isWireless) {
      var currentTime = player.currentTime;
      isWireless ? hls.detachMedia() : hls.attachMedia(video);
      // on media detaching additional disconnected and connected events are fired. Skip them
      isWireless ? (skipAirPlayEvents = 2) : (skipAirPlayEvents = 0);
      video.currentTime = currentTime;
      player.play();
    }

    video.addEventListener(
      "webkitcurrentplaybacktargetiswirelesschanged",
      function (event) {
        if (skipAirPlayEvents > 0) {
          skipAirPlayEvents--;
          return;
        }
        handleAirPlayEvent(event.target.webkitCurrentPlaybackTargetIsWireless);
      }
    );
    hls.attachMedia(video);
    window.hls = hls;
  } else {
    // hls not supported
    defaultOptions.quality = {
      default: 480,
      options: [240, 320, 480, 720],
    };

    player = new Plyr(video, defaultOptions);
    initPlayer();
  }

  function updateQuality(newQuality) {
    if (newQuality === 0) {
      window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
    } else {
      window.hls.levels.forEach(function (level, levelIndex) {
        if (level.height === newQuality) {
          console.log("Found quality match with " + newQuality);
          window.hls.currentLevel = levelIndex;
        }
      });
    }
  }
});

function centerVertically() {
  var container = document.getElementById("body");
  var inner = document.getElementById("video-container");

  var inHeight = inner.offsetHeight;
  var conHeight = container.offsetHeight;

  inner.style.marginTop = (conHeight - inHeight) / 2 + "px";
}
centerVertically();
window.addEventListener("resize", centerVertically);
