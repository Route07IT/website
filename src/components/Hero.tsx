import React from 'react'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Serving founders, funds, and institutions worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Blockchain Architecture.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">
              Serious Infrastructure.
            </span>
            <br />
            Real-World Impact.
          </h1>

          {/* Sub-headline */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            A boutique Web3 & IT architecture studio building high-trust blockchain systems.
            From custom EVM chains to smart contracts and infrastructure — we architect,
            design, and deliver enterprise-grade solutions for serious projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="mailto:info@route07it.com"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105"
            >
              <span className="relative z-10">Schedule a Strategy Call</span>
              <svg
                className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform"
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 bg-dark-card border-2 border-dark-border rounded-lg hover:border-primary-500 hover:text-white transition-all"
            >
              View Services
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Tech Stack Icons/Keywords */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Core Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              {[
                'Solidity',
                'EVM',
                'Kubernetes',
                'Go',
                'React',
                'Node.js',
                'Prometheus',
                'Grafana',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-md hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

