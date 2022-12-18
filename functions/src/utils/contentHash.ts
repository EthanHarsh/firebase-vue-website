import crypto from "crypto";

export default (content: any) => {
  const hashSecret = "SUPERSECRETHASH";


  const hasher = crypto.createHmac("sha256", hashSecret);

  return hasher.update(JSON.stringify(content)).digest("hex");
};
