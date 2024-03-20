<
<template>
  <div hidden="" id="sprite-plyr">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <symbol id="plyr-airplay" viewBox="0 0 18 18">
        <path
          d="M16 1H2a1 1 0 00-1 1v10a1 1 0 001 1h3v-2H3V3h12v8h-2v2h3a1 1 0 001-1V2a1 1 0 00-1-1z"
        ></path>
        <path d="M4 17h10l-5-6z"></path>
      </symbol>
      <symbol id="plyr-captions-off" viewBox="0 0 18 18">
        <path
          d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z"
          fill-rule="evenodd"
          fill-opacity=".5"
        ></path>
      </symbol>
      <symbol id="plyr-captions-on" viewBox="0 0 18 18">
        <path
          d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z"
          fill-rule="evenodd"
        ></path>
      </symbol>
      <symbol id="plyr-download" viewBox="0 0 18 18">
        <path
          d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"
        ></path>
      </symbol>
      <symbol id="plyr-enter-fullscreen" viewBox="0 0 18 18">
        <path
          d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"
        ></path>
      </symbol>
      <symbol id="plyr-exit-fullscreen" viewBox="0 0 18 18">
        <path
          d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"
        ></path>
      </symbol>
      <symbol id="plyr-fast-forward" viewBox="0 0 28 28">
        <path
          d="M15 3C8.385 3 3 8.385 3 15s5.385 12 12 12 12-5.385 12-12a1 1 0 10-2 0c0 5.535-4.465 10-10 10S5 20.535 5 15 9.465 5 15 5c2.512 0 4.79.931 6.545 2.455L19 10h6V4l-2.04 2.04A11.955 11.955 0 0015 3zm2.688 8.35c-1.816 0-2.96 1.36-2.96 3.695 0 2.334 1.127 3.73 2.96 3.73 1.826 0 2.958-1.4 2.958-3.724 0-2.344-1.146-3.701-2.959-3.701zm-6.553.19l-1.791 1.22v1.543l1.699-1.149h.092v5.432h1.793v-7.047h-1.793zm6.553 1.187c.684 0 1.142.77 1.142 2.318 0 1.558-.458 2.353-1.142 2.353-.684 0-1.14-.795-1.14-2.353 0-1.548.456-2.318 1.14-2.318z"
        ></path>
      </symbol>
      <symbol id="plyr-logo-vimeo" viewBox="0 0 18 18">
        <path
          d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"
        ></path>
      </symbol>
      <symbol id="plyr-logo-youtube" viewBox="0 0 18 18">
        <path
          d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"
        ></path>
      </symbol>
      <symbol id="plyr-muted" viewBox="0 0 18 18">
        <path
          d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"
        ></path>
      </symbol>
      <symbol id="plyr-pause" viewBox="0 0 18 18">
        <path
          d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"
        ></path>
      </symbol>
      <symbol id="plyr-pip" viewBox="0 0 18 18">
        <path
          d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"
        ></path>
        <path
          d="M13 15H3V5h5V3H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h-2v5z"
        ></path>
      </symbol>
      <symbol id="plyr-play" viewBox="0 0 18 18">
        <path
          d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"
        ></path>
      </symbol>
      <symbol id="plyr-restart" viewBox="0 0 18 18">
        <path
          d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"
        ></path>
      </symbol>
      <symbol id="plyr-rewind" viewBox="0 0 28 28">
        <path
          d="M15 3c-3.054 0-5.84 1.155-7.96 3.04L5 4v6h6L8.455 7.455A9.935 9.935 0 0115 5c5.535 0 10 4.465 10 10s-4.465 10-10 10S5 20.535 5 15a1 1 0 10-2 0c0 6.615 5.385 12 12 12s12-5.385 12-12S21.615 3 15 3zm2.688 8.35c-1.816 0-2.96 1.36-2.96 3.695 0 2.334 1.127 3.73 2.96 3.73 1.826 0 2.958-1.4 2.958-3.724 0-2.344-1.146-3.701-2.959-3.701zm-6.553.19l-1.791 1.22v1.543l1.699-1.149h.092v5.432h1.793v-7.047h-1.793zm6.553 1.187c.684 0 1.142.77 1.142 2.318 0 1.558-.458 2.353-1.142 2.353-.684 0-1.14-.795-1.14-2.353 0-1.548.456-2.318 1.14-2.318z"
        ></path>
      </symbol>
      <symbol id="plyr-settings" viewBox="0 0 18 18">
        <path
          d="M16.135 7.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 01-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 110-6 3 3 0 010 6z"
        ></path>
      </symbol>
      <symbol id="plyr-volume" viewBox="0 0 18 18">
        <path
          d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"
        ></path>
        <path
          d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"
        ></path>
      </symbol>
    </svg>
  </div>
  <div class="container" id="video-container" style="margin-top: 0px">
    <svg viewBox="0 0 0 0" style="height: 0; width: 0; display: block">
      <defs>
        <linearGradient id="gradient-a" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#abababaf"></stop>
          <stop offset="30%" stop-color="#ababab8f"></stop>
          <stop offset="70%" stop-color="#ababab5f"></stop>
          <stop offset="100%" stop-color="#ababab33"></stop>
        </linearGradient>
        <linearGradient id="gradient-active" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#5354FEaf"></stop>
          <stop offset="30%" stop-color="#5354FE8f"></stop>
          <stop offset="70%" stop-color="#5354FE3f"></stop>
          <stop offset="100%" stop-color="#5354FE13"></stop>
        </linearGradient>
      </defs>
    </svg>

    <div
      tabindex="0"
      class="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled"
    >
      <div class="plyr__controls">
        <button
          class="plyr__controls__item plyr__control"
          type="button"
          data-plyr="play"
          aria-pressed="false"
          aria-label="Play, Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4"
        >
          <svg class="icon--pressed" aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-pause"></use>
          </svg>
          <svg class="icon--not-pressed" aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-play"></use>
          </svg>
          <span class="label--pressed plyr__sr-only">Pause </span>
          <span class="label--not-pressed plyr__sr-only">Play </span>
        </button>
        <button
          class="plyr__controls__item plyr__control"
          type="button"
          data-plyr="rewind"
          aria-pressed="false"
        >
          <svg aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-rewind"></use>
          </svg>
          <span class="plyr__sr-only">Rewind 10s </span>
        </button>
        <button
          class="plyr__controls__item plyr__control"
          type="button"
          data-plyr="fast-forward"
          aria-pressed="false"
        >
          <svg aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-fast-forward"></use>
          </svg>
          <span class="plyr__sr-only">Forward 10s </span>
        </button>
        <div class="plyr__controls__item hide_mobile plyr__spacer"></div>
        <div class="plyr__controls__item plyr__progress__container">
          <div class="plyr__progress">
            <div class="plyr__pb" style="pointer-events: none">
              <div class="sp__base">
                <ul class="sp__progressbar">
                  <li style="width: 604.996px">
                    <div class="sp__container">
                      <div class="sp__bg"></div>
                      <div
                        class="sp__section"
                        style="
                          background-color: rgba(255, 255, 255, 0.533);
                          z-index: 1;
                          width: 0px;
                        "
                      ></div>
                      <div
                        class="sp__section"
                        style="
                          background-color: rgba(255, 255, 255, 0.314);
                          z-index: 2;
                          width: 604.996px;
                        "
                      ></div>
                      <div
                        class="sp__section"
                        style="
                          background-color: rgb(83, 84, 254);
                          z-index: 3;
                          width: 0px;
                        "
                      ></div>
                    </div>
                  </li>
                </ul>
                <div class="sp__title animated">test</div>
              </div>
            </div>
            <input
              data-plyr="seek"
              type="range"
              min="0"
              max="100"
              step="0.01"
              value="0"
              autocomplete="off"
              role="slider"
              aria-label="Seek"
              aria-valuemin="0"
              aria-valuemax="92.233333"
              aria-valuenow="0"
              id="plyr-seek-4865"
              aria-valuetext="00:00 of 00:00"
              style="--value: 0%; top: -5px"
              seek-value="-1.0934721032870036"
            /><progress
              class="plyr__progress__buffer"
              min="0"
              max="100"
              value="100"
              role="progressbar"
              aria-hidden="true"
              style="top: 4px; opacity: 0.01"
            >
              % buffered</progress
            ><span class="plyr__tooltip" hidden="" style="left: 0%">00:00</span>
            <div class="plyr__preview-thumb" style="left: -11.4844px">
              <div
                class="plyr__preview-thumb__image-container"
                style="height: 89px; width: 158px"
              >
                <img
                  src="https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/seek/_0.jpg"
                  data-index="0"
                  style="height: 528px; width: 942px; left: 0px; top: 0px"
                />
              </div>
              <div class="plyr__preview-thumb__time-container">
                <span>00:00</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="plyr__controls__item plyr__time--current plyr__time"
          aria-label="Current time"
        >
          00:00
        </div>
        <div
          class="plyr__controls__item plyr__time--duration plyr__time"
          aria-label="Duration"
        >
          01:32
        </div>
        <div class="plyr__controls__item plyr__volume">
          <button
            type="button"
            class="plyr__control"
            data-plyr="mute"
            aria-pressed="false"
          >
            <svg class="icon--pressed" aria-hidden="true" focusable="false">
              <use xlink:href="#plyr-muted"></use>
            </svg>
            <svg class="icon--not-pressed" aria-hidden="true" focusable="false">
              <use xlink:href="#plyr-volume"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Unmute </span>
            <span class="label--not-pressed plyr__sr-only">Mute </span>
          </button>
          <input
            data-plyr="volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value="1"
            autocomplete="off"
            role="slider"
            aria-label="Volume"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="100"
            id="plyr-volume-4865"
            aria-valuetext="100.0%"
            style="--value: 100%"
          />
        </div>
        <div class="plyr__controls__item plyr__menu">
          <button
            aria-haspopup="true"
            aria-controls="plyr-settings-4865"
            aria-expanded="false"
            type="button"
            class="plyr__control"
            data-plyr="settings"
            aria-pressed="false"
          >
            <svg aria-hidden="true" focusable="false">
              <use xlink:href="#plyr-settings"></use>
            </svg>
            <span class="plyr__sr-only">Settings </span>
          </button>
          <div class="plyr__menu__container" id="plyr-settings-4865" hidden="">
            <div>
              <div id="plyr-settings-4865-home">
                <div role="menu">
                  <button
                    data-plyr="settings"
                    type="button"
                    class="plyr__control plyr__control--forward"
                    role="menuitem"
                    aria-haspopup="true"
                  >
                    <span
                      >Quality<span class="plyr__menu__value">Auto</span></span
                    ></button
                  ><button
                    data-plyr="settings"
                    type="button"
                    class="plyr__control plyr__control--forward"
                    role="menuitem"
                    aria-haspopup="true"
                  >
                    <span
                      >Speed<span class="plyr__menu__value">Normal</span></span
                    ></button
                  ><button
                    data-plyr="settings"
                    type="button"
                    class="plyr__control plyr__control--forward"
                    role="menuitem"
                    aria-haspopup="true"
                    hidden=""
                  >
                    <span
                      >Loop<span class="plyr__menu__value"
                        >undefined</span
                      ></span
                    >
                  </button>
                </div>
              </div>
              <div id="plyr-settings-4865-quality" hidden="">
                <button type="button" class="plyr__control plyr__control--back">
                  <span aria-hidden="true">Quality</span
                  ><span class="plyr__sr-only">Go back to previous menu</span>
                </button>
                <div role="menu">
                  <button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="true"
                    value="0"
                  >
                    <span>Auto (480p)</span></button
                  ><button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="240"
                  >
                    <span>240p</span></button
                  ><button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="360"
                  >
                    <span>360p</span></button
                  ><button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="480"
                  >
                    <span
                      >480p<span class="plyr__menu__value"
                        ><span class="plyr__badge">SD</span></span
                      ></span
                    ></button
                  ><button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="720"
                  >
                    <span
                      >720p<span class="plyr__menu__value"
                        ><span class="plyr__badge">HD</span></span
                      ></span
                    ></button
                  ><button
                    data-plyr="quality"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="1080"
                  >
                    <span
                      >1080p<span class="plyr__menu__value"
                        ><span class="plyr__badge">HD</span></span
                      ></span
                    >
                  </button>
                </div>
              </div>
              <div id="plyr-settings-4865-speed" hidden="">
                <button type="button" class="plyr__control plyr__control--back">
                  <span aria-hidden="true">Speed</span
                  ><span class="plyr__sr-only">Go back to previous menu</span>
                </button>
                <div role="menu">
                  <button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="0.5"
                  >
                    <span>0.5×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="0.75"
                  >
                    <span>0.75×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="true"
                    value="1"
                  >
                    <span>Normal</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="1.25"
                  >
                    <span>1.25×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="1.5"
                  >
                    <span>1.5×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="1.75"
                  >
                    <span>1.75×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="2"
                  >
                    <span>2×</span></button
                  ><button
                    data-plyr="speed"
                    type="button"
                    role="menuitemradio"
                    class="plyr__control"
                    aria-checked="false"
                    value="4"
                  >
                    <span>4×</span>
                  </button>
                </div>
              </div>
              <div id="plyr-settings-4865-loop" hidden="">
                <button type="button" class="plyr__control plyr__control--back">
                  <span aria-hidden="true">Loop</span
                  ><span class="plyr__sr-only">Go back to previous menu</span>
                </button>
                <div role="menu"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="plyr__controls__item plyr__control"
          type="button"
          data-plyr="pip"
          aria-pressed="false"
        >
          <svg aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-pip"></use>
          </svg>
          <span class="plyr__sr-only">PIP</span>
        </button>
        <button
          class="plyr__controls__item plyr__control"
          type="button"
          data-plyr="fullscreen"
          aria-pressed="false"
        >
          <svg class="icon--pressed" aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-exit-fullscreen"></use>
          </svg>
          <svg class="icon--not-pressed" aria-hidden="true" focusable="false">
            <use xlink:href="#plyr-enter-fullscreen"></use>
          </svg>
          <span class="label--pressed plyr__sr-only">Exit fullscreen </span>
          <span class="label--not-pressed plyr__sr-only">Enter fullscreen</span>
        </button>
      </div>
      <div class="plyr__video-wrapper">
        <video
          id="main-video"
          preload="auto"
          crossorigin=""
          none=""
          data-plyr-config='{ "title": "Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4" }'
          playsinline=""
          data-poster="https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/thumbnail.jpg"
          src="blob:https://iframe.mediadelivery.net/c7313ae9-18a9-473b-94c5-dd29e3445df5"
        >
          <source
            type="application/x-mpegURL"
            src="https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/playlist.m3u8"
          />
        </video>
        <div
          class="plyr__poster"
          style="
            background-image: url('https://vz-217be1d9-d51.b-cdn.net/c84c6062-78d3-4051-b44a-2045cb62b6fa/thumbnail.jpg');
          "
        ></div>
        <div class="plyr__preview-scrubbing"></div>
      </div>
      <div class="plyr__captions" dir="auto"></div>
      <button
        type="button"
        class="plyr__control plyr__control--overlaid"
        data-plyr="play"
        aria-pressed="false"
        aria-label="Play, Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4"
      >
        <svg aria-hidden="true" focusable="false">
          <use xlink:href="#plyr-play"></use>
        </svg>
        <span class="plyr__sr-only">Play </span>
      </button>
    </div>
  </div>
</template>
