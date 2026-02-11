import React from "react";

const AboutAiModels = () => {
  return (
    <section className="mt-18 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-header mb-6 text-shadow-md">
          About AI Models
        </h2>
        {/* Intro */}
        <p className="text-gray-500 sm:text-lg md:text-xl hover:text-gray-600 leading-relaxed mb-8">
          AI models are the core building blocks of modern artificial
          intelligence systems. They are mathematical and computational
          structures that learn patterns from data and make intelligent
          decisions without being explicitly programmed. By analyzing large
          datasets, AI models can predict outcomes, recognize patterns, and
          continuously improve their performance over time.
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left mt-10">
          {/* Neural Networks */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Neural Networks
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Most AI models are based on neural networks, which are inspired by
              the way the human brain works. These networks consist of multiple
              layers of neurons that process and transform data step by step.
              Neural networks enable AI systems to understand complex
              information such as natural language, images, audio signals, and
              numerical data with high accuracy.
            </p>
          </div>
          {/* Use Cases */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Real-World Use Cases
            </h3>
            <p className="text-gray-500 leading-relaxed">
              AI models are widely used in real-world applications such as
              chatbots, virtual assistants, image and facial recognition,
              recommendation systems, speech-to-text services, and fraud
              detection. These models help businesses automate tasks, enhance
              user experiences, and make smarter data-driven decisions.
            </p>
          </div>
        </div>
        {/* Importance */}
        <div className="mt-12 bg-base-100 p-8 rounded-2xl shadow-md hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Why AI Models Matter
          </h3>
          <p className="text-gray-600 leading-relaxed">
            In machine learning, AI models play a vital role in transforming raw
            data into meaningful insights and intelligent decisions. They allow
            systems to learn from data, recognize patterns, and make predictions
            with minimal human intervention. As data continues to grow, AI
            models help process complex information efficiently and at scale. AI
            models are widely used across industries such as healthcare,
            finance, education, e-commerce, and manufacturing to improve
            accuracy, automate processes, and enhance decision-making. From
            chatbots and recommendation systems to image recognition and fraud
            detection, AI models are shaping the future of modern technology and
            intelligent automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAiModels;
