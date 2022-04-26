import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
interface SearchButtonProps {
  onSelect: () => void,
  icon: IconDefinition
}

const Button = ({
  onSelect,
  icon
} : SearchButtonProps) => {

  return (
    <div onClick={onSelect} className="searchbar-button">
      <FontAwesomeIcon className='searchbar-icon' icon={icon} />
    </div>
  )

}

export default Button