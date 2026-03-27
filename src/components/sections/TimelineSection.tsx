import React from 'react';
import { Section, SectionTitle, Card } from '../ui';
import { TIMELINE } from '../../constants';

export const TimelineSection: React.FC = () => {
  return (
    <Section id="timeline" bgColor="darker">
      <SectionTitle
        title="Mi Trayectoria"
        subtitle="Mi experiencia profesional y desarrollo como desarrollador."
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative pl-6 border-l-2 border-indigo-800/50">
          {TIMELINE.map((item, index) => (
            <div key={item.id} className="mb-10 timeline-item animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Timeline dot */}
              <div className="absolute -left-4 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-[#0a0a15] shadow-lg" />

              {/* Content */}
              <Card variant="gradient" className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-xl text-white">{item.title}</h4>
                    <p className="text-indigo-300 font-medium">{item.company}</p>
                  </div>
                  <span className="text-indigo-300 font-medium whitespace-nowrap md:text-right text-sm">
                    {item.period}
                  </span>
                </div>
                <p className="text-indigo-200/80 leading-relaxed">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
