import React, { useState } from 'react';

function Resume() {
const [selectedFile, setSelectedFile] = useState('');

const onFileChange = event => {
setSelectedFile(event.target.files[0]);
};

const onFileUpload = () => {
const formData = new FormData();
formData.append('file', selectedFile);

fetch('https://path/to/api', {
method: 'POST',
body: formData,
})
.then(response => response.json())
.then(success => {
console.log(success);
})
.catch(error => {
console.error(error);
});
};

return (
<div>
<h1>File Upload using React</h1>
<h1>File Upload using React</h1>
<h1>upload C.V</h1>

<input type="file" onChange={onFileChange} />
<button onClick={onFileUpload}>Upload!</button>
</div>
);
}

export default Resume;