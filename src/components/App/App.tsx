import React, { useState } from 'react';
import css from './App.module.css';
import cssCafe from '../CafeInfo/CafeInfo.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';


export default function App() {
    return(
        <div className={css.app}>
             <CafeInfo
               container={cssCafe.container} 
               title={cssCafe.title}  
               description={cssCafe.description}
             />
       
            {/* <VoteStats
            /> */}
       
        </div>
    )
}