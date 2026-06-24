# System Architecture

User
|
v
Next.js Frontend
|
v
NestJS Backend
|
+----------------------+
|                      |
v                      v
PostgreSQL         GitHub API
|
v
Gemini API

Flow:

1. User submits GitHub repository URL.
2. Backend fetches repository metadata from GitHub API.
3. Repository information is stored in PostgreSQL.
4. Backend sends repository data to Gemini API.
5. Gemini generates repository insights.
6. Analysis is stored in PostgreSQL.
7. Frontend displays results.