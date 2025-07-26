# LearnChain 🧠

**A decentralized AI tutoring platform built on the Internet Computer Protocol (ICP)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Internet Computer](https://img.shields.io/badge/Internet-Computer-29ABE2.svg)](https://internetcomputer.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![Rust](https://img.shields.io/badge/Rust-Latest-000000.svg)](https://www.rust-lang.org/)

LearnChain is your personal AI tutor that runs entirely on the Internet Computer blockchain. Ask questions about any subject and get helpful explanations to improve your understanding, all while maintaining complete privacy and data ownership.

---

## ✨ Features

- 🤖 **AI-Powered Learning:** Get instant answers to questions on any subject using advanced AI models
- 🔐 **Internet Identity:** Secure authentication with Internet Identity ensures privacy and data ownership
- 📚 **Personal Study History:** Track all your questions and build your personal knowledge base on-chain
- 🌐 **Fully Decentralized:** No centralized servers - everything runs on the Internet Computer
- ⚡ **Real-time Responses:** Fast AI inference with immediate answers to your questions
- 🎯 **Adaptive Learning:** Personalized study recommendations based on your learning history
- � **Progress Analytics:** Monitor your learning journey with detailed insights
- 📱 **Modern UI:** Clean, responsive interface built with React and Tailwind CSS

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (Internet Computer development kit)
- [Rust](https://rustup.rs/) (for backend development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kaushik-arc/Kaushik-j.git
   cd icp-block
   ```

2. **Install dependencies:**

   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd src/learnchain_frontend
   npm install
   cd ../..
   ```

3. **Start the local Internet Computer replica:**

   ```bash
   dfx start --background
   ```

4. **Deploy the canisters:**

   ```bash
   dfx deploy
   ```

5. **Start the development server:**

   ```bash
   cd src/learnchain_frontend
   npm start
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000` to start using LearnChain!

---

## 🏗️ Architecture

LearnChain is built with a modern, decentralized architecture:

### Frontend (React + Vite)

- **React 18** with hooks for state management
- **Tailwind CSS** for responsive, modern styling
- **Vite** for fast development and building
- **Internet Identity** integration for authentication
- **Agent-js** for communication with IC canisters

### Backend (Rust + IC CDK)

- **Rust** with Internet Computer CDK
- **Candid** interface definitions for type-safe communication
- **Stable memory** for persistent data storage
- **Principal-based** user authentication and data isolation

### AI Integration

- Client-side AI inference using modern ML models
- Seamless integration with blockchain storage
- Privacy-preserving question processing

---

## � Project Structure

```
icp-block/
├── dfx.json                 # DFX configuration
├── Cargo.toml              # Rust workspace configuration
├── package.json            # Root package configuration
├── README.md               # This file
├── src/
│   ├── learnchain_backend/ # Rust backend canister
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs      # Main backend logic
│   ├── learnchain_frontend/ # React frontend
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── tailwind.config.js
│   │   └── src/
│   │       ├── App.jsx     # Main App component
│   │       ├── main.jsx    # Entry point
│   │       ├── components/ # Reusable components
│   │       ├── pages/      # Page components
│   │       ├── context/    # React context providers
│   │       ├── hooks/      # Custom React hooks
│   │       └── services/   # API services
│   └── declarations/       # Generated Candid bindings
└── target/                 # Rust build artifacts
```

---

## 🎯 Usage

### Getting Started

1. **Authentication:** Click "Get Started" to authenticate with Internet Identity
2. **Ask Questions:** Navigate to the "Ask" page and type your learning question
3. **Get Answers:** Receive AI-powered explanations tailored to your question
4. **Track Progress:** View your learning history and progress in the dashboard

### Sample Questions

- "What is photosynthesis and how does it work?"
- "Explain quantum computing in simple terms"
- "How do neural networks learn?"
- "What are the principles of organic chemistry?"
- "Solve this math problem: 2x + 5 = 15"

---

## 🛠️ Development

### Local Development Setup

1. **Start local replica:**

   ```bash
   dfx start --clean
   ```

2. **Deploy canisters:**

   ```bash
   dfx deploy
   ```

3. **Generate declarations:**

   ```bash
   dfx generate
   ```

4. **Start frontend:**
   ```bash
   cd src/learnchain_frontend
   npm run dev
   ```

### Backend Development

The Rust backend is located in `src/learnchain_backend/src/lib.rs`. It provides:

- User authentication and session management
- Question and answer storage
- Learning progress tracking
- Secure data access patterns

### Frontend Development

The React frontend uses modern practices:

- Functional components with hooks
- Context API for state management
- Tailwind CSS for styling
- React Router for navigation

---

## 🔧 Available Scripts

### Root Level

- `npm install` - Install all dependencies
- `dfx start` - Start local IC replica
- `dfx deploy` - Deploy all canisters
- `dfx generate` - Generate Candid bindings

### Frontend (`src/learnchain_frontend/`)

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🌐 Deployment

### Local Deployment

```bash
dfx deploy --network local
```

### IC Mainnet Deployment

```bash
dfx deploy --network ic --with-cycles 1000000000000
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Rust best practices for backend code
- Use ESLint and Prettier for frontend code formatting
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Internet Computer Protocol** for the decentralized infrastructure
- **DFINITY Foundation** for the development tools and ecosystem
- **React Team** for the amazing frontend framework
- **Rust Community** for the powerful systems programming language
- **Tailwind CSS** for the utility-first CSS framework

---

## 📞 Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/kaushik-arc/Kaushik-j/issues)
- **Community:** Join the Internet Computer developer community
- **Documentation:** Check the [Internet Computer docs](https://internetcomputer.org/docs/)

---

**Built with ❤️ on the Internet Computer**

Ready to revolutionize learning with blockchain technology? Clone LearnChain and start building the future of decentralized education!

- Update API services in `src/learnchain_frontend/src/services/`
- Restart dev server: `npm start`

### Testing

```bash
# Deploy to local testnet
dfx deploy --network local

# Deploy to mainnet (requires cycles)
dfx deploy --network ic
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Internet Computer](https://internetcomputer.org/) for the decentralized computing platform
- [Transformers.js](https://xenova.github.io/transformers.js/) for browser-based AI inference
- [Google FLAN-T5](https://huggingface.co/google/flan-t5-small) for the instruction-tuned language model
- [DFINITY Foundation](https://dfinity.org/) for Internet Identity and ICP ecosystemered Tutoring on the Internet Computer 🧠

**A decentralized AI tutoring platform built entirely on the Internet Computer Protocol (ICP) using open-source models.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
LearnChain leverages the power of the Internet Computer to create an AI-powered learning assistant that runs entirely on-chain. Using Transformers.js and open-source models like FLAN-T5, it provides personalized tutoring while maintaining user privacy and data ownership.

---

---

## ✨ Features

- 🤖 **AI-Powered Q&A:** Ask learning questions and get instant AI-generated answers using FLAN-T5-small model running in your browser.
- 🔐 **Internet Identity Authentication:** Secure login using Internet Identity ensures privacy and user ownership of data.
- � **Personal Learning History:** All your questions and answers are stored on-chain, tied to your principal ID for privacy.
- 🌐 **Fully Decentralized:** Runs entirely on the Internet Computer with client-side AI inference - no centralized servers.
- ⚡ **Fast & Private:** Local AI inference means your questions never leave your device, while answers are stored securely on-chain.
- 🔍 **Verifiable & Transparent:** Open-source AI model and on-chain storage ensure complete transparency and verifiability.
- 📱 **Browser-Based:** No downloads required - AI model loads directly in your browser using Transformers.js.

## 🤔 Why DigiVoter on the Internet Computer?

- **True Decentralization:** No single entity controls the application or the voting data, eliminating single points of failure and control.
- **Enhanced Security:** Leverages the cryptographic security, consensus mechanisms, and Sybil resistance inherent to the Internet Computer.
- **Transparency:** All canister code (backend logic) and election data (anonymized votes, results) can be publicly audited on the blockchain.
- **Censorship Resistance:** Highly resistant to external interference or attempts to shut down or manipulate the voting process.
- **Direct Web Serving:** Serves the frontend directly from the blockchain, reducing reliance on traditional web hosting infrastructure.

## 🛠️ Technology Stack

- **Frontend:** [React.js](https://reactjs.org/) - A popular JavaScript library for building dynamic and interactive user interfaces.
- **Backend Canisters:** [Rust](https://www.rust-lang.org/) - A performant and memory-safe language used for writing secure smart contracts (canisters) on the Internet Computer.
- **Blockchain Platform:** [Internet Computer Protocol (ICP)](https://internetcomputer.org/) - The underlying decentralized cloud platform providing compute, storage, and consensus.
- **IC SDK:** `dfx` - The command-line interface and SDK for developing and deploying applications on the Internet Computer.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have the following tools installed on your system:

1.  **DFX (The IC SDK):** Required to build, deploy, and interact with Internet Computer applications.

    - [Installation Guide](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
    - Quick Install (Linux/macOS):
      ```bash
      sh -ci "$(curl -fsSL [https://internetcomputer.org/install.sh](https://www.google.com/search?q=https://internetcomputer.org/install.sh))"
      ```
    - Verify installation: `dfx --version`

2.  **Node.js and npm:** Required for the React frontend development environment.
    - [Download Node.js](https://nodejs.org/) (LTS version is generally recommended)
    - Verify installation: `node -v` and `npm -v`

### Installation & Local Deployment

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/akshat-shah-017/DigiVoter.git](https://www.google.com/search?q=https://github.com/akshat-shah-017/DigiVoter.git)
    cd DigiVoter
    ```

2.  **Install frontend dependencies:**

    ```bash
    npm install
    ```

3.  **Start the local Internet Computer replica:**
    It's recommended to run the local replica in a separate terminal window/tab as it provides ongoing status logs.

    ```bash
    # Navigate to your project directory (DigiVoter) in a new terminal
    dfx start --background --clean
    ```

    - `--background` runs the replica process in the background.
    - `--clean` starts with a fresh state, useful for avoiding potential conflicts from previous runs.

4.  **Deploy the canisters (backend logic):**
    In your original terminal window (within the `DigiVoter` directory):

    ```bash
    dfx deploy
    ```

    - This command compiles the Rust canister code, deploys it to your local replica, and generates necessary interface files for the frontend.

5.  **Run the frontend development server:**
    ```bash
    npm start
    ```
    This command will typically:
    - Build the React application.
    - Start a local development server (often on `http://localhost:3000` or a similar port).
    - Open the application automatically in your default web browser. Check the terminal output for the exact URL.

### Usage Guide

Once the application is running in your browser:

1.  **Authentication:** Connect using the required method (e.g., a development identity provided by the local replica, or integrate with Internet Identity for mainnet/testing).
2.  **Create Election (Admin Role):** Navigate to the election creation section. Fill in the necessary details like title, description, voting options/candidates, and the start/end date and time for the voting period.
3.  **Cast Vote (Voter Role):** Browse available active elections. Select your preferred option and submit your vote securely.
4.  **View Results:** After an election's end time has passed, navigate to the results page to view the final, transparent tally.

## 🗺️ Project Structure

```text
digivoter/
├── .gitignore              # Specifies intentionally untracked files for Git
├── dfx.json                # DFINITY SDK project configuration (defines canisters)
├── LICENSE                 # Project license information
├── README.md               # Project overview and instructions (this file)
├── src/
│   ├── declarations/         # Auto-generated canister interfaces (used by frontend)
│   │   └── digivoter_backend/ # TS/JS types and client for backend canister
│   │   └── ...               # (Interfaces for other canisters if any)
│   ├── digivoter_backend/    # Rust backend canister source code
│   │   ├── src/
│   │   │   └── lib.rs        # Main Rust canister logic
│   │   ├── Cargo.toml        # Rust package definition and dependencies
│   │   └── digivoter_backend.did # Candid interface definition (source)
│   └── digivoter_frontend/   # React frontend source code
│       ├── public/           # Static assets (e.g., favicon.ico, index.html template)
│       │   └── index.html    # Main HTML file template
│       ├── src/              # Core React application code
│       │   ├── assets/       # Frontend-specific assets (images, css, etc.)
│       │   ├── components/   # Reusable UI components (e.g., Navbar.jsx)
│       │   ├── context/      # React context files (e.g., AuthContext.jsx)
│       │   ├── pages/        # Page components (e.g., Home.jsx, Login.jsx)
│       │   ├── services/     # Logic for interacting with backend (e.g., api.js)
│       │   ├── App.jsx       # Root React component, routing setup
│       │   └── main.jsx      # Frontend entry point (renders App)
│       ├── package.json      # Frontend Node.js dependencies and scripts
│       ├── tailwind.config.js # Configuration for Tailwind CSS (if used)
│       └── vite.config.js    # Configuration for Vite build tool (if used)
└── # Other root config files (e.g., .prettierrc, tsconfig.json)

# --- Generated Directories (Usually ignored by Git) ---
# .dfx/                     # DFX build outputs, local replica state, canister IDs
# dist/                     # Compiled frontend build output
# node_modules/             # Installed Node.js dependencies (frontend)
# target/                   # Rust build output directory (backend)
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project (`https://github.com/akshat-shah-017/DigiVoter/fork`)
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please ensure your code follows the project's coding style and includes tests where appropriate.

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 📧 Contact

Akshat Shah
email: shah.akshat.g@gmail.com

Project Link: [https://github.com/akshat-shah-017/DigiVoter](https://github.com/akshat-shah-017/DigiVoter)

---

# DigiVoter
