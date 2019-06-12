FROM node:8
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
RUN rm -r /app/images
CMD ["npm", "run", "start"]