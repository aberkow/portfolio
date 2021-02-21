import styles from '../../styles/Inputs.module.css'

export default function TextArea({ name, id, placeholder, register }) {
  return (
    <textarea 
      name={name} 
      id={id} 
      cols="30" 
      rows="10"
      placeholder={placeholder}
      ref={register}
      className={styles.textarea}
      ></textarea>
  )
}