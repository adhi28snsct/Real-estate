'use client';

import { Lead, LeadStatus } from '../types/lead';

interface LeadsTableProps {
    leads: Lead[];
    onUpdateStatus: (id: string, newStatus: LeadStatus) => void;
}

const statusColors: Record<LeadStatus, string> = {
    NEW: 'bg-blue-50 text-blue-700 border-blue-200',
    FOLLOW_UP: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    NEGOTIATION: 'bg-purple-50 text-purple-700 border-purple-200',
    CLOSED: 'bg-green-50 text-green-700 border-green-200',
};

export default function LeadsTable({ leads, onUpdateStatus }: LeadsTableProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                            <th className="px-6 py-4 font-semibold">Client Name</th>
                            <th className="px-6 py-4 font-semibold">Contact</th>
                            <th className="px-6 py-4 font-semibold">Property</th>
                            <th className="px-6 py-4 font-semibold">Budget</th>
                            <th className="px-6 py-4 font-semibold">Source</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {leads.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                    No inquiries found.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-50 transition-colors duration-200 cursor-pointer">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{lead.name}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{lead.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{lead.propertyType}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{lead.budget}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{lead.source}</td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={lead.status}
                                            onChange={(e) => onUpdateStatus(lead.id, e.target.value as LeadStatus)}
                                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border outline-none cursor-pointer hover:opacity-80 transition-opacity appearance-none pr-8 bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:calc(100%-8px)_center] ${statusColors[lead.status]}`}
                                        >
                                            <option value="NEW" className="bg-white text-gray-900">New</option>
                                            <option value="FOLLOW_UP" className="bg-white text-gray-900">Follow Up</option>
                                            <option value="NEGOTIATION" className="bg-white text-gray-900">Negotiation</option>
                                            <option value="CLOSED" className="bg-white text-gray-900">Closed</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 text-right whitespace-nowrap">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
