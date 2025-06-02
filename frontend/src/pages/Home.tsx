import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaUsers, FaStar } from 'react-icons/fa';

const featuredCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn modern web development from scratch',
    instructor: 'John Doe',
    rating: 4.8,
    students: 1234,
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science and analytics',
    instructor: 'Jane Smith',
    rating: 4.9,
    students: 856,
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native',
    instructor: 'Mike Johnson',
    rating: 4.7,
    students: 567,
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3',
  },
];

const features = [
  {
    icon: FaChalkboardTeacher,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience',
  },
  {
    icon: FaLaptopCode,
    title: 'Hands-on Projects',
    description: 'Build real-world projects to enhance your portfolio',
  },
  {
    icon: FaCertificate,
    title: 'Certification',
    description: 'Earn certificates recognized by top companies',
  },
  {
    icon: FaUsers,
    title: 'Community',
    description: 'Join a community of learners and mentors',
  },
];

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Learn New Skills Online with Top Educators
              </h1>
              <p className="text-lg md:text-xl text-indigo-100">
                Build skills with courses, certificates, and degrees online from world-class universities and companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors text-center"
                >
                  Browse Courses
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose LearnHub?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide the best learning experience for our students
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-600">{course.rating}</span>
                    </div>
                    <span className="text-gray-600">{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      ${course.price}
                    </span>
                    <Link
                      to={`/courses/${course.id}`}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 