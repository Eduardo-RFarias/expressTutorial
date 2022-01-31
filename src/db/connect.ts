import mongoose from "mongoose";
import debugLib from "debug";

const debug = debugLib("expresstutorial:connect");

const connect = async () => {
  const url = process.env.DATABASE_URL;

  if (!url) {
    debug("Could not find DATABASE_URL in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(url);
  } catch (error) {
    debug(`Could not connect to the database. ERROR: ${error}`);
    process.exit(1);
  }
};

export default connect;

// ! If you're looking for the database connection process check the app.ts in src root.
