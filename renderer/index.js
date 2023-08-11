const versionSelect = document.getElementById('versionSelect');
const resultDiv = document.getElementById('result');

versionSelect.addEventListener('change', () => {
  const selectedVersion = versionSelect.value;
  resultDiv.textContent = `Vous avez choisi la ${selectedVersion}.`;
  if (selectedVersion == 'ZapoomC_v1.2') {

  }
});