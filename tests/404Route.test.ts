import req from "supertest";
import server from "../src/server";

test("404 not found", async () => {
  const res = await req(server).get("/undefined_route");
  expect(res.status).toBe(404);
  expect(res.text).toBe("<h1>Resource not found</h1>");
});
