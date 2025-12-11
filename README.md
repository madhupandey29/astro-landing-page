# Astro Landing Page

This is an Astro-powered landing page project.

## Deployment to Railway

To deploy this project to Railway:

1. Push your code to a GitHub repository
2. Connect Railway to your repository
3. Railway will automatically detect this as a Node.js project
4. The deployment will use the `railway.toml` configuration file

### Manual Deployment Steps

If you need to deploy manually:

1. Build the project:
   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```

### Environment Variables

Make sure to set the following environment variables in your Railway project:

- `PUBLIC_API_BASE_URL` - Your API base URL (e.g., https://your-api.example.com)

## Development

To run locally:

```
npm run dev
```

This will start the development server on http://localhost:4321