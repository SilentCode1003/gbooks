# gbooks
Accounting System for 5L Solutions Supply's and Allied Services


## Migrator
- Run `npm run migrations:status` to check the status of the migrations
- Run `npm run sequelize:init` to create the database
- Run `npm run migrations:status` to check the status of the migrations
- Run `npm run migrations:create` to create a new migration
- Run `npm run migrations:run` to run the migrations
- Run `npm run migrations:undo` to undo the last migration
- Run `npm run migrations:redo` to redo the last undone migration
- Run `npm run migrations:all` to run all pending migrations
- Run `npm run migrations:generate` to generate a new migration file
- Run `npx sequelize-cli migration:generate --name <migration-name>` to generate a new migration file
- Run `npx sequelize-cli db:migrate` to run all pending migrations
