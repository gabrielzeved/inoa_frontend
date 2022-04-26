import axios from "axios";

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

  static async stockCandle(symbol: string, from: Date, to: Date) {
    return (
      await axios.get(this.url + "/", {
        params: {
          symbol,
          from: Math.ceil(from.getTime() / 1000),
          to: Math.ceil(to.getTime() / 1000),
        },
      })
    ).data;
  }
}
