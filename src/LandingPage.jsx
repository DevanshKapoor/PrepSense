import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Brain, Target, CheckCircle, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-steel-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-steel-blue" />
              <span className="text-2xl font-bold text-white">PrepSense.AI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-steel-blue transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-steel-blue transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-steel-blue transition-colors">Pricing</a>
            </nav>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button onClick={() => navigate('/dashboard')} 
              className="bg-steel-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Master Your
                <span className="text-steel-blue block">Interview Skills</span>
                with AI
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Practice with our AI interviewer, get real-time feedback on your performance, 
                and land your dream job with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-steel-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
                  <Play className="mr-2 h-5 w-5" />
                  Start Practice Interview
                </button>
                <button className="border border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Interview Setup Panel */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-steel-blue/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Interview Setup</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Select Company</label>
                  <select 
                    className="w-full bg-slate-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                  >
                    <option value="">Choose a company...</option>
                    <option value="google">Google</option>
                    <option value="microsoft">Microsoft</option>
                    <option value="amazon">Amazon</option>
                    <option value="meta">Meta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty Level</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          difficulty === level
                            ? 'bg-steel-blue text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Upload Resume</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-steel-blue transition-colors cursor-pointer">
                    <div className="text-gray-400">
                      <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p>Drop your resume here or click to browse</p>
                      <p className="text-sm">PDF, DOC up to 10MB</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-steel-blue hover:bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
                  Start AI Interview
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Interview Analysis</h2>
            <p className="text-xl text-gray-300">Get comprehensive feedback on every aspect of your performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Eye Contact Analysis",
                description: "AI tracks your eye contact patterns and provides feedback on maintaining professional engagement"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Professional Appearance",
                description: "Get insights on your dress code, posture, and overall professional presentation"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Speech Analysis",
                description: "Advanced AI analyzes your speech patterns, pace, clarity, and confidence levels"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-steel-blue/30 rounded-xl p-8 text-center">
                <div className="text-steel-blue mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
