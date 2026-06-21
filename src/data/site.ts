// Single source of truth for all site content. Edit here to update the page.

export const profile = {
  name: 'Hyrex Chia JianFei',
  role: 'Gameplay Programmer · Software Engineer (C++)',
  location: 'Malaysia',
  tagline: '',
  // Identity card (right panel). avatar = file in public/.
  card: {
    pill: '想做有足够价值的东西',
    name: 'Hyrex',
    tag: '',  // catchphrase #2, undecided; hidden while empty
    avatar: '/avatar.png',
  },
};

// Shipped titles (engine + studio + year + one-line contribution).
export const shipped = [
  { title: 'Skull & Bones', engine: 'Anvil', studio: 'Ubisoft Singapore', year: '2020–2024', note: 'Progression & economy systems.' },
  { title: 'Final Fantasy XV', engine: 'Luminous', studio: 'Streamline Studios', year: '2016–2020', note: 'Console debug & optimization.' },
  { title: 'Sniper Ghost Warrior: Contracts', engine: 'CryEngine', studio: 'Streamline Studios', year: '2016–2020', note: 'Multiplayer & platform compliance.' },
];

export const hook = {
  headline: 'Systems and tools that ship.',
  sub: 'A gameplay and tools programmer moving into general software engineering. C++ at the core, open to remote work.',
};

// stacked cards under the identity card (right column), each its own color
export const sideCards = [
  { label: 'Gameplay & Tools Programmer', from: '#7c5cff', to: '#c026d3' },
  { label: 'Open for remote work', from: '#fbbf24', to: '#f97316' },
];

export const offers = [
  { title: 'Data-driven systems', desc: 'Built to extend and customize to your needs.' },
  { title: 'Tools mentality', desc: 'Identify needs and pain points, make plugins, tools, pipeline to save production time.' },
  { title: 'AAA-grade rigor', desc: 'Server-authoritative multiplayer, regression discipline, production-grade quality.' },
];

export const cta = {
  line: 'Have a project that needs to ship? I take on remote work.',
  label: 'Get in touch',
  href: 'mailto:hyrex.cjf@gmail.com',
};

export const about = [
  'What I care about is whether the product ends up useful to people, or fulfils the goal it was built for.',
];

export const skillBuckets = [
  { title: 'Language Stacks', items: ['C++', 'Python', 'C#'] },
  { title: 'Gameplay Stacks', items: ['Unreal Engine', 'UI / UX', 'Runtime Systems', 'Multiplayer Systems', 'Gameplay Systems', 'State Machines', 'Data-driven Design'] },
  { title: 'Tools Stacks', items: ['Perforce', 'SVN', 'Git', 'PostgreSQL', 'CMake / vcpkg', 'Claude Code'] },
];

// Social links rendered as icon + label, never raw URLs.
export const socials = [
  { kind: 'github', label: 'GitHub', href: 'https://github.com/hchia93' },
  { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/hyrexchia/' },
  { kind: 'mail', label: 'Email', href: 'mailto:hyrex.cjf@gmail.com' },
  { kind: 'discord', label: 'Discord', href: 'https://discord.com/users/426808650376413196' },
];

// Project tiles. glyph = the icon shown on the app-style tile.
// from/to = saturated gradient (red avoided on purpose).
export const projectGroups = [
  {
    title: 'Tooling',
    accent: '#f97316',
    items: [
      { name: 'pack-pdf', lang: 'C++', icon: 'file-text', from: '#ff9a3d', to: '#ff5e8a', blurb: 'Assemble PDFs on a timeline: reorder, page ranges, pack. Offline, with a CLI.', href: 'https://github.com/hchia93/pack-pdf' },
      { name: 'uasset-json-exporter', lang: 'C++', icon: 'braces', from: '#ffa64d', to: '#f43f8c', blurb: 'Export UE5 assets into LLM-readable structures.', href: 'https://github.com/hchia93/uasset-json-exporter' },
      { name: 'uasset-name-linter', lang: 'Python', icon: 'case-sensitive', from: '#ffb24d', to: '#fb6f91', blurb: 'Scan UE projects for naming convention violations.', href: 'https://github.com/hchia93/uasset-name-linter' },
      { name: 'ue-map-utils', lang: 'C++', icon: 'map', from: '#ff8a3d', to: '#e85aa0', blurb: 'Editor plugin: mesh auditing and context export.', href: 'https://github.com/hchia93/ue-map-utils' },
    ],
  },
  {
    title: 'Games',
    accent: '#ea580c',
    items: [
      { name: 'escape-from-wizard', lang: 'C#', icon: 'wand-sparkles', from: '#ff6f91', to: '#a855f7', blurb: 'Escape prototype, A* pathfinding, XNA to MonoGame.', href: 'https://github.com/hchia93/escape-from-wizard' },
      { name: 'cmd-spaceship', lang: 'C++', icon: 'rocket', from: '#ff7e5a', to: '#c850e0', blurb: 'Command-line multiplayer shooter, C++17 net + threads.', href: 'https://github.com/hchia93/cmd-spaceship' },
    ],
  },
  {
    title: 'Graphics',
    accent: '#f59e0b',
    items: [
      { name: 'computer-graphic-2014', lang: 'C++', icon: 'landmark', from: '#ffb14d', to: '#ff6f91', blurb: 'OpenGL cathedral, rebuilt with CMake + vcpkg.', href: 'https://github.com/hchia93/computer-graphic-2014' },
      { name: 'vulkan-tutorial-triangle', lang: 'C++', icon: 'triangle', from: '#ffa64d', to: '#f4538c', blurb: 'Vulkan learning project with CI/CD.', href: 'https://github.com/hchia93/vulkan-tutorial-triangle' },
    ],
  },
  {
    title: 'Foundations & Other',
    accent: '#d97706',
    items: [
      { name: 'simple-guitar-tuner', lang: 'JavaScript', icon: 'guitar', from: '#ff9a3d', to: '#ff5e8a', blurb: 'Browser chromatic guitar tuner. No ads, no install, PWA.', href: 'https://github.com/hchia93/simple-guitar-tuner' },
      { name: 'cpp-topics', lang: 'C++', icon: 'file-code', from: '#ffae4d', to: '#fb6f91', blurb: 'Modern C++17/20/23 exploration.', href: 'https://github.com/hchia93/cpp-topics' },
      { name: 'mock-store-payment-backend', lang: 'JavaScript', icon: 'credit-card', from: '#ff7e5a', to: '#b06ef5', blurb: 'Node + PostgreSQL backend, idempotent transactions.', href: 'https://github.com/hchia93/mock-store-payment-backend' },
      { name: 'fetch-steam-gametime', lang: 'Python', icon: 'gamepad-2', from: '#ffb14d', to: '#f4538c', blurb: 'Pull hours spent on owned Steam games.', href: 'https://github.com/hchia93/fetch-steam-gametime' },
    ],
  },
];
