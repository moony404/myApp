const versionSelect = document.getElementById('versionSelect');
const resultDiv = document.getElementById('result');

versionSelect.addEventListener('change', () => {
  const selectedVersion = versionSelect.value;
  resultDiv.textContent = `Vous avez choisi la ${selectedVersion}.`;
});