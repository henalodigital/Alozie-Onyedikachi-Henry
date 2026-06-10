import React from 'react';
import { Target, Briefcase, Users } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Counter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  React.useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo function for smooth deceleration
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easePercentage));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const KeyAchievements: React.FC = () => {
  const achievements = [
    {
      title: "Projects Led",
      value: 12,
      suffix: "+",
      icon: Target,
      description: "Successfully delivered operational & digital projects"
    },
    {
      title: "Years of Experience",
      value: 7,
      suffix: "+",
      icon: Briefcase,
      description: "Professional background in sales, operations & tech"
    },
    {
      title: "Clients Served",
      value: 50,
      suffix: "+",
      icon: Users,
      description: "Including stakeholders, executives, and organizations"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-blue-400">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 pb-2 md:pb-0 px-4 group">
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-teal-400 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                    <Counter end={item.value} suffix={item.suffix} />
                  </h4>
                  <p className="text-lg font-bold uppercase tracking-wider text-blue-100 mb-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-blue-200">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default KeyAchievements;
