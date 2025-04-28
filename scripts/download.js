document.addEventListener("DOMContentLoaded", () => {
    const downloadCVButton = document.querySelector(".btn-primary");

    downloadCVButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default action

        const link = document.createElement("a");
        link.href = "AbrarJahinCV.pdf"; // Relative path to your PDF file
        link.download = "AbrarJahinCV.pdf"; // The name of the file when it's downloaded

        // Append the link, click it programmatically, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert("CV Download Initiated");
    });
});
