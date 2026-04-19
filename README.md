## Next.js Starter

```zsh
npx create-next-app --example https://github.com/gigawatson/next-starter .
```

### Includes

- TypeScript
- Prisma
- Better Auth
- Zod
- Tailwind CSS
- shadcn/ui w/ Base UI
- ESLint
- Prettier

Initialize Prisma:

```zsh
pnpm prisma init
```

Set the `DATABASE_URL` in `.env`:

```dotenv
DATABASE_URL="postgresql://{username}@localhost:5432/{database_name}"
```

Populate `schema.prisma` with models and then generate the schema:

```zsh
pnpm db:generate
```

Push the changes to the database:

```zsh
pnpm db:push
```

Database UI:

```zsh
pnpm prisma studio
```
