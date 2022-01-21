describe("login", () => {
  it("should release a token for an existing user", async () => {
    const res = await global.post("/login", {
      input: {
        name: "luke"
      }
    });

    expect(res).toHaveProperty("id");
    expect(res).toHaveProperty("name", "luke");
  });

  it("should return an unauthorized header for non existing user", async () => {
    const fn = jest.fn(res => res.response.status);
    try {
      await global.rawPost("/login", {
        input: {
          name: "iDoNotExist"
        }
      });
    } catch (err) {
      fn(err);
    }

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveReturnedWith(401);
  });
});
