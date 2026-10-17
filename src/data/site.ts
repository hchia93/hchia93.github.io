// Single source of truth for all site content. Edit here to update the page.

export const profile = {
  name: 'Hyrex Chia JianFei',
  role: 'Gameplay Programmer · Software Engineer (C++)',
  location: 'Malaysia',
  tagline: '',
  // Identity card (right panel). avatar = file in public/.
  card: {
    pill: 'Get In Touch',
    name: 'Hyrex Chia',
    nameCn: '谢 建飞',
    tag: '',  // catchphrase #2, undecided; hidden while empty
    avatar: '/avatar.png',
  },
};

// Shipped titles as image strips. image = header art in public/ships/, href = source page.
export const shipped = [
  { title: 'Bloodwell', engine: 'Unreal Engine 5', year: '2026', note: 'Indie ARPG revealed at the SEA Game Awards 2026. Lead programmer on the project.', image: '/ships/bloodwell.jpg', href: 'https://store.steampowered.com/app/5166650/Bloodwell/' },
  { title: 'Skull & Bones', engine: 'Anvil Engine', year: '2020–2024', note: 'AAA live-service naval action. Worked on progression & economy, MTX, and UI/UX.', image: '/ships/skull-and-bones.jpg', href: 'https://store.steampowered.com/app/2853730/Skull_and_Bones/' },
  { title: 'Final Fantasy XV', engine: 'Luminous Engine', year: '2016–2020', note: 'AAA JRPG. Worked on console debugging & performance optimization.', image: '/ships/final-fantasy-xv.jpg', href: 'https://store.steampowered.com/app/637650/FINAL_FANTASY_XV_WINDOWS_EDITION/' },
  { title: 'Sniper Ghost Warrior: Contracts', engine: 'CryEngine', year: '2016–2020', note: 'AA tactical shooter. Worked on the multiplayer component & platform compliance.', image: '/ships/sniper-ghost-warrior-contracts.jpg', href: 'https://store.steampowered.com/app/973580/Sniper_Ghost_Warrior_Contracts/' },
];

export const hook = {
  headline: "Hyrex's Lair",
  intro: 'Leading <strong>Bloodwell</strong> at Ten Ten Studio Malaysia',
  tags: ['Lead', 'Gameplay', 'Tools', 'Systems', 'Multiplayer', 'C++'],
};

export const offers = [
  { icon: 'person-standing', title: 'Any Scale', cn: '规模通吃', desc: 'Proven across Indie, AA, and AAA production.' },
  { icon: 'handshake', title: 'Any Setup', cn: '模式通吃', desc: 'Works with in-house development or co-development.' },
  { icon: 'refresh-cw', title: 'Closed-Loop Driven', cn: '闭环驱动', desc: 'Implements features, discovers cross-system dependencies, and plans for the next move.' },
  { icon: 'hammer', title: 'Tools mentality', cn: '工具思维', desc: 'Spot pain points, build tools that speed up production and support design & QA disciplines.' },
];

export const cta = {
  // Placeholder, ad copy undecided.
  line: '// 我还没有想到放什么在这里',
};

// Passive "traits" (game buff style). Short CN term + effect badge.
// Placeholder content, to be filled later.
export const traits = [
  { icon: 'database-sync', name: '占位 Title', effect: '占位 Text' },
  { icon: 'bug-check', name: '占位 Title', effect: '占位 Text' },
];

// Flavor text as point form; limited inline markup is our own content.
export const about = [
  'Prefer <strong>deliver results</strong> over trivial labour.',
  'Design resilient systems to survive design swings.',
  'Make progress.',
];

// Placeholder content, real services to be defined.
export const skillBuckets = [
  { title: '占位 Title', items: ['占位 Text', '占位 Text', '占位 Text'] },
  { title: '占位 Title', items: ['占位 Text', '占位 Text', '占位 Text'] },
  { title: '占位 Title', items: ['占位 Text', '占位 Text', '占位 Text'] },
];

