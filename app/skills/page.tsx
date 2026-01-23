import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills - Rushi Butani",
  description:
    "Explore my technical skills including HTML, CSS, JavaScript, React, and various frontend development tools.",
};

export default function Skills() {
  return (
    <Section>
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies and tools I work with"
      />

      <div className="max-w-5xl mx-auto">
        {/* Core Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.core.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-primary-200"
              >
                <p className="text-lg font-semibold text-primary-900">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Tools & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
              >
                <p className="text-lg font-semibold text-gray-800">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">What I Bring to the Table</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Strong foundation in web fundamentals (HTML, CSS, JavaScript)
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Expertise in building modern, responsive web applications with
                React.js
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Experience with modern CSS frameworks and preprocessors
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Version control proficiency with Git and GitHub</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Focus on performance optimization and SEO best practices
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
