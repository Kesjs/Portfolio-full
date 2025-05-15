"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  viewport?: {
    once?: boolean;
  };
}

export const motion = {
  div: ({ 
    className, 
    initial, 
    animate, 
    transition,
    viewport,
    children, 
    ...props 
  }: MotionProps) => {
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref.current || !animate) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsInView(false);
          }
        },
        {
          threshold: 0.1,
        }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [animate, viewport]);

    const style = React.useMemo(() => {
      if (!initial || !animate) return {};

      const duration = transition?.duration || 0.3;
      const delay = transition?.delay || 0;
      const ease = transition?.ease || "ease";

      const getTransformValue = () => {
        const transforms = [];
        
        if (initial?.y !== undefined && animate?.y !== undefined) {
          transforms.push(`translateY(${isInView ? animate.y : initial.y}px)`);
        }
        
        if (initial?.x !== undefined && animate?.x !== undefined) {
          transforms.push(`translateX(${isInView ? animate.x : initial.x}px)`);
        }
        
        if (initial?.scale !== undefined && animate?.scale !== undefined) {
          transforms.push(`scale(${isInView ? animate.scale : initial.scale})`);
        }
        
        return transforms.join(' ');
      };

      return {
        opacity: isInView 
          ? animate.opacity !== undefined ? animate.opacity : 1 
          : initial.opacity !== undefined ? initial.opacity : 0,
        transform: getTransformValue(),
        transition: `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`,
      };
    }, [initial, animate, isInView, transition]);

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  },
};