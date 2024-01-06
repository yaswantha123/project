const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', () => {23
  dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('highlight');
  const files = event.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  handleFiles(files);
});

function handleFiles(files) {
  fileList.innerHTML = '';
  for (const file of files) {
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');
    fileItem.textContent = `${file.name} (${formatSize(file.size)})`;
    fileList.appendChild(fileItem);
  }
}
function formatSize(size) {
  if (size < 1024) {
    return size + ' B';
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  } else {
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }
}

