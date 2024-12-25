import React from 'react';
import { ArrowRight, Sparkles, Brain, Share2, Star, Video } from 'lucide-react';
import { Button } from '../components/Button';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Create Compelling Content with AI
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Transform your content creation process with AI-powered tools that help you write better, faster, and more effectively.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="AI Content Creation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern Content Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Ad Copy</h3>
              <p className="text-gray-600">
                Generate compelling ad copy that converts, powered by advanced AI algorithms.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Long-form Content</h3>
              <p className="text-gray-600">
                Create in-depth articles and blog posts that engage your audience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600">
                Generate engaging social posts with optimized hashtag suggestions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">YouTube Content</h3>
              <p className="text-gray-600">
                Get AI-powered video ideas and scripts based on your channel's content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Content Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ContentForge AI has transformed how we create content. It's like having an entire content team at your fingertips."
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of content creators who are already using ContentForge AI.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="inline-flex items-center"
          >
            Start Your Free Trial <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}