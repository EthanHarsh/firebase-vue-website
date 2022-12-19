import validator from "validator";

export default (hash: string) => {
  return validator.isHash(hash, "sha256");
};
