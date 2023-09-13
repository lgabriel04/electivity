import React, { useState, useRef } from 'react';
import './scan.css';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

const Scan = () => {
  const [title, setTitle] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const webcamRef = useRef(null);

  const handleScanClick = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
  
    // Preprocess the image if needed (crop, filters, brightness/contrast adjustments).
    
    const { data: { text } } = await Tesseract.recognize(imageSrc, 'eng', {
      tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', // Adjust as needed
    });
  
    setRecognizedText(text);
  };
  

  const sendEmail = () => {
    const userTitle = title;
    const userMessage = recognizedText;

    if (userEmail && userTitle && userMessage) {
      // Use a mailto link to open the user's email client
      const mailtoLink = `mailto:${userEmail}?subject=${userTitle}&body=${userMessage}`;
      window.location.href = mailtoLink;

      setShowSuccessModal(true);
      setTitle('');
      setRecognizedText('');
      setUserEmail('');
    } else {
      console.error('Email, title, or message is missing.');
    }
  };

  return (
    <div className="scan-container">
             {showSuccessModal && (
        <div className="success-modal">
          Your notes have been sent to your email already!
        </div>
      )}
      <div className="webcam-container">
        <button className="scan-button" onClick={handleScanClick}>
          SCAN
        </button>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
      <div className="card" style={{ backgroundColor: '#D9D9D9' }}>
        <input
          type="text"
          placeholder="Input your AdDU email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{ backgroundColor: '#080101', color: 'white' }}
        />
        <input
          type="text"
          placeholder="TITLE OF YOUR NOTES"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ backgroundColor: '#080101', color: 'white' }}
        />
        <textarea
          rows="4"
          placeholder="BODY OF YOUR MESSAGE"
          value={recognizedText}
          onChange={(e) => setRecognizedText(e.target.value)}
          style={{ backgroundColor: '#080101', color: 'white' }}
        />
        <button className="submit-button" onClick={sendEmail}>
          SUBMIT
        </button>
      </div>

    </div>
  );
};

export default Scan;
