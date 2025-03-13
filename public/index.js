document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const message = document.getElementById("message");

    if (fileInput.files.length === 0) {
        message.textContent = "Please select a file to upload.";
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        message.textContent = result.message;

        if (response.ok) {
            message.style.color = "green";
        } else {
            message.style.color = "red";
        }
    } catch (error) {
        message.textContent = "Upload failed. Try again.";
        message.style.color = "red";
    }
});
