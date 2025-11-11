const faker = require('faker');
const mongoose = require('mongoose');

module.exports = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Demo User',
    email: 'demo@vigitalsolutions.com',
    password: '$2b$05$jzH0j7K98KFKtAZZqLsVUeqhe/E4AL4.9oPs5DRpggOjLJx9gwPi2',
    role: 'user',
    verified: true,
    verification: '',
    city: '',
    country: '',
    phone: '',
    createdAt: Date.now()
  }
];
