import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaUsers, FaStar } from 'react-icons/fa';

// Placeholder data - In a real app, this would come from an API or state
const featuredCoursesData = [
  {
    id: 1,
    title: 'Modern Web Development Bootcamp',
    instructor: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Development',
    rating: 4.8,
    students: 1250,
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Data Science',
    rating: 4.9,
    students: 980,
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    instructor: 'Alice Brown',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Marketing',
    rating: 4.7,
    students: 1500,
  },
];

const testimonialsData = [
  {
    id: 1,
    quote: "This platform transformed my career! The courses are top-notch and the instructors are amazing.",
    name: 'Sarah L.',
    title: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    quote: "I learned so much in such a short time. Highly recommended for anyone looking to upskill.",
    name: 'Michael B.',
    title: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const Home = () => {
  // Reusable button styles
  const primaryButtonClasses = "inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5";
  const largeButtonClasses = "py-4 px-10 text-lg";

  return (
    <div className="home-page text-slate-700"> {/* Default text color */}
      {/* --- Hero Section --- */}
      <section className="hero-section bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock Your Potential with Our Online Courses
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
            Learn from industry experts, gain new skills, and advance your career from anywhere, anytime.
          </p>
          <Link to="/courses" className={`${primaryButtonClasses} ${largeButtonClasses}`}>
            Explore Courses
          </Link>
        </div>
        {/* Optional: <div className="absolute inset-0 bg-black opacity-20"></div> for contrast if using a background image */}
      </section>

      {/* --- Featured Courses Section --- */}
      <section className="featured-courses-section py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-800">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCoursesData.map((course) => (
              <div key={course.id} className="course-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-blue-600 font-semibold mb-1">{course.category}</span>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-200">
                    <span className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" /> {course.rating}
                    </span>
                    <span className="flex items-center">
                      <FaUsers className="text-gray-400 mr-1" /> {course.students} students
                    </span>
                  </div>
                  <Link 
                    to={`/courses/${course.id}`} 
                    className="mt-5 w-full text-center bg-blue-500 text-white font-medium py-2.5 px-5 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="why-choose-us-section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-800">
            Why Learn With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaChalkboardTeacher, title: "Expert Instructors", desc: "Learn from seasoned professionals and industry leaders." },
              { icon: FaLaptopCode, title: "Flexible Learning", desc: "Access courses on any device, learn at your own pace." },
              { icon: FaCertificate, title: "Certifications", desc: "Earn recognized certificates to boost your resume." },
              { icon: FaUsers, title: "Supportive Community", desc: "Connect with fellow learners and mentors." },
            ].map((feature, index) => (
              <div key={index} className="feature-item text-center p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="text-5xl text-blue-600 mb-5 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="testimonials-section py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-800">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-white p-8 rounded-xl shadow-lg">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full mx-auto mb-5 object-cover border-4 border-blue-200" 
                />
                <p className="text-gray-700 italic text-center mb-6 before:content-['“'] before:mr-1 before:font-serif before:text-2xl before:text-blue-400 after:content-['”'] after:ml-1 after:font-serif after:text-2xl after:text-blue-400">
                  {testimonial.quote}
                </p>
                <h4 className="font-semibold text-slate-800 text-center text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 text-center">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="cta-section py-16 md:py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of learners and take the next step in your career.
          </p>
          <Link to="/signup" className={`${primaryButtonClasses} ${largeButtonClasses} bg-pink-600 hover:bg-pink-700 focus:ring-pink-500`}>
            Sign Up For Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;