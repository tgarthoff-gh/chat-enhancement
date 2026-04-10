// script.js
document.getElementById('upload-btn').onclick = function() {
    const input = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const listItem = document.createElement('li');
        listItem.textContent = `Uploaded: ${file.name}`;
        fileList.appendChild(listItem);
    }
};