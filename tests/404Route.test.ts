import req from "supertest";
import server from "../src/server";

test("404 not found", async () => {
  const res = await req(server).get("/undefined_route");
  expect(res.status).toBe(404);
  expect(res.text).toBe('Path "/undefined_route" not found in this server.');
});

test("404 not found debug", async () => {
  process.env.DEBUG = "expresstutorial";
  const res = await req(server).get("/undefined_route");
  expect(res.status).toBe(404);
  expect(res.text.startsWith("NotFoundError: ")).toBeTruthy();
});
