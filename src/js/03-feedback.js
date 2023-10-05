import throttle from "lodash.throttle";

const formFeedback = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const localeStorageKey = "feedback-form-state";

formFeedback.addEventListener("input", throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    localStorage.setItem(localeStorageKey, JSON.stringify(formData));
}, 500));

formFeedback.addEventListener("submit", event => {
    event.preventDefault();
    formFeedback.reset();
});

window.addEventListener("load", () => {
    const formData = localStorage.getItem(localeStorageKey);
    if (formData) {
        const { email, message } = JSON.parse(formData);
        emailInput.value = email;
        messageInput.value = message;
    };
});
