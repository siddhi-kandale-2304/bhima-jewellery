// Image Slider
let currentIndex = 0;
const slides = document.querySelector("#slides");
const totalSlides = document.querySelectorAll("#slides img").length;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigation Functions with Toaster.postMessage
function navigateToScheme() { 
  showToast("Navigating to Saving Scheme");
  Toaster.postMessage('navigateScheme');
}

function navigateToBankDetails() {
  showToast("Navigating to Bank Details");
  Toaster.postMessage('navigateBankDetails');
}

function navigateToKyc() {
  showToast("Navigating to KYC");
  Toaster.postMessage('navigateKyc');
}

function navigateToRate() {
  showToast("Navigating to Rate");
  Toaster.postMessage('navigateRate');
}

function navigateSchemeRecords() {
  showToast("Navigating to Scheme Records");
  Toaster.postMessage('navigateSchemeRecords');
}

function navigateToCustomerCard() {
  showToast("Navigating to Customer Card");
  Toaster.postMessage('navigateCustomerCard');
}

function navigateTransactionHistory() {
  showToast("Navigating to Transaction History");
  Toaster.postMessage('navigateTransactionHistory');
}

function navigateToMyOrder() {
  showToast("Navigating to My Order");
  Toaster.postMessage('navigateToMyOrder');
}

function navigateToUserProfile() {
  showToast("Navigating to User Profile");
  Toaster.postMessage('navigateToUserProfile');
}

function navigateToDigitalGold() {
  showToast("Navigating to Digital Gold");
  Toaster.postMessage('navigateToDigitalGold');
}

function navigateToPanchang() {
  showToast("Navigating to Panchang");
  Toaster.postMessage('navigateToPanchang');
}

function navigateToFeedback() {
  showToast("Navigating to Feedback");
  Toaster.postMessage('navigateToFeedback');
}

function navigateToSetting() {
  showToast("Navigating to Settings");
  Toaster.postMessage('navigateToSetting');
}

function setUserName(username) {
  document.getElementById("user-name-display").innerText = "Welcome, " + username;
}

function navigateToHomePage() {
  showToast("Navigating to Home Page");
  Toaster.postMessage('navigateToHomePage');
}
