import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import aiService from '../services/mockAiService';

const Ask = () => {
  const { actor } = useAuth();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    // Initialize AI model on component mount
    const initializeModel = async () => {
      if (!aiService.isModelLoaded() && !aiService.isModelLoading()) {
        setModelLoading(true);
        try {
          await aiService.initialize();
        } catch (error) {
          setError('Failed to load AI model. Please refresh the page.');
        } finally {
          setModelLoading(false);
        }
      }
    };

    initializeModel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setError('');
    setAnswer('');

    try {
      // Generate AI answer
      const aiAnswer = await aiService.generateAnswer(question.trim());
      setAnswer(aiAnswer);

      // Save to blockchain
      if (actor) {
        try {
          await actor.save_qa(question.trim(), aiAnswer);
          console.log('Q&A saved to blockchain');
        } catch (saveError) {
          console.error('Failed to save to blockchain:', saveError);
          // Don't show error to user as the AI answer was generated successfully
        }
      }

      // Add to local history
      const newQA = {
        question: question.trim(),
        answer: aiAnswer,
        timestamp: Date.now()
      };
      setHistory(prev => [newQA, ...prev]);

      // Clear the question
      setQuestion('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to generate answer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What is photosynthesis and how does it work?",
    "Explain quantum computing in simple terms",
    "How do neural networks learn?",
    "What are the principles of organic chemistry?",
    "Solve this math problem: 2x + 5 = 15"
  ];

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ask Your AI Tutor
        </h1>
        <p className="text-xl text-gray-600">
          Get instant, intelligent answers to any question
        </p>
      </div>

      {/* Model Loading Status */}
      {modelLoading && (
        <div className="card mb-6 bg-blue-50 border-blue-200">
          <div className="flex items-center">
            <div className="loading-spinner mr-3"></div>
            <div>
              <h3 className="font-semibold text-blue-900">Loading AI Model</h3>
              <p className="text-blue-700 text-sm">
                Please wait while we load the AI model. This may take a few moments...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Question Form */}
      <div className="card mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
              Your Question
            </label>
            <textarea
              ref={textareaRef}
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="input-field min-h-[120px] resize-none"
              placeholder="Ask anything you want to learn about..."
              disabled={isLoading || modelLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!question.trim() || isLoading || modelLoading}
            className="btn-primary w-full"
          >
            {isLoading ? (
              <>
                <div className="loading-spinner mr-2"></div>
                Generating Answer...
              </>
            ) : (
              'Get Answer'
            )}
          </button>
        </form>
      </div>

      {/* Suggested Questions */}
      {!modelLoading && !answer && (
        <div className="card mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Try These Sample Questions
          </h3>
          <div className="space-y-2">
            {suggestedQuestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                disabled={isLoading}
              >
                <span className="text-gray-700">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Answer Display */}
      {answer && (
        <div className="card mb-8 animate-fade-in">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Tutor Response</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{answer}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent History */}
      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Questions</h2>
          <div className="space-y-4">
            {history.slice(0, 3).map((qa, index) => (
              <div key={index} className="card animate-slide-up">
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Q: {qa.question}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{qa.answer}</p>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(qa.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ask;