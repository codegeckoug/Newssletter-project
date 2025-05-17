const newsForm = document.getElementById("news-form");
const newsWrapper = document.getElementById("news-wrapper");
const submitBtn = document.getElementById("submit-btn");
newsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newsFormData = new FormData(newsForm);
  const email = newsFormData.get("email");
  document.querySelector(".success-message").style.display = "block";

  newsWrapper.style.display = "none";
  document.querySelector(".success-message").querySelector("strong").innerText =
    email;
});
