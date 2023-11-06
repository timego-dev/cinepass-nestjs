## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tickets
- Updated dto classes for the Swagger documentation
- Implementd validation for the 'url' field to ensure it contains a valid URL format  
- Completed the Swagger response documentation.
- Updated the app.module to use the NestJS configuration management feature
- Investigated and resolved the duplication issue in the "showtime-summary" table
- Implemented error handling for cases where a duplicate 'showtimeId' is used during insertion