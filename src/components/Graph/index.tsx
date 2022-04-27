
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useGraphContext } from "../../contexts/GraphContext";
import { useStockContext } from "../../contexts/StockContext";

const Graph = () => {

  const { graphs } = useGraphContext();

  const xAxis = graphs[0]?.data?.timestamp?.map((item) => {

    const date = new Date(item * 1000);
    return date.toLocaleDateString("pt-BR")

  })|| [];

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
    ...graphs.filter(item => !item.loading && item.data).map((item) => {
      return {
        name: item?.name,
        data: item?.data?.close.map((item) => Number(item?.toFixed(2))) || []
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