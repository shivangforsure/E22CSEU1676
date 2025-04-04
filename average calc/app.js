const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const numberRoutes = require('./routes/numberRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', numberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
