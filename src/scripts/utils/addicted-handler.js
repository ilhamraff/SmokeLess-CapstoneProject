import swal from 'sweetalert';

/**
 * TesHandler adalah objek yang bertanggung jawab untuk menghitung tingkat
 * kecanduan berdasarkan jawaban dari sebuah tes.
 */
const TesHandler = {
  /**
   * Menghitung skor kecanduan berdasarkan jawaban pengguna pada form.
   * Jika semua pertanyaan belum dijawab, menampilkan pesan peringatan menggunakan SweetAlert.
   * Jika semua pertanyaan telah dijawab, menghitung skor kecanduan dan menampilkan hasil.
   */
  hitungKecanduan() {
    const questions = ['age', 'gender', 'education', 'occupation', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    let allAnswered = true;
    let firstUnanswered = null;

    // Memeriksa apakah semua pertanyaan telah dijawab
    questions.forEach((question) => {
      if (!document.querySelector(`input[name="${question}"]:checked`)) {
        allAnswered = false;
        if (!firstUnanswered) {
          firstUnanswered = question;
        }
      }
    });

    // Menampilkan peringatan jika ada pertanyaan yang belum dijawab
    if (!allAnswered) {
      swal({
        title: 'Harap isi semua pertanyaan.',
        text: 'Silakan lengkapi semua pertanyaan yang belum dijawab.',
        icon: 'warning',
        button: 'OK',
      }).then(() => {
        document.querySelector(`input[name="${firstUnanswered}"]`).scrollIntoView();
        document.querySelector(`input[name="${firstUnanswered}"]`).focus();
      });
      return;
    }

    let skor = 0;

    // Menghitung skor total berdasarkan jawaban yang dipilih
    questions.forEach((question) => {
      skor += parseInt(document.querySelector(`input[name="${question}"]:checked`).value);
    });

    let tingkatKecanduan = '';

    // Menentukan tingkat kecanduan berdasarkan skor total
    if (skor <= 2) {
      tingkatKecanduan = 'Ketergantungan rendah';
    } else if (skor <= 4) {
      tingkatKecanduan = 'Ketergantungan rendah sampai sedang';
    } else if (skor <= 7) {
      tingkatKecanduan = 'Ketergantungan sedang';
    } else {
      tingkatKecanduan = 'Ketergantungan tinggi';
    }

    const persentase = (skor / 11) * 100;

    let barClass = '';
    // Menentukan kelas progress bar berdasarkan skor total
    if (skor <= 2) {
      barClass = 'low';
    } else if (skor <= 4) {
      barClass = 'medium';
    } else if (skor <= 7) {
      barClass = 'medium';
    } else {
      barClass = 'high';
    }

    const progressBar = `<div class="progress-container animate__animated animate__slideInLeft">
                        <div class="progress-bar ${barClass}" style="width: ${persentase}%">
                            ${persentase.toFixed(2)}%
                        </div>
                    </div>`;

    // Menampilkan hasil skor kecanduan
    document.getElementById('hasilKecanduan').innerHTML = `Skor Anda: ${skor} - ${tingkatKecanduan} (${persentase.toFixed(2)}%)<br>${progressBar}`;
  },

  /**
   * Mengosongkan form dengan mengatur semua input radio dan checkbox menjadi tidak terpilih.
   * Mengatur ulang tampilan hasil skor kecanduan.
   */
  clearForm() {
    document.querySelectorAll('input[type="radio"],input[type="checkbox"]').forEach((radio) => {
      radio.checked = false;
    });

    document.getElementById('hasilKecanduan').innerHTML = 'Skor Anda: -';
  },
};

export default TesHandler;
