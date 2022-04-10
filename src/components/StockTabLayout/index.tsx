import { useState } from "react"
import styles from "./styles.module.scss"

interface TabLayoutProps {
  items: TabLayoutItem[]
}

interface TabLayoutItem{
  title: string,
  Element: JSX.Element
}

const StockTabLayout : React.FC<TabLayoutProps> = ({
  items,
  children
}) => {

  const [selected, setSelected] = useState<TabLayoutItem>(items[0]);

  const handleSelect = (item: TabLayoutItem) => {
    setSelected(item);
  }

  return (
    <div className='stock-tablayout-container'>

      <ul className='stock-tablayout-options'>
        {items.map((item) => {
          return (
            <li key={item.title} onClick={() => {handleSelect(item)}} className={`stock-tablayout-option ${selected === item ? 'stock-tablayout-option--active' : ''}`}>
              {item.title}
            </li>
          );
        })}
      </ul>

      <div className='stock-tablayout-content'>
        {selected.Element}
      </div>

    </div>
  )

}

export default StockTabLayout;