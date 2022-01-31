import mongoose from "mongoose";

const connect = (url: string) => mongoose.connect(url);

export default connect;

// ! If you're looking for the database connection process check the app.ts in src root.
