const faker = require('faker');
const ObjectID = require('mongodb').ObjectID;

module.exports = [
  {
    _id: ObjectID("5aa1c2c35ef7a4e97b5e0001"),
    name: 'Test user',
    email: 'test@fx1.eu',
    password: '$2b$05$dkNAn.maJZL7SdZwcDDWE.8PKLeQFwTKT2kZFPcWqcASIuQzhPIv6',
    role: 'user',
    verified: true,
    verification: '',
    city: '',
    country: '',
    phone: '',
    urlTwitter: faker.internet.url(),
    urlGitHub: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: ObjectID("5aa1c2c35ef7a4e97b5e0002"),
    name: 'Adler User',
    email: 'adler@spoviz.com',
    password: '$2b$05$Frk7FGF1ker2kMwF/kuhnuW1WLz3IGkmDfsUrRUVcLwBE9d/f/Xeq',
    role: 'user',
    verified: true,
    verification: '',
    city: '',
    country: '',
    phone: '',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
];
