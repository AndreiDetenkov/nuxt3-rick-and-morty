ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-slim AS base

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

ENV NODE_ENV=development

WORKDIR /app

# Build
FROM base AS build
COPY ./package.json /app/
COPY ./pnpm-lock.yaml /app/
RUN pnpm install --shamefully-hoist

# Run
FROM base
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 3000
CMD [ "pnpm", "dev" ]
