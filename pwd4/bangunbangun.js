// Mengambil elemen tombol dari DOM
const backToTopBtn = document.getElementById("btnBackToTop");

// Mendengarkan event scroll pada window
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Memeriksa jika posisi scroll sudah melewati 500px
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

// Memberikan fungsi klik pada tombol untuk kembali ke atas halaman
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Membuat efek scroll menjadi halus/smooth
    });
});