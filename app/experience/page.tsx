import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience - Rushi Butani",
  description:
    "Explore my professional experience as a Frontend Developer, including roles at Bankai Informatics and h-Case.",
};

export default function Experience() {
  return (
    <Section>
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and key accomplishments"
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {job.role}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold mb-1">
                    {job.company}
                  </p>
                  <p className="text-gray-600">{job.location}</p>
                </div>
                <div className="mt-3 sm:mt-0 sm:text-right">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {job.duration}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
