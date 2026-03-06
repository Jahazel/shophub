# ShopHub

A fully functional e-commerce web app built with React. Browse products, manage your cart, and authenticate with mock login/signup — all with persistent state via localStorage.

---

## Features

- **Product Browsing** — Fetches and displays products from the FakeStore API
- **Product Detail Pages** — View full product info and add to cart
- **Shopping Cart** — Add, remove, increase/decrease quantity, and view order total
- **Mock Authentication** — Sign up, log in, and log out with localStorage-based auth
- **Persistent State** — Cart and auth state saved to localStorage across sessions
- **Protected Routes** — Pages are locked behind authentication
- **Form Validation** — Login and signup forms validated with React Hook Form

---

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) — client-side routing
- [React Hook Form](https://react-hook-form.com/) — form validation
- [FakeStore API](https://fakestoreapi.com/) — mock product data
- Plain CSS — no UI libraries
- Context API — global state management

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shophub.git

# Navigate into the project
cd shophub

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── assets/
├── components/       # Navbar, ProductCard, ProtectedRoute
├── context/          # CartContext, AuthContext
├── hooks/            # useFetch
├── pages/            # HomePage, ProductPage, CartPage, LoginPage, SignupPage
├── services/         # api.js
└── utils/
```

---

## Notes

This is a learning project. Authentication is mock only — passwords are stored in plain text in localStorage and are not suitable for production use.

---

## Author

Built by Jahazel Sanchez as part of a React learning curriculum.
