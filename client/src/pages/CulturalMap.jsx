import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Search,
  Mountain,
  Star,
  Camera,
  Utensils,
  Music,
  Navigation,
  Info,
  ExternalLink,
  Youtube,
  Calendar,
  Clock,
  X
} from 'lucide-react';

export default function CulturalMapPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSite, setSelectedSite] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showVlogForm, setShowVlogForm] = useState(false);
  const [vlogs, setVlogs] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const districts = [
    'All',
    'Mumbai',
    'Pune',
    'Aurangabad',
    'Kolhapur',
    'Raigad',
    'Sindhudurg',
    'Buldhana',
    'Nashik',
    'Satara',
    'Ahmednagar'
  ];

  const categories = [
    { name: 'All', icon: MapPin, color: 'bg-purple-500' },
    { name: 'Forts', icon: Mountain, color: 'bg-orange-500' },
    { name: 'Temples', icon: Star, color: 'bg-yellow-500' },
    { name: 'Nature', icon: Camera, color: 'bg-green-500' },
    { name: 'Food', icon: Utensils, color: 'bg-red-500' },
    { name: 'Music', icon: Music, color: 'bg-blue-500' }
  ];

  const heritageSites = [
    {
      id: 1,
      name: 'Panhala Fort',
      district: 'Kolhapur',
      category: 'Forts',
      latitude: 16.8111,
      longitude: 74.1147,
      description:
        'One of the largest and most strategically important forts in the Deccan region',
      bestTime: 'October to March',
      entryFee: '₹25 per person',
      timings: '6:00 AM - 6:00 PM',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/48/e5/23/panhala-fort.jpg',
      highlights: ['Teen Darwaza', 'Sajja Kothi', 'Andhar Bavadi']
    },
    {
      id: 2,
      name: 'Lonar Lake',
      district: 'Buldhana',
      category: 'Nature',
      latitude: 19.9833,
      longitude: 76.5167,
      description: 'A unique crater lake formed by meteor impact 50,000 years ago',
      bestTime: 'November to February',
      entryFee: 'Free',
      timings: 'Open 24 hours',
      image:
        'https://www.ourbreathingplanet.com/wp-content/uploads/2019/09/Lonar-Lake.jpg',
      highlights: ['Kamalja Devi Temple', 'Daityasudan Temple', 'Unique ecosystem']
    },
    {
      id: 3,
      name: 'Elephanta Caves',
      district: 'Mumbai',
      category: 'Temples',
      latitude: 18.9633,
      longitude: 72.9315,
      description:
        'Ancient rock-cut temples dedicated to Lord Shiva, UNESCO World Heritage Site',
      bestTime: 'November to March',
      entryFee: '₹40 (Indians), ₹600 (Foreigners)',
      timings: '9:00 AM - 5:30 PM (Closed Mondays)',
      image:
        'https://indiaforyou.in/wp-content/uploads/2016/06/elc.jpg',
      highlights: ['Trimurti sculpture', 'Rock-cut architecture', 'Ancient murals']
    },
    {
      id: 4,
      name: 'Ajanta Caves',
      district: 'Aurangabad',
      category: 'Temples',
      latitude: 20.5519,
      longitude: 75.7033,
      description:
        'Buddhist cave monuments dating from 2nd century BCE, UNESCO World Heritage Site',
      bestTime: 'October to March',
      entryFee: '₹40 (Indians), ₹600 (Foreigners)',
      timings: '9:00 AM - 5:30 PM (Closed Mondays)',
      image:
        'https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Bhaja-Caves-768x576.jpg',
      highlights: ['Ancient paintings', 'Buddhist architecture', 'Jataka tales murals']
    },
    {
      id: 5,
      name: 'Raigad Fort',
      district: 'Raigad',
      category: 'Forts',
      latitude: 18.2356,
      longitude: 73.4407,
      description:
        'Capital of Maratha Empire, coronation site of Chhatrapati Shivaji Maharaj',
      bestTime: 'October to February',
      entryFee: '₹35 per person',
      timings: '8:00 AM - 6:00 PM',
      image:
        'https://wallpaperaccess.com/full/6522957.png',
      highlights: ['Rajyabhishek Sthal', 'Maha Darwaza', 'Ropeway facility']
    },
    {
      id: 6,
      name: 'Tarkarli Beach',
      district: 'Sindhudurg',
      category: 'Nature',
      latitude: 16.0163,
      longitude: 73.4703,
      description: 'Pristine beach with crystal-clear waters perfect for water sports',
      bestTime: 'October to March',
      entryFee: 'Free (Water sports extra)',
      timings: 'Open 24 hours',
      image:
        'https://c8.alamy.com/comp/2AXM0X4/malvan-india-december-22-2019-tarkarli-beach-famous-for-water-sports-activity-in-india-banana-ride-enjoyed-by-tourists-2AXM0X4.jpg',
      highlights: ['Scuba diving', 'Snorkeling', 'Sindhudurg Fort nearby']
    },
    {
      id: 8,
      name: 'Shaniwar Wada',
      district: 'Pune',
      category: 'Forts',
      latitude: 18.5196,
      longitude: 73.8553,
      description: 'Historic fortification and former seat of Peshwa rulers',
      bestTime: 'October to March',
      entryFee: '₹25 (Indians), ₹300 (Foreigners)',
      timings: '8:00 AM - 6:30 PM',
      image:
        '/src/assets/1563709919_shaniwar-wada1.jpg',
      highlights: ['Light and Sound Show', 'Peshwa architecture', 'Historic fountains']
    },
    {
      id: 9,
      name: 'Pratapgad Fort',
      district: 'Satara',
      category: 'Forts',
      latitude: 17.9428,
      longitude: 73.5602,
      description: 'Historic fort famous for the battle between Shivaji and Afzal Khan',
      bestTime: 'October to March',
      entryFee: '₹20 per person',
      timings: '6:00 AM - 6:00 PM',
      image:
        'https://th.bing.com/th/id/R.52971b17cb062773e4bcec9874b6dbf2?rik=BOv3Wc910UPlwQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-JuGbCBQtdgQ%2fVM0G-cJlmXI%2fAAAAAAAAB4A%2fKtlA0_WnXmw%2fs1600%2fPratapgad%252Bfort%252Bin%252Bmaharashtra.jpg&ehk=%2bfffBS%2fGiHucYHZEyzBkzFGwpIQl2q%2fOzjK2rFcfgsQ%3d&risl=&pid=ImgRaw&r=0',
      highlights: ['Afzal Khan\'s tomb', 'Bhavani Temple', 'Panoramic views']
    },
    {
      id: 10,
      name: 'Ahmednagar Fort',
      district: 'Ahmednagar',
      category: 'Forts',
      latitude: 19.0948,
      longitude: 74.7489,
      description: 'Historic fort where Jawaharlal Nehru was imprisoned',
      bestTime: 'November to February',
      entryFee: '₹15 per person',
      timings: '8:00 AM - 6:00 PM',
      image:
        'https://www.indiatravel.app/wp-content/uploads/2024/02/Gwalior-Fort.jpg',
      highlights: ['Nehru\'s prison cell', 'Historic architecture', 'Museum']
    }
  ];

  const filteredSites = heritageSites.filter((site) => {
    const matchesDistrict = selectedDistrict === 'All' || site.district === selectedDistrict;
    const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q || site.name.toLowerCase().includes(q) || site.description.toLowerCase().includes(q);
    return matchesDistrict && matchesCategory && matchesSearch;
  });

  const handleVlogSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newVlog = {
      id: vlogs.length + 1,
      title: formData.get('title'),
      url: formData.get('url'),
      location: formData.get('location'),
      lat: parseFloat(formData.get('lat')),
      lng: parseFloat(formData.get('lng')),
      date: new Date().toLocaleDateString()
    };
    setVlogs((s) => [newVlog, ...s]);
    setShowVlogForm(false);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation removed as it's handled by App.jsx */}

      {/* Hero Section */}
        {/* Full-bleed hero */}
        <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-orange-900/30 via-amber-800/20 to-yellow-700/30">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-6 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-6 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 text-center">
            <div className="mx-auto max-w-6xl animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
                Cultural Map
              </h1>
              <p className="text-xl sm:text-2xl text-amber-800 mb-4">
                Explore Maharashtra's heritage sites across all 36 districts
              </p>
            </div>
          </div>
        </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm sticky top-20 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
              <input
                type="text"
                placeholder="Search heritage sites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
              />
            </div>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-6 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900 font-medium cursor-pointer"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowVlogForm(!showVlogForm)}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Youtube size={20} />
              Add Your Vlog
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === cat.name ? `${cat.color} text-white shadow-lg` : 'bg-white/80 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <Icon size={20} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vlog Submission Form */}
      {showVlogForm && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-amber-900 font-serif">Share Your Heritage Vlog</h3>
              <button onClick={() => setShowVlogForm(false)} className="text-amber-600 hover:text-amber-900 transition-colors">
                <X size={28} />
              </button>
            </div>
            <form onSubmit={handleVlogSubmit} className="space-y-6">
              <div>
                <label className="block text-amber-900 font-semibold mb-2">Vlog Title</label>
                <input name="title" type="text" placeholder="My Visit to..." required className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900" />
              </div>
              <div>
                <label className="block text-amber-900 font-semibold mb-2">YouTube Video URL</label>
                <input name="url" type="url" placeholder="https://youtube.com/watch?v=..." required className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900" />
              </div>
              <div>
                <label className="block text-amber-900 font-semibold mb-2">Location Name</label>
                <input name="location" type="text" placeholder="Panhala Fort, Kolhapur" required className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Latitude</label>
                  <input name="lat" type="number" step="any" placeholder="19.0760" required className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900" />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Longitude</label>
                  <input name="lng" type="number" step="any" placeholder="72.8777" required className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Submit Vlog</button>
            </form>
          </div>
        </section>
      )}

      {/* Heritage Sites Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 font-serif">{filteredSites.length} Heritage Sites Found</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites.map((site, idx) => (
              <article key={site.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="relative h-56 overflow-hidden" onClick={() => setSelectedSite(site)}>
                  <img src={site.image} alt={site.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 font-serif">{site.name}</h3>
                    <div className="flex items-center text-amber-100">
                      <MapPin size={16} className="mr-1" />
                      {site.district}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">{site.category}</div>
                </div>

                <div className="p-6">
                  <p className="text-amber-700 mb-4 leading-relaxed line-clamp-2">{site.description}</p>

                  <div className="space-y-2 text-sm text-amber-600">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>Best Time: {site.bestTime}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} /><span>{site.timings}</span></div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button onClick={() => setSelectedSite(site)} className="w-full py-3 bg-amber-100 text-amber-900 rounded-xl font-semibold hover:bg-amber-200 transition-colors">View Details</button>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${site.latitude},${site.longitude}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"> <ExternalLink size={16} /> Open in Maps</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredSites.length === 0 && (
            <div className="text-center py-20">
              <MapPin className="w-24 h-24 mx-auto mb-6 text-amber-400" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">No Sites Found</h3>
              <p className="text-xl text-amber-700">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* User Submitted Vlogs */}
      {vlogs.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-8 font-serif text-center">Community Vlogs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vlogs.map((vlog) => (
                <div key={vlog.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <Youtube className="text-red-500 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-1">{vlog.title}</h3>
                      <p className="text-sm text-amber-600">{vlog.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-amber-600 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} />{vlog.date}</span>
                  </div>
                  <a href={vlog.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors">
                    <ExternalLink size={18} /> Watch on YouTube
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Site Detail Modal */}
      {selectedSite && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in">
            <div className="relative h-96">
              <img src={selectedSite.image} alt={selectedSite.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <button onClick={() => setSelectedSite(null)} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                <X size={24} className="text-amber-900" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3">{selectedSite.category}</div>
                <h2 className="text-4xl font-bold text-white mb-2 font-serif">{selectedSite.name}</h2>
                <div className="flex items-center text-amber-100 text-lg"><MapPin size={20} className="mr-2" />{selectedSite.district}</div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-xl text-amber-700 leading-relaxed mb-8">{selectedSite.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4"><Calendar className="text-orange-600" size={24} /><h3 className="text-lg font-bold text-amber-900">Visit Information</h3></div>
                  <div className="space-y-3 text-amber-700">
                    <p><strong>Best Time:</strong> {selectedSite.bestTime}</p>
                    <p><strong>Entry Fee:</strong> {selectedSite.entryFee}</p>
                    <p><strong>Timings:</strong> {selectedSite.timings}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4"><Navigation className="text-orange-600" size={24} /><h3 className="text-lg font-bold text-amber-900">Location</h3></div>
                  <p className="text-amber-700 mb-4">Coordinates: {selectedSite.latitude}°N, {selectedSite.longitude}°E</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${selectedSite.latitude},${selectedSite.longitude}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"><ExternalLink size={20} /> Open in Google Maps</a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-amber-900">Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-amber-700">
                  {selectedSite.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg"><span className="text-white font-bold text-2xl">म</span></div>
            <span className="text-3xl font-bold font-serif">Hidden Heritage</span>
          </div>
          <p className="text-lg text-amber-200 mb-8">Preserving and celebrating the rich cultural tapestry of Maharashtra</p>
          <div className="border-t border-amber-700 pt-8"><p className="text-amber-300">© 2025 Hidden Heritage of Maharashtra. All rights reserved.</p></div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap');

        .font-serif { font-family: 'Merriweather', serif; }
        body { font-family: 'Poppins', sans-serif; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}