FROM node:20-alpine AS builder
WORKDIR /usr/src/nest-api

# Installer les dépendances de build
RUN apk add --no-cache build-base python3 openssl && \
    npm install -g node-gyp

# Copier et installer les dépendances
COPY package*.json ./
RUN npm install

# Générer le client Prisma avant de copier tout le code
COPY prisma ./prisma/
RUN npx prisma generate

# Copier le reste et builder
COPY . .
# RUN npm run build

# Étape finale
# FROM node:20-alpine
# WORKDIR /usr/src/nest-api

# # Installer uniquement les dépendances de production (si vous utilisez npm ci)
# COPY --from=builder /usr/src/nest-api/node_modules ./node_modules
# COPY --from=builder /usr/src/nest-api/package*.json ./
# COPY --from=builder /usr/src/nest-api/dist ./dist
# COPY --from=builder /usr/src/nest-api/prisma ./prisma

# Utilisateur non-root pour plus de sécurité
USER node

EXPOSE 5000
CMD ["npm", "run", "start:dev"]