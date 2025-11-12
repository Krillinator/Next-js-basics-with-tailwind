## Next Routing

App Folder: Everything within gets its own endpoint.

- A new folder called "about" will create an endpoint for localhost:3000/about
- To ignore / private a folder like 'components', we use an underscore \_components
- If you want to have routing, but ignore just one folder, use parentheses (test)
- Dynamic Parameters for endpoints, are added as [slug] followed by a page.tsx

## page.tsx

All pages are considered an index file, for its related parent folder.
If the parent folder is 'about', and there's a page.tsx within 'about'.
Then the page.tsx will be displayed in localhost:3000/about

Convention

- Every Routing Folder, contains a page.tsx
- page.tsx is the default name (avoid index)
- Every page.tsx, can (optionally) be accompanied by a layout.tsx

## layout.tsx

Layout.tsx adds metaData and Styling over subComponents called Children.
A child in this case, would be all subsequent page.tsx.

How it would work if app has a layout.tsx

- app/about page.tsx would automatically receive the components
- subsequent layouts within e.g: about.tsx, would ADD an additional layer rather than overwrite the previous layout.tsx

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
