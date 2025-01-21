# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.1] - 2025-01-20
## Bug
- **MongoDB URI Configuration**: Resolved an issue where the MongoDB URI was not being recognized properly when configuring the `CrudifyLoggerModule`. The default URI `mongodb://localhost:27017` with `logs` as the database is now used correctly.
  - You can now configure the module using `CrudifyLoggerModule.forRoot()` with a custom URI and database name:
    ```typescript
    CrudifyLoggerModule.forRoot({
      uri: 'mongodb://xxx.xxx.xxx.xxx:yyyyy/',
      dbName: 'mydblogger',
    });
    ```
---

## [1.1.0] - 2025-01-17
### Added
- **Route Exclusion:** Added the ability to exclude specific routes from CRUD generation via the `routes.exclude` option in the `@Crudify` decorator.
- **Bulk Operations:** Introduced new bulk routes for batch processing:
  - `POST /your-model/bulk`: Create multiple records in a single request.
  - `PATCH /your-model/bulk`: Update multiple records based on specified filters or IDs.
  - `DELETE /your-model/bulk`: Delete multiple records at once using filters or a list of IDs.

---

## [1.0.0] - 2025-01-10
### Added
- **Core Functionality:** Initial release of the library with automatic CRUD generation for Mongoose models in NestJS.
  - `POST /your-model`: Create a new record.
  - `GET /your-model`: Retrieve all records.
  - `GET /your-model/:id`: Retrieve a record by ID.
  - `PATCH /your-model/:id`: Update specific fields of a record by ID.
  - `PUT /your-model/:id`: Replace an entire record by ID.
  - `DELETE /your-model/:id`: Delete a record by ID.
- **Swagger Integration:** Automatically generate Swagger documentation for all CRUD routes.
- **Filter Support:** Enable filtering of query results using operators like `$eq`, `$gt`, `$cont`, and more.
- **Customizable Services:** Allow developers to extend and override CRUD service methods for custom logic.
- **Built-in Error Handling:** Integrated a logger to handle uncaught errors and log them for debugging.

---

> **Note:** For any issues or feature requests, please open a ticket in the [GitHub repository](https://github.com/mitinoh/nest-crudify).