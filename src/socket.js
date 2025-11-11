// socket.js
const socketIO = require('socket.io');
const redisAdapter = require('socket.io-redis');
const socketEmitter = require('socket.io-emitter');
const Redis = require('ioredis');
const { redisConfig } = require('@/src/redis/config');

let io; // Global variable to store Socket.io instance

// Initialize Socket.io
function initSocket(server) {
  io = new socketIO.Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // Create Redis clients for the adapter
  const pubClient = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: redisConfig.db,
  });

  const subClient = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: redisConfig.db,
  });

  // Add event listeners to Redis clients
  pubClient.on('connect', () => {
    console.log('Connected to Redis (pubClient)');
  });

  pubClient.on('error', (err) => {
    console.error('Redis (pubClient) connection error:', err);
  });

  subClient.on('connect', () => {
    console.log('Connected to Redis (subClient)');
  });

  subClient.on('error', (err) => {
    console.error('Redis (subClient) connection error:', err);
  });

  // Use Redis adapter to enable pub/sub communication between workers
  io.adapter(redisAdapter({ pubClient, subClient }));

  // Listen for client connections and events
  io.on('connection', (socket) => {
    // console.log('Client connected:', socket.id);

    // Listen for 'notify_alarm' event from clients and broadcast to all clients
    socket.on('notify_alarm', (data) => {
      io.emit('notify_alarm', data); // Broadcast the event to all connected clients
    });
  });

  return io;
}

// Function to get the Socket.io instance
function getIo() {
  if (!io) {
    // Socket.io server is not initialized, likely in a daemon worker
    // Initialize socket.io-emitter for daemon workers

    // Create a Redis client for socket.io-emitter
    const emitterRedisClient = new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
      password: redisConfig.password,
      db: redisConfig.db,
    });

    // Add event listeners to the Redis client
    emitterRedisClient.on('connect', () => {
      console.log('Connected to Redis (socket.io-emitter)');
    });

    emitterRedisClient.on('error', (err) => {
      console.error('Redis (socket.io-emitter) connection error:', err);
    });

    // Initialize socket.io-emitter with the Redis client
    io = socketEmitter(emitterRedisClient);

    // Optional: You can set a namespace if needed
    // io = socketEmitter(emitterRedisClient).of('/namespace');

    return io;
  }
  return io;
}

module.exports = {
  initSocket,
  getIo,
};
