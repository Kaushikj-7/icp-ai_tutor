// Mock AI Service for demo purposes
class MockAIService {
  constructor() {
    this.isReady = false;
  }

  async initialize() {
    console.log('Initializing mock AI model...');
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isReady = true;
    console.log('Mock AI model initialized successfully');
  }

  async generateAnswer(question) {
    if (!this.isReady) {
      await this.initialize();
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate mock responses based on question content
    const responses = {
      'photosynthesis': 'Photosynthesis is the process by which plants, algae, and some bacteria convert light energy (usually from the sun) into chemical energy stored in glucose. The process occurs in two main stages: the light-dependent reactions and the Calvin cycle. During photosynthesis, plants take in carbon dioxide from the air and water from the soil, and using chlorophyll to capture sunlight, they produce glucose and oxygen. The overall equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. This process is essential for life on Earth as it produces the oxygen we breathe and forms the base of most food chains.',
      
      'quantum computing': 'Quantum computing is a revolutionary approach to computation that harnesses the principles of quantum mechanics. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or "qubits" that can exist in multiple states simultaneously through superposition. This allows quantum computers to process vast amounts of information in parallel. Key concepts include: 1) Superposition - qubits can be in multiple states at once, 2) Entanglement - qubits can be correlated in ways that classical physics cannot explain, and 3) Quantum interference - allows quantum algorithms to amplify correct answers and cancel out wrong ones. While still in early stages, quantum computers could revolutionize fields like cryptography, drug discovery, and optimization problems.',
      
      'neural networks': 'Neural networks learn through a process inspired by how the human brain works. They consist of interconnected nodes (neurons) organized in layers. Learning happens through these key steps: 1) Forward Propagation - input data flows through the network, with each neuron applying weights and activation functions, 2) Loss Calculation - the network\'s output is compared to the desired output to measure error, 3) Backpropagation - the error is propagated backward through the network to determine how much each weight contributed to the error, 4) Weight Updates - weights are adjusted using optimization algorithms like gradient descent to minimize error. This process repeats thousands of times with training data until the network can accurately recognize patterns and make predictions on new, unseen data.',
      
      'organic chemistry': 'Organic chemistry is the study of carbon-containing compounds and their properties, reactions, and synthesis. Key principles include: 1) Carbon\'s unique ability to form four covalent bonds, creating diverse molecular structures, 2) Functional groups - specific arrangements of atoms that determine chemical behavior (like alcohols, aldehydes, carboxylic acids), 3) Structural isomerism - compounds with the same molecular formula but different arrangements, 4) Stereochemistry - the 3D arrangement of atoms affects molecular properties, 5) Reaction mechanisms - step-by-step processes showing how bonds break and form during reactions. Understanding these principles helps explain the behavior of biological molecules, pharmaceuticals, polymers, and many other important compounds in our daily lives.',
      
      'math': 'To solve the equation 2x + 5 = 15: Step 1: Subtract 5 from both sides: 2x + 5 - 5 = 15 - 5, which gives us 2x = 10. Step 2: Divide both sides by 2: 2x/2 = 10/2, which gives us x = 5. Let\'s verify: 2(5) + 5 = 10 + 5 = 15 ✓. Therefore, x = 5 is the solution to the equation.'
    };

    // Find the most relevant response
    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key) || lowerQuestion.includes(key.split(' ')[0])) {
        return response;
      }
    }

    // Default response for other questions
    return `Thank you for your question: "${question}". While I'm currently running in demo mode, in a full deployment I would use advanced AI models like FLAN-T5 to provide detailed, educational answers on any topic. The AI would analyze your question, understand the context, and generate a comprehensive explanation tailored to help you learn. This demonstrates the power of decentralized AI education on the Internet Computer blockchain!`;
  }

  isModelLoaded() {
    return this.isReady;
  }

  isModelLoading() {
    return false;
  }
}

// Create a singleton instance
const mockAiService = new MockAIService();

export default mockAiService;