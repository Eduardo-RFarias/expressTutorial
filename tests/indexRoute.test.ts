import req from "supertest";
import server from "../src/server";

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Home page");
});

test("[GET] /about", async () => {
  const res = await req(server).get("/about");
  expect(res.status).toBe(200);
  expect(res.text).toBe("About");
});
