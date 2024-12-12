import { useEffect, useState } from 'react';

const Contact = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add a slight delay before showing the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="contact-page flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-6 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Contact Us
            </h1>

            <h2
                className={`text-2xl font-semibold text-blue-600 mb-4 transition-all duration-500 delay-200 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Get in Touch
            </h2>

            <p
                className={`text-gray-700 text-center leading-relaxed mb-6 transition-all duration-700 delay-400 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Students, want to get started with our tutoring services? You can reach us through:
            </p>

            <ul
                className={`text-gray-700 list-disc list-inside mb-6 transition-all duration-700 delay-600 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                <li>
                    <strong>Email:</strong>{' '}
                    <a
                        href="mailto:Tlowedi.tutoring@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        Tlowedi.tutoring@gmail.com
                    </a>
                </li>
                <li>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                        href="https://wa.me/27637928434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        +27 63 792 8434
                    </a>
                </li>
            </ul>

            <p
                className={`text-gray-700 text-center leading-relaxed mb-4 transition-all duration-700 delay-800 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Please include the subject, grade, and the name of your school when you contact us.
            </p>

            <p
                className={`text-gray-700 text-center leading-relaxed transition-all duration-700 delay-1000 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                We look forward to hearing from you!
            </p>
        </div>
    );
};

export default Contact;
