// Tombol cerita: contoh onclick, variabel, dan getElementById.
function bukaCerita() {
  let cerita = "<p>Awalnya kami cuma sering ngobrol dan ketemu di acara keluarga. " +
               "Lama-lama jadi makin akrab. Sekarang kami ingin memulai cerita baru, " +
               "tetap dengan suasana sederhana yang kami suka.</p>";

  document.getElementById("teksCerita").innerHTML = cerita;
  document.getElementById("tombolCerita").innerHTML = "Cerita sudah dibaca";
}
