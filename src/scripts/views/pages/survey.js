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
                <button class="close-button">Tutup</button>
                <p>1. Berapa banyak Anda merokok dalam sehari?</p>
                <input type="radio" name="q1" value="0" /> < 10 batang/hari<br />
                <input type="radio" name="q1" value="1" /> 11-20 batang/hari<br />
                <input type="radio" name="q1" value="2" /> 21-30 batang/hari<br />
                <input type="radio" name="q1" value="3" /> >30 batang/hari<br /><br />
            
                <p>2. Seberapa cepat Anda merokok setelah bangun tidur?</p>
                <input type="radio" name="q2" value="2" /> 5 menit setelah bangun tidur<br />
                <input type="radio" name="q2" value="1" /> 6-30 menit setelah bangun tidur<br />
                <input type="radio" name="q2" value="0" /> > 30 menit setelah bangun tidur<br /><br />
            
                <p>3. Apakah Anda merasa kesulitan untuk tidak merokok di “no smoking area”?</p>
                <input type="radio" name="q3" value="1" /> Ya<br />
                <input type="radio" name="q3" value="0" /> Tidak<br /><br />
            
                <p>4. Apakah Anda kesulitan untuk tidak merokok di pagi hari?</p>
                <input type="radio" name="q4" value="1" /> Ya<br />
                <input type="radio" name="q4" value="0" /> Tidak<br /><br />
            
                <p>5. Apakah Anda lebih sering merokok saat bekerja/belajar daripada saat jam istirahat?</p>
                <input type="radio" name="q5" value="1" /> Ya<br />
                <input type="radio" name="q5" value="0" /> Tidak<br /><br />
            
                <p>6. Apakah Anda masih merokok saat sakit?</p>
                <input type="radio" name="q6" value="1" /> Ya<br />
                <input type="radio" name="q6" value="0" /> Tidak<br /><br />
            
                <button type="button" class="hitung">Hitung Kecanduan</button>
                <button type="button" class="clear">Bersihkan Jawaban</button> 
                
                
            </form>
            <h2>Hasil Kecanduan:</h2>
            <p id="hasilKecanduan">Skor Anda: -</p>
          </section>          
        
        <!-- Form Bukan Perokok -->
        <section id="formNonPerokok" class="form-section">
            <h2>Formulir Bukan Perokok</h2>
            <form>

                <button class="close-button">Tutup</button>                
            </form>
            
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
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
    
        // Menghapus hasil kecanduan
        document.getElementById("hasilKecanduan").innerHTML = "Skor Anda: -";
    }
  };
  
  export default Survey;
  