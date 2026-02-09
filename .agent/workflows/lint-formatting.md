---
description: linting and formatting workflow
---

# Linting and Formatting Instructions

To ensure consistent code quality and style in this project, follow these steps before submitting any changes:

## 1. Check Formatting

Run the following command to check for formatting issues:

```bash
npm run format:check
```

## 2. Fix Formatting and Linting

If there are issues, or to automatically fix formatting and common linting errors (including Prettier rules integrated into ESLint):

```bash
npm run format:fix
```

And then:

```bash
npm run lint
```

## 3. Rules to Follow

- **Prettier** is the source of truth for formatting.
- **ESLint** is configured to run Prettier as a rule (`prettier/prettier`).
- Always run `format:fix` before completion to ensure compliance.
