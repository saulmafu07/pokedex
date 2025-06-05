import styles from "./header.module.css"

type HeaderProps = {
  query:string;
  setQuery: (query:string) => void;
};

const header = ({query, setQuery}:HeaderProps) => {
  return  (
   <header className={styles.header}> 
   <input className={styles.input}
   placeholder='Busca Pokemon'
    type="text"
    value={query} 
    onChange={(event) => setQuery(event.target.value)}
    />
     </header>
  )
}

export default header
