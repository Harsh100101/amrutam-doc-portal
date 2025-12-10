# Amrutam Doctor Portal – Frontend (React + Vite)

A modern, responsive, and product-focused Doctor Onboarding & Practice Management frontend built using **React**, **Vite**, and reusable UI components. This project is designed to deliver a smooth user experience for doctors onboarding into the Amrutam ecosystem, with polished UI/UX and clean code architecture.

---

## Live Demo

**Live Preview:** *https://harsh100101.github.io/amrutam-doc-portal/*

---

## Project Overview

The **Amrutam Doctor Portal** is a web application that enables Ayurvedic doctors to explore the platform, understand onboarding steps, view features, and register through interactive login/register modals.

This project focuses on:

* Smooth UX and modern interface
* Reusable components
* Responsive design for all screens
* Clean and modular code structure

---

## Features

### Doctor Home Page

* Hero section with Join Now CTA
* Smooth scroll to sections (About, Onboarding, FAQ, Testimonials)
* Scroll-based active navigation highlight
* Featured logos carousel
* Stats, forum highlights, free call section, testimonials

### Global Login & Register Modals

* Accessible from any page using:

  ```js
  window.openLoginModal();
  window.openRegisterModal();
  ```
* Seamless switch between Login and Register

### Layout System

* **PublicLayout:** For marketing pages
* **DashboardLayout:** For authenticated doctor dashboard pages

### Back To Top Button

* Auto appears after scroll
* Smooth scroll to top

### Fully Responsive UI

* Mobile-first layout
* Adaptive grid and flexible card components

---

## Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **CSS3**
* **React Hooks**
* **IntersectionObserver API**

---

## Project Structure

```
src/
│── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LoginModal.jsx
│   ├── RegisterModal.jsx
│   ├── BackToTop.jsx
│   ├── Layout.jsx
│   └── PublicLayout.jsx
│
│── pages/
│   └── DoctorHome.jsx
│
│── assets/
│   └── doctorhome/* images */
│
│── styles/
│   └── *.css
│
└── main.jsx
```

---

## How to Run Locally

### 1. Clone the Repository

```bash
https://github.com/your-username/amrutam-doctor-portal.git
cd amrutam-doctor-portal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## Key Highlights

* Clean codebase designed for scalability
* Easily maintainable component structure
* Pixel-perfect UI components
* Smooth animations and interactions
* Production-ready React setup

---

## Contribution

Pull requests are welcome. For major updates, please open an issue first to discuss what you’d like to change.

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgements

Special thanks to the **Amrutam team** for designing the concept and UI inspiration used for this frontend implementation.

---

### If you like this project, give it a star on GitHub!
