🚀 Final Stack Recommendation (Frontend + Deployment)
=====================================================

🧩 1. Frontend
--------------

### ✅ Core Stack

*   Next.js (App Router)
    
*   TypeScript
    
*   TailwindCSS
    
*   shadcn/ui
    
*   Framer Motion
    

💡 Why this is the BEST choice
------------------------------

### 🔥 1. Next.js (App Router)

This is doing 80% of the heavy lifting for you.

**Why it fits your PRD perfectly:**

*   ✅ **SEO optimized** → critical for recruiters finding you
    
*   ✅ **SSR + SSG** → fast load (<2s goal)
    
*   ✅ **File-based routing** → clean structure for:
    
    *   / (home)
        
    *   /projects
        
    *   /projects/\[slug\] (case studies)
        
    *   /blog (future)
        
*   ✅ Built-in:
    
    *   Metadata API (SEO)
        
    *   Image optimization
        
    *   API routes (contact form)
        

👉 Compared to plain React (Vite), this is a huge upgrade for discoverability.

### 🎨 2. TailwindCSS

**Why:**

*   Matches your **design doc (spacing, cards, dark UI)**
    
*   Rapid UI building (no CSS headache)
    
*   Easy consistency
    

👉 You’ll move 2–3x faster vs writing custom CSS

### 🧱 3. shadcn/ui

**Why:**

*   Prebuilt, accessible components
    
*   Fully customizable (not like rigid UI libraries)
    
*   Perfect for:
    
    *   Cards (projects)
        
    *   Buttons (CTA)
        
    *   Forms (contact)
        

👉 Gives you **SaaS-level UI instantly**

### ✨ 4. Framer Motion

**Why:**

*   Subtle animations (as per PRD)
    
*   Improves perceived quality
    

Use for:

*   Section fade-ins
    
*   Hover effects
    
*   Hero animations
    

👉 Important: keep it subtle (don’t overdo)

### 🧠 5. TypeScript

**Why:**

*   Type safety
    
*   Cleaner codebase
    
*   Industry expectation (especially for senior roles)
    

🚀 2. Deployment
================

✅ Recommended Platform
----------------------

*   Vercel
    

💡 Why Vercel is BEST (no competition here)
-------------------------------------------

### ⚡ 1. Built for Next.js

*   Zero config deployment
    
*   Automatic optimization
    

### 🔄 2. Instant CI/CD

*   Push to GitHub → auto deploy
    
*   Preview URLs for every PR
    

👉 Huge for iteration

### 🌍 3. Global Edge Network

*   Fast loading worldwide
    
*   Helps you hit:
    
    *   **<2s load time goal**
        
    *   High Lighthouse score
        

### 🧪 4. Built-in Features

*   Serverless functions (contact form)
    
*   Image optimization
    
*   Analytics (optional)
    

### 💸 5. Free Tier is Enough

*   For a portfolio → no need to pay initially
    

🏗 Final Architecture (Frontend Only)
=====================================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   User ↓Next.js App (SSR + Static Pages) ↓API Routes (Contact Form) ↓Email Service (Resend / Nodemailer) ↓Deployed on Vercel (Edge Network)   `