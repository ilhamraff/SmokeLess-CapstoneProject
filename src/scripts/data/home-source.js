/**
 * HomeSource adalah kelas yang bertanggung jawab untuk mengambil data yang berkaitan dengan halaman utama dari server.
 */
class HomeSource {
  /**
   * Mengambil data penyakit dari server.
   * @returns {Promise<Object>} Objek yang berisi data penyakit.
   */
  static async getDisease() {
    try {
      const response = await fetch("disease.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  /**
   * Mengambil konten halaman utama dari server.
   * @returns {Promise<Object>} Objek yang berisi konten halaman utama.
   */
  static async getContent() {
    try {
      const response = await fetch("content.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  /**
   * Mengambil manfaat dari server.
   * @returns {Promise<Object>} Objek yang berisi manfaat.
   */
  static async getBenefits() {
    try {
      const response = await fetch("benefits.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
}

export default HomeSource;
