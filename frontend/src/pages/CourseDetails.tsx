import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaUsers, FaClock, FaPlay, FaLock, FaCheck } from 'react-icons/fa';

// Mock course data - replace with API call
const courseData = {
  id: 1,
  title: 'Web Development Bootcamp',
  description: 'Learn modern web development from scratch with this comprehensive bootcamp. Master HTML, CSS, JavaScript, and popular frameworks like React and Node.js.',
  instructor: {
    name: 'John Doe',
    title: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
  },
  rating: 4.8,
  students: 1234,
  duration: '12 weeks',
  level: 'Beginner to Advanced',
  price: 99.99,
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
  curriculum: [
    {
      title: 'Getting Started',
      lessons: [
        { title: 'Introduction to Web Development', duration: '15:00', preview: true },
        { title: 'Setting Up Your Development Environment', duration: '20:00', preview: true },
        { title: 'Understanding HTML Basics', duration: '25:00', preview: false },
      ],
    },
    {
      title: 'HTML & CSS Fundamentals',
      lessons: [
        { title: 'HTML Structure and Elements', duration: '30:00', preview: false },
        { title: 'CSS Styling and Layout', duration: '35:00', preview: false },
        { title: 'Responsive Design Principles', duration: '40:00', preview: false },
      ],
    },
    // Add more sections
  ],
  features: [
    '12 weeks of content',
    '24/7 support',
    'Certificate of completion',
    'Lifetime access',
    'Downloadable resources',
    'Community access',
  ],
};

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('curriculum');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Course Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{courseData.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{courseData.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-600">{courseData.rating} rating</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="text-gray-400 mr-1" />
              <span className="text-gray-600">{courseData.students} students</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-gray-400 mr-1" />
              <span className="text-gray-600">{courseData.duration}</span>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <img
              src={courseData.instructor.image}
              alt={courseData.instructor.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">{courseData.instructor.name}</p>
              <p className="text-gray-600">{courseData.instructor.title}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <img
              src={courseData.image}
              alt={courseData.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-gray-900">${courseData.price}</span>
              <span className="text-gray-600 line-through">$199.99</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors mb-4">
              Enroll Now
            </button>
            <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-md hover:bg-indigo-50 transition-colors">
              Add to Cart
            </button>

            <div className="mt-6 space-y-4">
              <h3 className="font-medium text-gray-900">This course includes:</h3>
              <ul className="space-y-2">
                {courseData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'curriculum'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'overview'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'reviews'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              {courseData.curriculum.map((section, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                      >
                        <div className="flex items-center">
                          {lesson.preview ? (
                            <FaPlay className="text-indigo-600 mr-3" />
                          ) : (
                            <FaLock className="text-gray-400 mr-3" />
                          )}
                          <span className="text-gray-900">{lesson.title}</span>
                        </div>
                        <span className="text-gray-600">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Overview</h3>
              <p className="text-gray-600">
                This comprehensive web development bootcamp is designed to take you from a beginner to a professional web developer. You'll learn the latest technologies and best practices used in the industry.
              </p>
              <h4 className="text-md font-medium text-gray-900 mt-6 mb-3">What you'll learn:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>HTML5 and CSS3 fundamentals</li>
                <li>JavaScript and modern ES6+ features</li>
                <li>React.js for building user interfaces</li>
                <li>Node.js and Express for backend development</li>
                <li>Database design and implementation</li>
                <li>Deployment and DevOps basics</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{courseData.rating}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(courseData.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-1">
                    Based on {courseData.students} reviews
                  </p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Write a Review
                </button>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3"
                      alt="User"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Sarah Johnson</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="h-4 w-4 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand, and the hands-on projects are incredibly valuable.
                  </p>
                </div>
                {/* Add more reviews */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 