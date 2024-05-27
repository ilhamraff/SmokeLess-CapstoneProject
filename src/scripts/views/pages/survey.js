const Survey = {
    async render() {
      return `
      <section class="survey-description">
            <div class="content-one">
                <h1 class="judul1">Ukur Tingkat Kecanduan Anda</h1>
                <p id="p1">Kami akan  membantu Anda mengukur tingkat kecanduan nikotin Anda. 
                    Menggunakan Fagerström Test for Nicotine Dependence (FTND), 
                    kami dapat memberikan gambaran yang lebih jelas tentang 
                    seberapa kuat ketergantungan Anda terhadap rokok. 
                    Tes ini mudah dilakukan dan hanya membutuhkan beberapa menit untuk diisi.</p>
            </div>
            <div class="content-two">
                <h1 class="juduk2">Apakah Anda Seorang Perokok ?</h1>
                <button class="true">Ya, Saya Seorang Perokok</button>
                <button class="false">Tidak, Saya Tidak Perokok</button>
            </div>
        </section>

         <!-- Form Perokok -->
         <section id="formPerokok" class="form-section">
            <h2>Formulir Perokok</h2>
            <form>
               
              <p>1. Usia:</p>
              <input type="radio" name="age" value="under18" /> Di bawah 18 tahun<br />
              <input type="radio" name="age" value="18-24" /> 18-24 tahun<br />
              <input type="radio" name="age" value="25-34" /> 25-34 tahun<br />
              <input type="radio" name="age" value="35-44" /> 35-44 tahun<br />
              <input type="radio" name="age" value="45-54" /> 45-54 tahun<br />
              <input type="radio" name="age" value="55-64" /> 55-64 tahun<br />
              <input type="radio" name="age" value="65plus" /> 65 tahun ke atas<br /><br />
              
              <p>2. Jenis Kelamin:</p>
              <input type="radio" name="gender" value="male" /> Laki-laki<br />
              <input type="radio" name="gender" value="female" /> Perempuan<br />
              <input type="radio" name="gender" value="other" /> Lainnya<br /><br />
              
              <p>3. Status Pendidikan:</p>
              <input type="radio" name="education" value="none" /> Tidak/belum sekolah<br />
              <input type="radio" name="education" value="elementary" /> SD/Sederajat<br />
              <input type="radio" name="education" value="junior_high" /> SMP/Sederajat<br />
              <input type="radio" name="education" value="senior_high" /> SMA/Sederajat<br />
              <input type="radio" name="education" value="diploma" /> Diploma<br />
              <input type="radio" name="education" value="bachelor" /> Sarjana (S1)<br />
              <input type="radio" name="education" value="postgraduate" /> Pascasarjana (S2/S3)<br /><br />
              
              <p>4. Pekerjaan:</p>
              <input type="radio" name="occupation" value="student" /> Pelajar/Mahasiswa<br />
              <input type="radio" name="occupation" value="private_employee" /> Pegawai Swasta<br />
              <input type="radio" name="occupation" value="civil_servant" /> Pegawai Negeri<br />
              <input type="radio" name="occupation" value="entrepreneur" /> Wirausaha<br />
              <input type="radio" name="occupation" value="freelancer" /> Pekerja Lepas/Freelancer<br />
              <input type="radio" name="occupation" value="unemployed" /> Tidak bekerja<br />
              <input type="radio" name="occupation" value="other" /> Lainnya<br /><br />

              <p>5. Berapa banyak Anda merokok dalam sehari?</p>
              <input type="radio" name="q1" value="0" /> < 10 batang/hari<br />
              <input type="radio" name="q1" value="1" /> 11-20 batang/hari<br />
              <input type="radio" name="q1" value="2" /> 21-30 batang/hari<br />
              <input type="radio" name="q1" value="3" /> >30 batang/hari<br /><br />
          
              <p>6. Seberapa cepat Anda merokok setelah bangun tidur?</p>
              <input type="radio" name="q2" value="2" /> 5 menit setelah bangun tidur<br />
              <input type="radio" name="q2" value="1" /> 6-30 menit setelah bangun tidur<br />
              <input type="radio" name="q2" value="0" /> > 30 menit setelah bangun tidur<br /><br />
          
              <p>7. Apakah Anda merasa kesulitan untuk tidak merokok di “no smoking area”?</p>
              <input type="radio" name="q3" value="1" /> Ya<br />
              <input type="radio" name="q3" value="0" /> Tidak<br /><br />
          
              <p>8. Apakah Anda kesulitan untuk tidak merokok di pagi hari?</p>
              <input type="radio" name="q4" value="1" /> Ya<br />
              <input type="radio" name="q4" value="0" /> Tidak<br /><br />
          
              <p>9. Apakah Anda lebih sering merokok saat bekerja/belajar daripada saat jam istirahat?</p>
              <input type="radio" name="q5" value="1" /> Ya<br />
              <input type="radio" name="q5" value="0" /> Tidak<br /><br />
          
              <p>10. Apakah Anda masih merokok saat sakit?</p>
              <input type="radio" name="q6" value="1" /> Ya<br />
              <input type="radio" name="q6" value="0" /> Tidak<br /><br />
            
              <button type="button" class="hitung">Hitung Kecanduan</button>
              <button type="button" class="clear">Bersihkan Jawaban</button>
              <button class="close-button">Tutup</button> 
                  
            </form>
            <h2>Hasil Kecanduan:</h2>
            <p id="hasilKecanduan">Skor Anda: -</p>
          </section>          
        
          <!-- Form Bukan Perokok -->
          <section id="formNonPerokok" class="form-section">
              <h2>Formulir Bukan Perokok</h2>
              <form>
                  
                <p>1. Usia:</p>
                <input type="radio" name="age" value="under18" /> Di bawah 18 tahun<br />
                <input type="radio" name="age" value="18-24" /> 18-24 tahun<br />
                <input type="radio" name="age" value="25-34" /> 25-34 tahun<br />
                <input type="radio" name="age" value="35-44" /> 35-44 tahun<br />
                <input type="radio" name="age" value="45-54" /> 45-54 tahun<br />
                <input type="radio" name="age" value="55-64" /> 55-64 tahun<br />
                <input type="radio" name="age" value="65plus" /> 65 tahun ke atas<br /><br />
                
                <p>2. Jenis Kelamin:</p>
                <input type="radio" name="gender" value="male" /> Laki-laki<br />
                <input type="radio" name="gender" value="female" /> Perempuan<br />
                <input type="radio" name="gender" value="other" /> Lainnya<br /><br />
                
                <p>3. Status Pendidikan:</p>
                <input type="radio" name="education" value="none" /> Tidak/belum sekolah<br />
                <input type="radio" name="education" value="elementary" /> SD/Sederajat<br />
                <input type="radio" name="education" value="junior_high" /> SMP/Sederajat<br />
                <input type="radio" name="education" value="senior_high" /> SMA/Sederajat<br />
                <input type="radio" name="education" value="diploma" /> Diploma<br />
                <input type="radio" name="education" value="bachelor" /> Sarjana (S1)<br />
                <input type="radio" name="education" value="postgraduate" /> Pascasarjana (S2/S3)<br /><br />
                
                <p>4. Pekerjaan:</p>
                <input type="radio" name="occupation" value="student" /> Pelajar/Mahasiswa<br />
                <input type="radio" name="occupation" value="private_employee" /> Pegawai Swasta<br />
                <input type="radio" name="occupation" value="civil_servant" /> Pegawai Negeri<br />
                <input type="radio" name="occupation" value="entrepreneur" /> Wirausaha<br />
                <input type="radio" name="occupation" value="freelancer" /> Pekerja Lepas/Freelancer<br />
                <input type="radio" name="occupation" value="unemployed" /> Tidak bekerja<br />
                <input type="radio" name="occupation" value="other" /> Lainnya<br /><br />
                
                <p>5. Apakah Anda pernah merokok?</p>
                <input type="radio" name="smoked_before" value="yes" /> Ya<br />
                <input type="radio" name="smoked_before" value="no" /> Tidak<br /><br />
                
                <p>6. Jika pernah, berapa lama Anda merokok sebelum berhenti?</p>
                <input type="radio" name="smoking_duration" value="less_than_1" /> Kurang dari 1 tahun<br />
                <input type="radio" name="smoking_duration" value="1-2" /> 1-2 tahun<br />
                <input type="radio" name="smoking_duration" value="3-5" /> 3-5 tahun<br />
                <input type="radio" name="smoking_duration" value="more_than_5" /> Lebih dari 5 tahun<br />
                <input type="radio" name="smoking_duration" value="never" /> Tidak pernah merokok<br /><br />
                
                <p>7. Apa alasan utama Anda tidak merokok atau berhenti merokok? (Pilih semua yang sesuai)</p>
                <input type="checkbox" name="reason" value="health" /> Kesehatan<br />
                <input type="checkbox" name="reason" value="economic" /> Ekonomi/Biaya<br />
                <input type="checkbox" name="reason" value="family_friends" /> Pengaruh keluarga/teman<br />
                <input type="checkbox" name="reason" value="dislike" /> Tidak suka bau/rasanya<br />
                <input type="checkbox" name="reason" value="social" /> Faktor sosial<br />
                <input type="checkbox" name="reason" value="other" /> Lainnya<br /><br />
                
                <p>8. Seberapa sering Anda terkena paparan asap rokok?</p>
                <input type="radio" name="exposure" value="daily" /> Setiap hari<br />
                <input type="radio" name="exposure" value="weekly" /> Beberapa kali dalam seminggu<br />
                <input type="radio" name="exposure" value="monthly" /> Beberapa kali dalam sebulan<br />
                <input type="radio" name="exposure" value="rarely" /> Jarang sekali<br />
                <input type="radio" name="exposure" value="never" /> Tidak pernah<br /><br />
                
                <p>9. Bagaimana pandangan Anda tentang merokok di tempat umum?</p>
                <input type="radio" name="public_smoking" value="strongly_agree" /> Sangat setuju<br />
                <input type="radio" name="public_smoking" value="agree" /> Setuju<br />
                <input type="radio" name="public_smoking" value="neutral" /> Netral<br />
                <input type="radio" name="public_smoking" value="disagree" /> Tidak setuju<br />
                <input type="radio" name="public_smoking" value="strongly_disagree" /> Sangat tidak setuju<br /><br />
                
                <p>10. Apakah Anda merasa nyaman berada di lingkungan bebas rokok?</p>
                <input type="radio" name="comfortable_smoke_free" value="very_comfortable" /> Sangat nyaman<br />
                <input type="radio" name="comfortable_smoke_free" value="comfortable" /> Nyaman<br />
                <input type="radio" name="comfortable_smoke_free" value="neutral" /> Netral<br />
                <input type="radio" name="comfortable_smoke_free" value="uncomfortable" /> Tidak nyaman<br />
                <input type="radio" name="comfortable_smoke_free" value="very_uncomfortable" /> Sangat tidak nyaman<br /><br />
                
                <p>11. Seberapa besar Anda mendukung kebijakan bebas rokok di tempat kerja, sekolah, atau tempat umum lainnya?</p>
                <input type="radio" name="support_smoke_free" value="strongly_support" /> Sangat mendukung<br />
                <input type="radio" name="support_smoke_free" value="support" /> Mendukung<br />
                <input type="radio" name="support_smoke_free" value="neutral" /> Netral<br />
                <input type="radio" name="support_smoke_free" value="not_support" /> Tidak mendukung<br />
                <input type="radio" name="support_smoke_free" value="strongly_not_support" /> Sangat tidak mendukung<br /><br />

                <button type="button" class="submit">Submit</button>
                <button type="button" class="clear">Bersihkan Jawaban</button>
                <button class="close-button">Tutup</button>                
              </form>
                <p id="quoteDisplay" style="margin-top: 20px; font-weight: bold;"></p>
          </section>`;
    },
  
    async afterRender() {
        document.querySelector('.true').addEventListener('click', function() {
            document.querySelector('.content-two').style.display = 'none';
            document.getElementById('formPerokok').style.display = 'block';
        });
        
        document.querySelector('.false').addEventListener('click', function() {
            document.querySelector('.content-two').style.display = 'none';
            document.getElementById('formNonPerokok').style.display = 'block';
        });
        
        document.querySelectorAll('.close-button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelector('.content-two').style.display = 'block';
                document.getElementById('formPerokok').style.display = 'none';
                document.getElementById('formNonPerokok').style.display = 'none';
            });
        });
        
        const clearButton = document.querySelector(".clear");
        clearButton.addEventListener('click', () => {
            this.clearForm();
        });

        const hitungButton = document.querySelector(".hitung");
        hitungButton.addEventListener('click', () => {
            this.hitungKecanduan();
        });
        
        const submitButton = document.querySelector(".submit");
        submitButton.addEventListener('click', () => {
            this.submitForm();
        })
    },

    hitungKecanduan() {
        var skor = 0;
    
        // Mengambil nilai dari jawaban yang dipilih
        skor += parseInt(
          document.querySelector('input[name="q1"]:checked').value
        );
        skor += parseInt(
          document.querySelector('input[name="q2"]:checked').value
        );
        skor += parseInt(
          document.querySelector('input[name="q3"]:checked').value
        );
        skor += parseInt(
          document.querySelector('input[name="q4"]:checked').value
        );
        skor += parseInt(
          document.querySelector('input[name="q5"]:checked').value
        );
        skor += parseInt(
          document.querySelector('input[name="q6"]:checked').value
        );
    
        // Menentukan tingkat kecanduan berdasarkan skor
        var tingkatKecanduan = "";
    
        if (skor <= 2) {
          tingkatKecanduan = "Ketergantungan rendah";
        } else if (skor <= 4) {
          tingkatKecanduan = "Ketergantungan rendah sampai sedang";
        } else if (skor <= 7) {
          tingkatKecanduan = "Ketergantungan sedang";
        } else {
          tingkatKecanduan = "Ketergantungan tinggi";
        }
    
        // Menampilkan hasil
        document.getElementById("hasilKecanduan").innerHTML =
          "Skor Anda: " + skor + " - " + tingkatKecanduan;
    },
    
    clearForm() {
        // Menghapus semua pilihan jawaban
        document.querySelectorAll('input[type="radio"],input[type="checkbox"]').forEach(radio => {
            radio.checked = false;
        });
    
        // Menghapus hasil kecanduan
        document.getElementById("hasilKecanduan").innerHTML = "Skor Anda: -";
    },

    submitForm() {
      const quotes = [
        "Merokok dapat menyebabkan kanker paru-paru dan penyakit jantung.",
        "Berhenti merokok dapat meningkatkan kesehatan jantung Anda secara signifikan.",
        "Asap rokok mengandung lebih dari 7000 bahan kimia berbahaya.",
        "Berhenti merokok bisa memperpanjang umur Anda hingga 10 tahun.",
        "Rokok mengurangi daya tahan tubuh terhadap infeksi.",
        "Merokok meningkatkan risiko terkena stroke dan serangan jantung.",
        "Berhenti merokok dapat meningkatkan kualitas hidup dan kesejahteraan Anda.",
        "Asap rokok tidak hanya berbahaya bagi perokok, tetapi juga bagi orang di sekitarnya.",
        "Merokok dapat menyebabkan kerusakan paru-paru yang tidak dapat diperbaiki.",
        "Berhenti merokok dapat menghemat biaya yang signifikan setiap tahun.",
        "Merokok dapat merusak gigi dan menyebabkan penyakit gusi.",
        "Berhenti merokok dapat memperbaiki sirkulasi darah dan meningkatkan kesehatan kulit.",
        "Merokok dapat menyebabkan penurunan fungsi kognitif dan memori.",
        "Berhenti merokok dapat mengurangi risiko terkena kanker mulut dan tenggorokan.",
        "Merokok saat hamil dapat membahayakan kesehatan janin."
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quoteDisplay').innerHTML = randomQuote;
    }
  };
  
  export default Survey;
  