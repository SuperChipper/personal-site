// Project data. `image` and media `src` paths are relative to PUBLIC_URL.
// Links with an empty `url` are hidden (e.g. a Bilibili link not filled in yet).

const categories = [
  { key: 'all', label: 'All' },
  { key: 'robotics', label: 'Robotics & 3D vision' },
  { key: 'graphics', label: 'Graphics' },
  { key: 'agent', label: 'Agent applications' },
  { key: 'imaging', label: 'Computational imaging' },
];

const data = [
  {
    id: 'qq-agent',
    featured: true,
    category: 'agent',
    title: 'DSH Dungeon Master: AI D&D Game Master for QQ',
    period: 'Personal project',
    tech: ['TypeScript', 'deepseek-harness', 'Tool calling', 'BM25', 'Remotion'],
    image: '/images/projects/dsh-dm.webp',
    imageAlt: 'QQ group chat where the bot DM resumes a campaign and resolves a stealth check',
    desc: 'A fork of tencent-connect/dsh-qqbot that turns a QQ group bot into a D&D 5e game master. '
      + 'Dice, checks, initiative, positions and HP are resolved by deterministic tools; the model focuses on narration.',
    highlights: [
      'Built Markdown-based notes with BM25 retrieval, search/save tools, and relevant context injection across conversations.',
      'Connected D&D tools for dice rolls, combat checks, character updates, and JSON game saves. Injected DM rules and current game summaries into the system prompt.',
      'Improved turn handling with explicit player controls and character, round, and bound-player checks. Skipped actions were no longer observed in subsequent multiplayer testing.',
      'Added sticker collection with source and size checks, SHA-256 deduplication, emotion labels, and a dynamically updated catalog.',
      'Made a promo video and the PuppetTV episode series with a Remotion and text-to-speech pipeline.',
    ],
    boundary: 'The Agent runtime and QQ transport are provided by the existing framework. Natural-language intent and some exception handling still depend on model behavior.',
    links: [
      { label: 'GitHub', url: 'https://github.com/SuperChipper/dsh-dungeon-master' },
      { label: 'npm', url: 'https://www.npmjs.com/package/dsh-dungeon-master' },
      { label: 'PuppetTV on Bilibili', url: 'https://www.bilibili.com/video/BV1is1pzWE45/' },
    ],
    media: [
      {
        type: 'bilibili',
        src: 'BV1is1pzWE45',
        caption: 'PuppetTV episode 9 (Bilibili series)',
      },
      {
        type: 'video',
        src: '/media/dsh-promo.mp4',
        poster: '/images/projects/dsh-promo-poster.webp',
        caption: 'Promo video (84 s)',
        portrait: true,
      },
    ],
  },
  {
    id: 'rgbd-reconstruction',
    featured: true,
    category: 'robotics',
    title: 'RGB-D Dense Reconstruction with ORB-SLAM3',
    period: '2024–2025 · Undergraduate dissertation',
    tech: ['C++', 'ORB-SLAM3', 'ROS2 Humble', 'PCL', 'OAK-D Pro'],
    image: '/images/projects/rgbd.webp',
    imageAlt: 'Lab scene next to its coloured point-cloud reconstruction',
    desc: 'Built a dense point-cloud reconstruction pipeline using the poses and keyframes provided by ORB-SLAM3.',
    highlights: [
      'Implemented depth back-projection, world-coordinate transforms, keyframe cloud fusion, and voxel filtering.',
      'Regenerated the point-cloud map from saved keyframes after pose corrections associated with relocalization or loop closure.',
      'Validated on TUM RGB-D sequences and a real OAK-D Pro capture (1280 × 720, 30 Hz). The thesis reports 8.7 ms point-cloud generation and 12.4 ms voxel filtering per module (Ryzen 7 6800H).',
    ],
    boundary: 'Tracking, keyframe selection and loop closure come from ORB-SLAM3. Output is a coloured point cloud; depth quality and compute limit reconstruction quality.',
  },
  {
    id: 'path-tracer',
    featured: true,
    category: 'graphics',
    title: 'GLSL Ray Tracer & Path Tracer',
    period: '2025.10–2025.11 · Personal project',
    tech: ['GLSL', 'Ray tracing', 'Monte Carlo', 'BRDF'],
    image: '/images/projects/pathtracer.webp',
    imageAlt: 'Ray-traced spheres with reflection, refraction and CSG cut-outs',
    desc: 'A GPU ray tracer and path tracer written in GLSL shaders, from ray–geometry intersection to Monte Carlo lighting.',
    highlights: [
      'Implemented ray generation, geometry intersection and shadow tests, with Fresnel reflection/refraction and Boolean (CSG) operations.',
      'Estimated lighting with BRDFs and Monte Carlo integration; implemented importance sampling and compared sampling strategies.',
    ],
    media: [
      {
        type: 'image',
        src: '/images/projects/pathtracer-sampling.webp',
        caption: 'Quasi-Monte Carlo, cosine, Phong, and importance sampling with variance reduction',
      },
    ],
  },
  {
    id: 'robocon',
    category: 'robotics',
    title: 'Robocon: Task Control & Device Integration',
    period: '2022–2024 · SCUT Robocon team',
    tech: ['C++', 'State machines', 'Serial protocol'],
    image: '/images/projects/robocon.webp',
    imageAlt: 'SCUT Robocon competition robot on the field',
    desc: 'Developed upper-computer task logic and a fixed-length serial protocol to coordinate robot movement, ball pickup, and placement.',
    highlights: [
      'Used action types and parameters to communicate with the chassis controller, and position feedback to decide when to stop.',
      'Combined action timing and camera observations to check ball release before moving to the next task; supported integration, debugging, and competition operation.',
      'Team awards: first prize at Robocon 2024 and third prize at Robocon 2023.',
    ],
    boundary: 'The chassis microcontroller handled wheel-level motion conversion. My work focused on upper-computer logic and communication.',
  },
  {
    id: 'geometry',
    category: 'graphics',
    title: '3D Geometry Processing & Point-Cloud Registration',
    period: '2026.01–2026.03 · Personal project',
    tech: ['Python', 'NumPy', 'SciPy', 'ICP', 'Half-edge mesh'],
    image: '/images/projects/geometry.webp',
    imageAlt: 'ICP-aligned bunny point clouds, a curvature map, and a dual polyhedron',
    desc: 'Point-cloud registration, discrete differential geometry and mesh topology implemented from scratch.',
    highlights: [
      'Implemented point-to-point (SVD) and point-to-plane ICP with KD-tree neighbour search, and analysed convergence.',
      'Implemented curvature estimation, the cotangent-weight Laplacian, explicit/implicit smoothing, and analysed mesh frequency components.',
      'Built a half-edge structure with adjacency queries, dual polyhedron generation, and volume computation.',
    ],
  },
  {
    id: 'image-reconstruction',
    category: 'imaging',
    title: 'Generalized Deep Null-Space Image Reconstruction',
    period: '2026 · MSc dissertation, UCL',
    tech: ['Python', 'PyTorch', 'PDHG', 'Total variation'],
    image: '/images/projects/gdnsn.webp',
    imageAlt: 'Ground truth, finite-iteration selector, and G-DNSN reconstruction of a BSDS500 image',
    desc: 'Investigated total-variation reconstruction, residual U-Nets, and output correction for data-consistent image reconstruction.',
    highlights: [
      'Implemented finite-iteration PDHG for baseline reconstruction, training-data generation, and network-output correction.',
      'Evaluated reconstruction quality and measurement residuals on BSDS500 compressed sensing and simulated undersampling of fastMRI magnitude images.',
      'Mean PSNR improved over the TV baseline by 1.27 dB on BSDS500 (200 test images, 25% sampling) and 1.66 dB on fastMRI (R = 4), from a single training seed.',
    ],
  },
  {
    id: 'vr-duel',
    category: 'graphics',
    title: 'Two-Player Online VR Duel: Game State & UI',
    period: '2026.03 · UCL team project (4 people)',
    tech: ['Unity', 'C#', 'Ubiq', 'XR'],
    image: '/images/projects/vr-duel.webp',
    imageAlt: 'Stylised VR dungeon arena built in Unity',
    desc: 'A networked two-player VR spell duel. I was responsible for game logic and UI.',
    highlights: [
      'Implemented waiting, player-turn, resolution and end-of-game flow; handled real/fake spell queues, shield state and item effects.',
      'Updated round, shield and game-state UI from state events, and oriented world-space UI towards the player.',
    ],
    boundary: 'Networking was built by the team on Ubiq and XR components. Scene art includes third-party assets.',
    media: [
      {
        type: 'image',
        src: '/images/projects/vr-duel-ui.webp',
        caption: 'In-game turn and vitality UI',
      },
    ],
  },
];

export { categories };
export default data;
