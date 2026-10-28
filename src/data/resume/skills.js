const skills = [
  { title: 'C++ / Python / TypeScript / Java', category: ['Programming'] },
  { title: 'Git / Linux', category: ['Engineering'] },
  { title: 'deepseek-harness / Tool calling / JSON Schema / Prompt design', category: ['Agent applications'] },
  { title: 'BM25 retrieval / Persistent state / QQ interaction', category: ['Agent applications'] },
  { title: 'ROS2 / OpenCV / ORB-SLAM3', category: ['Robotics and vision'] },
  { title: 'Coordinate transforms / Point-cloud fusion / Task state machines', category: ['Robotics and vision'] },
  { title: 'PyTorch / NumPy / SciPy / PDHG', category: ['Models and optimization'] },
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .map((name) => ({ name }));

export { categories, skills };
