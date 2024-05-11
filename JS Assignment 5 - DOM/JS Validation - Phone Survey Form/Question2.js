function ageChange(e) {
    let age = e.target.value;
    let errorsHolder = document.getElementById('errors-holder');
    let submitButton = document.querySelector('button[type="submit"]');
    if (age < 5) {
        errorsHolder.textContent = 'You need to be at least 5 years old to participate';
        submitButton.disabled = true;
    } else {
        errorsHolder.textContent = '';
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let age = document.getElementById('q_age').value;
    let ownsPhone = document.getElementById('q_owns_phone').checked;
    let resultHolder = document.getElementById('result-holder');
    if (ownsPhone) {
        if (age < 13) {
            resultHolder.textContent = 'You are too young to have a phone';
        } else {
            resultHolder.textContent = 'Use your phone in moderation';
        }
    } else {
        if (age < 13) {
            resultHolder.textContent = 'You will get a phone soon';
        } else {
            resultHolder.textContent = 'You should get a phone';
        }
    }
}
