# Multi-stage Dockerfile for Next.js (app dir)
FROM node:20-alpine AS builder
WORKDIR /app

# Enable corepack and pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install deps based on lockfile (allow lockfile to be updated during image build)
# If you want strict reproducible builds, run `pnpm install` locally and commit the updated pnpm-lock.yaml,
# then change this back to `--frozen-lockfile`.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

# Copy rest of the sources and build
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Ensure pnpm is available in runtime image
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only necessary artifacts from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start"]
