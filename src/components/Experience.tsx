import React from 'react'

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'DeFi Infrastructure',
      description: 'European DeFi infrastructure project',
      details: 'Complete protocol architecture, smart contracts, and Web3 frontend',
      tech: ['Solidity', 'React', 'Ethers.js'],
    },
    {
      type: 'Investment Platform',
      description: 'GCC-based tokenized investment platform',
      details: 'Blockchain backend, token vesting, KYC/AML integration',
      tech: ['Custom EVM', 'Go', 'Kubernetes'],
    },
    {
      type: 'Custom Blockchain',
      description: 'Custom EVM chain & explorer suite',
      details: 'Complete blockchain infrastructure with white-label explorer',
      tech: ['Geth', 'Prometheus', 'React'],
    },
    {
      type: 'DeFi Protocol',
      description: 'Staking and farming protocol',
      details: 'Multi-token staking, yield farming, liquidity pools',
      tech: ['Solidity', 'Hardhat', 'OpenZeppelin'],
    },
  ]

  const industries = [
    'Decentralized Finance (DeFi)',
    'Investment Platforms',
    'Custom Blockchains',
    'Web3 Startups',
    'Enterprise Solutions',
    'Government Projects',
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Selected Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by founders, funds, and institutions across multiple continents
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-xl hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Type Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
                {exp.type}
              </div>

              {/* Description */}
              <h3 className="text-xl font-semibold text-white mb-2">{exp.description}</h3>
              <p className="text-gray-400 mb-4">{exp.details}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-dark-bg border border-dark-border text-gray-400 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-white mb-2">
              Experience Across Industries
            </h3>
            <p className="text-gray-400">
              We've worked with projects spanning multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-500/50 transition-all group"
              >
                <div className="text-primary-400 mb-2 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-dark-card border border-dark-border rounded-xl">
            <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
          <div className="p-6 bg-dark-card border border-dark-border rounded-xl">
            <div className="text-4xl font-bold text-primary-400 mb-2">15+</div>
            <p className="text-gray-400">Countries Served</p>
          </div>
          <div className="p-6 bg-dark-card border border-dark-border rounded-xl">
            <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

