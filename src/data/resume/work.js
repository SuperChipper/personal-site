/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'SCUT Robot Lab',
    position: 'Remote control technical lead',
    startDate: '2022-12-30',
    endDate: '2023-8-31',
    summary: 'SCUT Robot Lab is a student organization in SCUT, which is dedicated to the development of robot technology. I am responsible for the development of the remote control system of the robot, and I am one of the co-founders the lab.',
    highlights: [
      'cc2652p zigbee module development(hardware and software)',
      'ROS rviz simulation with OpenCV pose estimation',
    ],
  },
];

export default work;
