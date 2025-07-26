import { pipeline } from '@xenova/transformers';

class AIService {
  constructor() {
    this.pipeline = null;
    this.isLoading = false;
  }

  async initialize() {
    if (this.pipeline || this.isLoading) return;
    
    try {
      this.isLoading = true;
      console.log('Initializing AI model...');
      
      // Initialize the text-to-text generation pipeline with FLAN-T5-small
      this.pipeline = await pipeline(
        'text2text-generation',
        'Xenova/flan-t5-small',
        { 
          quantized: true,  // Use quantized model for better performance
          revision: 'main'
        }
      );
      
      console.log('AI model initialized successfully');
    } catch (error) {
      console.error('Failed to initialize AI model:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  async generateAnswer(question) {
    if (!this.pipeline) {
      await this.initialize();
    }

    if (!this.pipeline) {
      throw new Error('AI model not available');
    }

    try {
      // Format the question for better instruction following
      const prompt = `Answer this question in a clear and educational way: ${question}`;
      
      const result = await this.pipeline(prompt, {
        max_length: 512,
        temperature: 0.7,
        do_sample: true,
        num_beams: 3,
      });

      return result[0]?.generated_text || 'I was unable to generate an answer. Please try rephrasing your question.';
    } catch (error) {
      console.error('Error generating answer:', error);
      throw new Error('Failed to generate answer. Please try again.');
    }
  }

  async generateExplanation(topic) {
    if (!this.pipeline) {
      await this.initialize();
    }

    if (!this.pipeline) {
      throw new Error('AI model not available');
    }

    try {
      const prompt = `Explain the concept of ${topic} in simple terms with examples:`;
      
      const result = await this.pipeline(prompt, {
        max_length: 512,
        temperature: 0.6,
        do_sample: true,
        num_beams: 3,
      });

      return result[0]?.generated_text || 'I was unable to generate an explanation. Please try again.';
    } catch (error) {
      console.error('Error generating explanation:', error);
      throw new Error('Failed to generate explanation. Please try again.');
    }
  }

  isModelLoaded() {
    return !!this.pipeline;
  }

  isModelLoading() {
    return this.isLoading;
  }
}

// Create a singleton instance
const aiService = new AIService();

export default aiService;