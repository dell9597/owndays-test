# OWNDAYS x MELLER — Product Listing Page

A responsive product listing page for the **OWNDAYS x MELLER** sunglasses collection, built as part of a Frontend Developer technical assessment.

🔗 **Live Demo:** https://owndays-test.netlify.app/

---

## Tech Stack

| Category  | Technology           |
|-----------|----------------------|
| Framework | Next.js 14 (App Router) |
| Language  | TypeScript           |
| Styling   | Tailwind CSS         |
| Carousel  | Swiper.js            |

---

## Features

- Responsive layout — 3-column grid on desktop, single column on mobile
- Navigation bar with hamburger menu on mobile
- Product cards with image, model name, color swatches, and price
- Product detail drawer with image carousel and SKU switching
- "HOW TO STYLE THEM" horizontal scrollable section
- "ONLINE STORE" button with hover and out-of-stock states

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dell9597/owndays-test.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
├── app/                  # Next.js App Router
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/
│   │   └── types/        # TypeScript type definitions
│   └── utils/            # Utility functions (e.g. image URL helper)
├── public/               # Static assets
└── README.md
```

---

## API

Product data is fetched from:

```
https://api-one-alpha-60.vercel.app/meller/products.json
```

Image paths from the API are prepended with:

```
https://storage.owndays.com/storage/
```
