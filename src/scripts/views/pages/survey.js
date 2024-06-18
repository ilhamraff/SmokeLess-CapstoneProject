import TesHandler from '../../utils/addicted-handler';
import { ScrollToTop } from '../../utils/scroll-handler';

const Survey = {
  async render() {
    return `
      <section id="survey" class="survey-description">
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
            <h2>Test Kecanduan</h2>
            <form>
                
              <p>1. Usia:</p>
              <input type="radio" name="age" value="0" /> Di bawah 18 tahun<br />
              <input type="radio" name="age" value="0" /> 18-24 tahun<br />
              <input type="radio" name="age" value="0" /> 25-34 tahun<br />
              <input type="radio" name="age" value="0" /> 35-44 tahun<br />
              <input type="radio" name="age" value="0" /> 45-54 tahun<br />
              <input type="radio" name="age" value="0" /> 55-64 tahun<br />
              <input type="radio" name="age" value="0" /> 65 tahun ke atas<br /><br />
              
              <p>2. Jenis Kelamin:</p>
              <input type="radio" name="gender" value="0" /> Laki-laki<br />
              <input type="radio" name="gender" value="0" /> Perempuan<br /><br />
              
              <p>3. Status Pendidikan:</p>
              <input type="radio" name="education" value="0" /> Tidak/belum sekolah<br />
              <input type="radio" name="education" value="0" /> SD/Sederajat<br />
              <input type="radio" name="education" value="0" /> SMP/Sederajat<br />
              <input type="radio" name="education" value="0" /> SMA/Sederajat<br />
              <input type="radio" name="education" value="0" /> Diploma<br />
              <input type="radio" name="education" value="0" /> Sarjana (S1)<br />
              <input type="radio" name="education" value="0" /> Pascasarjana (S2/S3)<br /><br />
              
              <p>4. Pekerjaan:</p>
              <input type="radio" name="occupation" value="0" /> Pelajar/Mahasiswa<br />
              <input type="radio" name="occupation" value="0" /> Pegawai Swasta<br />
              <input type="radio" name="occupation" value="0" /> Pegawai Negeri<br />
              <input type="radio" name="occupation" value="0" /> Wirausaha<br />
              <input type="radio" name="occupation" value="0" /> Pekerja Lepas/Freelancer<br />
              <input type="radio" name="occupation" value="0" /> Tidak bekerja<br />
              <input type="radio" name="occupation" value="0" /> Lainnya<br /><br />              

              <p>5. Berapa banyak Anda merokok dalam sehari?</p>
              <input type="radio" name="q1" value="1" /> < 10 batang/hari<br />
              <input type="radio" name="q1" value="2" /> 11-20 batang/hari<br />
              <input type="radio" name="q1" value="3" /> 21-30 batang/hari<br />
              <input type="radio" name="q1" value="4" /> >30 batang/hari<br /><br />
          
              <p>6. Seberapa cepat Anda merokok setelah bangun tidur?</p>
              <input type="radio" name="q2" value="3" /> 5 menit setelah bangun tidur<br />
              <input type="radio" name="q2" value="2" /> 6-30 menit setelah bangun tidur<br />
              <input type="radio" name="q2" value="1" /> > 30 menit setelah bangun tidur<br /><br />
          
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
          </section>
          
          <section class="content" id="benefits-survey">
            <article class="surveys-content">
              <div class="surveys-title">
                <h1>Mengapa Penting Mengukur Kecanduan?</h1>
                <p>
                  Mengetahui tingkat kecanduan Anda terhadap nikotin adalah langkah awal yang
                  penting dalam proses berhenti merokok. Dengan memahami seberapa kuat
                  ketergantungan anda. Anda dapat mengikuti referensi sebagai berikut :
                </p>
              </div>
              <div class="surveys-container">
                <div class="card-survey">
                  <div class="user-picture">
                    <img src="/images/strategi.png" alt="" />
                  </div>
                  <h3 class="surveys-title">
                    Menentukan<br />
                    Strategi Yang Tepat
                  </h3>
                </div>
                <div class="card-survey">
                  <div class="user-picture">
                    <img src="/images/kesadaran.png" alt="" />
                  </div>
                  <h3 class="surveys-title">Meningkatkan<br />Kesadaran</h3>
                </div>
                <div class="card-survey">
                  <div class="user-picture">
                    <img src="/images/berhenti.png" alt="" />
                  </div>
                  <h3 class="surveys-title">Rencana Berhenti<br />Yang Lebih Baik</h3>
                </div>
              </div>
            </article>
          </section>
          <button id="scroll-to-top" class="go-to-top">
            <i class="fa fa-arrow-up my-go-to-top"></i>
          </button>`;
  },

  async afterRender() {
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
      TesHandler.clearForm();
    });

    const hitungButton = document.querySelector('.hitung');
    hitungButton.addEventListener('click', () => {
      TesHandler.hitungKecanduan();
    });

    ScrollToTop.init();
  },
};

export default Survey;
