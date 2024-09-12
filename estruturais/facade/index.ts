import { VideoConverter } from "./src/Facade";

const convertor = new VideoConverter();
const mp4 = convertor.convert("funny-cat-video.ogg", "mp4");
mp4.save();
