import { getAudioBase64 } from "google-tts-api";

const lang = "ja";

// 引数に応じて音声を合成する
export const synthesize = async (text: string) => {
  return getAudioBase64(text, { lang });
};
