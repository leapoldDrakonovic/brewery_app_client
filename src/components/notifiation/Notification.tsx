import { FaCheckCircle } from "react-icons/fa"
import "./Notification.css"


type Props = {
    isVisible: boolean
    text: string
}

const Notification = ({text = "Clicked Bar"}: Props) => {
  return (
    <div className="notification-container">
      <FaCheckCircle color="green"/>
      <span className="notification-text">
      {text} added to Favorite !
      </span>
       
    </div>
  )
}

export default Notification