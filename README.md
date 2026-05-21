# Noodle House Cuddalore

Premium Pan-Asian restaurant website for **Noodle House Cuddalore** — a highly-rated dining destination in Cuddalore, Tamil Nadu.

**Live site:** https://noodlehouse.free.nf

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** — animations, parallax, scroll reveals
- **Lucide React** — icons

## Run locally (after git clone)

### Windows (recommended)

PowerShell often blocks `npm`. Use one of these:

**Option A — double-click or run:**
```cmd
dev.bat
```

**Option B — Command Prompt:**
```cmd
cd D:\noodlehouse
npm.cmd install
npm.cmd run dev
```

Then open **http://localhost:3000**

### Mac / Linux

```bash
npm install
npm run dev
```

### Fix PowerShell permanently (optional)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

After that, `npm run dev` works in PowerShell too.

## Build for production

**Windows:**
```cmd
scripts\build.bat
scripts\start.bat
```

**All platforms:**
```bash
npm run build
npm run start
```

## GitHub

```bash
git clone https://github.com/galwinxvr21-bot/noodle-house.git
cd noodle-house
npm.cmd install
npm.cmd run dev
```

## Customize

- Domain: `src/lib/site.ts`
- Contact: `src/components/sections/Contact.tsx`, `Footer.tsx`
- Menu: `src/data/menu.ts`, `src/data/dishes.ts`
- Images: replace Unsplash URLs in `src/data/` and section components
