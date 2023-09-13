// OCRService.js
import { createWorker } from 'tesseract.js';

const worker = createWorker();

export async function recognizeTextFromImage(imageSrc) {
  await worker.load();
  await worker.loadLanguage('eng'); // Replace with the language you downloaded
  await worker.initialize('eng'); // Replace with the language you downloaded
  const { data: { text } } = await worker.recognize(imageSrc);
  return text;
}

export async function terminateWorker() {
  await worker.terminate();
}
