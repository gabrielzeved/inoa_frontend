import { createContext, useContext, useEffect, useState } from "react"

interface ToastState{
  message: string,
  color: 'action' | 'danger',
  timeoutDelay: number,
  show: boolean,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setColor: React.Dispatch<React.SetStateAction<'action' | 'danger'>>,
  setTimeout: React.Dispatch<React.SetStateAction<number>>,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  showToast: (message: string, color: 'action' | 'danger', time: number) => void
}

const ToastContext = createContext<ToastState>({} as ToastState);

export const ToastContextProvider : React.FC = ({
  children
}) => {

  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<'action' | 'danger'>("action")
  const [timeout, setTimeout] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number>(0);

  const showToast = (message: string, color: 'action' | 'danger', time: number) => {
    setMessage(message);
    setColor(color);
    setTimeout(time);
    setShow(true);
  }

  useEffect(() => {
    window.clearTimeout(timeoutId);
    setTimeoutId(window.setTimeout(() => {
      setShow(false);
    }, timeout))
  }, [show])

  return (
    <ToastContext.Provider value={{
      message,
      color,
      timeoutDelay: timeout,
      show,
      setMessage,
      setColor,
      setTimeout,
      setShow,
      showToast
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error(
        "useToast must be used within a ToastContextProvider"
    );
  }
  return context;
}