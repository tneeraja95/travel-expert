# 🌍 Travel Experts — Landing Page

A **Next.js + TypeScript + Tailwind CSS** landing page for **Travel Experts**, your one-stop destination for all things travel.  
It showcases a smooth, modern design with an interactive carousel and a wishlist integration powered by Google Sheets.
This page is responsive and works for desktop, tablets and laptops. This is not optimised for smaller screens.

---

## 🚀 Live Demo

🔗 **[View Deployment on Vercel](https://travel-expert-phi.vercel.app/)**

---

## 🧱 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Integration:** Google Sheets API

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/travel-experts.git
cd travel-experts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and update it with your Google Sheets credentials.
(An example .env.example file is included for reference.)

### 4. Run the Project Locally

```bash
npm run dev
```

Your app will start at http://localhost:3000

## 🧩 Components Overview

### 1. Introduction

Contains the **Navbar** and **Main Title** that introduce the Travel Experts brand.

---

### 2. Wishlist

A section where users can join the wishlist by submitting:

- **Name** and **Email** (mandatory fields with email validation).
- On clicking **“Join Wishlist”**, user details (name, email, timestamp) are saved to a **[Google Sheet](https://docs.google.com/spreadsheets/d/1OqjNw5BMLww6LDjr9NZNSNjuneQgOQ9fR_5W5iWG-rU/edit?gid=0#gid=0)**.

---

### 3. Hero Section

A dual-carousel section featuring:

#### Outer Carousel

- Contains **4 slides** with **auto-play** and **dot navigation**.
- Includes an **“Explore Now”** button (currently links to [getmarch.com](https://getmarch.com)).

#### Inner Carousel

- Displays **related images**.
- **Auto-plays** in sync with the outer carousel for a seamless visual experience.

---

### 4. Footer

A simple **footer section** that appears across all pages, containing **Social media links**

---
