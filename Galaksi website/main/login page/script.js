document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("overlay");
  const loading = document.getElementById("loading");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxtzT_ZpKG1GOIsa-_MjIdUK17ZoFXUo98qBoDvIZ12omuMSgqIiVRF207f5BFv6diQSg/exec';
  const form = document.forms['data-form'];
  const loadingElement = document.getElementById('loading');
  const submitButton = document.getElementById('submit-btn');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Menampilkan elemen loading dan overlay
      showLoading();

      // Menonaktifkan tombol submit
      submitButton.disabled = true;
      submitButton.innerText = 'Submitting...';

      // Mengirim data form menggunakan fetch
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
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
              // Sembunyikan elemen loading dan overlay
              hideLoading();

              // Mengaktifkan kembali tombol submit
              submitButton.disabled = false;
              submitButton.innerText = 'Submit';
          });
  });

  function showLoading() {
      overlay.style.display = "block";
      loading.style.display = "block";
      setTimeout(() => {
          overlay.style.opacity = "1"; // Tambahkan opasitas untuk fade in
      }, 10);
  }

  function hideLoading() {
      overlay.style.opacity = "0"; // Kurangi opasitas untuk fade out
      setTimeout(() => {
          overlay.style.display = "none";
          loading.style.display = "none";
      }, 300);
  }
});
