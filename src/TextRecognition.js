// TextRecognition.js
import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

const TextRecognition = ({ imageSrc, onComplete }) => {
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    const recognizeText = async () => {
      try {
        const result = await Tesseract.recognize(imageSrc, 'eng', {
          logger: (info) => console.log(info),
        });
        setRecognizedText(result.data.text);
        onComplete(result.data.text);
      } catch (error) {
        console.error('Text recognition error:', error);
      }
    };

    if (imageSrc) {
      recognizeText();
    }
  }, [imageSrc, onComplete]);

  return (
    <div>
      {/* You can display the recognized text here if needed */}
    </div>
  );
};

export default TextRecognition;
