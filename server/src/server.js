const app = require('./app');
const connectDB = require('./config/db');
const { PORT } = require('./config/env');

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
