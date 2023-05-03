import e from "express";

import DCPRouter from "./src/routes/dcp.router.js";

// Express app.
const app = e();

// Express app middlewares.
app.use(e.json());
app.use(e.urlencoded({extended: true}));

// Express app routes
app.use("/api/dcp", DCPRouter);

// Express app export.
export default app;