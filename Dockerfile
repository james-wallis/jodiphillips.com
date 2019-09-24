FROM node:8 as build
ENV NODE_ENV production
RUN apt-get update
RUN apt-get install -y automake autoconf libtool dpkg nasm libpng-dev
WORKDIR /
RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
# RUN rm -r /app/images
CMD ["npm", "run", "start"]

FROM node:8
WORKDIR /production
COPY --from=build /app/package.json /production/package.json
# RUN yarn install
RUN npm install express next compression
COPY --from=build /app/server.js /production/server.js
COPY --from=build /app/.next /production/.next
RUN rm -rf /app
EXPOSE 3000
CMD ["npm", "run", "start"]