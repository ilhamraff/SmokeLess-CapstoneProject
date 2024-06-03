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
                
            </form>
            <h2>Hasil Kecanduan:</h2>
            <p id="hasilKecanduan">Skor Anda: -</p>
          </section>`;
    },
  
    async afterRender() {
        
        const clearButton = document.querySelector(".clear");
        clearButton.addEventListener('click', () => {
            this.clearForm();
        });

        const hitungButton = document.querySelector(".hitung");
        hitungButton.addEventListener('click', () => {
            this.hitungKecanduan();
        });
        
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

  };
  
  export default Survey;
  