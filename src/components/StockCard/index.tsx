import Badge from '../Badge'

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
        <Badge {...badge}>
          {badge.text}
        </Badge>
      </div>

      <h1 className='stockcard-value'>{value}</h1>
      <span className='stockcard-description'>{description}</span>
    </div>
  )

}

export default StockCard;