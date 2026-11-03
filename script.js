```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* CONTACT FORM */

    const emailToggle = document.getElementById("email-toggle");
    const contactForm = document.getElementById("contact-form");

    if (emailToggle && contactForm) {
        emailToggle.addEventListener("click", function (event) {
            event.preventDefault();

            contactForm.hidden = !contactForm.hidden;

            this.setAttribute(
                "aria-expanded",
                String(!contactForm.hidden)
            );

            if (!contactForm.hidden) {
                contactForm.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });
    }


    /* CONTACT FORM SUBMISSION */

    const sendButton = document.getElementById("send-button");
    const formStatus = document.getElementById("form-status");

    if (contactForm && sendButton && formStatus) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            sendButton.disabled = true;
            sendButton.textContent = "Sending...";
            formStatus.textContent = "";

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (response.ok) {
                    formStatus.textContent = "Message sent successfully.";
                    contactForm.reset();
                } else {
                    formStatus.textContent =
                        "Something went wrong. Please try again.";
                }
            } catch (error) {
                formStatus.textContent =
                    "Connection error. Please try again.";
            }

            sendButton.disabled = false;
            sendButton.textContent = "Send Message ↗";
        });
    }

});
```
