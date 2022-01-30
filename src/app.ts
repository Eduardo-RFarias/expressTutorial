import debugLib from "debug";
import http from "http";
import dotenv from "dotenv";

import expressServer from "./server";

/**
 * * Read the .env file in root
 */
dotenv.config();

/**
 * * Interface for type check the Error param in case of server error
 */
interface HttpServerError extends Error {
  syscall: string;
  code: string;
}

/**
 * * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

/**
 * * Initialize the debug instance for later uses
 */
const debug = debugLib("expresstutorial:app");

/**
 * * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
expressServer.set("port", port);

/**
 * * Create HTTP server.
 */
const httpServer = http.createServer(expressServer);

/**
 * * Listen on provided port, on all network interfaces.
 */
httpServer.listen(port);

/**
 * * Listen for errors and log it in a friendly way
 */
httpServer.on("error", (error: HttpServerError) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // ? handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      // eslint-disable-next-line no-console
      debug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      // eslint-disable-next-line no-console
      debug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

/**
 * * When the server starts, print the port if debug is set to true.
 */
httpServer.on("listening", () => {
  const addr = httpServer.address();

  if (addr === null) {
    // eslint-disable-next-line no-console
    debug("Server is not running");
    process.exit(1);
  }

  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});
