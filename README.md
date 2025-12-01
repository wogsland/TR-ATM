# ATM

This is a demo ATM project implementing the specified [requirements](REQUIREMENTS.md). Further potential improvements which could be implemented beyond this are described in the [issues](https://github.com/wogsland/TR-ATM/issues).

## Frontend

The frontend uses [React Router](https://reactrouter.com/home) and requires at least node v20.19.5 and npm v10.8.2 to run.

### Getting started

From the project root directory

```
cd frontend
npm ci
npm run dev
```

and the frontend can be found running at [localhost:5173](http://localhost:5173/).

### Checks

To ensure consistent code prettier and eslint are being applied when pushing to GitHub. They can also be run locally in the frontend directory using

```
npm run check-format
```

for prettier and

```
npm run lint
```

for eslint.

### Tests

TBD

## Backend

The backend is stubbed in [Express](https://expressjs.com/). To return an updated balance after withdrawing or depositing the balance is stored in a simple text file.

### Getting started

From the project root directory

```
cd backend
npm ci
npm run setup
npm run dev
```

and the backend can be found running at [localhost:3000](http://localhost:3000/).

### Checks

To ensure consistent code prettier and eslint are being applied when pushing to GitHub. They can also be run locally in the frontend directory using

```
npm run check-format
```

for prettier and

```
npm run lint
```

for eslint.

### Tests

Since the backend is only stubbed, tests are TBD.
