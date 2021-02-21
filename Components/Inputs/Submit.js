import styles from '../../styles/Inputs.module.css'

export default function Submit({ value }) {
  return (
    <input 
      type="submit" 
      value={value} 
      className={styles.submit}
    />
  )
}