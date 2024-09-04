import emailjs from "@emailjs/browser"

document.addEventListener("DOMContentLoaded", () => {
  const contactForm: HTMLFormElement = document.querySelector("[data-hook~=contact-form]")
  const contactFormInput: HTMLInputElement = document.querySelector("[data-hook~=contact-form-input]")
  const contactFormButton: HTMLButtonElement = document.querySelector("[data-hook~=contact-form-button]")

  emailjs.init({
    publicKey: "8eSQgNnIRsZNnBxxa",
  })

  contactForm.addEventListener("submit", e => {
    e.preventDefault()

    contactFormButton.disabled = true

    emailjs.send("service_6qx1aoa", "template_e00qbes", { message: contactFormInput.value }).then(
      () => {
        console.log("SUCCESS!")
        contactFormButton.disabled = false
      },
      error => {
        console.log("FAILED...", error)
        contactFormButton.disabled = false
      },
    )
  })
})
