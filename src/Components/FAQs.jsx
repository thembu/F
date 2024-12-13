import { useEffect, useState } from 'react';
import hj from '../assets/no.png'


const FAQs = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add delay before showing the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="faqs-page p-6 bg-gray-100 min-h-screen flex flex-col items-center"
        style={{ backgroundImage: `url(${hj})` }}

        >
            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-6 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Frequently Asked Questions
            </h1>

            <ul
                className={`w-full max-w-3xl text-gray-700 transition-all duration-700 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                <li className="mb-4">
                    <strong className="block text-lg text-blue-600">1. What subjects do you offer tutoring in?</strong>
                    <p className="pl-4 mt-2">
                        We offer tutoring in the following subjects: Maths, Physical Science, English, Accounting, and more.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="block text-lg text-blue-600">2. What are your tutoring options?</strong>
                    <p className="pl-4 mt-2">
                        We provide both online and in-person tutoring to suit your needs.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="block text-lg text-blue-600">3. How do I schedule a session?</strong>
                    <p className="pl-4 mt-2">
                        You can contact us via email or WhatsApp to schedule your session. Please provide your subject, grade, and school when reaching out.
                    </p>
                </li>
                <li className="mb-4">
                    <strong className="block text-lg text-blue-600">4. What is your pricing structure?</strong>
                    <p className="pl-4 mt-2">
                        Our pricing is tailored to the type of tutoring you require, and details are on the Pricing bar. Please contact us for more information based on your needs.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default FAQs;
