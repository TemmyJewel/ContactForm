const form = document.getElementById('contactform');
const errorbox = document.getElementById('errorbox');

form.addEventListener("submit", function(e){
    e.preventDefault();//stops from submitting
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];

    //Error Checking
    if(name === "") errors.push('Name is required');
    if(email === "") {
            errors.push('Email is required');
        }else if(!email.includes("@") || !email.includes(".")) {
            errors.push('Enter a valid email');
        }
    if(message === "") errors.push('Message is required');

    if(errors.length > 0){
        errorbox.innerHTML = errors.join("<br>");
        errorbox.style.color = "red";
        return;
    }else {
        errorbox.innerHTML = "";

        const formData = new FormData(form);

        fetch("contact.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(data => {
            errorbox.style.color = "green";
            errorbox.innerHTML = data;
        })
        .catch(err => {
            console.error("Fetch error:", err);
            errorbox.style.color = "red";
            errorbox.innerHTML = "Something went wrong. Please try again.";
        });
    }
});

