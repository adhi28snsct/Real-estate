'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import LeadsTable from '@/src/components/LeadsTable';
import AddLeadModal from '@/src/components/AddLeadModal';
import { Lead, LeadStatus, PropertyType, LeadSource } from '@/src/types/lead';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const INITIAL_LEADS: Lead[] = [
    {
        id: '1',
        name: 'Ahmed Al Nuaimi',
        phone: '+971 50 123 4567',
        propertyType: 'Villa',
        budget: 'AED 3,500,000',
        source: 'Property Portal',
        status: 'NEW',
        createdAt: new Date(Date.now() - 86400000 * 0).toISOString(),
    },
    {
        id: '2',
        name: 'Fatima Al Mansoori',
        phone: '+971 55 987 6543',
        propertyType: 'Apartment',
        budget: 'AED 1,200,000',
        source: 'WhatsApp',
        status: 'NEGOTIATION',
        createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    },
    {
        id: '3',
        name: 'Omar Hassan',
        phone: '+971 56 456 7890',
        propertyType: 'Commercial',
        budget: 'AED 15,000,000',
        source: 'Call',
        status: 'CLOSED',
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
    {
        id: '4',
        name: 'Sarah Anderson',
        phone: '+971 52 333 4444',
        propertyType: 'Villa',
        budget: 'AED 5,000,000',
        source: 'Website',
        status: 'FOLLOW_UP',
        createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    },
    {
        id: '5',
        name: 'Mohammed Tariq',
        phone: '+971 58 777 8888',
        propertyType: 'Apartment',
        budget: 'AED 850,000',
        source: 'WhatsApp',
        status: 'NEW',
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
        id: '6',
        name: 'Aisha Al Qassimi',
        phone: '+971 50 999 0000',
        propertyType: 'Villa',
        budget: 'AED 4,200,000',
        source: 'Property Portal',
        status: 'NEGOTIATION',
        createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
    },
    {
        id: '7',
        name: 'John Smith',
        phone: '+44 7700 900077',
        propertyType: 'Apartment',
        budget: 'AED 2,100,000',
        source: 'Website',
        status: 'FOLLOW_UP',
        createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    },
    {
        id: '8',
        name: 'Khalid Al Hashemi',
        phone: '+971 55 222 3333',
        propertyType: 'Commercial',
        budget: 'AED 8,500,000',
        source: 'Call',
        status: 'NEW',
        createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    },
    {
        id: '9',
        name: 'Elena Rostova',
        phone: '+971 56 555 6666',
        propertyType: 'Apartment',
        budget: 'AED 3,800,000',
        source: 'WhatsApp',
        status: 'CLOSED',
        createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    },
    {
        id: '10',
        name: 'Saeed Al Maktoum',
        phone: '+971 50 111 2222',
        propertyType: 'Villa',
        budget: 'AED 12,000,000',
        source: 'Property Portal',
        status: 'FOLLOW_UP',
        createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
    }
];

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<LeadStatus | "ALL">("ALL");

    const handleUpdateStatus = (id: string, newStatus: LeadStatus) => {
        setLeads(leads.map(lead =>
            lead.id === id ? { ...lead, status: newStatus } : lead
        ));
    };

    const handleAddLead = (newLeadData: Omit<Lead, 'id' | 'createdAt'>) => {
        const newLead: Lead = {
            ...newLeadData,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString(),
        };
        setLeads([newLead, ...leads]);
    };

    const filteredLeads = filter === "ALL" ? leads : leads.filter((l) => l.status === filter);

    const totalPipeline = leads
        .filter((l) => l.status !== "CLOSED")
        .reduce((acc, l) => {
            const num = Number(l.budget.replace(/[^0-9.-]+/g, ""));
            return acc + num;
        }, 0);

    const formattedPipeline = totalPipeline.toLocaleString();

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Property Inquiries</h1>
                    <p className="text-gray-500 mt-1">Manage and track your incoming leads here.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Select value={filter} onValueChange={(val) => setFilter(val as LeadStatus | "ALL")}>
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ALL">All Statuses</SelectItem>
                            <SelectItem value="NEW">New</SelectItem>
                            <SelectItem value="FOLLOW_UP">Follow Up</SelectItem>
                            <SelectItem value="NEGOTIATION">Negotiation</SelectItem>
                            <SelectItem value="CLOSED">Closed</SelectItem>
                        </SelectContent>
                    </Select>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <Plus className="w-5 h-5" />
                        Add Inquiry
                    </button>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 bg-white">
                <CardContent className="p-4 flex items-center justify-between">
                    <div className="font-semibold text-slate-700">Total Pipeline Value</div>
                    <div className="text-xl font-bold text-indigo-600">AED {formattedPipeline}</div>
                </CardContent>
            </Card>

            <LeadsTable leads={filteredLeads} onUpdateStatus={handleUpdateStatus} />

            <AddLeadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddLead}
            />
        </div>
    );
}
