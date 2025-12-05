"use client";

import { Award, Users, Sparkles, Rocket, Plane } from 'lucide-react';

export default function CallForPapers() {
  const milestones = [
    {
      title: "Start of Paper Submission",
      date: "1 January 2026",
      color: "bg-blue-500"
    },
    {
      title: "Last Date for Submission",
      date: "25 May 2026",
      color: "bg-purple-500"
    },
    {
      title: "Notification of Acceptance",
      date: "30 August 2026",
      color: "bg-yellow-500"
    },
    {
      title: "Camera Ready + Registration",
      date: "25 September 2026",
      color: "bg-green-500"
    },
    {
      title: "Final Program",
      date: "15 October 2026",
      color: "bg-indigo-500"
    },
    {
      title: "Conference Dates",
      date: "5–7 November 2026",
      color: "bg-red-500"
    }
  ];

  const awards = [
    {
      icon: Award,
      title: "Best Research Paper Award",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-100"
    },
    {
      icon: Users,
      title: "Best Student Paper Award",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      icon: Sparkles,
      title: "Women Excellence Award",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-100"
    },
    {
      icon: Rocket,
      title: "Young Professional Award",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-100"
    },
    {
      icon: Plane,
      title: "Travel Grant for Students",
      color: "from-indigo-500 to-indigo-600",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-6 md:px-20 font-sans">
      
      {/* ------------------------- HERO TITLE ------------------------- */}
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-10">
        Call For Papers – ICMACC 2026
      </h1>

      {/* ------------------------- MAIN INTRO ------------------------- */}
      <section className="bg-white/80 border border-blue-200/40 shadow-md rounded-2xl p-6 md:p-10 mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
          The 3rd International Conference on Recent Trends in Microelectronics,
          Automation, Computing and Communications Systems (ICMACC-26) aims to bring 
          together leading academicians, researchers, and industry experts to share 
          insights on the latest technological advancements. The event will feature 
          keynote talks, invited sessions, paper and poster presentations, tutorials, 
          exhibitions, and panel discussions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          All accepted and presented papers will be submitted to IEEE for quality/scope
          check and publication in IEEE Xplore (Scopus Indexed). Best papers in each track 
          will receive conference awards.
        </p>
      </section>

      {/* ------------------------- PUBLISHED PAPERS & SUBMISSION GUIDELINES ------------------------- */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Published Papers */}
        <section className="bg-blue-50/70 border border-blue-300/40 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Published Papers – Previous Editions
          </h2>

          <ul className="list-disc ml-6 text-blue-700 font-medium space-y-2 mb-4">
            <li>
              <a href="https://ieeexplore.ieee.org/xpl/conhome/10093234/proceeding" target="_blank" className="underline hover:text-blue-800">
                ICMACC 2022 Proceedings
              </a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/xpl/conhome/10893871/proceeding" target="_blank" className="underline hover:text-blue-800">
                ICMACC 2024 Proceedings
              </a>
            </li>
          </ul>

          <p className="text-gray-700 mt-auto">
            IEEE Paper Template:{" "}
            <a href="https://www.ieee.org/conferences/publishing/templates.html"
               className="text-blue-600 underline hover:text-blue-800" target="_blank">
              Download Template →
            </a>
          </p>
        </section>

        {/* Submission Guidelines */}
        <section className="bg-orange-50/70 border border-orange-300/40 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col h-full">
          <h2 className="text-3xl font-bold text-orange-700 text-center mb-6">
            Submission Guidelines
          </h2>

          <p className="text-gray-700 mb-4">
            Prospective authors are requested to submit a full-length paper not exceeding 
            <strong> 5 pages</strong>. Extra charges apply for additional pages.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 flex-grow">
            <li>Paper must clearly state objectives, methodology, and significance.</li>
            <li>Use IEEE conference template (Word or LaTeX).</li>
            <li>Submit only via Microsoft CMT platform.</li>
            <li>Only one track must be selected for each submission.</li>
            <li>Double-Blind Review: Do not include author details.</li>
            <li>PDF size must be under 20 MB.</li>
            <li>Similarity Score <strong>must be below 30%</strong>.</li>
          </ul>

          <p className="mt-4 text-orange-700 font-medium">Non-compliance may lead to rejection.</p>
        </section>
      </div>

      {/* ------------------------- ADDITIONAL INSTRUCTIONS & IEEE POLICY ------------------------- */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Additional Instructions */}
        <section className="bg-white/80 border border-gray-300/30 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col h-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Additional Instructions
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>No page numbers or security settings in PDF.</li>
            <li>IEEE copyright form required after acceptance.</li>
            <li>Papers previously submitted elsewhere will be rejected.</li>
            <li>Papers with ≥60% similarity will be rejected outright.</li>
          </ul>
        </section>

        {/* Important IEEE Policy */}
        <section className="bg-blue-50/70 border border-blue-300/40 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Important IEEE Policy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Authors must present their accepted papers at the conference. IEEE reserves the 
            right to remove papers from Xplore if not presented. Authors should follow IEEE 
            publication ethics:
          </p>

          <a
            href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/"
            className="text-blue-600 underline hover:text-blue-800 mt-auto"
            target="_blank"
          >
            IEEE Ethics Guidelines →
          </a>
        </section>
      </div>

      {/* ------------------------- SUBMIT BUTTON ------------------------- */}
      <div className="text-center my-10">
        <a
          href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICMACC2026"
          target="_blank"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Submit Paper →
        </a>
      </div>

      {/* ------------------------- IMPORTANT DATES FLOWCHART ------------------------- */}
      <section className="bg-white/80 border border-gray-300/30 shadow-md rounded-2xl p-6 md:p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Important Dates
        </h2>

        <div className="max-w-5xl mx-auto space-y-0">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const bgColors = [
              'bg-orange-500',
              'bg-blue-400',
              'bg-blue-700',
              'bg-orange-600',
              'bg-blue-500',
              'bg-blue-800'
            ];
            
            return (
              <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-0`}>
                {/* Left/Right Text Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'text-right pr-0' : 'text-left pl-0'}`}>
                  <div className={`${bgColors[index]} text-white p-6 rounded-lg shadow-lg inline-block ${isEven ? 'rounded-r-none' : 'rounded-l-none'} min-w-full md:min-w-0`}>
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-sm opacity-90">{milestone.date}</p>
                  </div>
                </div>

                {/* Center Hexagon */}
                <div className="w-2/12 flex justify-center relative z-10">
                  <div className="relative">
                    {/* Hexagon shape using clip-path */}
                    <div className="bg-white border-4 border-gray-800 w-24 h-24 flex items-center justify-center relative"
                         style={{
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                         }}>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                    </div>
                    {/* Connecting line to next item */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-1/2 top-full w-1 h-8 bg-gray-400 -translate-x-1/2"></div>
                    )}
                  </div>
                </div>

                {/* Right/Left Empty Space for alternating layout */}
                <div className="w-5/12 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------- PAPER AWARDS ------------------------- */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 border border-orange-300/40 shadow-lg rounded-2xl p-8 md:p-12 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          Paper Awards
        </h2>
        
        <p className="text-center text-gray-700 mb-10 text-lg">
          ICMACC celebrates outstanding research through various award categories
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
                <div className={`${award.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-br ${award.color} bg-clip-text text-transparent`} style={{fill: 'url(#gradient)'}} />
                </div>
                <h3 className={`text-center text-lg font-bold bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                  {award.title}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="text-center text-orange-700 font-bold text-lg bg-orange-100 rounded-lg p-4 border-2 border-orange-300">
          *Only papers presented at the conference will be eligible for awards.*
        </p>
      </section>

    </div>
  );
}