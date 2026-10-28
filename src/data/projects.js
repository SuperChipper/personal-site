const data = [
  {
    id: 'qq-agent',
    title: 'QQ Agent: Memory & Multiplayer Interaction',
    subtitle: 'Personal project · TypeScript · deepseek-harness · Tool calling',
    desc: 'Extended an existing QQ plugin and the deepseek-harness runtime with persistent notes, '
      + 'a D&D game-master workflow, and a reusable sticker collection.',
    highlights: [
      'Built Markdown-based notes with BM25 retrieval, search/save tools, and relevant context injection across conversations.',
      'Connected D&D tools for dice rolls, combat checks, character updates, and JSON game saves. Injected DM rules and current game summaries into the system prompt.',
      'Improved turn handling with explicit player controls and character, round, and bound-player checks. Skipped actions were no longer observed in subsequent multiplayer testing.',
      'Added sticker collection with source and size checks, SHA-256 deduplication, emotion labels, and a dynamically updated catalog.',
    ],
    boundary: 'The Agent runtime and QQ transport are provided by the existing framework. Natural-language intent and some exception handling still depend on model behavior.',
  },
  {
    id: 'robocon',
    title: 'Robocon: Task Control & Device Integration',
    subtitle: '2022–2024 · C++ · State machines · Serial communication',
    desc: 'Developed upper-computer task logic and a fixed-length serial protocol to coordinate robot movement, ball pickup, and placement.',
    highlights: [
      'Used action types and parameters to communicate with the chassis controller, and position feedback to decide when to stop.',
      'Combined action timing and camera observations to check ball release before moving to the next task; supported integration, debugging, and competition operation.',
    ],
    boundary: 'The chassis microcontroller handled wheel-level motion conversion. My work focused on upper-computer logic and communication.',
  },
  {
    id: 'image-reconstruction',
    title: 'Generalized Deep Null-Space Image Reconstruction',
    subtitle: '2026 · MSc dissertation · Python · PyTorch · Numerical optimization',
    desc: 'Investigated total-variation reconstruction, residual U-Nets, and output correction for data-consistent image reconstruction.',
    highlights: [
      'Implemented finite-iteration PDHG for baseline reconstruction, training-data generation, and network-output correction.',
      'Evaluated reconstruction quality and measurement residuals on BSDS500 compressed sensing and simulated undersampling of fastMRI magnitude images.',
    ],
  },
  {
    id: 'rgbd-reconstruction',
    title: 'RGB-D Dense Reconstruction with ORB-SLAM3',
    subtitle: '2024–2025 · Undergraduate dissertation · C++ · OAK-D Pro',
    desc: 'Built a dense point-cloud reconstruction pipeline using the poses and keyframes provided by ORB-SLAM3.',
    highlights: [
      'Implemented depth back-projection, world-coordinate transforms, keyframe cloud fusion, and voxel filtering.',
      'Regenerated the point-cloud map from saved keyframes after pose corrections associated with relocalization or loop closure.',
    ],
  },
];

export default data;
