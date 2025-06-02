import React from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaAward } from 'react-icons/fa';

const stats = [
  { icon: FaGraduationCap, value: '10,000+', label: 'Students Enrolled' },
  { icon: FaUsers, value: '500+', label: 'Expert Instructors' },
  { icon: FaGlobe, value: '150+', label: 'Countries Reached' },
  { icon: FaAward, value: '95%', label: 'Success Rate' },
];

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    bio: 'Former tech executive with 15+ years of experience in education technology.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Education',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    bio: 'Education specialist with a passion for innovative learning methods.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    bio: 'Full-stack developer and tech educator with expertise in modern web technologies.',
  },
  {
    name: 'Emily Davis',
    role: 'Student Success Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
    bio: 'Dedicated to ensuring student success and satisfaction.',
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About LearnHub</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We're on a mission to make quality education accessible to everyone, everywhere.
              Join our global community of learners and transform your future.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At LearnHub, we believe that education should be accessible, engaging, and effective.
              Our platform combines cutting-edge technology with expert instruction to create an
              unparalleled learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                We're committed to making quality education available to everyone,
                regardless of their location or background.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Our platform leverages the latest technology to create engaging
                and effective learning experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive learning community where students can
                connect, collaborate, and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind LearnHub who are dedicated to
            transforming education through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at LearnHub and shape our
              commitment to excellence in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence in Education
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in our course content and
                teaching methods, ensuring that our students receive the best
                possible education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Student Success
              </h3>
              <p className="text-gray-600">
                Our primary focus is on student success. We provide comprehensive
                support and resources to help our students achieve their goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation & Technology
              </h3>
              <p className="text-gray-600">
                We continuously innovate and leverage technology to enhance the
                learning experience and make education more accessible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Community
              </h3>
              <p className="text-gray-600">
                We foster a diverse and inclusive community where learners from
                around the world can connect and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 