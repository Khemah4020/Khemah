
document.addEventListener("DOMContentLoaded", () => {

    /* CONTACT FORM */

    const emailToggle = document.getElementById("email-toggle");
    const contactForm = document.getElementById("contact-form");

    if (emailToggle && contactForm) {
        emailToggle.addEventListener("click", (event) => {
            event.preventDefault();

            contactForm.hidden = !contactForm.hidden;

            emailToggle.setAttribute(
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

    /* FORM SUBMISSION */

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
                    formStatus.textContent =
                        "Message sent successfully.";

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

    /* GREEN MOUSE GLOW */

    const canUseMouse = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    if (canUseMouse) {
        const mouseGlow = document.createElement("div");

        mouseGlow.className = "mouse-glow";
        document.body.appendChild(mouseGlow);

        window.addEventListener("pointermove", (event) => {
            mouseGlow.style.left = `${event.clientX}px`;
            mouseGlow.style.top = `${event.clientY}px`;

            mouseGlow.classList.add("visible");
        });

        document.addEventListener("mouseleave", () => {
            mouseGlow.classList.remove("visible");
        });

        document.addEventListener("mouseenter", () => {
            mouseGlow.classList.add("visible");
        });
    }

});
