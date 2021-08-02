import fs from "fs";
import { synthesize } from "./tts";

describe("tts", () => {
  it("save audio to file", async () => {
    const audioBase64 = await synthesize("こんにちは");
    fs.writeFileSync(
      "./test-audio.tmp.mp3",
      Buffer.from(audioBase64, "base64")
    );
  });
});
