const downloadBtn = document.getElementById('download_top');
downloadBtn.addEventListener('click', () => {
  const fileUrl = 'https://example.com/file.pdf'; // Replace with the URL of the file you want to download
  const fileName = 'myfile.pdf'; // Replace with the desired name of the downloaded file
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});