import { useEffect, useState } from 'react';
import tts_logo from '../assets/tts_logo.jpeg'; // Import the TTS logo
import tutoringImage from '../assets/tutor.jpg'; // Import the tutoring image
import { Line } from 'react-chartjs-2'; // Import the Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'; // Import necessary components from chart.js
import hj from '../assets/no.png'
import tt from '../assets/lo.gif'; // Import the TTS logo
import po from '../assets/po.jpeg'; // Import the TTS logo
import ol from '../assets/ol.jpg'; // Import the TTS logo




// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Home() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Add a slight delay before showing the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // Data for the grades chart
    const data = {
        labels: ['Term 1', 'Term 2', 'Term 3', 'Term 4'],
        datasets: [
            {
                label: 'Student Grades',
                data: [25, 52, 78, 90], // Example grade progression
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
                borderWidth: 2,
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Term',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Grade (%)',
                },
                min: 0,
                max: 100,
            },
        },
    };

    return (
        <div className="home-container flex flex-col items-center p-6 bg-whitesmoke min-h-screen font-fun"
        style={{ backgroundImage: `url(${ol})` , backgroundSize: 'cover', backgroundPosition: 'center' }}

        >
            {/* Full screen card with image and logo overlay at bottom */}
            <div className="relative w-full h-screen mb-8">
                <img
                    src={hj}
                    className={`w-full h-full object-cover rounded-lg transition-all duration-900 ${
                        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    alt="Kids being tutored"
                />
                <div className="absolute bottom-80 left-0 w-full bg-black bg-opacity-30 flex justify-center py-2">
                    <img
                        src={tt}
                        className="logo transition-all duration-700 opacity-100 scale-100"
                        alt="TTS logo"
                        width={470} // Adjust size for mini logo
                    />
                </div>
            </div>

            <h1
                className={`text-3xl font-bold text-center text-gray-800 mb-8 transition-all duration-500 ${
                    showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Welcome to Tlowedi Tutoring Solutions (TTS)
            </h1>

            <section
                className={`student-section text-left w-full max-w-3xl mb-6 transition-all duration-700 delay-200 ${
                    showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">For Students</h2>
                <p className="text-gray-700 leading-relaxed">
                    Want to boost your grades, build confidence, and achieve academic success? Look no further than TTS!
                </p>
            </section>

            {/* Grades Graph */}
            <section className={`grades-section w-full max-w-3xl mb-6 transition-all duration-700 delay-300 ${
                showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Your Grade Progression</h3>
                <div className="w-full h-96"> {/* Set the chart container's height */}
                    <Line data={data} options={options} />
                </div>
            </section>

            <section
                className={`parent-section text-left w-full max-w-3xl transition-all duration-700 delay-400 ${
                    showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">For Parents</h2>
                <p className="text-gray-700 leading-relaxed">
                    Are you looking for a trusted and reliable tutoring service to support your child's academic journey? TTS is here to help!
                </p>
            </section>
        </div>
    );
}

export default Home;
