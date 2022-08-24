const form = document.querySelector('#generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // console.log(url, size);
    //VALIDATION
    if (url === '') {
        alert('Please enter a URL')
    }
    else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
        }, 1000);
    }
};
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
    // document.getElementById('spinner').style.display = 'none';
}
const hideSpinner = () => {
    // document.getElementById('spinner').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
}
hideSpinner();
form.addEventListener('submit', onGenerateSubmit);