import {Votes} from '../../types/votes';
import css from '../VoteStats/VoteStats.module.css'


interface VoteStatsProps {
    votes: Votes;
    totalVotes: number,
    positivePercentage: number,
  }

  export default function VoteStats({votes,totalVotes,positivePercentage}:VoteStatsProps) {
   return (
    <div className={css.container}>
        <p className={css.stat}>Good:<strong>{votes.good}</strong></p>
        <p className={css.stat}>Neutral:<strong>{votes.neutral}</strong></p>
        <p className={css.stat}>Bad:<strong>{votes.bad}</strong></p>
        <p className={css.stat}>Total:<strong>{totalVotes}</strong></p>
        <p className={css.stat}>Positive:<strong>{positivePercentage}%</strong></p>
    </div>
   )
  }