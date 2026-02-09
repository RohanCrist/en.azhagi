import React from 'react';

export const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

// Generate image paths assuming they are in the public folder root
export const MEMORY_IMAGES = Array.from({ length: 35 }, (_, i) => `text${i + 1}.jpg`);

export const LOVE_LETTERS = [
  "I am becoming the man you deserve every single day.",
  "You are not what they think. You are the girl my heart chose.",
  "I love you not just for the big moments, but for the quiet ones.",
  "You are my safest place.",
  "In a world of noise, you are my clarity.",
  "Your ambition fuels my own.",
  "Every storm we weathered only made our roots deeper.",
  "I would choose you in a hundred lifetimes.",
  "You are the poem I never knew how to write."
];

export const CHAPTERS = [
  {
    id: 1,
    title: "The Seed",
    subtitle: "March 23, 2023",
    text: "It didn't begin with a bang, but with a whisper. We were just two souls drifting in the same orbit, calling it friendship. Do you remember the laughter? The kind that made our stomachs hurt and our eyes water? We built a castle on that laughter, unaware that we were laying the foundation for something that would outlast the stars.\n\nIt was the quiet before the beautiful storm. We shared secrets like currency, trading pieces of our souls without knowing we were already belonging to one another. You were my safe harbor, the person I ran to when the world was too loud, never realizing that you were becoming my world.\n\nIn those early days, I looked at you and saw a best friend. Now, I look back and see the universe plotting its greatest masterpiece. We were innocent, unaware, and utterly perfect in our ignorance of the fire that was about to ignite.",
    bgColor: "bg-deep-velvet",
    icon: (
      <svg className="w-24 h-24 text-rose-300 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-8" />
        <path d="M5 12c0 7.2 4.3 10 7 10s7-2.8 7-10a7 7 0 0 0-7-7 7 7 0 0 0-7 7z" />
        <path d="M12 14a4 4 0 0 1 4-4" />
        <path d="M12 14a4 4 0 0 0-4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "The Crossing",
    subtitle: "Friends to Lovers",
    text: "Then came the shift. The terrifying, earth-shattering realization that 'friend' was too small a word for what you were to me. It was like standing on the edge of a cliff, looking down at the unknown. To cross that line meant risking the most precious thing I had—us.\n\nIt took a bravery I didn't know I possessed to look you in the eye and let the silence speak what my heart was screaming. We blurred the lines, trembling not from fear, but from the sheer magnitude of what we were starting. We chose to fall, knowing there might be no catching us, only to find that we learned to fly together.\n\nThat transition was our baptism. We washed away the safety of the platonic and emerged as something fierce, something raw. We became lovers not by accident, but by a powerful, undeniable choice.",
    bgColor: "bg-dark-berry",
    icon: (
      <svg className="w-24 h-24 text-rose-gold animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "The Tempest",
    subtitle: "LDR & Trials",
    text: "The miles stretched between us like a physical wound. Long distance isn't for the faint of heart, and God knows we were tested. The silence of the phone after we hung up was the heaviest sound I've ever heard. Miles were just numbers, they said, but they felt like walls.\n\nAnd then there were the voices. The 'people issues,' the judgments, the noise of a world that didn't understand the language we spoke. They tried to tear down what we were building. They tried to whisper doubts into the cracks of our fortress.\n\nBut we were a fortress. We fought back to back, defending this sacred ground. We turned the distance into longing and the judgment into fuel. We proved that no ocean is wide enough and no voice loud enough to drown out the sound of two hearts beating in sync.",
    bgColor: "bg-slate-900",
    icon: (
      <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19c0-1.7-2.6-3-4.5-3S9 17.3 9 19H5a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 1 3.1-2.4c.5.2 1 .3 1.4.3 1.5 0 3-1.3 3-3a3 3 0 0 1 3-3h1" />
        <path d="M13 11a3 3 0 0 1 3 3" />
        <path d="M19.5 19c0-1.7-2.6-3-4.5-3" />
        <path d="M22 13.5V17a2 2 0 0 1-2 2" />
        <path d="M3 7a2 2 0 0 1 2-2h1" />
        <path d="M7 3a2 2 0 0 1 2 2" />
        <line x1="12" y1="3" x2="12" y2="7" />
        <path d="M10 9l-2 2" />
      </svg>
    )
  },
  {
    id: 4,
    title: "The Refinement",
    subtitle: "My Growth",
    text: "I looked in the mirror one day and didn't recognize the man staring back. I saw my flaws magnified by the purity of your love. My possessiveness, which I mistook for passion; my control, which I mistook for care. You deserved better.\n\nSo I went to war with myself. I walked into therapy not because I was broken, but because I wanted to be whole for you. I stripped away the toxic parts of my ego. I learned that love isn't about holding you tight so you can't leave; it's about holding you gently so you can grow.\n\nI changed. I am still changing. Not just to keep you, my darling, but to deserve the honor of being the one you choose every single day. You refined me in the fire of your patience.",
    bgColor: "bg-indigo-950",
    icon: (
      <svg className="w-24 h-24 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    id: 5,
    title: "The Ambition",
    subtitle: "The Law Queen",
    text: "They call us a Power Couple, but the power comes from you. Watching you navigate your Law Internship is like watching a master at work. Your intellect is a blade—sharp, precise, and dazzling.\n\nYou are the Law Queen, a force of nature wrapped in grace. When you speak, the room listens. When you think, problems unravel. Your ambition doesn't just impress me; it sets my own soul on fire. You push me to be better simply by existing in your brilliance.\n\nWe are not just lovers; we are partners in conquest. You with your law, me with my path, both of us climbing mountains and planting flags, but always tethered to each other.",
    bgColor: "bg-emerald-950",
    icon: (
      <svg className="w-24 h-24 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21v-7" />
        <path d="M19 21v-7" />
        <path d="M10 9L8 21" />
        <path d="M14 9l2 12" />
        <rect x="8" y="4" width="8" height="5" rx="1" />
        <path d="M12 4V2" />
      </svg>
    )
  },
  {
    id: 6,
    title: "The Sanctuary",
    subtitle: "Exam Support",
    text: "And now, the exams. I know the weight you feel. I know the late nights and the coffee stains and the tired eyes. But let me tell you what I see: I see a warrior sharpening her sword.\n\nThis is not a war you will lose. You are the girl who stared down long distance. You are the girl who fought for us when it was hard. These papers? They are nothing compared to the storms you've already weathered.\n\nConsider this your victory lap. I am here, your sanctuary, your soft place to land. Study hard, my love, but know that your worth is already etched in gold. You will conquer this, just as you conquered my heart. I am so incredibly proud of you.",
    bgColor: "bg-red-950",
    icon: (
      <svg className="w-24 h-24 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    id: 7,
    title: "The Eternal Promise",
    subtitle: "Unbreakable",
    text: "You are the girl who stayed. When the fire got hot, you didn't run. When the silence got loud, you didn't leave. You are the constant in my chaotic equation.\n\nYou are my home. Not a place with a roof and four walls, but a feeling. A heartbeat. A hand in mine. You are the sanctuary where I lay down my armor.\n\nI promise you this: as long as there is breath in my lungs, you will never walk alone. We are unbreakable. We are infinite. We are us.",
    bgColor: "bg-rose-950",
    icon: (
      <svg className="w-24 h-24 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];