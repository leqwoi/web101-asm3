const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function verifyEmail() {
    const email = document.getElementById('email-input');
    console.log(`Inputted email: ${email.value}.`);

    const emailValid = emailRegex.test(email.value);
    if (!emailValid) console.log('Email invalid!');
    else {
        console.log('Email valid!');

        const ctnInfo = document.getElementById('info-full-ctn');
        const ctnInput = document.getElementById('email-input-ctn');

        ctnInfo.style.display = 'block';
        ctnInput.style.display = 'none';
    }
}

function toggleCardVisibility(cardId) {
    const card = document.getElementById(cardId);
    const btn = document.getElementById('btn-' + cardId);

    card.style.display = card.style.display === 'block' ? 'none' : 'block';
    btn.innerHTML = (btn.innerHTML === 'Show Less' ? 'Show More' : 'Show Less');

    console.log(`Toggle card ${cardId} to ${card.style.display}!`);
}