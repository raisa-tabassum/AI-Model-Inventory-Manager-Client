import React from "react";
import { Link } from "react-router";

const GetStarted = () => {
  return (
    <section className="mt-20 px-4">
      <div className="bg-gradient-to-r from-[#105e63] to-[#188f97] rounded-3xl px-10 py-14 text-center text-white shadow-2xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get Started with AI Model Management
        </h2>
        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Register or log in to start managing, organizing, and exploring
          powerful AI models. Track model details , use cases, and frameworks
          etc. all in one place.
        </p>
        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link className="btn bg-white text-primary font-semibold px-8 hover:bg-gray-200">
            Get Started
          </Link>
          <Link
            // to={'/login'}
            className="btn btn-outline border-white text-white px-8 hover:bg-white hover:text-primary"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
