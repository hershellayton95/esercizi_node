import supertest from "supertest";
import app from "./app";

const request = supertest(app);

describe("Test Server", () => {
    test("GET /planets", async () => {
        const response = await request
            .get("/")
            .expect(200)
            .expect("Content-Type", /application\/json/);

        expect(response.body).toEqual({ planet: "Earth" });
    });
});
