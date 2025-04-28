document.addEventListener("DOMContentLoaded", () => {
    const downloadCVButton = document.querySelector(".btn-primary");
    const downloadCVButtonById = document.getElementById('download-cv-btn');

    if (downloadCVButton) {
        downloadCVButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default action

            const link = document.createElement("a");
            link.href = "AbrarJahinCV.pdf"; // Relative path to your PDF file
            link.download = "AbrarJahinCV.pdf"; // The name of the file when it's downloaded

            // Append the link, click it programmatically, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // SweetAlert2 notification for download
            Swal.fire({
                icon: 'success',
                title: 'Download Started!',
                text: 'Your CV is now downloading!',
                timer: 2000,
                showConfirmButton: false
            });
        });
    }

    if (downloadCVButtonById) {
        downloadCVButtonById.addEventListener("click", function (e) {
            e.preventDefault();

            const link = document.createElement("a");
            link.href = "AbrarJahinCV.pdf"; // Same CV file
            link.download = "AbrarJahinCV.pdf";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // SweetAlert2 notification for download
            Swal.fire({
                icon: 'success',
                title: 'Download Started!',
                text: 'Your CV is now downloading!',
                timer: 2000,
                showConfirmButton: false
            });
        });
    }
});
