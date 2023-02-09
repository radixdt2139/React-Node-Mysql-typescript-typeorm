### Create a empty maigration
npx typeorm-ts-node-esm migration:create ./src/adapter/typeorm/migrations/migration_name

### generate a migration
npx typeorm-ts-node-esm migration:generate ./src/adapter/typeorm/migrations/migration_name -d src/adapter/typeorm/dev-data-source.ts

### run migration
npx typeorm-ts-node-esm migration:run -d src/adapter/typeorm/dev-data-source.ts

### revert migration
npx typeorm-ts-node-esm migration:revert -d src/adapter/typeorm/dev-data-source.ts