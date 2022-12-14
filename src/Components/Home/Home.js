import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../image/banner.jpg'
import Course from '../Course/Course';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses.data);
    return (
        <div>
            <div className='md:flex md:flex-col w-full h-screen bg-center bg-no-repeat mb-8' style={{ backgroundImage: `url(${banner})` }}>
                <h1 className='text-4xl font-bold pt-8'>Enhance ur future with Educare</h1>
                <p className='max-w-xl mx-auto my-4 font-medium'>Master your language with lessons, quizzes, and projects designed for real-life scenarios. Create portfolio projects that showcase your new skills to help land your dream job.</p>
            </div>
            <div >
                <div className='grid md:grid-cols-2 gap-4 md:p-8'>
                    {
                        courses.data.map(course => <Course 
                            key={course.id} 
                            course={course}
                            ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;