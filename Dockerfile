FROM node:lts-alpine AS base
WORKDIR /usr/src/app
COPY package.json yarn.lock ./

FROM base AS install
RUN yarn --frozen-lockfile

FROM install AS build
COPY . .
RUN yarn build

FROM nginx:mainline-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]