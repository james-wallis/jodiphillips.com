FROM node:12 as build
RUN apt-get update && \
    apt-get install -y automake autoconf libtool dpkg nasm libpng-dev

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM node:12
ENV NODE_ENV production
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json /app/
RUN npm install
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next
EXPOSE 3000
CMD ["npm", "run", "start"]
