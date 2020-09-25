const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data product',
  });
});
app.listen(port, () => console.log(`from server ${port} loh`));
