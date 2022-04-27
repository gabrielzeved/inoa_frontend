import { useStockContext } from "../../contexts/StockContext"
import { Interval, intervals } from "../../services/InoaService"

interface SelectIntervalProps {

}

const SelectInterval = ({

} : SelectIntervalProps) => {

  const {state: {interval: current_interval}, dispatch} = useStockContext();

  const handleClick = (interval: Interval) => {
      dispatch({type: 'SET_INTERVAL', value: interval})
  }

  return (
    <div className="select-interval-wrapper">
      <span className="select-interval-title">Intervalo de tempo: </span>
      <div className="select-interval">
        {intervals.map((interval) => {
          return (
            <div key={interval} className={`interval-badge ${interval === current_interval ? 'interval-badge--active' : ''}`} onClick={() => {handleClick(interval)}}>
              {interval}
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default SelectInterval;