import { useState, useEffect } from "react"
import {FaSearch} from 'react-icons/fa'
import styles from '@/styles/searchbar.module.css'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        const getResults = async ()=>{
            if(searchTerm===''){
                setSearchResults([])
            } else {
                const res = await fetch(`/api/search?q=${searchTerm}`)
                const {results} = await res.json()
                setSearchResults(results)
            }
        }

        getResults()
        console.log()
    }, [searchTerm])
    return (
        <div className={styles.searchParentDiv}>
            <div className={styles.searchBox}>
            <div className={styles.inputForm}>
                <form>
                <input
                    type='search'
                    name='search'
                    id='search'
                    className={styles.inputBox}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search Posts...'
                />
    
                <FaSearch className={styles.searchIcon} />
                </form>
            </div>
        </div>
      </div>
    )
}
