/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://storedb_owner:wlXYyvu9F7ZE@ep-dawn-bird-a5bfulr0.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };
  