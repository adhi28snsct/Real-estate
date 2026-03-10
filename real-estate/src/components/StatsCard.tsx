import { ReactNode } from 'react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: string;
    trendUp?: boolean;
}

export default function StatsCard({ title, value, icon, trend, trendUp }: StatsCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                    {icon}
                </div>
            </div>
            <div className="flex items-baseline gap-3">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                {trend && (
                    <span
                        className={`text-sm font-medium px-2 py-0.5 rounded-full ${trendUp ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                            }`}
                    >
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
}
