FROM node:12-alpine as development-image

WORKDIR /home/node/app
COPY package.json  yarn.lock ./
COPY packages/realtime-pizza/package.json packages/realtime-pizza/

RUN yarn install --production=false --frozen-lockfile && yarn cache clean --all 
COPY . .
CMD ["yarn", "workspace", "@realtime/pizza", "start"]
# FROM development-image as production-installer
# RUN chown -R node:node /home/node/app
# USER node
# ENV NODE_ENV=production
# WORKDIR /home/node/app
# RUN yarn install --production --frozen-lockfile

# RUN chown -R node:node /home/node/app

# FROM node:12-alpine as production-image
# WORKDIR /home/node/app
# ENV NODE_ENV=production
# COPY --from=production-installer --chown=node:node /home/node/app ./

# CMD ["yarn", "workspace", "@fqx/api", "start:prod"]
