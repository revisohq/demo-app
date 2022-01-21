describe("Foobar", () => {
  it("should work", async () => {
    // Use test globals:
    console.log(`FOOBAR = ${env.FOOBAR}`);
    expect(env.FOOBAR).toBeDefined();

    // Read some App's configuration:
    const r1 = await getConfig("jwt.secret");
    console.log(`Config "jwt.secret" = ${r1.value}`);
  });
});
