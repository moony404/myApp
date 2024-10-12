const downloadButton = document.getElementById('download-button');
const versionSelect = document.getElementById('version-select');

downloadButton.addEventListener('click', () => {
    const selectedVersion = versionSelect.value;
    if (selectedVersion === 'ZapoomC_v1.2') {
        // Code pour télécharger la version 1
        window.location.href = 'downSrc/ZapoomC_v1.2';
    } else if (selectedVersion === 'ZapoomC_v1.3') {
        // Code pour télécharger la version 2
        window.location.href = 'downSrc/test.txt';
    }
});