# 🏗️ Living Engineering Laboratory Website

This is a [Next.js](https://nextjs.org) project for the Living Engineering Laboratory, featuring a comprehensive admin system for project management and content control.

## 🚀 Quick Start

### **Development**
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

### **Production**
```bash
npm run build
npm start
```

## 🔐 Admin Access

- **URL**: `/admin` (e.g., `https://living-lab-website.vercel.app/admin`)
- **Username**: `admin`
- **Password**: `LivingLab2025!`
- **Session**: Expires after 24 hours automatically

### **Login Credentials:**
```
Username: admin
Password: LivingLab2025!
```

## 📚 Documentation

- **ADMIN_GUIDE.md** - Complete admin user guide and quick start
- **DATA_WARNING.md** - Critical data storage limitations and risks
- **HANDOVER_CHECKLIST.md** - Complete project handover status and checklist

## 🌐 Deployment

Currently deployed on Vercel with automatic deployments from GitHub main branch.

**Current URL**: `https://living-lab-website.vercel.app`

**Custom Domain**: Can be upgraded to remove "vercel.app" from URL for professional branding.

## 🔧 Tech Stack

- **Frontend**: Next.js 15.5.0, React 18, TypeScript
- **Styling**: Tailwind CSS with custom fonts
- **Deployment**: Vercel (automatic from GitHub)
- **Storage**: Browser localStorage (client-side, see DATA_WARNING.md)
- **Admin System**: Full CRUD operations for projects, categories, and courses

## 🎯 Key Features

- **Project Management**: Add, edit, delete, and reorder projects
- **Image Upload**: Multiple images with cropping tools
- **Featured Projects**: First 3 projects automatically display on homepage
- **Category Management**: Organize projects by engineering disciplines
- **Course Management**: Manage course information and details
- **Responsive Design**: Mobile and desktop optimized

## 📖 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
