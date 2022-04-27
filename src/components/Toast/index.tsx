import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useToastContext } from "../../contexts/ToastContext";

const Toast = () => {

  const {color, message, show} = useToastContext();

  const [container] = useState(() => {
    return document.createElement('div');
  });

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  const Element = (
    <div className={`toast toast-${color} ${show ? 'toast-show' : ''}`}>
        {message}
    </div>
  )

  return createPortal(Element, container)
}

export default Toast;
