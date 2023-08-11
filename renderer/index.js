const downloadButton = document.getElementById('download-button');
const versionSelect = document.getElementById('version-select');

downloadButton.addEventListener('click', () => {
    const selectedVersion = versionSelect.value;
    if (selectedVersion === 'version1') {
        // Code pour télécharger la version 1
        window.location.href = 'lien_vers_version_1';
    } else if (selectedVersion === 'version2') {
        // Code pour télécharger la version 2
        window.location.href = 'lien_vers_version_2';
    } else if (selectedVersion === 'version3') {
        // Code pour télécharger la version 3
        window.location.href = 'lien_vers_version_3';
    }
});