class File {
  filename: string;
  extention: string;
  constructor(filename: string, extention: string) {
    this.filename = filename;
    this.extention = extention;
  }
  save() {
    console.log(`${this.filename}.${this.extention} salvo 👍`);
  }
}

class VideoFile extends File {}
class Codec {
  extention: string = "";
}

class OggCompressionCodec extends Codec {
  extention: string = "ogg";
}

class MPEG4CompressionCodec extends Codec {
  extention: string = "mp4";
}

class CodecFactory {
  extract(file: VideoFile) {
    return new Codec();
  }
}
class Buffer {
  filename: string;
  constructor(filename: string) {
    this.filename = filename;
  }
}

class BitrateReader {
  static read(filename: string, sourceCodec: Codec) {
    return new Buffer(filename);
  }
  static convert(buffer: Buffer, codec: Codec) {
    const newFilename = buffer.filename.slice(0, -4)
    return [newFilename, codec.extention];
  }
}

class AudioMixer {
  fix(filename: string, format: string) {
    return {
      filename: "converted_" + filename,
      format,
    };
  }
}

export {
  VideoFile,
  OggCompressionCodec,
  MPEG4CompressionCodec,
  CodecFactory,
  BitrateReader,
  AudioMixer,
  File,
};
