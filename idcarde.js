document.getElementById('idCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const organization = document.getElementById('organization').value;
    const photo = document.getElementById('photo').files[0];

    const idCardPreview = document.getElementById('idCardPreview');
    const photoPreview = document.getElementById('photoPreview');
    const infoPreview = document.getElementById('infoPreview');

    // Display preview
    idCardPreview.classList.remove('hidden');
    photoPreview.innerHTML = `<img src="${URL.createObjectURL(photo)}" alt="Photo">`;
    infoPreview.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Title:</strong> ${jobTitle}</p>
        <p><strong>Organization:</strong> ${organization}</p>
    `;
});

function printIDCard() {
    const idCardPreview = document.getElementById('idCardPreview').innerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.body.innerHTML = idCardPreview;
    newWindow.print();
}
