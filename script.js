let layer = document.querySelector(".layer");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	layer.style.left = value + "px";
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const data = [
        { Name: name, Email: email, Subject: subject, Message: message }
    ];
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "contact_data.xlsx");
    
    alert("Form submitted successfully!");
});
