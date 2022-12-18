const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.text).toEqual(`Welcome to the World Wide Web!

    Run the test with npm test — it should fail.
    Update the code in app.js to send the HTTP response the test expects.
    Run the test with npm test — it should pass.`);
});

