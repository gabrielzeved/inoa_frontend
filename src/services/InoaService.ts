import axios from "axios";

export const intervals = [
  "5m",
  "15m",
  "30m",
  "60m",
  "1d",
  "1wk",
  "1mo",
] as const;

export type Interval = typeof intervals[number];

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

  static async stockCandle(
    symbol: string,
    from: Date,
    to: Date,
    interval: Interval = "1d"
  ) {
    return (
      await axios.get(this.url + "/", {
        params: {
          symbol,
          from: Math.ceil(from.getTime() / 1000),
          to: Math.ceil(to.getTime() / 1000),
          interval,
        },
      })
    ).data;
  }
}
