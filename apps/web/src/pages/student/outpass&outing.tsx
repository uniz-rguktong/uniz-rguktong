import { useRecoilValue } from "recoil";
import { student } from "../../store";
import { useNavigate } from "react-router";
import React from "react";
import { calculateDuration, formatDuration } from '../../utils/timeUtils';
import { Clock, Calendar, AlertCircle, Plus } from "lucide-react";

const RequestCard = React.lazy(() => import('../../components/RequestCard'));

type requestProps = {
    request: "outing" | "outpass"
}

export function OutButton({ request }: requestProps) {
    const navigateTo = useNavigate();
    return (
        <div className="flex justify-center items-center w-full md:w-auto mt-4 md:mt-0">
            <button
                onClick={() => navigateTo(`/student/${request}/request${request}`)}
                className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
            >
                <Plus className="w-4 h-4" />
                <span>New {request.charAt(0).toUpperCase() + request.slice(1)}</span>
            </button>
        </div>
    );
}

export default function Outpass_Outing({ request }: requestProps) {
    const Student = useRecoilValue(student);
    const outings = Student?.outings_list || [];
    const outpasses = Student?.outpasses_list || [];

    const pendingOutings = outings.filter((outing: any) => !outing.is_expired && !outing.is_approved && !outing.is_rejected);
    const pendingOutpasses = outpasses.filter((outpass: any) => !outpass.is_expired && !outpass.is_approved && !outpass.is_rejected);
    const totalPending = pendingOutings.length + pendingOutpasses.length;

    // Filter active requests once to keep render clean
    const activeOutings = outings.filter((outing: any) => !outing.is_expired && (outing.is_approved || (!outing.is_approved && !outing.is_rejected)));
    const activeOutpasses = outpasses.filter((outpass: any) => !outpass.is_expired && (outpass.is_approved || (!outpass.is_approved && !outpass.is_rejected)));

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-32">
            {/* Header Section */}
            <div className="mb-8">
                <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-8 border border-neutral-200">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h4 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-2">
                                {request === "outing" ? "Outing" : "Outpass"} Requests
                            </h4>
                            <p className="text-neutral-500 font-medium">Manage and track your permission requests</p>
                        </div>
                        {!Student?.has_pending_requests && <OutButton request={request} />}
                    </div>

                    {totalPending > 0 && (
                        <div className="mb-6 flex items-center gap-3 bg-neutral-100 p-4 rounded-xl border border-neutral-200">
                            <Clock className="w-5 h-5 text-black animate-pulse" />
                            <span className="font-bold text-black text-sm uppercase tracking-wide">
                                {totalPending} Pending Request{totalPending > 1 ? 's' : ''}
                            </span>
                        </div>
                    )}

                    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-black text-white rounded-lg shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div className="text-sm text-neutral-600 space-y-2">
                                <p className="font-bold text-black text-base">Important Notes</p>
                                <ul className="list-disc list-inside space-y-1 ml-1 marker:text-black">
                                    <li>Only approved requests will be displayed here</li>
                                    <li>Expired and rejected requests won't appear</li>
                                    <li>Updates will be sent to <span className="font-bold text-black">{Student?.email}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
                {activeOutings.length + activeOutpasses.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[2rem] border border-neutral-100 border-dashed">
                        <div className="mx-auto h-20 w-20 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
                            <Clock className="h-10 w-10 text-neutral-300" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">No Active Requests</h3>
                        <p className="text-neutral-500 font-medium">You don't have any active {request} requests currently.</p>
                    </div>
                ) : (
                    <>
                        {!Student?.is_in_campus && (
                            <div className="bg-black text-white p-6 rounded-2xl shadow-lg mb-8 flex items-center gap-4">
                                <AlertCircle className="w-6 h-6 shrink-0 text-white" />
                                <div>
                                    <p className="font-bold">You are currently marked as outside campus</p>
                                    <p className="text-sm text-neutral-400 mt-1">Please consult your warden to update your presence.</p>
                                </div>
                            </div>
                        )}

                        {/* Active Requests Grid */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Outings */}
                            {activeOutings.map((outing: any) => (
                                <div key={outing._id} className="bg-white rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-neutral-200 overflow-hidden group">
                                    <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 bg-black text-white rounded-lg">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-black">Outing</span>
                                            </div>
                                            <span className="text-xs font-bold bg-neutral-200 text-neutral-700 px-2 py-1 rounded-md">{outing.from_time} - {outing.to_time}</span>
                                        </div>
                                        <div className="text-sm font-medium text-neutral-500">
                                            Duration: <span className="text-black font-bold">{formatDuration(calculateDuration(outing.from_time, outing.to_time))}</span>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <RequestCard request={outing} type="outing" key={outing._id} />
                                    </div>
                                </div>
                            ))}

                            {/* Outpasses */}
                            {activeOutpasses.map((outpass: any) => (
                                <div key={outpass._id} className="bg-white rounded-[1.5rem] shadow-sm hover:shadow-md transition-all border border-neutral-200 overflow-hidden group">
                                    <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 bg-black text-white rounded-lg">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-black">Outpass</span>
                                            </div>
                                            <span className="text-xs font-bold bg-neutral-200 text-neutral-700 px-2 py-1 rounded-md">{outpass.from_day} - {outpass.to_day}</span>
                                        </div>
                                        <div className="text-sm font-medium text-neutral-500">
                                            Duration: <span className="text-black font-bold">{formatDuration(calculateDuration(outpass.from_day, outpass.to_day))}</span>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <RequestCard request={outpass} type="outpass" key={outpass._id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Warning Message for Pending Requests */}
            {Student?.has_pending_requests && (
                <div className="fixed bottom-0 left-0 md:left-[300px] right-0 p-4 z-40">
                    <div className="bg-black text-white p-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom duration-300 mx-auto max-w-xl">
                        <Clock className="w-5 h-5 shrink-0 animate-pulse" />
                        <p className="text-sm font-bold text-center">
                            You have pending requests. Wait for approval before new requests.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}