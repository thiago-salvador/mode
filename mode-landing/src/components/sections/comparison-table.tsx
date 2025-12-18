"use client";

import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

interface ComparisonRow {
  feature: string;
  mode: string | boolean;
  upwork: string | boolean;
  agency: string | boolean;
  inHouse: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Time to Launch",
    mode: "2 weeks",
    upwork: "3-6 months",
    agency: "4-8 months",
    inHouse: "6-12 months",
  },
  {
    feature: "Total Cost",
    mode: "€3,500 - €9,500",
    upwork: "€15k - €50k+",
    agency: "€50k - €200k+",
    inHouse: "€120k+/year",
  },
  {
    feature: "Pricing Model",
    mode: "Fixed price",
    upwork: "Hourly/Variable",
    agency: "Hourly/Retainer",
    inHouse: "Salary + Benefits",
  },
  {
    feature: "Full Code Ownership",
    mode: true,
    upwork: "Sometimes",
    agency: "Sometimes",
    inHouse: true,
  },
  {
    feature: "Modern AI Stack",
    mode: true,
    upwork: false,
    agency: "Varies",
    inHouse: "Depends on hire",
  },
  {
    feature: "MVP-Focused",
    mode: true,
    upwork: false,
    agency: false,
    inHouse: false,
  },
  {
    feature: "Quick Iterations",
    mode: true,
    upwork: "Communication delays",
    agency: "Slow processes",
    inHouse: true,
  },
  {
    feature: "Risk Level",
    mode: "Zero (guaranteed delivery)",
    upwork: "High",
    agency: "Medium-High",
    inHouse: "Very High",
  },
  {
    feature: "Product Strategy",
    mode: true,
    upwork: false,
    agency: "Extra cost",
    inHouse: "Need PM",
  },
  {
    feature: "Ongoing Support",
    mode: "Available",
    upwork: "Inconsistent",
    agency: "Extra cost",
    inHouse: true,
  },
];

export function ComparisonTable() {
  const renderCell = (value: string | boolean, isMode: boolean = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={`w-5 h-5 mx-auto ${isMode ? "text-green-600" : "text-gray-400"}`} />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    return (
      <span className={`text-sm ${isMode ? "font-semibold text-gray-900" : "text-gray-600"}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="section-padding bg-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Compare options"
            title="Why founders choose Mode over alternatives"
          />
        </FadeIn>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-heading text-sm uppercase tracking-wider text-textMuted">
                  Feature
                </th>
                <th className="py-4 px-4">
                  <div className="bg-gradient-to-br from-accentFrom to-accentTo text-white rounded-lg px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1">Best Value</div>
                    <div className="text-lg font-bold">Mode</div>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-heading text-sm font-semibold text-gray-700">
                  Upwork
                </th>
                <th className="text-center py-4 px-4 font-heading text-sm font-semibold text-gray-700">
                  Agency
                </th>
                <th className="text-center py-4 px-4 font-heading text-sm font-semibold text-gray-700">
                  In-House
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    } hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="py-4 px-4 text-center bg-blue-50/50">
                    {renderCell(row.mode, true)}
                  </td>
                  <td className="py-4 px-4 text-center">{renderCell(row.upwork)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.agency)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.inHouse)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-heading font-bold text-gray-900 mb-4">{row.feature}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 px-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <span className="font-semibold text-sm text-gray-900">Mode</span>
                  <div>{renderCell(row.mode, true)}</div>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                  <span className="text-sm text-gray-600">Upwork</span>
                  <div>{renderCell(row.upwork)}</div>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                  <span className="text-sm text-gray-600">Agency</span>
                  <div>{renderCell(row.agency)}</div>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                  <span className="text-sm text-gray-600">In-House</span>
                  <div>{renderCell(row.inHouse)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
