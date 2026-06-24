# Database Design

## Users

- id
- name
- email
- password_hash
- created_at

## Repositories

- id
- user_id
- github_url
- owner
- name
- stars
- forks
- language
- description
- created_at

## Analyses

- id
- repository_id
- summary
- strengths
- weaknesses
- recommendations
- health_score
- created_at