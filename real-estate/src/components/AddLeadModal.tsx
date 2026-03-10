'use client';

import { useState } from 'react';
import { LeadSource, LeadStatus, PropertyType } from '@/src/types/lead';
import { X } from 'lucide-react';

interface AddLeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (lead: {
        name: string;
        phone: string;
        propertyType: PropertyType;
        budget: string;
        source: LeadSource;
        status: LeadStatus;
    }) => void;
}

export default function AddLeadModal({ isOpen, onClose, onAdd }: AddLeadModalProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [propertyType, setPropertyType] = useState<PropertyType>('Apartment');
    const [budget, setBudget] = useState('');
    const [source, setSource] = useState<LeadSource>('Website');
    const [status, setStatus] = useState<LeadStatus>('NEW');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !budget) return;

        // Formatting budget if user didn't enter AED
        const formattedBudget = budget.toUpperCase().includes('AED')
            ? budget
            : `AED ${Number(budget.replace(/[^0-9.-]+/g, "")).toLocaleString()}`;

        onAdd({ name, phone, propertyType, budget: formattedBudget, source, status });

        // Reset form
        setName('');
        setPhone('');
        setPropertyType('Apartment');
        setBudget('');
        setSource('Website');
        setStatus('NEW');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm transition-all duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Add New Inquiry</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Client Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Ahmed Al Nuaimi"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+971 50 123 4567"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                                <select
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900 bg-white"
                                >
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget (AED)</label>
                                <input
                                    type="text"
                                    required
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    placeholder="e.g. 1,200,000"
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Source</label>
                                <select
                                    value={source}
                                    onChange={(e) => setSource(e.target.value as LeadSource)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900 bg-white"
                                >
                                    <option value="Website">Website</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="Property Portal">Property Portal</option>
                                    <option value="Call">Call</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as LeadStatus)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900 bg-white"
                                >
                                    <option value="NEW">New</option>
                                    <option value="FOLLOW_UP">Follow Up</option>
                                    <option value="NEGOTIATION">Negotiation</option>
                                    <option value="CLOSED">Closed</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3 mt-6 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                        >
                            Add Lead
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
