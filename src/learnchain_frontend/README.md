# LearnChain Frontend

A modern React frontend for the LearnChain AI tutoring platform built on the Internet Computer Protocol.

## Features

- 🏠 **Landing Page**: Professional homepage with feature highlights
- 🔐 **Internet Identity Auth**: Secure blockchain-based authentication
- 🤖 **AI Question Answering**: Client-side AI inference using Transformers.js
- 📊 **Learning Dashboard**: Track progress and view question history
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast Performance**: Optimized with Vite and modern React patterns

## Tech Stack

- **React 18** - Modern hooks and context API
- **Vite** - Fast development and optimized builds
- **Tailwind CSS** - Utility-first styling framework
- **React Router** - Client-side routing
- **Transformers.js** - Browser-based AI model inference
- **Internet Identity** - Decentralized authentication
- **ICP Agent** - Connection to Internet Computer canisters

## Quick Start

### Prerequisites

- Node.js 16+ and npm
- DFX (Internet Computer SDK) for full functionality

### Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with auth state
│   └── ProtectedRoute.jsx  # Route protection wrapper
├── context/            # React context providers
│   └── AuthContext.jsx # Authentication state management
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Login.jsx       # Authentication page
│   ├── Ask.jsx         # AI question interface
│   ├── Dashboard.jsx   # User progress tracking
│   └── NotFound.jsx    # 404 error page
├── services/           # External service integrations
│   ├── aiService.js    # Transformers.js AI integration
│   └── mockAiService.js # Development mock service
├── declarations/       # Generated canister interfaces
└── App.jsx            # Main application component
```

## Key Features Explained

### AI Integration

The app uses Transformers.js to run AI models directly in the browser:

- **Model**: FLAN-T5-small for instruction-following
- **Privacy**: All AI inference happens client-side
- **Performance**: Quantized models for faster loading
- **Fallback**: Graceful error handling if models fail to load

### Authentication Flow

1. User clicks "Get Started" or "Sign In"
2. Redirects to Internet Identity service
3. Upon successful auth, creates ICP actor for backend communication
4. Protected routes become accessible

### Data Storage

- **Questions & Answers**: Stored on ICP blockchain via Rust canister
- **User Progress**: Tracked per principal ID for privacy
- **Session State**: Managed in React context with persistence

## Configuration

### Environment Variables

Create `.env.local` for development:

```bash
VITE_CANISTER_ID_LEARNCHAIN_BACKEND=your_canister_id
VITE_IC_HOST=http://localhost:4943  # Local development
```

### Deployment

For Internet Computer deployment:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy via DFX:
   ```bash
   dfx deploy learnchain_frontend
   ```

## Development Notes

### Mock vs Real AI

- `aiService.js` - Real Transformers.js integration
- `mockAiService.js` - Development mock with sample responses
- Switch between them in `pages/Ask.jsx` import

### Authentication Testing

- Protected routes redirect to login when not authenticated
- Temporarily disable in `ProtectedRoute.jsx` for development
- Remember to re-enable for production

### Styling Guidelines

- Use Tailwind utility classes
- Custom components defined in `index.css`
- Responsive design with mobile-first approach
- Consistent color scheme with CSS custom properties

## Browser Support

- Modern browsers with ES2020+ support
- WebAssembly support required for AI models
- Service Workers for offline functionality (future enhancement)

## Performance Optimization

- Code splitting with React.lazy (can be added)
- AI model lazy loading
- Image optimization
- Bundle size monitoring with Vite

## Contributing

1. Follow existing code style and patterns
2. Add JSDoc comments for complex functions
3. Test on multiple devices and browsers
4. Update this README for new features

## Troubleshooting

### AI Model Loading Issues

- Check network connectivity
- Verify Hugging Face Hub access
- Try refreshing to reload models
- Check browser console for detailed errors

### Authentication Problems

- Ensure DFX is running for local development
- Check Internet Identity service status
- Verify canister IDs in environment variables
- Clear browser storage and try again

### Build Errors

- Update Node.js to latest LTS version
- Clear node_modules and reinstall
- Check for TypeScript errors
- Verify all imports are correct

---

Built with ❤️ for the Internet Computer ecosystem