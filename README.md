# Interview Scheduler

# Project Description

Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

### Daily view
 !["DailyView"](https://github.com/NehaYadav903/scheduler/blob/ff661f279db741f0b27f40911c2ae8da5b602d31/public/images/DailyView.png?raw=true)

 ### New appointment booking
 !["InterviewBook"](https://github.com/NehaYadav903/scheduler/blob/ff661f279db741f0b27f40911c2ae8da5b602d31/public/images/InterviewBook.png)

 ### Interview cancelation
 !["InterviewCancel"](https://github.com/NehaYadav903/scheduler/blob/ff661f279db741f0b27f40911c2ae8da5b602d31/public/images/InterviewCancel.png)

 **Note** : _For full functionality both must run concurrently: the client and the API server applications (see database* setup below)._

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
