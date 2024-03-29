<?php

namespace App\Services;


class VideoProcesseurService
{
    public function __construct($config = [])
    {
    }
}
// {
//     private $ffmpeg = null;
//     private $store_path = null;
//     private $file = null;
//     private $temp_prefix = null;
//     private $filePath = null;
//     private $file_name = null;
//     private $resolution = [
//         'resolution' => [1280, 720],
//         'videoBitrate' => 2500,
//         'audioBitrate' => 192,
//     ];

//     public function __construct($config = [])
//     {
//         $this->ffmpeg = FFMpeg::create($config);
//         $this->temp_prefix = config("app.name", '');
//         $this->file_name =  uniqid(uniqid(uniqid('')));
//     }
//     // Function to convert video to different resolutions
//     public  function convert($outputFileName)
//     {
//         try {
//             $video = $this->ffmpeg->open($this->filePath);
//             $format = new X264();
//             $format->setAudioCodec("aac");
//             $format->setAudioChannels(2);
//             $format->setAudioKiloBitrate($this->resolution['audioBitrate']);
//             $format->setKiloBitrate($this->resolution['videoBitrate']);
//             $format->setAdditionalParameters(['-hls_time', '60', '-hls_list_size', '0']);
//             $video->filters()->resize(new Dimension(...$this->resolution['resolution']))->synchronize();
//             $video->save($format, $this->store_path . '/' . $outputFileName);
//         } catch (\Exception $ex) {
//             throw $ex;
//         }
//     }
//     // Function to generate video thumbnail
//     public  function generateThumbnail($outputFileName, $seconds = 1)
//     {
//         try {
//             $video = $this->ffmpeg->open($this->filePath);
//             $video->filters()
//                 ->resize(new Dimension(640, 480))
//                 ->synchronize();
//             $video->frame(\FFMpeg\Coordinate\TimeCode::fromSeconds($seconds))
//                 ->save($this->store_path . '/' . $outputFileName);
//             return $this->store_path . '/' . $outputFileName;
//         } catch (\Exception $ex) {
//             throw $ex;
//         }
//     }
//     // Function to generate hls size
//     public function getHlsSize()
//     {
//         try {
//             // Create an instance of FFProbe
//             $ffprobe = FFProbe::create();
//             // Get the video size in bytes
//             // Get the content of the M3U8 playlist file
//             $m3u8Content = file_get_contents($this->filePath);
//             // Extract the lines containing .ts segments
//             $tsLines = preg_grep('/\.ts/', explode("\n", $m3u8Content));
//             // Initialize total size
//             $totalSizeInBytes = 0;
//             // Iterate through each .ts segment and get its size
//             foreach ($tsLines as $tsLine) {
//                 // Construct the full path to the .ts segment
//                 $tsSegmentPath = dirname($this->filePath) . '/' . trim($tsLine);
//                 // Get the size of the .ts segment in bytes
//                 $sizeInBytes = $ffprobe->format($tsSegmentPath)->get('size');
//                 // Add the size to the total
//                 $totalSizeInBytes += $sizeInBytes;
//             }
//             return $totalSizeInBytes;
//         } catch (\Exception $ex) {
//             throw $ex;
//         }
//     }
//     // Function to generate video metadata
//     public function generateMeta()
//     {
//         try {
//             $video = $this->ffmpeg->open($this->filePath);
//             $streams = $video->getStreams();
//             $metadata = $video->getFormat();
//             $metadata->set('width', $streams->first()->get('width'));
//             $metadata->set('height', $streams->first()->get('height'));
//             return $metadata;
//         } catch (\Exception $ex) {
//             throw $ex;
//         }
//     }
//     // Function to generate master playlist
//     public  function generateMasterPlaylist($outputFileName, $resolutions)
//     {
//         $masterPlaylist = collect($resolutions)
//             ->map(function ($resolution) use ($outputFileName) {
//                 $variantPlaylist = config('video_processeur.resolutions')[$resolution . 'p'];
//                 // Extract width and height from the resolution
//                 list($width, $height) = $variantPlaylist['resolution'];
//                 // Calculate bandwidth based on resolution
//                 $bandwidth = $width * $height * 0.8;
//                 $output = str_replace('master', $height, pathinfo($outputFileName, PATHINFO_FILENAME) . '.m3u8');
//                 return "#EXT-X-STREAM-INF:BANDWIDTH=$bandwidth,RESOLUTION=$width" . 'x' . "$height\n$output";
//             })
//             ->prepend("#EXTM3U")
//             ->implode("\n");
//         $masterPlaylistPath = $this->store_path . '/' . $outputFileName;
//         file_put_contents($masterPlaylistPath, $masterPlaylist);
//         return $masterPlaylistPath;
//     }
//     public function setResolution($resolution)
//     {
//         $this->resolution = $resolution;
//         return $this;
//     }
//     public function to($path)
//     {
//         $this->store_path = $path;
//         return $this;
//     }
//     public function fromPath($path)
//     {
//         $this->filePath = $path;
//         return $this;
//     }
//     public function fromFile(UploadedFile $file)
//     {
//         $this->file = $file;
//         $filename = $this->file_name;
//         $tempFolderPath = sys_get_temp_dir() . '/' . $this->temp_prefix;
//         $this->file->move($tempFolderPath, $filename);
//         $this->filePath = $tempFolderPath . '/' . $filename;
//         return $this;
//     }

//     static public function create($config = [])
//     {
//         return new static($config);
//     }

//     // Function to mimic the resolutions array
//     private function resolutions()
//     {
//         return [
//             ['resolution' => '320x180', 'videoBitrate' => '400k', 'audioBitrate' => '64k'],
//             ['resolution' => '640x360', 'videoBitrate' => '800k', 'audioBitrate' => '128k'],
//             ['resolution' => '854x480', 'videoBitrate' => '1200k', 'audioBitrate' => '192k'],
//         ];
//     }
// }
