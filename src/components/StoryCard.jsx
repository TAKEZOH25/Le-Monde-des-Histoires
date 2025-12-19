import { Sparkles } from 'lucide-react';

export default function StoryCard({ story, onClick }) {
    return (
        <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 flex flex-col h-full cursor-pointer group">
            <div className={`h-48 w-full rounded-3xl overflow-hidden mb-5 ${story.themeColor} relative`}>
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="flex flex-col flex-grow px-2">
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {story.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-3">
                    {story.description}
                </p>

                <button
                    onClick={onClick}
                    className="mt-auto w-full bg-brand-pink text-white font-bold py-3 px-6 rounded-full hover:bg-[#FF8787] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                    <span>Lire l'histoire</span>
                    <Sparkles size={18} />
                </button>
            </div>
        </div>
    );
}
