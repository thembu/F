import React, { useState, useEffect } from 'react';
import hj from '../assets/no.png'


const Service = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            title: 'Major Subjects',
            description: 'Maths, Physical Science, English, and Accounting',
            image: 'https://media.istockphoto.com/id/590073366/photo/books-of-knowledge.jpg?s=612x612&w=0&k=20&c=h-uY-AOk62qTsKOxoa_vPp0BZPuYeDs_kV0bU4H0jaA=', // Replace with actual image URL
        },
        {
            title: 'Flexible Learning Options',
            description: 'Online and in-person tutoring to suit your needs',
            image: 'https://minervatutors.co.uk/wp-content/uploads/2021/09/blog-post-1-1-1024x576.png',
        },
        {
            title: 'Merit-Based Tutors',
            description: 'Our tutors are selected based on their academic excellence and teaching abilities',
            image: 'https://s3-media1.fl.yelpcdn.com/bphoto/_SpBF4SQn4uXYZeaZ6Mzng/o.jpg',
        },
        {
            title: 'Personalized Attention',
            description: 'Small group sizes and one-on-one sessions ensure you receive tailored support',
            image: 'https://watlingtutors.com/wp-content/uploads/2021/04/teacher-whiteboard-web.jpg',
        },
        {
            title: 'Inclusive Learning Environment',
            description: 'We welcome learners of all abilities and learning styles',
            image: 'https://resources.noodle.com/wp-content/uploads/2023/11/iStock_000064305807_Large_Friedman.jpg.736x0_q85.jpg',
        },
        {
            title: 'Curriculum Support',
            description: 'We cater to both IEB and CAPS curricula',
            image: 'https://impaq.co.za/wp-content/uploads/sites/2/2024/08/Assessment-bodies-in-SA.png',
        },
        {
            title: 'Customized Tutoring Solutions',
            description: 'If you need help with a specific course or subject, we’ll outsource the best tutors for you',
            image: 'https://academicoeducation.uk/wp-content/uploads/GettyImages-495774050-2000-8eb6a02fb05648749339ba5930630109.jpeg',
        },
    ];

    return (
        <div className="service-page bg-gray-100 min-h-screen p-8"
        style={{ backgroundImage: `url(${hj})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
>
            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-8 transition-all duration-700 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                What We Offer
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-full px-4">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white shadow-lg p-6 rounded-lg transition-all duration-700 transform ${
                            showContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                        } hover:scale-105 hover:shadow-2xl`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-41 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h2>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
