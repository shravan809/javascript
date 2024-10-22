function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const address=document.getElementById('address').value;
    const idProof = document.getElementById('idProof').value;
    const proofNumber = document.getElementById('proofNumber').value;

    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = '';

    if (!name || !dob || !contact || !address || !idProof || !proofNumber) {
        errorMessage.innerHTML = 'Please fill in all fields.';
        return;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        errorMessage.innerHTML = 'Contact number should be a valid 10-digit number.';
        return;
    }

    // alert(`Thank you, ${name}! piligrim added successful.`);
    document.getElementById('pilgrimForm').reset();
    
    // document.getElementById('formContainer').classList.add('hidden');
    const timestamp = new Date().getTime().toString();
    const para=document.getElementById("time");
    para.innerHTML= [name, new Date(parseInt(timestamp))];

    JsBarcode("#barcode", name, {
        format: "CODE128",
        lineColor: "#000",
        quiet: 1,
        width: 2,
        height: 100,
        displayValue: false,
    });

    // Show the barcode and "Register Another" button
    // document.getElementById('barcodeContainer').classList.remove('hidden');
    // document.getElementById('registerAnother').classList.remove('hidden');
}

// function registerAnother() {
//     // Reset the form
//     document.getElementById('pilgrimForm').reset();

//     // Hide the barcode and "Register Another" button, show the form again
//     document.getElementById('barcodeContainer').classList.add('hidden');
//     document.getElementById('registerAnother').classList.add('hidden');
//     document.getElementById('formContainer').classList.remove('hidden');

// }
