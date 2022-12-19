import crypto from "crypto";

export default (content: any) => {
  return crypto.createHmac("sha256", "SUPERSECRETHASH").update(JSON.stringify(content)).digest("hex");
};
