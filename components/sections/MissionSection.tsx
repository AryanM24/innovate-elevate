"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "lucide-react";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", title: "Young Innovators" },
  { value: 150, suffix: "+", title: "Projects Launched" },
  { value: 50, suffix: "M", prefix: "$", title: "In Funding Secured" },
  { value: 25, suffix: "+", title: "Partner Organizations" },
];

const MissionSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects - matching Programs section */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container relative px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission Statement Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                <span className="text-sm font-semibold">Our Purpose</span>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Empowering the Next Generation of{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">
                    Innovators
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h2>
            </div>

            <ScrollArea className="h-[200px] rounded-xl border border-border/50 p-6">
              <div className="space-y-4 pr-4">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our mission is to empower the next generation by providing resources, 
                  mentorship, and support to transform innovative ideas into reality.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We foster creativity, entrepreneurial thinking, and build a community 
                  of young leaders who will shape tomorrow's innovations.
                </p>
              </div>
            </ScrollArea>
          </motion.div>

          {/* Stats Grid Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-background border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
              >
                <div className="space-y-3">
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                        useEasing={true}
                      />
                    )}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {stat.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;