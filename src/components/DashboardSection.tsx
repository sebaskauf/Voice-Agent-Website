'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type TimeRange = '7' | '30';
type MetricType = 'calls' | 'appointments' | 'timeSaved' | 'avgDuration' | 'costSaved';

// Mock data for different time ranges - realistic with Sunday patterns (low activity)
const mockData = {
  '7': {
    // Mo, Di, Mi, Do, Fr, Sa, So
    calls: { value: 247, trend: '+12%', data: [38, 42, 45, 41, 48, 35, 18] },
    appointments: { value: 89, trend: '+8%', data: [14, 15, 16, 15, 17, 13, 6] },
    timeSaved: { value: 342, trend: '+15%', data: [52, 58, 61, 56, 65, 48, 25] },
    avgDuration: { value: 3.8, trend: '+5%', data: [3.9, 4.0, 4.2, 4.0, 4.3, 3.7, 3.2] },
    costSaved: { value: 3240, trend: '+18%', data: [510, 560, 590, 540, 620, 470, 280] },
  },
  '30': {
    calls: {
      value: 1156,
      trend: '+24%',
      // Day 7, 14, 21, 28 = Sonntag (lowest values)
      data: [35, 42, 38, 45, 48, 41, 22, 52, 45, 48, 55, 47, 42, 25, 60, 52, 58, 63, 55, 48, 28, 65, 58, 68, 72, 61, 54, 30, 65, 70]
    },
    appointments: {
      value: 412,
      trend: '+19%',
      data: [12, 16, 14, 17, 18, 15, 8, 19, 16, 18, 20, 17, 14, 9, 22, 19, 21, 23, 20, 17, 10, 24, 21, 25, 26, 22, 19, 11, 24, 25]
    },
    timeSaved: {
      value: 1580,
      trend: '+28%',
      data: [48, 58, 52, 62, 65, 56, 30, 70, 62, 65, 75, 65, 58, 35, 82, 72, 78, 85, 75, 65, 38, 88, 78, 92, 96, 82, 74, 42, 88, 95]
    },
    avgDuration: {
      value: 4.2,
      trend: '+12%',
      data: [3.6, 3.9, 3.7, 4.0, 4.1, 3.8, 3.2, 4.2, 3.9, 4.0, 4.3, 4.0, 3.7, 3.3, 4.4, 4.1, 4.2, 4.5, 4.2, 3.9, 3.4, 4.6, 4.3, 4.7, 4.8, 4.4, 4.1, 3.5, 4.5, 4.6]
    },
    costSaved: {
      value: 14850,
      trend: '+32%',
      data: [480, 580, 520, 620, 650, 560, 320, 700, 620, 650, 750, 650, 580, 380, 820, 720, 780, 850, 750, 650, 420, 880, 780, 920, 960, 820, 740, 450, 880, 950]
    },
  },
};

