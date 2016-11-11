/*
    This is the SERVER entry point.
    A simple express-driven API
*/

import {app} from './server/app';

let port = 3000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
