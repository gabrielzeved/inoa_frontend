import styles from './styles.module.scss'

export interface StockCardProps{
  title: string,
  value: string,
  description: string,
  badge: {
    text: string,
    color: 'action' | 'danger'
  }
}

const StockCard = ({
  title,
  value,
  description,
  badge
}: StockCardProps) => {

  return (
    <div className='stockcard-container'>
      <div className='stockcard-header'>
        <span className='stockcard-title'>{title}</span>
        <span className={`stockcard-badge stockcard-badge-` + badge.color}>
          {badge.text}
        </span>
      </div>

      <h1 className='stockcard-value'>{value}</h1>
      <span className='stockcard-description'>{description}</span>
    </div>
  )

}

export default StockCard;