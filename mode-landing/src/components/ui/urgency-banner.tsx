"use client";

import { Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function UrgencyBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Calculate next sprint start date (next Monday, 2 weeks from now)
  const getNextSprintDate = () => {
    const today = new Date();
    const daysUntilMonday = (8 - today.getDay()) % 7 || 7;
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilMonday + 14);
    return nextMonday.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  };

  const slotsRemaining = 2; // This could be dynamic from a CMS or database
  const nextStartDate = getNextSprintDate();

  return (
    <div className="inline-flex items-center gap-4 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2.5 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
        <Users className="w-4 h-4 text-orange-600" />
        <span className="text-gray-700">
          <span className="font-bold text-orange-600">{slotsRemaining} sprint slots</span> left this month
        </span>
      </div>
      <div className="w-px h-4 bg-orange-200" />
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-orange-600" />
        <span className="text-gray-700">
          Next start: <span className="font-bold text-gray-900">{nextStartDate}</span>
        </span>
      </div>
    </div>
  );
}