export default function DashboardSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [timeRange, setTimeRange] = useState<TimeRange>('7');
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('calls');
  const [animatedValues, setAnimatedValues] = useState({
    calls: 0,
    appointments: 0,
    timeSaved: 0,
    avgDuration: 0,
    costSaved: 0,
  });

  // Animate numbers when time range changes - optimized for smooth performance
  useEffect(() => {
    const duration = 800; // Slightly faster for snappier feel
    const startTime = performance.now(); // More precise timing

    const targets = {
      calls: mockData[timeRange].calls.value,
      appointments: mockData[timeRange].appointments.value,
      timeSaved: mockData[timeRange].timeSaved.value,
      avgDuration: mockData[timeRange].avgDuration.value,
      costSaved: mockData[timeRange].costSaved.value,
    };

    const startValues = { ...animatedValues };
    let rafId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smoother easing function
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);

      setAnimatedValues({
        calls: Math.floor(startValues.calls + (targets.calls - startValues.calls) * easedProgress),
        appointments: Math.floor(startValues.appointments + (targets.appointments - startValues.appointments) * easedProgress),
        timeSaved: Math.floor(startValues.timeSaved + (targets.timeSaved - startValues.timeSaved) * easedProgress),
        avgDuration: parseFloat((startValues.avgDuration + (targets.avgDuration - startValues.avgDuration) * easedProgress).toFixed(1)),
        costSaved: Math.floor(startValues.costSaved + (targets.costSaved - startValues.costSaved) * easedProgress),
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setAnimatedValues(targets);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [timeRange]);

  // Get current graph data based on selected metric and time range
  const currentGraphData = mockData[timeRange][selectedMetric].data;
  const maxValue = Math.max(...currentGraphData);
  const minValue = Math.min(...currentGraphData);

  // Calculate bar height in pixels for better visibility
  const maxHeightPx = 160; // Desktop container height (h-40 = 160px)
  const minHeightPx = 40;  // Minimum visible height
  const maxHeightMobile = 80; // Mobile max height (h-24 = 96px, leave some space)
  const minHeightMobile = 20; // Mobile min height

  const getBarHeight = (value: number, isMobile: boolean = false) => {
    const range = maxValue - minValue;
    const maxH = isMobile ? maxHeightMobile : maxHeightPx;
    const minH = isMobile ? minHeightMobile : minHeightPx;

    if (range === 0) return maxH; // If all values are the same

    const heightRange = maxH - minH;
    const normalizedValue = (value - minValue) / range;
    return minH + (normalizedValue * heightRange);
  };

  const metrics = [
    {
      id: 'calls' as MetricType,
      title: 'Angenommene Anrufe',
      value: animatedValues.calls,
      unit: '',
      trend: mockData[timeRange].calls.trend,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: 'appointments' as MetricType,
      title: 'Gebuchte Termine',
      value: animatedValues.appointments,
      unit: '',
      trend: mockData[timeRange].appointments.trend,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'timeSaved' as MetricType,
      title: 'Gesparte Zeit',
      value: animatedValues.timeSaved,
      unit: ' Min',
      trend: mockData[timeRange].timeSaved.trend,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'avgDuration' as MetricType,
      title: 'Ø Gesprächsdauer',
      value: animatedValues.avgDuration,
      unit: ' Min',
      trend: mockData[timeRange].avgDuration.trend,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'costSaved' as MetricType,
      title: 'Eingesparte Kosten',
      value: animatedValues.costSaved,
      unit: ' €',
      trend: mockData[timeRange].costSaved.trend,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Get labels for x-axis based on time range
  const getLabels = () => {
    if (timeRange === '7') {
      return ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    } else {
      return Array.from({ length: 30 }, (_, i) => `${i + 1}`);
    }
  };

  const labels = getLabels();

  // Get metric title for graph
  const getMetricTitle = () => {
    const metric = metrics.find(m => m.id === selectedMetric);
    return metric?.title || '';
  };

  return (
    <section id="dashboard" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Smooth gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bgDark/80 via-bgDark/40 to-transparent pointer-events-none"></div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bgDark/80 via-bgDark/40 to-transparent pointer-events-none"></div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto relative z-10 scroll-animate ${isVisible ? 'scroll-animate-visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg leading-tight">
                Volle{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Transparenz
                </span>
                {' '}in Echtzeit
              </h2>
              <p className="text-lg sm:text-xl text-fg/70 leading-relaxed">
                Sehen Sie genau, wie viel Zeit und Geld Ihr KI-Agent spart
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-1">Alle Metriken auf einen Blick</h3>
                  <p className="text-fg/60">Anrufe, Termine, Zeitersparnis und ROI - alles in Echtzeit</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-1">ROI in Euro messbar</h3>
                  <p className="text-fg/60">Sehen Sie genau, wie viel Geld Sie durch Automatisierung sparen</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-fg mb-1">Kontinuierliche Optimierung</h3>
                  <p className="text-fg/60">Nutzen Sie Daten und Trends für bessere Ergebnisse</p>
                </div>
              </div>
            </div>

            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-bgDark font-sora font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out text-base sm:text-lg shadow-lg shadow-primary/20 relative overflow-hidden w-full sm:w-auto min-h-[48px]"
            >
              <span className="relative z-10">Dashboard Demo ansehen</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            {/* Dashboard Container */}
            <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-4 sm:p-6 md:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-fg">Dashboard Übersicht</h3>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setTimeRange('7')}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      timeRange === '7'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-white/[0.03] text-fg/60 hover:bg-white/[0.06]'
                    }`}
                  >
                    7 Tage
                  </button>
                  <button
                    onClick={() => setTimeRange('30')}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      timeRange === '30'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-white/[0.03] text-fg/60 hover:bg-white/[0.06]'
                    }`}
                  >
                    30 Tage
                  </button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedMetric(metric.id)}
                    className={`bg-white/[0.02] rounded-xl border p-3 sm:p-4 cursor-pointer transition-colors ${
                      selectedMetric === metric.id
                        ? 'border-primary/50 bg-white/[0.06]'
                        : 'border-white/[0.05] hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="text-primary scale-75 sm:scale-100">
                        {metric.icon}
                      </div>
                      <span className="text-xs text-green-400 font-semibold flex items-center gap-0.5 sm:gap-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        {metric.trend}
                      </span>
                    </div>
                    <p className="text-xs text-fg/60 mb-1 sm:mb-2">{metric.title}</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-fg">
                      {metric.value}{metric.unit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dynamic Graph */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.05] p-3 sm:p-4 md:p-6">
                <h4 className="text-xs sm:text-sm text-fg/60 mb-6 sm:mb-4">
                  {getMetricTitle()} - Letzte {timeRange} Tage
                </h4>
                <div className="relative h-24 sm:h-40 mb-10 sm:mb-8">
                  <div className="absolute inset-0 flex items-end justify-between gap-1">
                    {currentGraphData.map((value, index) => {
                      const displayValue = selectedMetric === 'avgDuration'
                        ? value.toFixed(1)
                        : selectedMetric === 'costSaved'
                        ? `${Math.round(value)}€`
                        : Math.round(value);

                      // Calculate height for both mobile and desktop
                      const barHeightDesktop = getBarHeight(value, false);
                      const barHeightMobile = getBarHeight(value, true);

                      return (
                        <div
                          key={index}
                          className="flex-1 flex flex-col items-center gap-2"
                          style={{
                            maxWidth: timeRange === '30' ? '24px' : '48px',
                            minWidth: timeRange === '30' ? '8px' : '12px'
                          }}
                        >
                          <div
                            className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg relative group sm:hidden"
                            style={{
                              height: `${barHeightMobile}px`,
                              transition: 'height 0.4s ease-out',
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-bgDark/95 px-2 py-1 rounded text-xs text-primary font-semibold whitespace-nowrap z-20 pointer-events-none shadow-lg border border-primary/20">
                              {displayValue}
                            </div>
                          </div>
                          <div
                            className="hidden sm:block w-full bg-gradient-to-t from-primary to-accent rounded-t-lg relative group"
                            style={{
                              height: `${barHeightDesktop}px`,
                              transition: 'height 0.4s ease-out',
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-bgDark/95 px-2 py-1 rounded text-xs text-primary font-semibold whitespace-nowrap z-20 pointer-events-none shadow-lg border border-primary/20">
                              {displayValue}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Labels below bars */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between gap-1">
                    {currentGraphData.map((_, index) => (
                      <div
                        key={`label-${index}`}
                        className="flex-1 text-center"
                        style={{
                          maxWidth: timeRange === '30' ? '24px' : '48px',
                          minWidth: timeRange === '30' ? '8px' : '12px'
                        }}
                      >
                        {(timeRange === '7' || (timeRange === '30' && index % 5 === 0)) && (
                          <span className="text-xs text-fg/40">
                            {labels[index]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
