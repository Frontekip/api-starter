FROM --platform=linux/amd64 node:12.22.4

RUN mkdir /app
WORKDIR /app
COPY ./bundle .
RUN cd programs/server/ && npm install

EXPOSE 3000
CMD node main.js