const app = require('./app');
const port = 5000;

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
