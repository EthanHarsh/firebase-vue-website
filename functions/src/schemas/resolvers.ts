import mongoose from 'mongoose';
import Project from '../models/projectModel';

const DB = (process.env.DATABASE as string).replace('<PASSWORD>', (process.env.DATABASE_PASSWORD as string));
!DB && console.error("DB Credentials Required.")

const resolvers = {
  Query: {
      projects: async () => {
        await mongoose.connect(DB)
        .catch((err) => {
          err && console.error('Database Connection Error.');
        });
        return await Project.find();
    },
    features: async () => {
      await mongoose.connect(DB)
      .catch((err) => {
        err && console.error('Database Connection Error.');
      });
      return await Project.find({featured: '1'}).exec();
    },
  }
};

export default resolvers;