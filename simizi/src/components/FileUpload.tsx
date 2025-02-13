import React, { useState } from 'react';
import client from './ContentfulClient';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`https://upload.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/uploads`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log('File uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
