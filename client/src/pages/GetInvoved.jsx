import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Users, Heart, Camera, MapPin, BookOpen, Award, CheckCircle, Send, FileText, Video, Star } from 'lucide-react';

export default function GetInvolvedPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState('story');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ways = [
    {
      icon: BookOpen,
      title: "Share Your Story",
      description: "Tell us about a hidden heritage site you've discovered or a cultural tradition you cherish",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Camera,
      title: "Submit Photos",
      description: "Contribute high-quality images of heritage sites to help preserve visual history",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Video,
      title: "Upload Vlogs",
      description: "Share video tours and experiences of Maharashtra's cultural treasures",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with fellow heritage enthusiasts and participate in local events",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Volunteer",
      description: "Help with on-ground documentation, restoration efforts, and awareness campaigns",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: Award,
      title: "Become Ambassador",
      description: "Lead heritage preservation initiatives in your district as a cultural ambassador",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const tabs = [
    { id: 'story', label: 'Submit Story', icon: BookOpen },
    { id: 'photo', label: 'Share Photos', icon: Camera },
    { id: 'vlog', label: 'Upload Vlog', icon: Video },
    { id: 'volunteer', label: 'Volunteer', icon: Users }
  ];

  const benefits = [
    "Recognition in our community hall of fame",
    "Early access to heritage tours and events",
    "Networking with historians and cultural experts",
    "Certificate of contribution to cultural preservation",
    "Featured on our social media channels",
    "Free entry to partner heritage sites"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 3000);
  };

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

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <Heart className="w-20 h-20 mx-auto mb-6 text-orange-600 animate-bounce" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
            Get Involved
          </h1>
          <p className="text-xl sm:text-2xl text-amber-800 max-w-3xl mx-auto mb-8">
            Join us in preserving Maharashtra's rich cultural heritage for future generations
          </p>
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl">
            <Users className="text-orange-600" size={24} />
            <span className="text-2xl font-bold text-amber-900">5,000+</span>
            <span className="text-amber-700">Active Contributors</span>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Ways to Contribute
            </h2>
            <p className="text-xl text-amber-700">
              Choose how you'd like to make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ways.map((way, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${way.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <way.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">
                  {way.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Forms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Start Contributing Today
            </h2>
            <p className="text-xl text-amber-700">
              Fill out the form below to share your contribution
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                      : 'bg-white/80 text-amber-900 hover:bg-white'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-500 animate-bounce" />
                <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">
                  Thank You!
                </h3>
                <p className="text-xl text-amber-700">
                  Your contribution has been submitted successfully. We'll review it and get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Story Form */}
                {selectedTab === 'story' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Story Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="Give your story a compelling title"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">District *</label>
                        <select
                          required
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                        >
                          <option value="">Select District</option>
                          <option>Mumbai</option>
                          <option>Pune</option>
                          <option>Aurangabad</option>
                          <option>Kolhapur</option>
                          <option>Nashik</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Category *</label>
                        <select
                          required
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                        >
                          <option value="">Select Category</option>
                          <option>Forts</option>
                          <option>Temples</option>
                          <option>Nature</option>
                          <option>Food</option>
                          <option>Music</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Your Story *</label>
                      <textarea
                        required
                        rows="8"
                        placeholder="Share your heritage story in detail. Include historical facts, personal experiences, and why this place or tradition is important..."
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Photo Form */}
                {selectedTab === 'photo' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Location Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Name of the heritage site"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Upload Photos *</label>
                      <div className="border-2 border-dashed border-amber-300 rounded-xl p-12 text-center bg-amber-50 hover:border-orange-500 hover:bg-amber-100 transition-all cursor-pointer">
                        <Upload className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                        <p className="text-amber-900 font-semibold mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-amber-600">PNG, JPG up to 10MB (Multiple files allowed)</p>
                        <input type="file" multiple accept="image/*" className="hidden" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Photo Description</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about these photos - when and where were they taken, what makes them special..."
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Vlog Form */}
                {selectedTab === 'vlog' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Vlog Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="Title of your video"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">YouTube URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://youtube.com/watch?v=..."
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="Heritage site featured"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">District *</label>
                        <select
                          required
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                        >
                          <option value="">Select District</option>
                          <option>Mumbai</option>
                          <option>Pune</option>
                          <option>Aurangabad</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Vlog Description *</label>
                      <textarea
                        required
                        rows="6"
                        placeholder="Describe your vlog content and what viewers will learn..."
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 resize-none"
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Volunteer Form */}
                {selectedTab === 'volunteer' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                        />
                      </div>
                      <div>
                        <label className="block text-amber-900 font-semibold mb-2">Your District *</label>
                        <select
                          required
                          className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                        >
                          <option value="">Select District</option>
                          <option>Mumbai</option>
                          <option>Pune</option>
                          <option>Aurangabad</option>
                          <option>Kolhapur</option>
                          <option>Nashik</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Areas of Interest *</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {['Documentation', 'Photography', 'Research', 'Event Organization', 'Social Media', 'Translation'].map((interest) => (
                          <label key={interest} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg cursor-pointer hover:bg-amber-100 transition-colors">
                            <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                            <span className="text-amber-900">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Why do you want to volunteer? *</label>
                      <textarea
                        required
                        rows="6"
                        placeholder="Share your motivation and how you'd like to contribute to heritage preservation..."
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 resize-none"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Availability</label>
                      <select
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                      >
                        <option>Weekends only</option>
                        <option>Weekdays only</option>
                        <option>Flexible</option>
                        <option>Full-time</option>
                      </select>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  Submit Contribution
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Contributor Benefits
            </h2>
            <p className="text-xl text-amber-700">
              What you get for making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-amber-900 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23fff' fill-opacity='0.1'/%3E%3C/svg%3E')" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">
              Our Community Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5,000+', label: 'Active Contributors', icon: Users },
              { number: '1,200+', label: 'Stories Shared', icon: BookOpen },
              { number: '3,500+', label: 'Photos Uploaded', icon: Camera },
              { number: '500+', label: 'Vlogs Created', icon: Video }
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-all duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-amber-100" />
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-amber-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Contributor Stories
            </h2>
            <p className="text-xl text-amber-700">
              Hear from our amazing community members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Deshmukh",
                role: "Heritage Photographer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                quote: "Contributing to Hidden Heritage has been incredibly fulfilling. My photos are helping preserve our cultural legacy for future generations."
              },
              {
                name: "Rajesh Patil",
                role: "Story Contributor",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                quote: "I've documented 15 hidden forts across Maharashtra. This platform gave me the opportunity to share these forgotten stories with the world."
              },
              {
                name: "Sneha Kulkarni",
                role: "Community Volunteer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                quote: "Being part of this community has connected me with passionate heritage enthusiasts. Together, we're making a real difference."
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-amber-900">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-amber-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 mx-auto mb-6 text-orange-600" />
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-amber-700 mb-10">
            Join thousands of passionate individuals preserving Maharashtra's heritage. Your contribution matters!
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.querySelector('form').offsetTop - 100, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Contributing Now
            <Send size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">म</span>
            </div>
            <span className="text-3xl font-bold font-serif">Hidden Heritage</span>
          </div>
          
          <p className="text-lg text-amber-200 mb-8">
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