# Challenge Intro

Welcome to the CIQ front-end skills test! The purpose of this test is to help our team gauge your knowledge, skills, and proficiency in accomplishing front-end development tasks.

**You are only expected to spend 1-2 hours on this test, and it is not required that you finish every user story.** It is up to your judgement which stories to prioritize or focus on in order to best showcase your skills.

The scenario for this test is that you are building a viewing dashboard for server access logs. The file `data/server_log.json` contains the log entries, which should be accessed via the http://localhost:3000/api/logs API endpoint (which has a handler defined in `pages/api/logs.ts`). The `.json` file should be treated as an external data source (not modified), but the API handler can be modified however you wish.

You may use whatever styling method you are most comfortable with. The CSS module styling is only present due to it being part of the Next.js template. You may use CSS modules or replace it with your preferred styling method.

## User Stories

- [x] As a user, I want to view the access logs of the server.
- [x] As a user, I want to find out how many unique users have accessed the server.
- [x] As a user, I want to find out how many uploads larger than a specified size have happened.
- [ ] As a user, I want to view a summary of a user's interactions with the server within a specified time frame

## Extra Credit

- [x] Complete the `ServerLogEntry` type in `models/ServerLogEntry.ts`
- [ ] Ensure all variables in your code are fully and correctly typed

# Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/logs](http://localhost:3000/api/logs). This endpoint can be edited in `pages/api/logs.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Your Notes

<!-- This space is intended for you to provide some insight into your thought process and approach. -->

First of all, this was a fun project. Thanks for inviting me to take part in it. I was introduced to AG Grid this week and thought it would be the right kind of project to try it out on.

With more time, I would have liked to leverage more of the built-in filter and formatting capabilities. But I wanted to hit the specs I could in the 1-2 hour range. I also would have like to add more tests to this. As it was, I had some trouble configure React Testing Library to work with Next.js.

## Assumptions

<!-- What assumptions did you make while completing the test? Were there any questions you would have asked in a real-world scenario? -->

-

I would have spoken with the designer about the filtering functionalities. Could the uploads of a certain size have been handled by the grid itself, or did that need to be presented on the screen at all times? Same with the user and date range filtering (which I started but didn't complete).

## Thoughts

<!-- If you'd like to share any high-level thoughts or explain any decisions, feel free! -->

-

TS generics are something I'd like to become more familiar with, and I expect we'd use those for our http requests, applying a particular `data` shape for different kinds of requests.

## Improvements / Scaling

Given more time, what would you change to make things production ready or add that next level of polish?

-

As mentioned above, in a larger project, I'd spend the time building out types and generics. In more mature projects I typically configure testing React-Testing-Library utilities, like an overloaded `render` that is imported from `test-utils`. This customized `render` applies an `<AllTheProviders/>` wrapper, which renders all components with the context at the top level of the app. I also like to expose overrides to the Redux store or context to enable the UI to present the way it's expected to without excessive mocking.

From a data perspective, I'd want to make sure we're handling dates consistently across the APIs and UIs and create helpers to ensure presentation is consistent and filtering is manageable.
