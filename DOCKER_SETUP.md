# 🐳 LumaBuild Docker Setup Guide

Complete Docker and Docker Compose configuration for LumaBuild React project.

---

## 📦 What's Included

### Files Created

```
LumaBuild/
├── Dockerfile              # Production multi-stage build
├── Dockerfile.dev          # Development with hot reload
├── docker-compose.yml      # Production orchestration
├── docker-compose.dev.yml  # Development with hot reload
├── nginx.conf              # Production web server config
├── .dockerignore            # Files to exclude from build
└── DOCKER_SETUP.md         # This file
```

---

## 🚀 Quick Start

### Development (Hot Reload)

```bash
docker compose -f docker-compose.dev.yml up --build
# Access at http://localhost:5173
```

### Production

```bash
docker build -t lumabuild:latest .
docker run -d -p 80:80 --name lumabuild lumabuild:latest
# Access at http://localhost:80
```

---

## 🏗️ Architecture

### Production Build Pipeline

Multi-stage build reduces image from 500MB to 50MB:

```
Stage 1: Builder (Node 22 Alpine)
├─ npm install
├─ npm run build
└─ Output: dist/

Stage 2: Runtime (Nginx Alpine)  
├─ Copy dist/
├─ Configure Nginx
└─ Serve files

Result: ~50MB optimized image
```

### Development Setup

Live editing with volume mounts for hot reload.

---

## 📋 File Descriptions

### `Dockerfile` (Production)

Multi-stage build with Nginx:
- Stage 1: Node 22 Alpine - builds your app
- Stage 2: Nginx Alpine - serves built files
- No source code in production
- No build tools in production
- Final size: ~50MB

### `Dockerfile.dev` (Development)

Development with hot reload:
- Node 22 Alpine
- Vite dev server on port 5173
- File polling enabled
- Full npm access

### `docker-compose.yml` (Production)

Production orchestration:
- Nginx on port 80
- Auto-restart on failure
- Health checks every 30s

### `docker-compose.dev.yml` (Development)

Development with live editing:
- Port 5173
- Volume mounts
- Preserves node_modules
- Caches Vite

### `nginx.conf`

Production web server:
- Gzip compression (60% smaller)
- Security headers
- SPA routing
- Smart caching

---

## 🎯 Common Commands

### Development

```bash
# Start with hot reload
docker compose -f docker-compose.dev.yml up

# Run npm commands
docker compose -f docker-compose.dev.yml exec dev npm run lint

# View logs
docker compose -f docker-compose.dev.yml logs -f

# Stop
docker compose -f docker-compose.dev.yml down
```

### Production

```bash
# Build
docker build -t lumabuild:latest .

# Run
docker run -d -p 80:80 lumabuild:latest

# With Docker Compose
docker compose up -d
docker compose ps
docker compose logs -f
docker compose down
```

### Utilities

```bash
# Image size
docker images lumabuild

# Image layers
docker history lumabuild:latest

# Execute in container
docker exec -it lumabuild sh

# Container stats
docker stats lumabuild

# Stop/remove
docker stop lumabuild && docker rm lumabuild
```

---

## 🔧 Configuration

### Environment Variables

Development:
```env
NODE_ENV=development
VITE_API_URL=http://localhost:5173
```

Production:
```env
NODE_ENV=production
VITE_API_URL=https://api.example.com
```

### Ports

- Development: 5173 (Vite)
- Production: 80 (Nginx)

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
lsof -i :5173
kill -9 <PID>
```

### Volume Issues (Windows/Mac)

```bash
# Enable file sharing: Settings → Resources → File Sharing
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up
```

### Hot Reload Not Working

```bash
docker compose -f docker-compose.dev.yml restart dev
```

### Build Failures

```bash
docker build --no-cache -t lumabuild .
docker system prune -a
docker compose build --no-cache
```

---

## 📊 Image Sizes

**Development:** ~510MB (Node + deps + source)  
**Production:** ~52MB (90% smaller!)

---

## 🔐 Security

✅ Specific versions (no `latest`)  
✅ Security headers  
✅ Health checks  
✅ No secrets in images  
✅ `.dockerignore` for sensitive files

---

## 📚 Resources

- **[[docker]]** - Docker guide
- **[[lumabuild-docker]]** - Detailed setup
- **[[react]]** - React reference

---

## ✅ First Time Setup

```bash
# 1. Start dev
docker compose -f docker-compose.dev.yml up

# 2. Build prod  
docker build -t lumabuild .

# 3. Test prod
docker run -p 80:80 lumabuild:latest

# 4. Cleanup
docker compose down
docker stop lumabuild && docker rm lumabuild
```

---

**Project:** LumaBuild | **Docker:** 24.x+ | **Compose:** 2.x+

> 🚀 Use Docker Compose for development, Docker for production!