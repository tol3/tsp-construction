const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const staticFileMiddleware = express.static(path.join(__dirname, './'))

app = express();

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening at :%s", port);
});
