import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Facebook, Twitter, Instagram, Youtube, CheckCircle, Globe } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function ContactPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@hiddenheritage.in",
      link: "mailto:info@hiddenheritage.in",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Pune, Maharashtra, India",
      link: "#",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Globe,
      title: "Social Media",
      detail: "Follow us on all platforms",
      link: "#social",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const reasons = [
    "General Inquiry",
    "Partnership Opportunity",
    "Media/Press",
    "Technical Support",
    "Volunteer Information",
    "Heritage Site Suggestion",
    "Feedback",
    "Other"
  ];

  const faqs = [
    {
      question: "How can I submit a heritage story?",
      answer: "Visit our 'Get Involved' page and use the story submission form. Include detailed information about the site, its history, and why it's significant."
    },
    {
      question: "Are there any fees for contributing?",
      answer: "No! All contributions are completely free. We're a community-driven platform dedicated to preserving Maharashtra's heritage."
    },
    {
      question: "Can I volunteer for on-ground activities?",
      answer: "Absolutely! We organize regular heritage walks, documentation drives, and restoration activities. Fill out our volunteer form to join."
    },
    {
      question: "How do I report incorrect information?",
      answer: "Please contact us directly through this form or email us at info@hiddenheritage.in with the correct details and sources."
    },
    {
      question: "Can schools/colleges partner with you?",
      answer: "Yes! We welcome educational partnerships. Contact us to discuss field trips, workshops, and collaborative projects."
    },
    {
      question: "How often is content updated?",
      answer: "We review and publish new submissions weekly. Featured stories and maps are updated continuously as we receive quality contributions."
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "Heritage House, Fort, Mumbai - 400001",
      phone: "+91 22 1234 5678",
      email: "mumbai@hiddenheritage.in"
    },
    {
      city: "Pune",
      address: "Culture Center, Shivajinagar, Pune - 411005",
      phone: "+91 20 9876 5432",
      email: "pune@hiddenheritage.in"
    },
    {
      city: "Aurangabad",
      address: "Heritage Plaza, CIDCO, Aurangabad - 431003",
      phone: "+91 240 123 4567",
      email: "aurangabad@hiddenheritage.in"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
      setSelectedReason('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation removed as it's handled by App.jsx */}

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-amber-800/20 to-yellow-700/30"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

          <AnimateOnScroll>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <MessageCircle className="w-20 h-20 mx-auto mb-6 text-orange-600 animate-bounce" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl text-amber-800 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
          </AnimateOnScroll>
      </section>

      {/* Contact Methods */}
      <AnimateOnScroll delay="200ms">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
              >
                <div className={`bg-gradient-to-br ${method.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <method.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">
                  {method.title}
                </h3>
                <p className="text-amber-700">
                  {method.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Contact Form & Info */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">
                Send us a Message
              </h2>
              
              {formSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-500 animate-bounce" />
                  <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">
                    Message Sent!
                  </h3>
                  <p className="text-xl text-amber-700">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">Reason for Contact *</label>
                    <select
                      required
                      value={selectedReason}
                      onChange={(e) => setSelectedReason(e.target.value)}
                      className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 cursor-pointer"
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-amber-900 font-semibold mb-2">Message *</label>
                    <textarea
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send size={24} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-12 h-12" />
                  <h3 className="text-2xl font-bold font-serif">Office Hours</h3>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center pb-3 border-b border-white/30">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/30">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-amber-200">Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="text-amber-100">
                    Response time: Within 24-48 hours
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {['Submit Your Story', 'Browse Heritage Sites', 'Read Stories', 'Volunteer Program', 'FAQ', 'Privacy Policy'].map((link, idx) => {
                    // map known internal anchors to routes
                    if (link === 'Submit Your Story' || link === 'Volunteer Program') {
                      return (
                        <Link key={idx} to="/get-involved" className="block text-amber-700 hover:text-orange-600 font-medium transition-colors py-2 hover:pl-4 duration-300">→ {link}</Link>
                      );
                    }
                    if (link === 'Browse Heritage Sites') {
                      return (
                        <Link key={idx} to="/cultural-map" className="block text-amber-700 hover:text-orange-600 font-medium transition-colors py-2 hover:pl-4 duration-300">→ {link}</Link>
                      );
                    }
                    if (link === 'Read Stories') {
                      return (
                        <Link key={idx} to="/stories" className="block text-amber-700 hover:text-orange-600 font-medium transition-colors py-2 hover:pl-4 duration-300">→ {link}</Link>
                      );
                    }
                    // leave fragment links as anchors (FAQ, Privacy)
                    return (
                      <a key={idx} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="block text-amber-700 hover:text-orange-600 font-medium transition-colors py-2 hover:pl-4 duration-300">→ {link}</a>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl" id="social">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="javascript:void(0)"
                      className={`flex items-center gap-3 bg-gradient-to-r ${['from-blue-600 to-blue-700', 'from-sky-500 to-blue-600', 'from-pink-600 to-purple-600', 'from-red-600 to-red-700'][idx]} text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      aria-label={`social-${idx}`}
                    >
                      <Icon size={24} />
                      <span className="font-semibold">{['Facebook', 'Twitter', 'Instagram', 'YouTube'][idx]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Regional Offices */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Regional Offices
            </h2>
            <p className="text-xl text-amber-700">
              Visit us at any of our Maharashtra locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
              >
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">
                  {office.city}
                </h3>
                <div className="space-y-3 text-amber-700">
                  <p className="flex items-start gap-2">
                    <MapPin size={20} className="flex-shrink-0 mt-1 text-orange-600" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={20} className="text-orange-600" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={20} className="text-orange-600" />
                    {office.email}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(office.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-700">
              Find answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-amber-900 text-lg list-none">
                  <span className="font-serif pr-4">{faq.question}</span>
                  <span className="text-orange-600 transform group-open:rotate-180 transition-transform duration-300 text-2xl flex-shrink-0">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 text-amber-700 leading-relaxed border-t border-amber-200 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Newsletter Signup */}
      <AnimateOnScroll delay="200ms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-20 h-20 mx-auto mb-6 text-white" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
            Stay Updated
          </h2>
          <p className="text-xl text-amber-50 mb-10">
            Subscribe to our newsletter for the latest heritage stories, events, and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-xl text-amber-900 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Subscribe
            </button>
          </form>
          <p className="text-amber-100 mt-6">
            Join 10,000+ heritage enthusiasts receiving our monthly updates
          </p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">म</span>
                </div>
                <span className="text-3xl font-bold font-serif">Hidden Heritage</span>
              </div>
              <p className="text-lg text-amber-200 leading-relaxed mb-6">
                Preserving and celebrating the rich cultural tapestry of Maharashtra. Join us in our mission to uncover and share the hidden gems of our state.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="javascript:void(0)"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label={`social-${idx}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 font-serif">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Stories', 'Cultural Map'].map((item) => {
                  const slug = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <li key={item}>
                      <Link to={slug} className="text-amber-200 hover:text-white transition-colors">{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 font-serif">Contact</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Pune, Maharashtra</li>
                <li>+91 98765 43210</li>
                <li>info@hiddenheritage.in</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-8 text-center">
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

        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}