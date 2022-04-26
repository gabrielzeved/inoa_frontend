
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useGraphContext } from "../../contexts/GraphContext";
import { useStockContext } from "../../contexts/StockContext";

const Graph = () => {

  
  const {state: {symbol, stockInfo}} = useStockContext();
  const { graphs } = useGraphContext();

  const xAxis = stockInfo?.candle.timestamp?.map((item) => {
    const date = new Date(item * 1000);
    return date.toLocaleString('default', { day: "2-digit", month: 'short', year: "numeric" })
  })

  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      animations: {
        easing: 'easeinout'
      }
    },
    xaxis: {
      categories: xAxis
    },
    stroke: {
      show: true,
      curve: 'straight',
      colors: undefined,
      width: 2,
      dashArray: 0,      
    }
  }

  const series = [
    {
      name: symbol,
      data: stockInfo?.candle.close || []
    },
    ...graphs.filter(item => !item.loading && item.data).map((item) => {
      return {
        name: item.name,
        data: item.data?.close || []
      }
    })
  ]

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="100%"
      height="500px"
    />
  )

}

export default Graph;