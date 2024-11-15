# NextJS Micro Frontend Testing
## A simplified version of an architecture where an application is comprised of a collection of micro apps which dictate overall functionality. 

## Use case
This could be an interesting approach to a SaaS product as it allows for the following benefits: 1. customer or industry specific experience (infra code would bring together required apps for desired functionality), 2. isolated developer experience, and 3. setup for plugins and upselling opportunities.  

## Functionality
Micro frontends are often split into two categories: horizontal or vertical. In short, horizontal is a layered, component approach to dividing up your application where as vertical is split at the route level. Both have pros and cons. The approach in this repo is kind of mixed but mostly vertical. There is a shell application that is responsible for high level app state (think user, roles, etc), and when appropriate, loading in micro apps into iFrames and passing state. **If a micro app is deselected on the sandbox screen it will not be accessible - even outside the iFrame!**  

## Setup
1. Get repo: `git clone https://github.com/tilersmyth/next-micro-frontend.git && cd next-micro-frontend`
2. Install deps: `bun install`
3. Setup SQLite db: `npx prisma db push`
4. Seed db: `npx prisma db seed`
5. Run: `bun dev`
