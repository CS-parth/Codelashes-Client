import React, { useEffect, useState } from 'react'
import SolvePicture from '../../assets/images/Solve_Sandy.png'
import Banner from '../../assets/images/Yellow_banner.png'
import Failed from '../../assets/images/Failed_Sandy.png'
import Editorial from '../../assets/images/Editorial_Sandy.png'
import Contest from '../../assets/images/Contest_Sandy.png'
import Discuss from '../../assets/images/Discuss_Sandy.png'
import Blog from '../../assets/images/Blog.png'
import Algorithm from '../../assets/images/Algorithm_Sandy.png'
import { Paper, Title, Text, Divider, Container } from '@mantine/core';
import { AlertCircle, Clock } from 'lucide-react';

const Home = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const newsItems = [
      "Breaking: New Advanced Algorithm Challenge Released!",
      "Flash Update: New Feature, A Plagiarism Checker",
      "Platform Milestone: 100 Users Joined",
      "Hot News: Previous Contest Leader Score Breaks All Records"
    ];
  
    const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <div className="max-w-[1400px] mx-auto p-8 bg-amber-50 mt-20 mb-20 bg-[url('src/assets/images/Newspaper_Yellow.jpg')]">
      <div className="mb-4 border-y-2 border-amber-800 bg-amber-100/60">
        <div className="flex items-center">
          <div className="bg-amber-800 text-white px-4 py-2 flex items-center gap-2">
            <AlertCircle size={16} />
            <span className="font-bold text-sm">BREAKING</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap px-4 py-2">
            <div className="animate-marquee inline-flex">
              {duplicatedNews.map((item, index) => (
                <span key={index} className="font-serif text-sm mx-8 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs border-b-2 border-amber-800 mb-2 pb-1">
        <div className="flex items-center gap-2">
          <Clock size={12} />
          <span className="font-bold">DAILY EDITION</span>
        </div>
        <span className="font-serif italic">{currentDate}</span>
        <span className="font-mono">Vol. 127 • No. 365</span>
      </div>

      <div className="border-b-8 border-amber-800 mb-6">
        <h1 className="text-8xl font-serif text-center py-6 font-black tracking-tighter text-amber-900">
          The Codelashes Times
        </h1>
        <div className="text-center text-sm mb-4 italic font-serif">"Where Masters Meets Algorithms"</div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-2 gap-4 border-b-2 border-amber-800 pb-4">
            <div className="bg-amber-100/60 p-3">
              <h3 className="font-serif text-lg font-bold mb-2 border-b border-amber-800">TODAY'S HIGHLIGHT</h3>
              <p className="text-sm font-serif leading-snug">Platform introduces revolutionary editorial system, transforming how developers learn and improve.</p>
            </div>
            <div className="bg-amber-100/60 p-3">
              <h3 className="font-serif text-lg font-bold mb-2 border-b border-amber-800">EDITOR'S PICK</h3>
              <p className="text-lg font-serif leading-snug font-semibold">One day I will XOR with myself and get disappered !</p>
            </div>
          </div>

          <div className="bg-amber-100/60 p-6 border-l-4 border-amber-800">
            <h2 className="font-serif text-5xl mb-6 font-bold leading-tight text-amber-900">
              Codelashes Platform Revolutionizes Online Coding Education
            </h2>
            <div className="flex gap-6">
              <img src={SolvePicture} className="w-3/5" alt="Programming" />
              <div className="space-y-4">
                <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-amber-900">
                  In an unprecedented move to transform coding education, Codelashes 
                  launches an innovative platform combining rigorous problem-solving 
                  with real-time feedback mechanisms. The platform features a sophisticated
                  testing environment, ensuring developers can tackle challenges across
                  multiple difficulty levels.
                </p>
                <p className="font-serif text-base">
                  <span className="font-bold">Latest Updates:</span> The platform now includes 
                  advanced plagiarism checker for fair competition.
                </p>
                <div className="text-sm italic border-t border-amber-800 pt-2">Continued on Technology, Page 4</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t-2 border-amber-800 pt-4">
            <div className="bg-amber-100/60 p-4">
              <h3 className="font-serif text-xl font-bold mb-3">DEBUGGING INSIGHTS</h3>
              <img src={Failed} className="w-full mb-3" alt="Debug" />
              <p className="text-sm leading-relaxed">Advanced test case analysis reveals common coding pitfalls</p>
            </div>
            <div className="bg-amber-100/60 p-4">
              <h3 className="font-serif text-xl font-bold mb-3">EDITORIAL EXCELLENCE</h3>
              <img src={Editorial} className="w-full mb-3" alt="Editorial" />
              <p className="text-sm leading-relaxed">Expert solutions demystified with step-by-step analysis</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-100/60 p-4">
              <h3 className="font-serif text-xl font-bold mb-3">COMMUNITY PULSE</h3>
              <img src={Discuss} className="w-full mb-3" alt="Community" />
              <p className="text-sm leading-relaxed">Forum discussions shape platform's evolution</p>
            </div>
            <div className="bg-amber-100/60 p-4">
              <h3 className="font-serif text-xl font-bold mb-3">TECH INSIGHTS</h3>
              <img src={Algorithm} className="w-full mb-3" alt="Blog" />
              <p className="text-sm leading-relaxed">Breaking down complex algorithms into digestible concepts</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-amber-100/60 p-4 border-l-2 border-amber-800">
            <h2 className="font-serif text-2xl font-bold mb-3 pb-2 border-b border-amber-800">
              WEEKLY CONTEST
            </h2>
            <img src={Contest} className="w-full mb-3" alt="Contest" />
            <p className="text-sm mb-2 font-serif">Global rankings reshuffled as participants tackle new challenges</p>
            <div className="text-xs italic">Full coverage on Sports, Page 6</div>
          </div>

          <div className="bg-amber-100/60 p-4">
            <h3 className="font-serif text-lg font-bold mb-3">QUICK BYTES</h3>
            <div className="space-y-3 text-sm border-l border-amber-800 pl-3">
              <div className="pb-2 border-b border-amber-300">
                <strong className="text-amber-900">New Feature Alert:</strong> Newspaper UI added
              </div>
              <div className="pb-2 border-b border-amber-300">
                <strong className="text-amber-900">Coming Soon:</strong> Group based contests
              </div>
              <div className="pb-2">
                <strong className="text-amber-900">Achievement:</strong> 100 users milestone
              </div>
            </div>
          </div>

          <div className="bg-amber-100/60 p-4">
            <h3 className="font-serif text-lg font-bold mb-3">LEARNING CORNER</h3>
            <div className="space-y-2 text-sm font-serif">
              <p className="italic">"Segment Trees are not hard they are poetic"</p>
              <p className="italic">"Tabulation DP is faster than Recursive DP"</p>
            </div>
          </div>

          <div className="bg-amber-100/60 p-4">
            <h3 className="font-serif text-lg font-bold mb-3">UPCOMING EVENTS</h3>
            <ul className="text-sm space-y-2 list-disc pl-4">
              <li>Hackathon 2025 - Register Now</li>
              <li>Code Camp - Summer Edition</li>
            </ul>
          </div>
          <div className="bg-amber-100/60 p-4 border-t-4 border-amber-800">
          <h3 className="font-serif text-lg font-bold mb-2">PROBLEM OF THE DAY</h3>
          <div className="text-sm space-y-2">
            <p className="font-bold">Binary Tree Maximum Path Sum</p>
            <p className="italic text-xs">Difficulty: Hard</p>
            <p className="text-xs">Solved by 324 users today</p>
            <div className="mt-2 text-xs font-mono bg-amber-200/40 p-2">
              Top submission runtime: 42ms
            </div>
          </div>
        </div>

        <div className="bg-amber-100/60 p-4">
          <h3 className="font-serif text-lg font-bold mb-2">HALL OF FAME</h3>
          <div className="space-y-2 text-sm">
            <div className="border-l-2 border-amber-600 pl-2">
              <p className="font-bold">Weekly Champion</p>
              <p className="text-xs">@codeMaster2025</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-2">
              <p className="font-bold">Most Helpful User</p>
              <p className="text-xs">@debugHelper</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-100/60 p-4">
          <h3 className="font-serif text-lg font-bold mb-2">TIPS & TRICKS</h3>
          <ul className="text-xs space-y-2 list-none">
            <li className="border-b border-amber-300 pb-1">
              <span className="font-bold">Pro Tip:</span> Use custom test cases for edge scenarios
            </li>
            <li className="border-b border-amber-300 pb-1">
              <span className="font-bold">Quick Tip:</span> Keyboard shortcuts boost coding speed
            </li>
            <li>
              <span className="font-bold">Debug Tip:</span> Console logs are your best friends
            </li>
          </ul>
        </div>

        <div className="bg-amber-100/60 p-4 border-t-2 border-amber-800">
          <h3 className="font-serif text-lg font-bold mb-2">COMMUNITY PULSE</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between border-b border-amber-300 pb-1">
              <span>Active Users Today:</span>
              <span className="font-bold">1</span>
            </div>
            <div className="flex justify-between border-b border-amber-300 pb-1">
              <span>Problems Solved:</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between">
              <span>Discussion Posts:</span>
              <span className="font-bold">1</span>
            </div>
          </div>
        </div>

        <div className="bg-amber-200/40 p-4 border-2 border-dashed border-amber-800">
          <h3 className="font-serif text-base font-bold text-center mb-2">PREMIUM FEATURES</h3>
          <p className="text-xs text-center italic">Unlock advanced problem patterns and solutions!</p>
          <p className="text-xs text-center mt-2 font-bold">Learn More →</p>
        </div>
        </div>
      </div>

      <div className="mt-8 pt-2 border-t-2 border-amber-800 text-xs text-center font-serif">
        Page 1 of 8 • Technology Section • The Codelashes Times © 2025
      </div>
    </div>
  );
};

export default Home;