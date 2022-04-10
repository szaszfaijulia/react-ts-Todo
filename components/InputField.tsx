import React from 'react'
import './styles.css'

const InputField = () => {
  return(
    <form className="input">
      <input placeholder="Írj be egy feladatot" className="input__box"/>
      <button className="input__submit" type="submit" >Go</button>
    </form>
  )
}

export default InputField