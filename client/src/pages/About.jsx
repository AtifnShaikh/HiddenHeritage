import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Target, Users, Award, Globe, ArrowRight, Mountain, BookOpen, Camera } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function AboutPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mission = {
    icon: Target,
    title: "Our Mission",
    description: "To uncover, preserve, and celebrate the rich cultural heritage of Maharashtra by sharing untold stories, connecting communities, and inspiring people to explore the hidden gems of our beautiful state."
  };

  const vision = {
    icon: Eye,
    title: "Our Vision",
    description: "A Maharashtra where every heritage site, tradition, and cultural story is recognized, valued, and preserved for future generations. We envision a connected community of heritage enthusiasts who actively participate in safeguarding our legacy."
  };

  const values = [
    {
      icon: Heart,
      title: "Preservation",
      description: "Protecting Maharashtra's cultural treasures for future generations"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a network of passionate heritage advocates"
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Spreading awareness about our rich historical legacy"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making heritage knowledge available to everyone"
    }
  ];

  const impact = [
    { number: "500+", label: "Heritage Sites Documented", icon: Mountain },
    { number: "1000+", label: "Stories Shared", icon: BookOpen },
    { number: "50K+", label: "Community Members", icon: Users },
    { number: "36", label: "Districts Covered", icon: Globe }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started documenting lesser-known heritage sites across Maharashtra with a small team of passionate explorers"
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Expanded to cover 20+ districts and built a community of 10,000+ heritage enthusiasts"
    },
    {
      year: "2025",
      title: "Digital Revolution",
      description: "Launched interactive maps, vlog platform, and reached 50,000+ users sharing their heritage stories"
    }
  ];

  const team = [
    {
      name: "Heritage Explorers",
      role: "Field Research Team",
      description: "Traveling across Maharashtra to document hidden sites",
      icon: Camera
    },
    {
      name: "Story Curators",
      role: "Content Team",
      description: "Crafting compelling narratives from historical records",
      icon: BookOpen
    },
    {
      name: "Community Builders",
      role: "Engagement Team",
      description: "Connecting heritage enthusiasts and local communities",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation removed as it's handled by App.jsx */}
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-amber-800/20 to-yellow-700/30"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

          <AnimateOnScroll>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Dedicated to preserving and celebrating the magnificent heritage of Maharashtra, one story at a time
            </p>
          </div>
        </div>
          </AnimateOnScroll>
      </section>

      {/* Mission & Vision */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-10 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 transition-all duration-500">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 h-full">
                <mission.icon className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                  {mission.title}
                </h2>
                <p className="text-xl text-amber-50 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-gradient-to-br from-amber-700 to-orange-600 rounded-3xl p-10 shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-2 transition-all duration-500">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 h-full">
                <vision.icon className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                  {vision.title}
                </h2>
                <p className="text-xl text-amber-50 leading-relaxed">
                  {vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Core Values */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Core Values
            </h2>
            <p className="text-xl text-amber-700">
              Principles that guide our heritage preservation journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">
                  {value.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Impact Statistics */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Impact
            </h2>
            <p className="text-xl text-amber-700">
              Numbers that tell our story of dedication and growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl font-bold text-amber-900 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-lg text-amber-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Timeline */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Journey
            </h2>
            <p className="text-xl text-amber-700">
              Milestones in preserving Maharashtra's heritage
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-amber-600 hidden md:block"></div>

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative mb-12 ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full border-4 border-amber-50 shadow-lg hidden md:block top-8"></div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full font-bold text-xl mb-4 shadow-lg">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Team Section */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Meet Our Team
            </h2>
            <p className="text-xl text-amber-700">
              Passionate individuals working to preserve our heritage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 text-center group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <member.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">
                  {member.name}
                </h3>
                <div className="text-orange-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-amber-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Call to Action */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 mx-auto mb-6 text-white" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
            Join Our Mission
          </h2>
          <p className="text-xl text-amber-50 mb-10">
            Be part of the movement to preserve and celebrate Maharashtra's incredible heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/get-involved"
                className="group bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get Involved
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/stories"
                className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore Stories
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">म</span>
            </div>
            <span className="text-3xl font-bold font-serif">Hidden Heritage</span>
          </div>
          
          <p className="text-lg text-amber-200 mb-8 max-w-2xl mx-auto">
            Preserving and celebrating the rich cultural tapestry of Maharashtra
          </p>
          
          <div className="border-t border-amber-700 pt-8">
            <p className="text-amber-300">
              © 2025 Hidden Heritage of Maharashtra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Merriweather', serif;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}