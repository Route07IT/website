import React from 'react'

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Regulated Investment Platforms',
      description:
        'Launch a fully compliant investment platform with on-chain logic, token vesting, and KYC integration.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      tags: ['Investment', 'Compliance', 'Tokenization'],
    },
    {
      title: 'White-Label Block Explorer',
      description:
        'Deploy a branded blockchain explorer for your custom chain or L2 with full transaction, block, and contract visibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      tags: ['Explorer', 'Custom Chain', 'Branding'],
    },
    {
      title: 'DeFi Protocol with Smart Liquidity',
      description:
        'Build a DeFi protocol with automated market making, liquidity pools, staking, and yield farming.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      tags: ['DeFi', 'AMM', 'Staking'],
    },
    {
      title: 'Token Ecosystem with Governance',
      description:
        'Create a complete token ecosystem with utility tokens, governance mechanisms, rewards distribution, and DAO functionality.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      tags: ['Tokens', 'Governance', 'DAO'],
    },
    {
      title: 'Custom EVM Chain for Enterprises',
      description:
        'Design and deploy a custom EVM-compatible blockchain with tailored consensus, private transactions, and enterprise features.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      tags: ['Custom Chain', 'Enterprise', 'Privacy'],
    },
  ]

  return (
    <section id="solutions" className="py-20 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Solutions & Use Cases
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world applications built on cutting-edge blockchain technology
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-dark-card to-dark-card/50 border border-dark-border rounded-2xl hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors"></div>

              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 text-primary-400 rounded-xl mb-6 group-hover:scale-110 group-hover:from-primary-500/30 group-hover:to-blue-500/30 transition-all">
                {solution.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-blue-500/0 group-hover:from-primary-500/10 group-hover:via-transparent group-hover:to-blue-500/10 transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Have a different use case in mind?</p>
          <button
            onClick={() => {
              const contact = document.getElementById('contact')
              if (contact) contact.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-6 py-3 bg-dark-card border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all"
          >
            Discuss Your Project
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
        </div>
      </div>
    </section>
  )
}

export default Solutions

