const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
require("dotenv").config();
const { DecrypterString } = require("../helper/crytography");

(async () => {
  try {
    const sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      DecrypterString(process.env.DB_PASSWORD),
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
      }
    );

    const migrator = new Umzug({
      migrations: { glob: "migrations/*.js" },
      storage: new SequelizeStorage({
        sequelize: sequelize,
      }),
      storageOptions: {
        sequelize: sequelize, 
      },
    });

    const executedMigrations = await migrator.executed();
    const pendingMigrations = await migrator.pending();

    const allMigrations = [
      ...executedMigrations.map((migration) => ({
        Name: migration.name,
        Status: "up",
      })),
      ...pendingMigrations.map((migration) => ({
        Name: migration.name,
        Status: "down",
      })),
    ];

    console.table(allMigrations);

    await sequelize.close();
  } catch (error) {
    console.error("Error fetching migration status:", error);
  }
})();
