# St. Luke Hospital Management System

ReactJS frontend for St. Luke Hospital, Musanze District, Northern Province, Rwanda.

## Features

- React + Vite
- React Router v6
- Dashboard, Patients, Appointments, Billing and Pharmacy modules
- `/home` redirects to `/`
- Patient filtering with `useSearchParams`
  - `/patients?status=admitted`
  - `/patients?status=outpatient`
  - `/patients?status=discharged`
- Pharmacy filtering with `useSearchParams`
  - `/pharmacy?category=antibiotics`
  - `/pharmacy?category=analgesics`
  - `/pharmacy?category=cardiovascular`
- Patient detail route:
  - `/patients/:id`
- Nested patient routes:
  - `/patients/:id/history`
  - `/patients/:id/billing`
- `<Outlet />` for nested pages
- `useNavigate()` Back to Patients button
- Active Navbar links
- Responsive styling
- 404 page
- Vercel SPA rewrite configuration

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub

```bash
git init
git add .
git commit -m "Build St Luke Hospital React Router system"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/st-luke-hospital-react.git
git push -u origin main
```

## Vercel

1. Push this project to GitHub.
2. Open Vercel and import the GitHub repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

`vercel.json` is included so React Router URLs work after deployment.

## Suggested screenshots

1. Dashboard
2. Patients
3. Filtered Patients
4. Patient Details
5. Patient History
6. Patient Billing
7. Pharmacy
8. Filtered Pharmacy
9. 404 page
10. Navbar and Footer
