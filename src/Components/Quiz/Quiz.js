import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const getQuiz = useLoaderData();
    // console.log(getQuiz.data);
    const {name, questions} = getQuiz.data
    return (
        <div>
            <h2 className='text-2xl font-bold mt-4'>Quiz Of {name}</h2>
            <div className='grid md:grid-cols-1 gap-8 p-8'>
                {
                    questions.map(quiz =>  <Question quiz={quiz} key={quiz.id}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;