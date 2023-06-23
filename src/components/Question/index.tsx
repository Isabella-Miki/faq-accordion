import style from './Question.module.css'
import { useState } from 'react'
import arrow from '../../assets/icon-arrow-down.svg'

interface Props {
    question: string;
    answer: string;
}

export default function Question({ question, answer}: Props) {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
      };

    return (
        <div className={style.questionWrapper} onClick={handleToggle}>
            <h2 className={style.question}>
                {question}
            {isActive ? <img src={arrow}  className={style.arrowOpen}/> : <img src={arrow}  className={style.arrowClose}/>}
            </h2>
            {isActive ? <p className={style.active}>{answer}</p> : ''}
        </div>
    )
}