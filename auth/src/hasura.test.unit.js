const { buildHasuraToken, buildApolloConfig } = require("./hasura");

describe("Hasura", () => {
  describe("buildHasuraToken", () => {
    it("should build a valid token", () => {
      const data = buildHasuraToken({
        "user-id": 123
      });
      expect(data["https://hasura.io/jwt/claims"]["x-hasura-user-id"]).toBe(
        123
      );
    });
  });
  describe("buildApolloConfig", () => {
    it("should generate a valid token", async () => {
      const config = buildApolloConfig({
        endpoint: "/foobar",
        secret: "qwerty"
      });
      expect(config.uri).toBe("/foobar/v1/graphql");
    });
  });
});
