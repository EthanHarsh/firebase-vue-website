import validateContentHash from "./validateContentHash";

test("Returns true with SHA256 input.", () => {
  expect(validateContentHash("01b1ec7e1c9b0a8df064198f4caa1e0be0e7733e113a9c7cadb195b8d8118f92")).toBeTruthy();
});

test("Returns false with string input", () => {
  expect(validateContentHash("bad string")).toBeFalsy();
});

test("Returns false with MD5 hash input", () => {
  expect(validateContentHash("e4d909c290d0fb1ca068ffaddf22cbd0")).toBeFalsy();
});
