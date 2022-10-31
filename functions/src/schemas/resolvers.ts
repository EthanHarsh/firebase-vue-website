import db from "../models/firebase";
import {QueryDocumentSnapshot} from "firebase-admin/firestore";

const DB = (process.env.DATABASE as string).replace("<PASSWORD>", (process.env.DATABASE_PASSWORD as string));
!DB && console.error("DB Credentials Required.");

// Error Messages
const errFetchPrjStr = "Error fetching projects";

const resolvers = {
  Query: {
    projects: async () => {
      const snapshot = await db.collection("users")
          .get()
          .catch((err) => {
            err && console.error("Database Connection Error.");
          });
      if (!snapshot) {
        console.error(errFetchPrjStr);
        return [errFetchPrjStr];
      }
      const results: QueryDocumentSnapshot[] = [];
      snapshot.forEach((doc: QueryDocumentSnapshot) => {
        console.log(doc.id, "=>", doc.data());
        results.push(doc);
      });
      return results;
    },
    features: async () => {
      const snapshot = await db.collection("users")
          .where("featured", "==", true)
          .get()
          .catch((err) => {
            err && console.error("Database Connection Error.");
          });
      if (!snapshot) {
        console.error(errFetchPrjStr);
        return [errFetchPrjStr];
      }
      const results: QueryDocumentSnapshot[] = [];
      snapshot.forEach((doc: QueryDocumentSnapshot) => {
        console.log(doc.id, "=>", doc.data());
        results.push(doc);
      });
      return results;
    },
  },
};

export default resolvers;
