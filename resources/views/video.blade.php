<!DOCTYPE html>
<html>

<head>
    <title>HLS Video Player</title>
    <link href="https://unpkg.com/video.js@7/dist/video-js.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/silvermine-videojs-quality-selector@1.1.2/dist/css/quality-selector.css"
        rel="stylesheet" />

    <script src="https://unpkg.com/video.js@7/dist/video.min.js"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-quality-levels/2.0.9/videojs-contrib-quality-levels.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-hls-quality-selector@1.1.1/dist/videojs-hls-quality-selector.min.js">
    </script>
</head>

<body>
    <video height="600" id="videojs" class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered" controls
        preload="auto" autoplay>
        <source src="storage\media\11\Ws6KrJj6deFSCSHnFkt1_651c3562cc1c4\master.m3u8" type="application/x-mpegURL" />
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
    </video>

    <script type="text/javascript">
        var player = videojs("videojs");
        player.hlsQualitySelector();
    </script>
</body>

</html>
