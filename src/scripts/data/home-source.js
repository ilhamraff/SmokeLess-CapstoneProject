class HomeSource {
  static async getDisease() {
    try {
      const response = await fetch("disease.json");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  static async getContent() {
    try {
      const response = await fetch("content.json");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  static async getBenefits() {
    try {
      const response = await fetch("benefits.json");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
}

export default HomeSource;
