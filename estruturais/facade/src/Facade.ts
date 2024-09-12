import {
  AudioMixer,
  BitrateReader,
  CodecFactory,
  MPEG4CompressionCodec,
  OggCompressionCodec,
  VideoFile,
  File,
} from "./FrameworkAudioVisual";

class VideoConverter {
  convert(filename: string, format: string): File {
    const file = new VideoFile(filename, format);
    const sourceCodec = new CodecFactory().extract(file);
    let destinationCodec;
    if (format == "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }
    const buffer = BitrateReader.read(filename, sourceCodec);
    const [resultName, resultFormat] = BitrateReader.convert(buffer, destinationCodec);
    const converted = new AudioMixer().fix(resultName, resultFormat);
    console.log("arquivo convertido");
    
    return new File(converted.filename, converted.format);
  }
}

export { VideoConverter }