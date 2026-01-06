# 1. Clean Component Hierarchy (Production-Ready)::
## 📁 Recommended Folder Structure:
```
src/
│
├── app/                     # App bootstrap
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx        # Global providers
│
├── components/
│   ├── layout/              # Stable layouts
│   │   ├── AppLayout.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── AuthLayout.tsx
│   │
│   ├── ui/                  # Design system (ShadCN-like)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── dropdown.tsx
│   │
│   ├── shared/              # Reusable business components
│   │   ├── UserAvatar.tsx
│   │   └── EmptyState.tsx
│
├── pages/                   # Route-level pages
│   ├── auth/
│   ├── dashboard/
│   └── public/
│
├── hooks/                   # Custom hooks
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   └── useToggle.ts
│
├── services/                # API layer (RTK Query / Axios)
│
├── store/                   # Redux Toolkit
│
├── lib/                     # Utilities
│   ├── cn.ts
│   └── constants.ts
│
├── types/
│
└── styles/

```

# 2. High-Performance Layout Pattern (No Over-Rendering)::
## Bad Pattern (Re-renders everything):
```
// Bad Pattern_:
<App>
  <Navbar />
  <Routes />
  <Footer />
</App>

// Right Pattern_:
// AppLayout.tsx:
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

---
Route Usage:
function DashboardPage() {
  return (
    <AppLayout>
      <DashboardContent />
    </AppLayout>
  );
}

---
// Only page content suspends/ lazy loading:
// Layout never suspends:
<Suspense fallback={<PageLoader />}>
  <DashboardPage />
</Suspense>

---
// use "memo" when, only:
// Component is heavy:
// Receives props:
// Renders frequently:

const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});

---
// when use "useCallback", only:
const handleClick = useCallback(() => {
  setCount((c) => c + 1);
}, []);

```

# 3. Design System — The Correct Way::
## Rule_ Design system components are primitive + reusable:
```
// Example: Button Component (Correct) or look MUI components:
import { cn } from "@/utils/cn";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded font-medium transition",
        variant === "primary" && "bg-blue-600 text-white",
        variant === "secondary" && "bg-gray-200",
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    />
  );
}

---
// Button (Production Quality):
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white",
        ghost: "hover:bg-gray-100",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}

---
// Card:
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {children}
    </div>
  );
}

---
// Composition Pattern (Real Power):
// Flexible:
// Extendable:
// Enterprise-ready:

<Card>
  <CardHeader />
  <CardContent />
</Card>
```

# 4. React Reconciliation — Visual Explanation::
## What React actually does:
```
// Only the changed subtree updates:
Previous Virtual DOM
        ↓
   Diffing Algorithm
        ↓
Minimal DOM Updates
```

# 5. Performance Issus::
## Why too many components hurt performance:
```
// Each = a function call:
// Each = reconciliation cost:
<Section>
 <Container>
  <Wrapper>
   <Box>
    <Text />
   </Box>
  </Wrapper>
 </Container>
</Section>

// Optimal Tree:
<section class="...">
  <h1>Text</h1>
</section>
```

# 6. Final Golden Rules (Memorize These)::
```
✅ Use native HTML tags freely
✅ Create components for behavior or reuse
❌ Don’t wrap HTML just for names
✅ Keep component tree shallow
✅ Design system ≠ page components
```

# 7. Chat-GPT Prompt::
```
// Structured, role-based, step-by-step prompts:
Prompt 1 → Architecture
Prompt 2 → Database Design
Prompt 3 → Backend APIs
Prompt 4 → Auth System
Prompt 5 → Frontend Pages
Prompt 6 → Advanced Features
Prompt 7 → Production Setup

// MASTER PROMPT (Full Project):
Act as a senior MERN stack architect.

Build a production-ready MERN Authentication & Authorization system using:

Frontend:
- React 19
- TypeScript
- Redux Toolkit + RTK Query
- Tailwind CSS
- React Router v6.4+

Backend:
- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT (Access + Refresh)
- bcrypt
- Nodemailer

Requirements:
1. Clean folder structure (frontend & backend)
2. Secure JWT auth with refresh token rotation
3. Role-based access control (Admin/User)
4. Forgot & Reset password flow
5. Email verification
6. Protected routes (frontend & backend)
7. Error handling & validation
8. Production-ready code

Explain architecture first, then implement step-by-step with code.
```