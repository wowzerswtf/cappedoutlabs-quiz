"use client";

import { Play } from "lucide-react";

interface VSLEmbedProps {
  src?: string;
}

export function VSLEmbed({ src }: VSLEmbedProps) {
  if (src) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-lg">
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-navy grid-pattern flex items-center justify-center group cursor-pointer shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center group-hover:bg-electric/30 transition-colors">
          <Play className="h-6 w-6 text-electric ml-0.5" />
        </div>
        <p className="text-white/50 text-sm font-medium">
          VSL loads here — paste HeyGen URL
        </p>
      </div>
    </div>
  );
}
