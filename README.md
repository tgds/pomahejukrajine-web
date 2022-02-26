This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In `.env.local` set following variables:

```
NEXT_PUBLIC_CONTEMBER_CONTENT_URL="http://localhost:1481/content/ukrajina-contember/live"
NEXT_PUBLIC_CONTEMBER_PUBLIC_TOKEN="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Public token can be generated in Contember using command `npm run contember tenant:create-api-key` (role: `pulic`).
