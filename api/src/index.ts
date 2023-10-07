import express, { Request, Response } from "express";

const app = express();
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
const port: number = 3001;

import dotenv from "dotenv";
dotenv.config();

const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;

if (!AUTH0_AUDIENCE || !AUTH0_ISSUER_BASE_URL) {
  throw new Error("Required environment variables are not set.");
}

const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// No authentication
app.get("/api/public", (req: Request, res: Response) => {
  console.log(`This is public endpoint log`);
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

// Need authentication
app.get("/api/private", checkJwt, (req: Request, res: Response) => {
  console.log(`This is private endpoint log`);
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

const checkScopes = requiredScopes("read:messages");

app.get(
  "/api/private-scoped",
  checkJwt,
  checkScopes,
  function (req: Request, res: Response) {
    console.log(`This is private scope endpoint log`);
    res.json({
      message:
        "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.",
    });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
