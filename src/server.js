const app = require("./app.js");
const port = 3000;

const server = app.listen(port, () => {
    console.log('[server] Express listening on port:3000');
    console.log('[baseURL] http://localhost:3000');
});
