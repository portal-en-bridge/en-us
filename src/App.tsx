import React, { useEffect, useState } from 'react';
import { Shield, Lock, Wallet, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/20 backdrop-blur-lg z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Trézor Bridge®
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#security" className="hover:text-purple-400 transition-colors">Security</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="px-6 py-2 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-all">
                Learn More
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden pt-20">
          <div className="flex flex-col items-center space-y-8 p-8">
            <a href="#features" className="text-xl">Features</a>
            <a href="#about" className="text-xl">About</a>
            <a href="#security" className="text-xl">Security</a>
            <a href="#contact" className="text-xl">Contact</a>
            <button className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Introducing the New Trézor App
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the future of secure digital asset management with our revolutionary platform
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 animate-pulse-slow">
              Download Now
            </button>
            <button className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Trézor Bridge
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-purple-400" />,
                title: "Advanced Security",
                description: "State-of-the-art encryption and multi-factor authentication protect your digital assets around the clock."
              },
              {
                icon: <Lock className="w-12 h-12 text-purple-400" />,
                title: "Private Key Control",
                description: "Maintain complete control of your private keys with our innovative security architecture."
              },
              {
                icon: <Wallet className="w-12 h-12 text-purple-400" />,
                title: "Seamless Integration",
                description: "Connect with multiple blockchain networks and manage all your assets in one secure location."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg hover:transform hover:scale-105 transition-all animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 px-4 bg-black/10" id="detailed-content">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Trézor Bridge: A Secure Connection Between Your Wallet and Browser
          </h1>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Table of Contents</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-4 px-2">🔹 Heading</th>
                    <th className="text-left py-4 px-2">🔹 Subheading</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { heading: "What is Trézor Bridge?", subheading: "Overview of Trézor Bridge and its importance." },
                    { heading: "Key Features of Trézor Bridge", subheading: "Security, Compatibility, and Seamless Connectivity." },
                    { heading: "How to Install Trézor Bridge?", subheading: "Step-by-step guide for Windows, macOS, and Linux." },
                    { heading: "How Does Trézor Bridge Work?", subheading: "Understanding its functionality and role in transactions." },
                    { heading: "Why Use Trézor Bridge?", subheading: "Benefits for enhanced crypto security and usability." },
                    { heading: "Common Issues & Troubleshooting", subheading: "Fixing installation and connectivity problems." },
                    { heading: "Trézor Bridge vs. Trézor Suite", subheading: "Key differences between both software solutions." },
                    { heading: "FAQs", subheading: "Answers to commonly asked questions." }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                      <td className="py-4 px-2">
                        ✅ <a href={`#${item.heading.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-purple-400 transition-colors">
                          {item.heading}
                        </a>
                      </td>
                      <td className="py-4 px-2 text-gray-300">{item.subheading}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-12">
            <div id="what-is" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 What is Trézor Bridge?</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Trézor Bridge</strong> is a crucial software that allows <strong>Trézor hardware wallets</strong> to communicate with web browsers. Since browsers lack native support for USB communication with <strong>crypto wallets</strong>, Trézor Bridge acts as a <strong>secure middleman</strong>, ensuring smooth transactions and enhanced security.
              </p>
            </div>

            <div id="features" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Key Features of Trézor Bridge</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-4 px-2">🔹 Feature</th>
                      <th className="text-left py-4 px-2">🔹 Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "🔒 Enhanced Security", description: "Provides a safe and encrypted connection between Trézor and browsers." },
                      { feature: "🖥️ Cross-Platform Compatibility", description: "Works on Windows, macOS, and Linux." },
                      { feature: "🔄 Seamless Connectivity", description: "Allows direct connection to Trézor Suite and web-based wallets." },
                      { feature: "🚀 Regular Updates", description: "Frequent security patches and improvements." },
                      { feature: "🛠️ User-Friendly Interface", description: "Easy installation and minimal setup required." }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                        <td className="py-4 px-2">{item.feature}</td>
                        <td className="py-4 px-2 text-gray-300">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="install" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 How to Install Trézor Bridge?</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-4 px-2">🔹 Operating System</th>
                      <th className="text-left py-4 px-2">🔹 Installation Steps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { os: "🖥️ Windows", steps: "Download Trézor Bridge, run the installer, and restart the browser." },
                      { os: "🍏 macOS", steps: "Download the macOS version, move it to Applications, and restart Safari/Chrome." },
                      { os: "🐧 Linux", steps: "Install via terminal commands or download the package from the official site." }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                        <td className="py-4 px-2">{item.os}</td>
                        <td className="py-4 px-2 text-gray-300">{item.steps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="how-it-works" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 How Does Trézor Bridge Work?</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                  Acts as a Communication Layer: Allows browsers to detect Trézor devices.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                  Supports Multiple Browsers: Works on Chrome, Edge, and Firefox.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                  Ensures Secure Transactions: Prevents phishing attacks and unauthorized access.
                </li>
              </ul>
            </div>

            <div id="why-use" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Why Use Trézor Bridge?</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-4 px-2">✅ Benefit</th>
                      <th className="text-left py-4 px-2">✅ Why It Matters?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { benefit: "🔐 Maximum Security", why: "Prevents unauthorized access to private keys." },
                      { benefit: "🌍 Wide Browser Support", why: "Works on Chrome, Brave, Edge, and Firefox." },
                      { benefit: "🛠 Stable & Reliable", why: "Ensures smooth connection with crypto wallets." },
                      { benefit: "💡 Essential for Crypto Users", why: "Needed for managing assets via Trézor hardware wallets." }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                        <td className="py-4 px-2">{item.benefit}</td>
                        <td className="py-4 px-2 text-gray-300">{item.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="troubleshoot" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Common Issues & Troubleshooting</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-4 px-2">❌ Issue</th>
                      <th className="text-left py-4 px-2">🔧 Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { issue: "🚫 Device Not Detected", solution: "Reinstall Trézor Bridge and restart the browser." },
                      { issue: "🔌 Connection Errors", solution: "Use an original USB cable and check drivers." },
                      { issue: "🔄 Not Updating", solution: "Download the latest version from Trézor's website." }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                        <td className="py-4 px-2">{item.issue}</td>
                        <td className="py-4 px-2 text-gray-300">{item.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="comparison" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Trézor Bridge vs. Trézor Suite</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left py-4 px-2">🔍 Aspect</th>
                      <th className="text-left py-4 px-2">🔄 Trézor Bridge</th>
                      <th className="text-left py-4 px-2">🏆 Trézor Suite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "📡 Purpose", bridge: "Connects Trézor to browsers.", suite: "Complete wallet management software." },
                      { aspect: "🔗 Connectivity", bridge: "Works with web-based wallets.", suite: "Works both online and offline." },
                      { aspect: "🔐 Security Features", bridge: "Secure browser communication.", suite: "Advanced security settings." }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                        <td className="py-4 px-2">{item.aspect}</td>
                        <td className="py-4 px-2 text-gray-300">{item.bridge}</td>
                        <td className="py-4 px-2 text-gray-300">{item.suite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="faqs" className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">📌 Frequently Asked Questions (FAQs)</h2>
              <p className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                🚀 Enhance Your Crypto Security with Trézor Bridge Today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/20" id="about">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Trézor Bridge
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">The Future of Digital Asset Security</h3>
              <p className="text-gray-300 mb-6">
                Trézor Bridge represents the pinnacle of blockchain security and usability. Our platform combines cutting-edge technology with intuitive design to provide the most secure and user-friendly digital asset management solution available today.
              </p>
              <ul className="space-y-4">
                {[
                  "Military-grade encryption protocols",
                  "Real-time transaction monitoring",
                  "Institutional-grade security measures",
                  "24/7 dedicated support team"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-purple-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transform rotate-3 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
                alt="Secure digital asset management"
                className="rounded-3xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Trézor Bridge®</h4>
              <p className="text-gray-400">Securing the future of digital assets</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Trézor App</li>
                <li>Hardware Wallet</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Support Center</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@trezorbridge.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Trézor Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;