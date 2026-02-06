const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Service URLs (Localhost Ports)
const SERVICES = {
    AUTH: 'http://localhost:3001',
    USER: 'http://localhost:3002',
    OUTPASS: 'http://localhost:3003',
    ACADEMICS: 'http://localhost:3004',
    FILES: 'http://localhost:3005', // Files is 3005
    MAIL: 'http://localhost:3006',
    NOTIFICATION: 'http://localhost:3007',
    CRON: 'http://localhost:3008'
};

// Proxy Options Helper
const proxy = (target, rewritePath = true) => createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path, req) => {
        // Remove the mount point if rewritePath is true
        if (rewritePath) {
             // Express mounting handles matching, but we need to strip prefix manually for the proxy?
             // http-proxy-middleware relies on pathRewrite to change the path sent to target.
             // We need to know the prefix.
             // Simplification: define regex based rewriting in usage.
             return path; 
        }
        return path;
    }
});

// 1. Auth: /api/v1/auth/* -> http://localhost:3001/*
app.use(createProxyMiddleware('/api/v1/auth', { 
    target: SERVICES.AUTH, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/auth': '' }
}));

// 2. Profile: /api/v1/profile/* -> http://localhost:3002/*
app.use(createProxyMiddleware('/api/v1/profile', { 
    target: SERVICES.USER, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/profile': '' }
}));

// 3. Grievance: /api/v1/grievance/* -> http://localhost:3003/grievance/*
app.use(createProxyMiddleware('/api/v1/grievance', { 
    target: SERVICES.OUTPASS, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/grievance': '/grievance' } 
}));

// 4. Requests (Outpass): /api/v1/requests/* -> http://localhost:3003/*
app.use(createProxyMiddleware('/api/v1/requests', { 
    target: SERVICES.OUTPASS, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/requests': '' }
}));

// 5. Cron: /api/v1/cron/* -> http://localhost:3008/*
app.use(createProxyMiddleware('/api/v1/cron', { 
    target: SERVICES.CRON, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/cron': '' }
}));

// 6. Notifications: /api/v1/notifications/* -> http://localhost:3007/*
app.use(createProxyMiddleware('/api/v1/notifications', { 
    target: SERVICES.NOTIFICATION, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/notifications': '' }
}));

// 7. Mail: /api/v1/mail/* -> http://localhost:3006/*
app.use(createProxyMiddleware('/api/v1/mail', { 
    target: SERVICES.MAIL, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/mail': '' }
}));

// 8. Academics: /api/v1/academics/* -> http://localhost:3004/*
app.use(createProxyMiddleware('/api/v1/academics', { 
    target: SERVICES.ACADEMICS, 
    changeOrigin: true,
    pathRewrite: { '^/api/v1/academics': '' }
}));

// Support Health Check
app.use(createProxyMiddleware('/health', {
    target: SERVICES.AUTH,
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`Gateway (Dev Proxy) running on http://localhost:${PORT}`);
});
