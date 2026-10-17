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
  intro: 'Leading <strong>Bloodwell</strong> at <a class="studio" href="https://www.tentenstudio.com/" target="_blank" rel="noopener noreferrer">Ten Ten Studio Malaysia</a>',
  tags: ['Lead', 'Gameplay', 'Tools', 'Systems', 'Multiplayer', 'C++'],
};

// Roles, Dota-style. gameModes = production scales and setups covered, shown as lobby-style chips.
export const offers = [
  { icon: 'sword', title: 'Semi-Carry', cn: '半核', desc: 'Farms context from the team, bridges the pieces, and pictures the end result before carrying as the core.' },
  { icon: 'puzzle', title: 'Integrator', cn: '整合', desc: 'Implements features, discovers cross-system dependencies, plans the next move, and closes the intent loop.' },
  { icon: 'hand-stars', title: 'Support', cn: '辅助', desc: 'Builds tools that speed up other disciplines and improve accessibility.' },
  { icon: 'bomb', title: 'Nuker', cn: '爆发', desc: 'Questions whether a thing needs to exist or can be simplified, then corrects it or nukes it.' },
];
export const gameModes = [['Indie', 'AA', 'AAA'], ['In-house', 'Co-dev']];

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

// Tracker jokes. Bug identities pop out of a spawning click (17% pseudo-random).
// Resolutions pop when a bug is squashed in the top banner.
export const bugJokes = ['Day 0!', 'TRC!', 'Blocker!', 'P0!', 'Cert Fail!', 'Crash', 'Seg Fault', 'Day 1 Patch'];
export const resolveJokes = ['Fixed!', 'Resolved!', 'Duplicate!', 'By Design!', 'Closed!', "Won't Fix!"];

// Card back colour presets. Each swaps the frame, face gradient, rays, moons and motto as one set;
// front = the identity card's flowing gradient. The bug crest and the GitHub patch stay the same across all of them.
export const cardThemes = [
  { name: 'Silver', front: ['#e0a63a', '#ff7a2f', '#ff4a1f'], frame: '#121316', face: ['#e3e8ee', '#b9c2cd', '#8f99a6'], ray: 'rgba(255, 255, 255, 0.55)', moon: '#8d939c', line: 'rgba(255, 255, 255, 0.9)', motto: '#121316' },
  { name: 'Orange & Red', front: ['#ff9a3c', '#ff5a1f', '#c8281a'], frame: '#1a0c08', face: ['#ffc9a0', '#ff8a4a', '#d8461f'], ray: 'rgba(255, 236, 210, 0.55)', moon: '#ffb347', line: 'rgba(255, 230, 210, 0.9)', motto: '#1a0c08' },
  { name: 'Black & Gold',front: ['#f0c860', '#d49a2a', '#a8701a'], frame: '#0f0d0a', face: ['#e4ddcc', '#b3a98f', '#776b4f'], ray: 'rgba(255, 214, 120, 0.6)', moon: '#d8ad4a', line: 'rgba(255, 226, 150, 0.9)', motto: '#1a140a' },
  { name: 'Black & Pink', front: ['#f08cc4', '#c8509a', '#8e2f70'], frame: '#151017', face: ['#eedde9', '#c4a2bb', '#836279'], ray: 'rgba(255, 175, 225, 0.55)', moon: '#c48db4', line: 'rgba(255, 220, 240, 0.9)', motto: '#151017' },
  { name: 'Black & Red', front: ['#f06a5a', '#c8323a', '#8a1c22'], frame: '#150c0c', face: ['#e8d8d6', '#bd9693', '#7f5552'], ray: 'rgba(255, 130, 120, 0.55)', moon: '#bf6f69', line: 'rgba(255, 215, 210, 0.9)', motto: '#150c0c' },
  { name: 'Blue Gold', front: ['#9fb0f2', '#6478d6', '#3a4aa8'], frame: '#161c3c', face: ['#c2ccf6', '#8394dd', '#4f5fae'], ray: 'rgba(225, 232, 255, 0.55)', moon: '#e2b95c', line: 'rgba(235, 240, 255, 0.9)', motto: '#161c3c' },
  { name: 'Purple Gold', front: ['#c39af2', '#8e5ed8', '#5a33a0'], frame: '#24133f', face: ['#dcc4f7', '#a37ddc', '#6c47aa'], ray: 'rgba(242, 228, 255, 0.55)', moon: '#e2b95c', line: 'rgba(245, 235, 255, 0.9)', motto: '#24133f' },
  { name: 'Rose', front: ['#ffb0a6', '#f27b78', '#d0505c'], frame: '#5c1526', face: ['#ffb3ad', '#f27b78', '#cf505c'], ray: 'rgba(255, 232, 222, 0.55)', moon: '#f0c46c', line: 'rgba(255, 236, 228, 0.9)', motto: '#5c1526' },
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
