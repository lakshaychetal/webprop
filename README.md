# Dine3D - Restaurant 3D/AR Menu & Voice AI PlatformThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Dine3D is a responsive web platform featuring interactive 3D/AR menus and multilingual Voice AI ordering for restaurants.## Getting Started



## FeaturesFirst, run the development server:

- **3D & AR Menu Viewer**: View dishes in 3D and place them in the real world using WebAR (iOS QuickLook & Android SceneViewer).

- **Voice Assistant**: Multilingual (EN/HIN) ordering assistant using Web Speech API.```bash

- **Reseller Calculator**: Interactive tool for partners to calculate revenue margins.npm run dev

- **RMS Integration**: Detailed pricing plans and feature mapping for Restaurant Management Systems.# or

- **Admin Portal**: Layout for mapping 3D models to menu items.yarn dev

# or

## Tech Stackpnpm dev

- **Framework**: Next.js 15+ (App Router)# or

- **Styling**: Tailwind CSS (with custom Gold gradient theme)bun dev

- **3D Viewer**: `@google/model-viewer````

- **Voice**: Web Speech API (Client-side)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Prerequisites

- Node.js 18.x or laterThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- npm or yarn

## Learn More

### Installation

1. Clone the repository:To learn more about Next.js, take a look at the following resources:

   ```bash

   git clone <repo-url>- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

   cd dine3d- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

   ```

2. Install dependencies:You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

   ```bash

   npm install## Deploy on Vercel

   ```

3. Set up environment variables:The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

   Copy `.env.example` to `.env.local`:

   ```bashCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   cp .env.example .env.local
   ```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment (Vercel)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub/GitLab).
2. Go to Vercel and "Import Project".
3. Select your repository.
4. **Build command**: `next build` (default).
5. **Output directory**: `.next` (default).
6. Click **Deploy**.

## Testing Checklist

### Desktop (Chrome/Safari)
- [ ] Verify `Hero` 3D viewer loads the model.
- [ ] Check Reseller Calculator logic (e.g., set 10 dishes, check margin).
- [ ] Test Contact Form submission (check console or network tab).
- [ ] Toggle Voice Assistant language (EN/HIN) and try commands ("Show vegetarian").

### Mobile (iOS Safari)
- [ ] Tap "Open AR" on the model viewer. It should open AR Quick Look (.usdz).
- [ ] Verify layout responsiveness (hamburger menu, stacked sections).

### Mobile (Android Chrome)
- [ ] Tap "Open AR" on the model viewer. It should open Scene Viewer (.glb).
- [ ] Test Voice Assistant with microphone permission.

## Sample Data
- Sample dishes are located in `src/data/sample-dishes.json`.
- RMS Plans are in `src/data/rms-plans.json`.

## Project Structure
- `src/app`: App Router pages and API routes.
- `src/components`: UI components organized by feature/section.
- `src/data`: JSON datasets.

---
**Note**: This is a frontend deliverable with API stubs. For full production, connect endpoints to a backend/database.
