export const opportunities = [
  {
    id: '001',
    code: 'OPPORTUNITY 001',
    category: 'PROPERTY',
    type: 'MULTIFAMILY',
    location: 'Newark, NJ',
    shortDescription:
      'A relationship-led introduction to a multifamily asset seeking thoughtful stewards.',
    cta: 'VIEW OPPORTUNITY →',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80',
    opportunity:
      'This announcement opens a conversation around a multifamily property where people, capital, and care can meet. Presented as illustrative mockup content.',
    property:
      'Twelve residential units in a transit-adjacent neighborhood. Placeholder details for Mockup Design #6—availability and pricing are not live offerings.',
    whyItMatters:
      'Opportunities like this show how KINDRED surfaces work through context and relationships—not anonymous listings.',
    facts: [
      ['Type', 'Multifamily'],
      ['Location', 'Newark, NJ'],
      ['Units', '12 (illustrative)'],
      ['Status', 'Open conversation'],
    ],
  },
  {
    id: '002',
    code: 'OPPORTUNITY 002',
    category: 'RENTAL',
    type: 'RENTAL',
    location: 'Jersey City, NJ',
    shortDescription:
      'A calm rental residence for someone who wants community nearby and city access.',
    cta: 'VIEW PROPERTY →',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80',
    opportunity:
      'A rental announcement designed as a story: who it may suit, where it sits, and how to begin a conversation.',
    property:
      'Two-bedroom residence with natural light and walkable amenities. Illustrative mock listing only.',
    whyItMatters:
      'Rentals are part of the network too—places where people live, meet neighbors, and grow roots.',
    facts: [
      ['Type', 'Residential rental'],
      ['Location', 'Jersey City, NJ'],
      ['Beds / Baths', '2 / 2'],
      ['Status', 'Available (mock)'],
    ],
  },
  {
    id: '003',
    code: 'OPPORTUNITY 003',
    category: 'INVESTMENT',
    type: 'INVESTMENT',
    location: 'Hoboken, NJ',
    shortDescription:
      'An investment conversation focused on long-hold collaboration rather than speed.',
    cta: 'VIEW OPPORTUNITY →',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    opportunity:
      'Capital and operators exploring a measured residential investment with community alignment.',
    property:
      'Small residential portfolio profile presented for storytelling purposes. Not a solicitation.',
    whyItMatters:
      'KINDRED treats investment as a people decision first—who you trust, and what you build together.',
    facts: [
      ['Type', 'Investment'],
      ['Location', 'Hoboken, NJ'],
      ['Horizon', 'Long-hold (illustrative)'],
      ['Status', 'Exploratory'],
    ],
  },
  {
    id: '004',
    code: 'OPPORTUNITY 004',
    category: 'PROPERTY',
    type: 'COMMERCIAL',
    location: 'Montclair, NJ',
    shortDescription:
      'A commercial space announcement for partners who value neighborhood fabric.',
    cta: 'VIEW OPPORTUNITY →',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80',
    opportunity:
      'A storefront-adjacent commercial opportunity shared through the KINDRED desk.',
    property:
      'Flexible commercial floor with street presence. Placeholder specifications only.',
    whyItMatters:
      'Commercial spaces shape how communities gather—businesses, meetings, and daily life.',
    facts: [
      ['Type', 'Commercial'],
      ['Location', 'Montclair, NJ'],
      ['Size', 'Illustrative'],
      ['Status', 'Open conversation'],
    ],
  },
]

export function getOpportunityById(id) {
  return opportunities.find((o) => o.id === id)
}
