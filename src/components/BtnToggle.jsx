import React from 'react'

function ToggleBtn() {
    const inputToggle = () => {
        setInputVisible(!isInputVisible);
      }
  return (
    <button 
      onClick={inputToggle}
      className={styles.button}>
            Add New Note.
    </button>
  )
}

export default ToggleBtn