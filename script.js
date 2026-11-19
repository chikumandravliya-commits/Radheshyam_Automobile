const WHATSAPP_NUMBER = "918502007794"; // Radheshyam Automobile contact number

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const vehicle = document.getElementById("vehicle").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("customerMessage").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !phone || !vehicle || !service) {
    feedback.textContent = "Please complete all required fields.";
    feedback.style.color = "#b42318";
    return;
  }

  const enquiry = [
    "Hello Radheshyam Automobile, Ajmer. I would like to enquire about a service.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Vehicle: ${vehicle}`,
    `Service: ${service}`,
    `Message: ${message || "Not provided"}`
  ].join("\\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  feedback.textContent = "WhatsApp is opening with your enquiry.";
  feedback.style.color = "#16803d";
});
