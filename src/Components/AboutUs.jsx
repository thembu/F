import { useEffect, useState } from 'react';
import hj from '../assets/no.png'

const About = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add a slight delay before showing the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-container flex flex-col items-center p-6 bg-gray-100 min-h-screen"
        style={{ backgroundImage: `url(${hj})` }}

        >
            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-8 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Welcome to Tlowedi Tutoring Solutions
            </h1>

            <section
                className={`mission w-full max-w-3xl text-left mb-6 transition-all duration-700 delay-200 ${
                    showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    At TTS, we believe every student deserves to thrive academically. Our experienced and qualified tutors provide personalized support to learners of all abilities, from Grade 8 to 12 and beyond.
                </p>
            </section>

            <section
                className={`vision w-full max-w-3xl text-left mb-6 transition-all duration-700 delay-400 ${
                    showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Tlowedi Tutoring Solutions, we envision a future where every student has access to quality education and the support they need to succeed. We're committed to making a positive impact in our community, one student at a time.
                </p>
            </section>

            <section
                className={`values w-full max-w-3xl text-left mb-6 transition-all duration-700 delay-600 ${
                    showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Values</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>
                        <strong>Empowerment:</strong> We believe that every student has the potential to succeed, and we're here to empower them to reach their full potential.
                    </li>
                    <li>
                        <strong>Inclusivity:</strong> We welcome students from all backgrounds and learning speeds, and we're committed to providing a supportive and inclusive learning environment.
                    </li>
                    <li>
                        <strong>Excellence:</strong> We're dedicated to providing the highest quality tutoring services, and we're constantly striving to improve and expand our offerings.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default About;
