# Dawa Life Sciences Web Application

A modern web application built with React, TypeScript, and Tailwind CSS, showcasing Dawa Life Sciences' products and services.

## Features
- Responsive UI with Tailwind CSS
- Type-safe React components
- Client-side routing with React Router
- Modern build tooling with Vite

## Technologies Used
- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React
- **Linting**: ESLint

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/dawa-life-sciences/web-app.git
   cd web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Development Workflow

- **Run development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

## Project Structure

```
dlsciences/
├── src/
│   ├── components/        # Reusable UI components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Deployment

The application can be deployed to any static hosting provider:
1. Build the application: `npm run build`
2. Deploy the contents of the `dist` directory

## Contributing

We welcome contributions! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.