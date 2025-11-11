const { decrypt } = require('@/src/middleware/auth');
const jwt = require('jsonwebtoken');
const secret_key = process.env.JWT_SECRET;
const UserM = require('../../models/users');

const VIEWER_TOKEN = 'VIEWER_GENERIC_TOKEN';

module.exports = function (io) {
  io.use((socket, next) => {
    let token = socket.handshake.query.token;

    if (VIEWER_TOKEN === token) {
      return next();
    }

    jwt.verify(decrypt(token), secret_key, (err, decoded) => {
      if (err) {
        console.log('eror: ', err);
        return next(new Error('authentication error'));
      }
      socket.decodedToken = decoded;
      return next();
    });
  });
  io.on('connection', async function (socket) {
    let token = socket.handshake.query.token;
    if (VIEWER_TOKEN !== token) {
      const userId = socket?.decodedToken?.data?._id;
      await UserM.findOneAndUpdate(
        {
          _id: userId
        },
        { online: true },
        { upsert: true }
      );
      socket.on('disconnect', async function (data) {
        await UserM.findOneAndUpdate(
          {
            _id: userId
          },
          { online: false },
          { upsert: true }
        );
      });
    }

    socket.on('message', async function (msg) {
      if (msg === 'event_start') {
        io.emit('notify_alarm', {
          event_type: 'goal',
          id: socket.id,
          title: "It's a goal",
          description: "Let's see how it works"
          // ...
        });
      }
      // new message from user
    });
  });
};
