import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-dark-bg to-dark-card/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-radial opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-dark-border bg-gradient-to-br from-dark-card to-dark-bg p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

              {/* Logo or icon representation */}
              <div className="relative z-10">
                <img
                  src="/logo.png"
                  alt="Route07 IT"
                  className="w-full max-w-md mx-auto mb-8 brightness-0 invert"
                />

                {/* Tech stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-dark-bg/50 backdrop-blur-sm border border-dark-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400 mb-1">7+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-dark-bg/50 backdrop-blur-sm border border-dark-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Based in Muscat, Oman
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              About Route07
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">
                Information Technology
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p className="text-lg">
                Route07 is a <strong className="text-white">remote-first boutique studio</strong>{' '}
                specializing in blockchain architecture, smart contract engineering, and
                high-performance infrastructure.
              </p>

              <p>
                We're not a software factory. We're a team of seasoned engineers who build serious
                systems for serious projects — from custom EVM chains and DeFi protocols to
                white-label explorers and production-grade DevOps infrastructure.
              </p>

              <p>
                Based in <strong className="text-white">Muscat, Oman</strong>, we work with clients
                worldwide: founders, VCs, financial institutions, and governments who need{' '}
                <strong className="text-white">precision, reliability, and technical depth</strong>.
              </p>

              <p>
                Our focus is on <strong className="text-white">long-term partnerships</strong>{' '}
                rather than one-off projects. We get involved early, architect the right solution,
                and stick around to ensure your success.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎯', label: 'Technical Excellence' },
                { icon: '🤝', label: 'Long-Term Partnerships' },
                { icon: '🌍', label: 'Global Reach' },
                { icon: '🔒', label: 'Security First' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-dark-card border border-dark-border rounded-lg"
                >
                  <span className="text-2xl">{value.icon}</span>
                  <span className="text-white font-medium">{value.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const contact = document.getElementById('contact')
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/50"
              >
                Work With Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <a
                href="mailto:info@route07it.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-dark-card border-2 border-dark-border text-gray-300 rounded-lg font-semibold hover:border-primary-500 hover:text-white transition-all"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

