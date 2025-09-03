const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Devops from MyProject V2!!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
