import React from 'react'
import styles from '../styles'

function Button() {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-one ${styles} `}>
        Get started
    </button>
  )
}

export default Button