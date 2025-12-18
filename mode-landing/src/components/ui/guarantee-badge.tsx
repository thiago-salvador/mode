import { Shield, Check } from "lucide-react";

interface GuaranteeBadgeProps {
  className?: string;
}

export function GuaranteeBadge({ className = "" }: GuaranteeBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full px-6 py-3 shadow-lg ${className}`}>
      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-sm font-bold text-gray-900">100% Delivery Guarantee</span>
        </div>
        <span className="text-xs text-gray-600">Money-back if we don&apos;t ship</span>
      </div>
    </div>
  );
}
