import styles from '../../styles/Inputs.module.css'

export default function Input({ type, placeholder, name, id, register }) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name}
      id={id}
      className={styles.input}
      ref={register}
    />
  )
}