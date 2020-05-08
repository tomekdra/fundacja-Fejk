
document.getElementById('sendQ').addEventListener('submit', event => {
    event.preventDefault();

    const error = validate();
    if(error === '') {
        sendByAjax();
    }
    else {
        document.querySelector('#response').innerHTML = `Error: ${error}`;
    }

});

function validate() {

    let err = '';

    if(question.value.length <= 10) {
        err = "Message jest za krotkie";
    }

    if(question.value.length === 0) {
        err = "Empty message";
    }
    return err;
}

function sendByAjax() {

    const formdata = new FormData();
    formdata.append('name', document.getElementById('name').value);
    formdata.append('email', document.getElementById('email').value);
    formdata.append('msg', document.getElementById('msg').value);

    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if(xhr.status === 200) {
            document.querySelector('#response').innerHTML = `MSG ${this.responseText}`;
        }
    };
    xhr.open('POST', 'question.php', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(formdata);
}