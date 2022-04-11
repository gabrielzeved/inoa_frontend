import axios, { Axios, AxiosRequestConfig } from "axios";

export default class InoaService {
  private static url = "http://localhost:3333";

  static async search(term: string) {
    return (
      await axios.get(this.url + "/search", {
        params: {
          term,
        },
      })
    ).data;
  }
}
