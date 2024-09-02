export default function Loader({ type }) {
    return (
        <div className="mt-8">
            {type === "single" ? (
                <div className="flex gap-1 w-3/4 flex-wrap">
                    <div className="bg-slate-800 py-4 px-8 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                    <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                </div>
            ) : (
                <div>
                    <div className="flex gap-1 w-3/4 flex-wrap">
                        <div className="bg-slate-800 py-4 px-8 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="flex gap-1 mt-4 w-3/4 flex-wrap">
                        <div className="bg-slate-800 py-4 px-8 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-10 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-4 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-6 rounded-lg animate-pulse"></div>
                        <div className="bg-slate-800 py-4 px-12 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
