import db from "../models/firebase";
import {QueryDocumentSnapshot} from "firebase-admin/firestore";

// Error Messages
const errFetchPrjStr = "Error fetching projects";

const resolvers = {
  Query: {
    projects: async () => {
      const snapshot = await db.collection("projects")
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
      const snapshot = await db.collection("projects")
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
