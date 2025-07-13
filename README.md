# 🚚 Shipment Tracker

A simple web-based shipment tracking interface built with Vue 3 (Composition API), TypeScript, Pinia, Tailwind CSS, and Vite. This app allows you to view shipment data and assign transporters to shipments easily.


## ⚙️ Tech Stack

- [Vue 3](https://vuejs.org/guide/introduction.html) – Composition API
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Pinia](https://pinia.vuejs.org/) – State management
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [Vite](https://vitejs.dev/) – Build tool
- [Mirage](https://miragejs.com/) - Mock API

---
## 📁 Project Structure

src/
── assets/ # Static files like icons or images
── api/ # API service layer (e.g., abstracted HTTP calls)
── components/ # Reusable Vue components (buttons, tables, etc.)
── composable/ # Reusable logic using the Composition API
── layout/ # Shared layout components (e.g., Header, Container)
── mirage/ # MirageJS setup for local API mocking
── mock/ # Static mock data (e.g., JSON, initial data)
── pages/ # Route-level components (Shipment List, Detail)
── store/ # Pinia store modules
── types/ # Global TypeScript types and interfaces
── utils/ # Utility functions/helpers
── App.vue # Root Vue component
── main.ts # Application entry point

## 🚀 Features

- 📋 View list of shipments
- 🔍 See details of a selected shipment
- 👨‍🔧 Assign a transporter to a shipment
- ⚡ Fast and responsive UI built with Tailwind and Vite

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/gesfrllh/Shipment.git
cd Shipment

# Install dependencies
npm install

# Start development server
# With NPM
npm run dev 

# With Yarn
yarn dev