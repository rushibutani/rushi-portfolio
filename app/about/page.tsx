import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { personalInfo, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me - Rushi Butani",
  description:
    "Learn more about Rushi Butani, a Frontend Developer specializing in React.js and modern web technologies.",
};

export default function About() {
  return (
    <>
      {/* About Section */}
      <Section>
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              With a strong foundation in frontend technologies and a passion
              for creating exceptional user experiences, I've worked on various
              projects ranging from responsive websites to complex web
              applications. I believe in writing clean, maintainable code and
              staying up-to-date with the latest web development trends.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              My approach to development is centered around understanding user
              needs and translating them into intuitive, performant interfaces.
              I'm constantly learning and exploring new technologies to enhance
              my skill set and deliver better solutions.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-700">{personalInfo.location}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Work Status
              </h3>
              <p className="text-gray-700">{personalInfo.availability}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-gray-50">
        <SectionTitle title="Education & Certifications" />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
