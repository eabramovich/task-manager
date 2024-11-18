import React, {useEffect} from "react";
import "./Popup.scss"

const Popup = ({ isOpen, children, onClose }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  }

  const handleBackgroundClick = (event) => {
    onClose();
  };

  const handleContainerClick = (event) => {
    event.stopPropagation();
  };



  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]); 

  return (
    <div className={`popup ${isOpen ? "popup_opened" : "popup_closed"}`} onClick={handleBackgroundClick}>
      <div className="popup__container" onClick={handleContainerClick}>
        {children}
      </div>
    </div>
  )
}

export default Popup;