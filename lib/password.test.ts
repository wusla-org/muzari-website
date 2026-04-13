import { expect, test, describe } from "bun:test";
import { hashPassword, verifyPassword } from "./password";

describe("Password Hashing", () => {
  test("should hash password correctly", () => {
    const password = "my-secure-password";
    const hashedPassword = hashPassword(password);

    expect(hashedPassword).toContain(":");
    const [salt, hash] = hashedPassword.split(":");
    expect(salt).toHaveLength(32); // 16 bytes in hex
    expect(hash).toHaveLength(128); // 64 bytes in hex
  });

  test("should verify correct password", () => {
    const password = "my-secure-password";
    const hashedPassword = hashPassword(password);

    const isValid = verifyPassword(password, hashedPassword);
    expect(isValid).toBe(true);
  });

  test("should not verify incorrect password", () => {
    const password = "my-secure-password";
    const hashedPassword = hashPassword(password);

    const isValid = verifyPassword("wrong-password", hashedPassword);
    expect(isValid).toBe(false);
  });

  test("should handle malformed hashes", () => {
    expect(verifyPassword("password", "nosalt")).toBe(false);
    expect(verifyPassword("password", ":nohash")).toBe(false);
    expect(verifyPassword("password", "salt:")).toBe(false);
    expect(verifyPassword("password", "salt:nothex")).toBe(false);
  });

  test("should generate different salts for same password", () => {
    const password = "password";
    const hash1 = hashPassword(password);
    const hash2 = hashPassword(password);

    expect(hash1).not.toBe(hash2);

    const [salt1] = hash1.split(":");
    const [salt2] = hash2.split(":");
    expect(salt1).not.toBe(salt2);
  });
});
