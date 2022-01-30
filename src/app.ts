import server from "./server";

//! Port is being received from environment but defaults to 3000
const PORT = process.env.PORT || "3000";

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