// Social links rendered as icon + label, never raw URLs.
export const socials = [
  { kind: 'github', label: 'GitHub', href: 'https://github.com/hchia93' },
  { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/hyrexchia/' },
  { kind: 'mail', label: 'Email', href: 'mailto:hyrex.cjf@gmail.com' },
  { kind: 'discord', label: 'Discord', href: 'https://discord.com/users/426808650376413196' },
];

// Project cards, typed. type -> emblem icon + label (game-UI skill-card style).
export const projectTypes = {
  tool: { icon: 'hammer', label: 'Tool' },
  game: { icon: 'gamepad-2', label: 'Game' },
  learn: { icon: 'graduation-cap', label: 'Learning' },
};

// Ordered by emblem so same-type projects group together:
// workbench (anvil) > wrench > scroll > game > learning > archaeology (skull).
export const projects = [
  { name: 'uasset-workbench', lang: 'C++', type: 'tool', icon: 'anvil', blurb: 'Export UE5 assets into an LLM-readable structure, dashboard workbench.', href: 'https://github.com/hchia93/uasset-workbench' },
  { name: 'gp-workbench', lang: 'Python', type: 'tool', icon: 'anvil', blurb: 'Guitar Pro 8 workbench: transcribe a stem to a draft .gp, annotate the score in place.', href: 'https://github.com/hchia93/gp-workbench' },
  { name: 'pack-pdf', lang: 'C++', type: 'tool', blurb: 'Assemble PDFs on a timeline: reorder, page ranges, pack. Offline, with a CLI.', href: 'https://github.com/hchia93/pack-pdf' },
  { name: 'uasset-name-linter', lang: 'Python', type: 'tool', blurb: 'Scan UE projects for naming convention violations.', href: 'https://github.com/hchia93/uasset-name-linter' },
  { name: 'ue-map-utils', lang: 'C++', type: 'tool', blurb: 'Editor plugin: mesh auditing and context export.', href: 'https://github.com/hchia93/ue-map-utils' },
  { name: 'simple-guitar-tuner', lang: 'JavaScript', type: 'tool', blurb: 'Browser chromatic guitar tuner. No ads, no install, PWA.', href: 'https://github.com/hchia93/simple-guitar-tuner' },
  { name: 'fetch-steam-gametime', lang: 'Python', type: 'tool', icon: 'scroll-unfurled', blurb: 'Pull hours spent on owned Steam games.', href: 'https://github.com/hchia93/fetch-steam-gametime' },
  { name: 'escape-from-wizard', lang: 'C#', type: 'game', blurb: 'Escape prototype, A* pathfinding, XNA to MonoGame.', href: 'https://github.com/hchia93/escape-from-wizard' },
  { name: 'cmd-spaceship', lang: 'C++', type: 'game', blurb: 'Command-line multiplayer shooter, C++17 net + threads.', href: 'https://github.com/hchia93/cmd-spaceship' },
  { name: 'vulkan-tutorial-triangle', lang: 'C++', type: 'learn', blurb: 'Vulkan learning project with CI/CD.', href: 'https://github.com/hchia93/vulkan-tutorial-triangle' },
  { name: 'cpp-topics', lang: 'C++', type: 'learn', blurb: 'Modern C++17/20/23 exploration.', href: 'https://github.com/hchia93/cpp-topics' },
  { name: 'mock-store-payment-backend', lang: 'JavaScript', type: 'learn', blurb: 'Node + PostgreSQL backend, idempotent transactions.', href: 'https://github.com/hchia93/mock-store-payment-backend' },
  { name: 'computer-graphic-2014', lang: 'C++', type: 'learn', icon: 'fossil', blurb: 'OpenGL cathedral, rebuilt with CMake + vcpkg.', href: 'https://github.com/hchia93/computer-graphic-2014' },
];
