import React,{useState} from 'react';

import styles from './manuPage.module.css'

// import manuscriptPic from '../assets/palmleaf1.png'

import SearchIcon from '@mui/icons-material/Search';

import {data} from './data.js'

export default function manuPage() {
  console.log(data);

  const [names,setNames] = useState(data);

  // function handleNameChange(event){
  //   setsearch(event.target.value);
  // }
  // console.log(search);
  const filterNames = e =>{
    const search = e.target.value.toLowerCase()
    const filteredNames = data.filter(names => names.title.toLowerCase().includes(search))
    setNames(filteredNames)
  }

  return (


      <div className={styles.containerManuscripts}>
        <div className='search'>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <SearchIcon/>
            </div>
            <input  onChange={(e) => filterNames(e)} placeholder='Search' type='text'></input>
          </div>
          <div className='dataResult'>
            {names.map(name =>{
              return <p className={styles.searchResult}>{name.title}</p>
            })
            
            }
            
            
          </div>

      </div>
      </div>
      
      
     
  )
}
