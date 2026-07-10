FROM node:24-alpine

RUN apk update && apk upgrade

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-workspace.yaml .npmrc ./

RUN pnpm install

RUN rm -rf .astro

COPY . .

ENV PATH=/usr/src/app/node_modules/.bin:$PATH

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["pnpm", "run", "dev"]