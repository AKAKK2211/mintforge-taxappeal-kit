/* TaxAppeal Kit — savings calculator */
const $ = (s) => document.querySelector(s);
$('#calcBtn').addEventListener('click', () => {
  const rate = Number($('#rate').value);
  const assessed = Number($('#assessed').value);
  const market = Number($('#market').value);
  if (!rate || !assessed || !market || market >= assessed) {
    $('#calcOut').textContent = 'Enter all three values — and market value should be below assessed value to see savings.';
    $('#calcOut').style.color = '#c0392b';
    return;
  }
  const overAssessment = assessed - market;
  const annualSavings = overAssessment * (rate / 100);
  const fiveYear = annualSavings * 5;
  $('#calcOut').style.color = '#00b368';
  $('#calcOut').innerHTML =
    `Potential annual savings: <b>$${annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</b><br>` +
    `Potential 5-year savings (if assessment stays corrected): <b>$${fiveYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</b><br>` +
    `<span style="font-weight:400;font-size:13px;color:#5c6672">Estimate only — actual results depend on your county, evidence and appeal outcome.</span>`;
});
