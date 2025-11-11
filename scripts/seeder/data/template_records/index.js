const faker = require('faker');

const templates = [
  {
    ...require('./data/playerfacts_0001'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    ...require('./data/playerstats_0002'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    ...require('./data/teamfacts_0003'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    ...require('./data/playercompare_0004'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    ...require('./data/teamcompare_0005'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
];

module.exports = templates;
