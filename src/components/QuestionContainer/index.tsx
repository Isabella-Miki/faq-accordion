import Question from '../Question'
import style from './QuestionContainer.module.css'
import { useState } from 'react'

export default function QuestionContainer() {

    const questions = [
        {
            id : 1 ,
            question : "How many team members can I invite ?" ,
            answer : "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan"
        },
        {
            id : 2 ,
            question : "What is the maximum file upload size ? " ,
            answer : "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            id : 3 ,
            question : "How do I reset my password ?" ,
            answer : "Click “Forgot password” from the login page or “Change password” from your profile page."
        },
        {
            id : 4 ,
            question : "Can i cancel my subscription ?" ,
            answer : "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            id : 5 ,
            question : "Do you provide additional support ?" ,
            answer : "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        },
    ]

    return (
        <div className={style.questionContainer}>
        <h1>FAQ</h1>
        {questions.map(question => <Question key={question.id} question={question.question} answer={question.answer}/>)}
        </div>
    )
}