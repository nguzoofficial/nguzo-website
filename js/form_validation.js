const form = $('#contact-form');
const formOk = $('#form-ok');
const formError = $('#form-error');
const emailInput = $('#f-email');
const emailFeedback = $('#email-feedback');

/* beginning of email validation logic with bouncer api hidden by cloudflare */

const EMAIL_VALIDATOR_URL = 'https://nguzo-email-verifier.clarkniyonzima.workers.dev';

const setEmailStatus = (type, message) => {
    if (!emailFeedback || !emailInput) return;
    emailFeedback.className = `email-feedback ${type}`.trim();
    emailFeedback.textContent = message;
    emailInput.classList.remove('is-valid', 'is-invalid');
    if (type === 'success') emailInput.classList.add('is-valid');
    if (type === 'error') emailInput.classList.add('is-invalid');
};

const getLocalizedMessage = (en, fr) => HTML.getAttribute('lang') === 'fr' ? fr : en;

form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form) return;

    formOk?.setAttribute('hidden', '');
    formError?.setAttribute('hidden', '');
    setEmailStatus('', '');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const emailValue = emailInput?.value.trim();
    if (!emailValue) return;

    submitButton?.setAttribute('disabled', '');
    setEmailStatus('loading', getLocalizedMessage(
        'Checking email address...',
        'Vérification de l\'adresse e-mail...'
    ));

    let allowSubmit = true;

    try {
        const response = await fetch(EMAIL_VALIDATOR_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailValue })
        });

        if (!response.ok) throw new Error('Validation request failed');
        const data = await response.json();

        const status = data.status || data.result ||
            (data.valid === true ? 'valid' : data.valid === false ? 'invalid' : undefined);
        const isValid = status === 'valid' || status === 'deliverable' || data.valid === true;
        const isInvalid = status === 'invalid' || status === 'undeliverable' || data.valid === false;

        if (isValid) {
            setEmailStatus('success', getLocalizedMessage(
                'This email appears to exist and looks valid.',
                'Cette adresse e-mail existe et semble valide.'
            ));
        } else if (isInvalid) {
            allowSubmit = false;
            setEmailStatus('error', getLocalizedMessage(
                'This email address does not appear to exist. Please check for typos.',
                'Cette adresse e-mail n’existe pas. Vérifiez les fautes de frappe.'
            ));
            emailInput?.focus();
        } else {
            setEmailStatus('warning', getLocalizedMessage(
                'Unable to verify the email right now. The message will still be sent.',
                'Impossible de vérifier l’adresse pour le moment. Le message sera quand même envoyé.'
            ));
        }
    } catch (error) {
        setEmailStatus('error', getLocalizedMessage(
            'Unable to check the email right now. Please try again.',
            'Impossible de vérifier l’adresse e-mail pour le moment. Veuillez réessayer.'
        ));
        allowSubmit = false;
    }

    if (!allowSubmit) {
        submitButton?.removeAttribute('disabled');
        return;
    }

    /* End of email validation logic and beginning of form submission with web3forms */

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });

        if (!response.ok) throw new Error('Form submission failed');
        form.reset();
        setEmailStatus('', '');
        formOk?.removeAttribute('hidden');
    } catch (error) {
        console.error('Contact form submit error:', error);
        formError?.removeAttribute('hidden');
    } finally {
        submitButton?.removeAttribute('disabled');
    }
});
