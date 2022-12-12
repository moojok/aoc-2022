// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/1.ts";
import * as $1 from "./routes/2.ts";
import * as $2 from "./routes/api/get_input/1.ts";
import * as $3 from "./routes/api/get_input/2.ts";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/1.ts": $0,
    "./routes/2.ts": $1,
    "./routes/api/get_input/1.ts": $2,
    "./routes/api/get_input/2.ts": $3,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
