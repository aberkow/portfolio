import styles from '../../styles/Inputs.module.css'

export default function TextArea({ name, id, placeholder, ref }) {
  return (
    <textarea 
      name={name} 
      id={id} 
      cols="30" 
      rows="10"
      placeholder={placeholder}
      ref={ref}
      className={styles.textarea}
      ></textarea>
  )
}