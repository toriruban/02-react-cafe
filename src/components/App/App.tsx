import React from 'react';
import { useState } from 'react';
import css from './App.module.css';
import cssCafe from '../CafeInfo/CafeInfo.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteStats from '../VoteStats/VoteStats';
import VoteOptions  from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';
import { Votes, VoteType } from '../../types/votes';

export default function App() {

const [votes, setVotes] = useState<Votes>({good: 0, neutral: 0, bad:0});

 
const handleVote = (type: VoteType) => {
    setVotes(prev => ({
        ...prev,
        [type]: prev[type] + 1,
    }))
}

const resetVotes = () => setVotes({good: 0, neutral: 0, bad:0});

const totalVotes = votes.good + votes.bad + votes.neutral;

const positivePercentage = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0; 
    
    return(
        <div className={css.app}>
             <CafeInfo
               container={cssCafe.container} 
               title={cssCafe.title}  
               description={cssCafe.description}
             />

             <VoteOptions 
                onVote={handleVote}
                onReset={resetVotes}
                canReset={totalVotes > 0}
             />

            {totalVotes > 0
            ? 
             <VoteStats 
                  votes={votes}
                  totalVotes={totalVotes} 
                  positivePercentage={positivePercentage}
             />
            :  <Notification />
            }
        </div>
    )
}
