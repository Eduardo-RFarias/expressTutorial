import req from "supertest";
import server from "../src/server";

test("[GET] /api", async () => {
  const res = await req(server).get("/api");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Api router");
});

test("[GET] /api/search/:id", async () => {
  const res = await req(server).get("/api/search/1?test=true");
  expect(res.status).toBe(200);

  const expectedReponse = { queryParams: { test: "true" }, urlParams: { id: "1" } };

  expect(res.text).toBe(JSON.stringify(expectedReponse));
});
