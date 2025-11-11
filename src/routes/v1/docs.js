const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const output = require('../../lib/docs');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', output);

module.exports = router;
