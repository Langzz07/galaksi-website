const scriptURL = 'https://script.google.com/macros/s/AKfycbxtzT_ZpKG1GOIsa-_MjIdUK17ZoFXUo98qBoDvIZ12omuMSgqIiVRF207f5BFv6diQSg/exec';
const form = document.forms['data-form'];
const loadingElement = document.getElementById('loading');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Menampilkan elemen loading
  loadingElement.style.display = 'block';

  // Menonaktifkan tombol submit
  submitButton.disabled = true;
  submitButton.innerText = 'Submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("Thank you! Your form has been submitted successfully.");
    })
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('There was an error submitting your form.');
    })
    .finally(() => {
      // Sembunyikan elemen loading jika diperlukan
      loadingElement.style.display = 'none';

      // Mengaktifkan kembali tombol submit jika diperlukan
      submitButton.disabled = false;
      submitButton.innerText = 'Submit';
    });
});