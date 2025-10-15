import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Book, Users, Mail, ChevronRight, Play } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function HomePage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPlaces = [
    {
      id: 1,
      name: "Lonar Lake",
      district: "Buldhana",
      description: "A mysterious crater lake formed by a meteor impact 50,000 years ago",
      image: "https://www.ourbreathingplanet.com/wp-content/uploads/2019/09/Lonar-Lake.jpg"
    },
    {
      id: 2,
      name: "Panhala Fort",
      district: "Kolhapur",
      description: "One of the largest and most strategic forts of the Deccan",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/48/e5/23/panhala-fort.jpg"
    },
    {
      id: 3,
      name: "Elephanta Caves",
      district: "Mumbai",
      description: "Ancient rock-cut temples dedicated to Lord Shiva",
      image: "https://indiaforyou.in/wp-content/uploads/2016/06/elc.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation has been moved to App.jsx */}

      {/* Hero Section */}
  <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-800/20 to-yellow-700/20"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <AnimateOnScroll>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 font-serif leading-tight">
              Hidden Heritage
              <span className="block text-4xl sm:text-5xl md:text-6xl text-orange-600 mt-4">
                of Maharashtra
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-amber-800 mb-8 max-w-3xl mx-auto font-light">
              Discover Untold Stories, Traditions, and Voices
            </p>
            
            <p className="text-lg sm:text-xl text-amber-700 mb-12 max-w-2xl mx-auto">
              Journey through the lesser-known treasures of Maharashtra's rich cultural tapestry
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/stories"
                className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Explore Stories
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/get-involved"
                className="group bg-white/90 backdrop-blur-sm text-orange-600 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-500 flex items-center gap-3"
              >
                <Play size={20} />
                Share Your Story
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-900 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-amber-900 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </section>

      {/* Featured Places Section */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-4 font-serif">
              Featured Treasures
            </h2>
            <p className="text-xl text-amber-700">
              Voices from the Heart of Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaces.map((place, idx) => (
              <div
                key={place.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {place.district}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3 font-serif">
                    {place.name}
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {place.description}
                  </p>
                  <Link
                    to="/stories"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group"
                  >
                    Discover More
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Quick Stats Section */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23fff' fill-opacity='0.1'/%3E%3C/svg%3E')" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['500+', '36', '1000+', '50K+'].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif">
                  {stat}
                </div>
                <div className="text-lg md:text-xl text-amber-100 font-medium">
                  {['Heritage Sites', 'Districts', 'Stories Shared', 'Visitors'][idx]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Call to Action */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-12 shadow-2xl">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-orange-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-amber-700 mb-8">
            Explore the hidden gems of Maharashtra and be part of preserving our rich cultural heritage
          </p>
          <Link
            to="/cultural-map"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MapPin size={24} />
            View Cultural Map
          </Link>
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
          
          <div className="flex justify-center space-x-8 mb-8">
            {[ Book, MapPin, Users, Mail ].map((Icon, idx) => (
              <Link
                key={idx}
                to={['/stories', '/cultural-map', '/get-involved', '/contact'][idx]}
                className="flex flex-col items-center gap-2 hover:text-amber-300 transition-colors group"
              >
                <Icon className="group-hover:scale-110 transition-transform" size={24} />
                <span className="text-sm">{['Stories', 'Map', 'Community', 'Contact'][idx]}</span>
              </Link>
            ))}
          </div>
          
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
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