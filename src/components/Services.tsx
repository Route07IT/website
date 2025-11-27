import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Blockchain Architecture & Consulting',
      description: 'End-to-end architecture for blockchain-based products',
      features: [
        'Project discovery and solution design',
        'Tokenomics and business model advisory',
        'Architecture for investment platforms, DeFi protocols, and enterprise use cases',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: 'Custom Blockchains & Infrastructure',
      description: 'Design and implementation of custom EVM blockchains',
      features: [
        'Node infrastructure, RPC endpoints, validator architecture',
        'High-availability deployments on Kubernetes',
        'Monitoring and observability stacks (Prometheus, Grafana, Loki)',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: 'Smart Contracts & Protocols',
      description: 'Design and development of Solidity smart contracts',
      features: [
        'Tokens (ERC-20, ERC-721, ERC-1155), vesting, locking, airdrops',
        'DeFi components: staking, farming, liquidity management',
        'Security, upgradability, and gas-efficient design',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Explorers & Web3 Frontends',
      description: 'Blockchain Explorer as a Service',
      features: [
        'White-label explorers with Etherscan-style UX',
        'Custom branding (logo, colors, layout)',
        'High-end React frontends with Web3 wallet integration',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: 'DeFi & Market Infrastructure',
      description: 'Complete DeFi protocol development',
      features: [
        'DEX frontends and AMM integrations',
        'Market-making dashboards and automated infrastructure',
        'Liquidity management tools and analytics',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: 'IT & DevOps Services',
      description: 'Production-grade infrastructure and automation',
      features: [
        'Backend services in Go/Node.js for blockchain indexers and APIs',
        'CI/CD pipelines, containerization, secure deployment',
        'Systemd services, logging, and production infrastructure',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Advisory, Training & Education',
      description: 'Strategic guidance for Web3 adoption',
      features: [
        'Web3 adoption, token business models, and ecosystem design',
        'Workshops and training for technical and non-technical teams',
        'AI & Web3 education initiatives',
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-dark-bg via-dark-card/20 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Services & Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive blockchain and IT architecture services designed for serious projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-dark-card border border-dark-border rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg mb-4 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button
                onClick={() => {
                  const contact = document.getElementById('contact')
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
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

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

