var xhr = new XMLHttpRequest();
xhr.onload = function() { 
    redirectToThanks()
};
xhr.onerror = function() {
    console.error('Error:', xhr.response);
    alert('Произошла какая-то ошибка. Мы обязательно ее решим! ' +
          'Просим вас связаться с нами по почте - info.estetika.agency@gmail.com.');
};
xhr.addEventListener("loadstart", function() {
    document.getElementById("loader").classList.add('loading');
    document.getElementById("loader-content").classList.add('loading-content');
});
xhr.addEventListener("loadend", function() {
    document.getElementById("loader").classList.remove('loading');
    document.getElementById("loader-content").classList.remove('loading-content');
});

function sendEmail(number, withName = false) {
    let nameInputId = 'name' + number;
    let inputId = 'phoneNumber' + number;
    let inputElement = document.getElementById(inputId);

    if (!checkPhoneNumberInputSize(inputElement.value)) {
        alert('Неверный телефонный номер! Недостаточное количество цифр!');
        return;
    }

    if (withName) {
        let nameInputElement = document.getElementById(nameInputId);
    
        if (!nameInputElement.value) {
            alert('Введите имя!');
            return;
        }
    }

    let formData = {"phoneNumber": inputElement.value};
    
    if (withName) {
        let nameInputElement = document.getElementById(nameInputId);

        formData.name = nameInputElement.value;
    }

    xhr.open('POST', getMailerUrl());
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));
}

function redirectToThanks() {
    let aLink = document.createElement('a');
    aLink.href = "./thanks.html"
    aLink.click()
}

function checkPhoneNumberInputSize(phoneNumber) {
    return phoneNumber.length === 18;
}

function getMailerUrl() {
    return (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 
                "http://127.0.0.1:8000/mailer.php" : 
                "https://estetika.agency/mailer.php";
}