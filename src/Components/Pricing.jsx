import { useEffect, useState } from 'react';
import hj from '../assets/no.png'


const Pricing = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add delay before showing the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="pricing-container bg-gray-100 min-h-screen p-8"
        style={{ backgroundImage: `url(${hj})` , backgroundSize: 'cover', backgroundPosition: 'center' }}

        >
            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-6 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Affordable and Flexible Pricing
            </h1>
            <p
                className={`text-center text-gray-600 mb-10 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                We offer flexible and affordable pricing options to suit your needs.
            </p>

            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                {/* Online Tutoring Section */}
                <section className="pricing-section bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Online Tutoring</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li>R100 per session (60 minutes)</li>
                        <li>
                            <strong>Monthly options:</strong>
                            <ul className="list-disc list-inside pl-4">
                                <li>4 sessions: R400 (save R50)</li>
                                <li>8 sessions: R800 (save R200)</li>
                                <li>12 sessions: R1,200 (save R400)</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* In-Person Tutoring Section */}
                <section className="pricing-section bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">In-Person Tutoring</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li>R150 per session (60 minutes)</li>
                        <li>
                            <strong>Monthly options:</strong>
                            <ul className="list-disc list-inside pl-4">
                                <li>4 sessions: R600 (save R100)</li>
                                <li>8 sessions: R1,200 (save R300)</li>
                                <li>12 sessions: R1,800 (save R600)</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Flexible Payment Options Section */}
                <section className="pricing-section bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Flexible Payment Options</h2>
                    <p className="text-gray-700 mb-4">
                        We understand that every family's financial situation is unique. That's why we offer flexible
                        payment options to suit your needs:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Monthly payments via debit order or credit card</li>
                        <li>Upfront payments for the month (discounts apply)</li>
                        <li>Customized payment plans (please contact us to discuss)</li>
                    </ul>
                </section>

                {/* Discounts Section */}
                <section className="pricing-section bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Discounts</h2>
                    <p className="text-gray-700 mb-4">We offer discounts for:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Siblings (10% off total monthly fees)</li>
                        <li>Long-term commitments (5% off total monthly fees for 6-month commitments)</li>
                        <li>Referrals (R100 credit towards your next month's fees for each successful referral)</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Pricing;
