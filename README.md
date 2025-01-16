# MAXX Energy Intranet

Internal portal for MAXX Energy, a simulated enterprise environment used in MAXX Potential's Internship Simulator program. This intranet serves as a central hub for interns to experience and interact with typical enterprise tools and workflows.

## About

The MAXX Energy Intranet is designed to mirror real-world corporate environments, providing interns with hands-on experience in:
- IT Support ticketing systems
- Knowledge base management
- Security protocols
- Document management
- Employee resources

## Tech Stack

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router DOM
- Lucide Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kimmahan/maxx-energy-intranet.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
maxx-energy-intranet/
├── public/
│   └── assets/
│       └── images/
│           └── logos/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── features/
│   ├── pages/
│   ├── styles/
│   └── utils/
```

## Development

This project uses:
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components
- Vite for fast builds and development

## License

Private - MAXX Potential Internal Use Only


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
