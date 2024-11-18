const openFormBtn = document.getElementById('open-form-button');
const p = document.getElementById('p');
const closeBtn = document.querySelector('.close-button');
const form = document.getElementById('feedback-form');
const resultDiv = document.getElementById('feedback-result');

const localStorageKey = 'feedbackFormValues';

function openp() {
    p.style.display = 'flex';
    window.history.pushState({ p: true }, '', '#feedback-form');
    loadFormData();
}

function closep() {
    p.style.display = 'none';
    resultDiv.textContent = '';
    window.history.back();
}

function saveFormData() {
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        organization: form.organization.value,
        message: form.message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const { name, email, phone, organization, message } = JSON.parse(savedData);
        form.name.value = name || '';
        form.email.value = email || '';
        form.phone.value = phone || '';
        form.organization.value = organization || '';
        form.message.value = message || '';
    }
}

function clearFormData() {
    localStorage.removeItem(localStorageKey);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    resultDiv.textContent = 'Отправка формы...';
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formcarry.com/s/I6uGHP7kD0s', {
            method: 'POST',
            body: formData,
        });

            resultDiv.textContent = 'Форма успешно отправлена =)';
            clearFormData();
            form.reset();
        
    } catch (error) {
        resultDiv.textContent = 'Форма не отправилась =( Попробуйте позже';
    }
});

openFormBtn.addEventListener('click', openp);
closeBtn.addEventListener('click', closep);

window.addEventListener('popstate', (event) => {
    if (!event.state?.p) {
        closep();
    }
});

form.addEventListener('input', saveFormData)