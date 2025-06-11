import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, Eye, Mic, Users, Calendar, Play } from 'lucide-react';

const Dashboard = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const strengthsData = [
    { skill: 'Communication', score: 85 },
    { skill: 'Technical Knowledge', score: 78 },
    { skill: 'Problem Solving', score: 92 },
    { skill: 'Confidence', score: 76 },
    { skill: 'Eye Contact', score: 88 },
    { skill: 'Professional Appearance', score: 95 }
  ];

  const recentInterviews = [
    {
      id: 1,
      company: 'Google',
      role: 'Software Engineer',
      date: '2024-06-10',
      score: 85,
      duration: '45 min',
      status: 'completed'
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Product Manager',
      date: '2024-06-08',
      score: 78,
      duration: '38 min',
      status: 'completed'
    },
    {
      id: 3,
      company: 'Amazon',
      role: 'Data Scientist',
      date: '2024-06-05',
      score: 92,
      duration: '52 min',
      status: 'completed'
    }
  ];

  const weakAreas = [
    { area: 'Speaking Pace', improvement: 'Slow down by 15%', priority: 'high' },
    { area: 'Hand Gestures', improvement: 'Use more purposeful gestures', priority: 'medium' },
    { area: 'Technical Depth', improvement: 'Provide more detailed examples', priority: 'high' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-steel-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-steel-blue" />
              <span className="text-2xl font-bold text-white">PrepSense.AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-steel-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                <Play className="inline mr-2 h-4 w-4" />
                New Interview
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Interviews', value: '24', change: '+12%', icon: <Users className="h-6 w-6" /> },
            { label: 'Average Score', value: '85', change: '+8%', icon: <TrendingUp className="h-6 w-6" /> },
            { label: 'This Month', value: '8', change: '+25%', icon: <Calendar className="h-6 w-6" /> },
            { label: 'Improvement', value: '15%', change: '+3%', icon: <TrendingUp className="h-6 w-6" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-slate-800 border border-steel-blue/30 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-green-400 text-sm">{stat.change}</p>
                </div>
                <div className="text-steel-blue">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Strengths & Weaknesses */}
          <div className="lg:col-span-2 space-y-8">
            {/* Strengths Radar Chart */}
            <div className="bg-slate-800 border border-steel-blue/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Performance Analysis</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={strengthsData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#4682B4"
                      fill="#4682B4"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Weak Areas */}
            <div className="bg-slate-800 border border-steel-blue/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Areas for Improvement</h3>
              <div className="space-y-4">
                {weakAreas.map((area, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{area.area}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        area.priority === 'high' 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {area.priority} priority
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{area.improvement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Interviews */}
          <div className="bg-slate-800 border border-steel-blue/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Recent Interviews</h3>
            <div className="space-y-4">
              {recentInterviews.map((interview) => (
                <div 
                  key={interview.id}
                  className="bg-slate-700/50 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                  onClick={() => setSelectedInterview(interview)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{interview.company}</h4>
                      <p className="text-sm text-gray-400">{interview.role}</p>
                    </div>
                    <span className="text-steel-blue font-bold">{interview.score}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{interview.date}</span>
                    <span>{interview.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Feedback Modal */}
        {selectedInterview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-steel-blue/30 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  {selectedInterview.company} - {selectedInterview.role}
                </h3>
                <button 
                  onClick={() => setSelectedInterview(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Eye className="h-8 w-8 text-steel-blue mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Eye Contact</p>
                    <p className="text-xl font-bold text-white">88%</p>
                  </div>
                  <div className="text-center">
                    <Mic className="h-8 w-8 text-steel-blue mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Speech Quality</p>
                    <p className="text-xl font-bold text-white">82%</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-steel-blue mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Professionalism</p>
                    <p className="text-xl font-bold text-white">95%</p>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3">AI Feedback</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>✅ Excellent technical knowledge demonstration</p>
                    <p>✅ Professional appearance and posture</p>
                    <p>⚠️ Consider slowing down speech pace for better clarity</p>
                    <p>⚠️ Increase eye contact during technical explanations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
