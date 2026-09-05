# BoxCar - Premium Car Dealership

A modern, pixel-perfect car dealership website built with React, TypeScript, and Tailwind CSS.

## 🚗 Features

- **Stunning Hero Section** with featured vehicle showcase
- **Vehicle Inventory** with filtering and search capabilities
- **Interactive Auto Loan Calculator**
- **Customer Testimonials** with ratings
- **Browse by Vehicle Type** with beautiful imagery
- **Mobile App Promotion** section
- **Latest Blog Posts** showcase
- **Fully Responsive Design** for all screen sizes

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/                    # Source code
│   ├── assets/             # Images, fonts, etc.
│   ��── components/         # React components
│   │   ├── ui/             # Reusable UI components
│   │   └── Navigation.tsx  # Main navigation component
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Homepage
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type definitions
├── server/                 # Express backend
├── shared/                 # Shared types and utilities
├── index.html              # HTML entry point
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 + Custom Design System
- **Backend**: Express.js (integrated)
- **Fonts**: DM Sans (Google Fonts)
- **Build Tool**: Vite
- **Package Manager**: npm

## 🎨 Design System

### Colors

- **Primary Blue**: `#405FF2`
- **Brand Dark**: `#050B20`
- **Pink Accent**: `#FF5CF4`
- **Gray**: `#6C6C83`
- **Light Gray**: `#E9E9E9`
- **Light Blue**: `#EEF1FB`
- **Section Background**: `#F9FBFC`

### Typography

- **Font Family**: DM Sans
- **Heading Sizes**: 2xl to 7xl
- **Body Text**: Base size with line-height optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd boxcar-dealership
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run typecheck  # Run TypeScript type checking
npm test          # Run tests
npm run format.fix # Format code with Prettier
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Configuration

### Path Aliases

- `@/*` - Maps to `src/*`
- `@shared/*` - Maps to `shared/*`

### Environment Variables

Configure in `.env` file:

```
VITE_API_URL=your_api_url
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

### Docker Support

```bash
# Build Docker image
docker build -t boxcar-dealership .

# Run container
docker run -p 8080:8080 boxcar-dealership
```

### Deployment Options

- **Netlify**: Auto-deploys from main branch
- **Vercel**: Connect repository for instant deployment
- **Docker**: Use included Dockerfile for containerized deployment

## 🎯 Key Features Implemented

### ✅ Homepage Sections

- [x] Hero section with featured car
- [x] Vehicle inventory with tabs
- [x] "Why Choose Us" features
- [x] Browse by vehicle type
- [x] Auto loan calculator
- [x] Customer testimonials
- [x] Mobile app promotion
- [x] Latest blog posts

### ✅ Technical Features

- [x] Fully responsive design
- [x] TypeScript support
- [x] Modern React patterns
- [x] Tailwind CSS styling
- [x] Express.js backend integration
- [x] Hot reload development
- [x] Production optimization

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using modern web technologies**
