const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Use the provided PORT or default to 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
