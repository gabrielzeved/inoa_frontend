import styles from "./styles.module.scss"
import Header from '../Header'
import StockTabLayout from "../StockTabLayout";
import StockCard, { StockCardProps } from "../StockCard";
import Graph from "../Graph";

const Layout = () => {

  const stockCardMock1 : StockCardProps = {
    title: 'Profit',
    value: 'R$ 5.628,54',
    description: 'Last Week: 4.300,12',
    badge: {
      text: '% 51.32',
      color: 'action'
    }
  }

  const stockCardMock2 : StockCardProps = {
    title: 'Profit',
    value: 'R$ 6.486,54',
    description: 'Last Week: 4.300,12',
    badge: {
      text: '% 51.32',
      color: 'danger'
    }
  }

  const tabLayoutMock = [
    {
      title: 'Week',
      Element: (
        <div style={{display: 'flex'}}>
          <StockCard {...stockCardMock1} />
          <StockCard {...stockCardMock2} />
        </div>
      )
    },
    {
      title: 'Month',
      Element: <>2 dsaopkd</>
    },
    {
      title: 'Year',
      Element: <>3 dsaopkd</>
    }
  ]

  

  return (
    <>
      <Header />
      <section className='layout-section'>
        <StockTabLayout items={tabLayoutMock} />

        <section className='layout-graph'>
          <Graph />
        </section>

      </section>
    </>
  )
}

export default Layout;