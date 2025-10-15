import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, User, Heart, Share2, BookOpen, Mountain, Camera, Music, Utensils, ChevronRight, Star, ArrowLeft } from 'lucide-react';

export default function StoriesPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [likedStories, setLikedStories] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'All', icon: BookOpen },
    { name: 'Forts', icon: Mountain },
    { name: 'Temples', icon: Star },
    { name: 'Nature', icon: Camera },
    { name: 'Food', icon: Utensils },
    { name: 'Music', icon: Music }
  ];

  const stories = [
    {
      id: 1,
      title: "The Forgotten Glory of Panhala Fort",
      category: "Forts",
      district: "Kolhapur",
      author: "Rajesh Patil",
      date: "March 15, 2025",
      readTime: "8 min read",
      likes: 245,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/48/e5/23/panhala-fort.jpg",
      excerpt: "Perched majestically in the Sahyadri mountains, Panhala Fort tells tales of Maratha valor and strategic brilliance. This ancient fortress witnessed some of the most pivotal moments in Maharashtra's history...",
      content: "Panhala Fort, one of the largest and most strategically important forts in the Deccan, stands as a testament to the architectural prowess and military strategy of ancient Maharashtra. Built in the 12th century by the Shilahara dynasty, this fortress spans over 7.25 kilometers and sits at an elevation of 3,177 feet. The fort has witnessed numerous battles and has been under the rule of various dynasties including the Marathas, Mughals, and British. Chhatrapati Shivaji Maharaj spent over 500 days here, making it one of his favorite forts. The fort features impressive structures like the Teen Darwaza (three gates), Sajja Kothi (granary), and the Andhar Bavadi (inner well). Walking through these ancient corridors, one can almost hear the echoes of history and feel the presence of the brave warriors who defended this magnificent fortress.",
      featured: true
    },
    {
      id: 2,
      title: "Lonar Lake: Where Meteor Met Earth",
      category: "Nature",
      district: "Buldhana",
      author: "Sneha Deshmukh",
      date: "March 10, 2025",
      readTime: "6 min read",
      likes: 189,
      image: "https://www.ourbreathingplanet.com/wp-content/uploads/2019/09/Lonar-Lake.jpg",
      excerpt: "Formed 50,000 years ago by a meteor impact, Lonar Lake is a geological wonder that continues to mystify scientists and fascinate travelers with its unique ecosystem...",
      content: "Lonar Lake is not just any crater lake—it's one of only four known hyper-velocity impact craters in basaltic rock anywhere on Earth. The impact created a nearly circular crater approximately 1.8 kilometers in diameter and 150 meters deep. What makes this lake truly extraordinary is its unique water chemistry. The lake has both saline and alkaline properties, with different salinity levels at different depths. This creates a rare environment where specialized microorganisms thrive. Ancient temples around the lake, including the Kamalja Devi Temple and Daityasudan Temple, add a spiritual dimension to this scientific marvel. The lake changes colors throughout the year, appearing blue-green in some seasons and reddish in others due to the presence of various algae species.",
      featured: true
    },
    {
      id: 3,
      title: "Elephanta Caves: Shiva's Underground Palace",
      category: "Temples",
      district: "Mumbai",
      author: "Anand Kulkarni",
      date: "March 8, 2025",
      readTime: "10 min read",
      likes: 312,
      image: "https://indiaforyou.in/wp-content/uploads/2016/06/elc.jpg",
      excerpt: "The ancient rock-cut temples of Elephanta Island house some of the most magnificent sculptures of Lord Shiva, carved with devotion and artistic brilliance...",
      content: "Located on Elephanta Island in Mumbai Harbor, these UNESCO World Heritage caves date back to the 5th to 8th centuries. The main cave features the iconic Trimurti, a 20-foot high sculpture depicting three faces of Shiva as Creator, Preserver, and Destroyer. The caves showcase exceptional artistry with intricate carvings depicting various aspects of Shiva including Nataraja, Ardhanarishvara, and Kalyanasundara. The Portuguese named the island after the large stone elephant found here. Despite centuries of damage from natural erosion and human activity, the caves remain a stunning example of rock-cut architecture and Hindu mythology brought to life in stone.",
      featured: false
    },
    {
      id: 4,
      title: "Vada Pav: The People's Fast Food",
      category: "Food",
      district: "Mumbai",
      author: "Priya Sharma",
      date: "March 5, 2025",
      readTime: "5 min read",
      likes: 276,
      image: "https://img.freepik.com/premium-photo/indian-famous-street-food-vada-pav_55610-2880.jpg?w=2000",
      excerpt: "From humble street corners to the hearts of millions, the story of vada pav is the story of Mumbai itself—fast, flavorful, and deeply rooted in local culture...",
      content: "Invented in 1966 by Ashok Vaidya near Dadar station, vada pav was created as an affordable and filling meal for textile mill workers. Today, it's not just food—it's an emotion that connects every Mumbaikar. The simple yet genius combination of a spicy potato fritter sandwiched in a soft bun, served with chutneys, represents Mumbai's spirit of innovation and inclusivity. What started as a working-class snack has now become an iconic street food recognized worldwide. Each vada pav vendor has their own secret recipe and loyal customers who swear by their particular taste.",
      featured: false
    },
    {
      id: 5,
      title: "Lavani: The Heartbeat of Maharashtra",
      category: "Music",
      district: "Pune",
      author: "Madhuri Joshi",
      date: "March 1, 2025",
      readTime: "7 min read",
      likes: 198,
      image: "https://static.wixstatic.com/media/fb52ba_c031b36d78c542feafe6daaf5aa3348a~mv2.jpg/v1/fill/w_856,h_571,al_c,lg_1,q_85/fb52ba_c031b36d78c542feafe6daaf5aa3348a~mv2.jpg",
      excerpt: "With its powerful rhythm and expressive dance, Lavani is more than just a folk art form—it's the voice of Maharashtra's cultural soul...",
      content: "Originating in the Peshwa era, Lavani combines traditional song and dance to tell stories of love, politics, and society. The dancers, adorned in nine-yard saris, perform to the beat of the dholki, creating an unforgettable spectacle. Lavani has been a medium of social commentary and entertainment for centuries. The art form showcases the strength and grace of women performers who have kept this tradition alive through generations. Modern adaptations have brought Lavani to film and stage, but its essence remains rooted in the folk traditions of Maharashtra.",
      featured: false
    },
    {
      id: 6,
      title: "Ajanta Caves: Ancient Buddhist Marvel",
      category: "Temples",
      district: "Aurangabad",
      author: "Vikram Patil",
      date: "February 28, 2025",
      readTime: "12 min read",
      likes: 423,
      image: "https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Bhaja-Caves-768x576.jpg",
      excerpt: "Hidden in a horseshoe-shaped gorge, the Ajanta Caves preserve some of the finest examples of ancient Indian art and Buddhist architecture...",
      content: "Dating from the 2nd century BCE to 480 CE, these 30 rock-cut Buddhist caves are adorned with masterful paintings and sculptures that depict the life of Buddha and various Jataka tales. UNESCO declared them a World Heritage Site in 1983. The caves were abandoned around 650 CE and remained hidden for over a millennium until their rediscovery in 1819 by a British officer during a hunting expedition. The murals inside showcase sophisticated artistic techniques with natural pigments that have survived centuries. Each cave tells a different story, from monasteries to prayer halls, revealing the evolution of Buddhist art and architecture.",
      featured: true
    },
    {
      id: 7,
      title: "Raigad Fort: Shivaji's Capital",
      category: "Forts",
      district: "Raigad",
      author: "Sanjay Marathe",
      date: "February 25, 2025",
      readTime: "9 min read",
      likes: 334,
      image: "https://wallpaperaccess.com/full/6522957.png",
      excerpt: "The crown jewel of the Maratha Empire, Raigad Fort was where Chhatrapati Shivaji Maharaj was coronated in 1674, marking the birth of the Maratha kingdom...",
      content: "Situated at 2,700 feet above sea level, Raigad was rebuilt by Shivaji Maharaj and served as his capital. The fort features the famous Maha Darwaza, ruins of the royal palace, and the queen's quarters, all speaking volumes about Maratha grandeur. The Rajyabhishek Sthal (coronation site) still stands as a powerful reminder of that historic day when Shivaji was crowned Chhatrapati. The fort's strategic location provided natural defense from all sides. Today, visitors can reach the fort via a ropeway or by climbing approximately 1,450 steps, each step echoing the glory of the Maratha Empire.",
      featured: false
    },
    {
      id: 8,
      title: "Tarkarli Beach: Maharashtra's Hidden Paradise",
      category: "Nature",
      district: "Sindhudurg",
      author: "Neha Kadam",
      date: "February 20, 2025",
      readTime: "6 min read",
      likes: 267,
      image: "https://c8.alamy.com/comp/2AXM0X4/malvan-india-december-22-2019-tarkarli-beach-famous-for-water-sports-activity-in-india-banana-ride-enjoyed-by-tourists-2AXM0X4.jpg",
      excerpt: "With crystal-clear waters and pristine white sands, Tarkarli Beach offers a slice of tropical paradise along Maharashtra's Konkan coast...",
      content: "Tarkarli is famous for its clear waters where you can see the ocean floor even at 20 feet depth. The beach is perfect for water sports like scuba diving, snorkeling, and parasailing, while the nearby Sindhudurg Fort adds historical charm. The Karli River meets the Arabian Sea here, creating a unique ecosystem. The beach remains relatively untouched by mass tourism, offering a peaceful retreat. Local Malvani cuisine, especially seafood, is another highlight that draws food lovers from across the state.",
      featured: false
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (storyId) => {
    setLikedStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };

  if (selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        {/* Navigation removed as it's handled by App.jsx */}

        <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg mb-4">
                {selectedStory.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-serif leading-tight">
                {selectedStory.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-amber-700 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-orange-600" />
                  {selectedStory.district}
                </div>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-orange-600" />
                  {selectedStory.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-orange-600" />
                  {selectedStory.readTime}
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl">
              <p className="text-xl text-amber-800 leading-relaxed mb-6 font-medium">
                {selectedStory.excerpt}
              </p>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-amber-700 leading-relaxed whitespace-pre-line">
                  {selectedStory.content}
                </p>
              </div>

              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-amber-200">
                <button
                  onClick={() => handleLike(selectedStory.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    likedStories[selectedStory.id]
                      ? 'bg-red-500 text-white'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  }`}
                >
                  <Heart size={20} fill={likedStories[selectedStory.id] ? 'white' : 'none'} />
                  {selectedStory.likes + (likedStories[selectedStory.id] ? 1 : 0)}
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 font-semibold transition-all duration-300">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation removed as it's handled by App.jsx */}

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-amber-800/20 to-yellow-700/30"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
            Heritage Stories
          </h1>
          <p className="text-xl sm:text-2xl text-amber-800 max-w-3xl mx-auto">
            Discover the untold tales of Maharashtra's rich cultural heritage
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
                <input
                  type="text"
                  placeholder="Search stories, places, districts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-amber-900"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === cat.name
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                      : 'bg-white/80 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <Icon size={20} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, idx) => (
              <article
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {story.category}
                  </div>
                  {story.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <Star size={16} fill="white" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3 font-serif group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-amber-600 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {story.district}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {story.readTime}
                    </span>
                  </div>

                  <p className="text-amber-700 mb-4 leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                    <div className="flex items-center gap-4 text-sm text-amber-600">
                      <span className="flex items-center gap-1">
                        <Heart size={16} />
                        {story.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={16} />
                        {story.author}
                      </span>
                    </div>
                    <ChevronRight className="text-orange-600 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-24 h-24 mx-auto mb-6 text-amber-400" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">
                No Stories Found
              </h3>
              <p className="text-xl text-amber-700">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}