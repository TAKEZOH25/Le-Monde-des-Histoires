import { BookOpen } from 'lucide-react';

export default function Header() {
    return (
        <header className="py-12 px-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3 mb-2 animate-bounce-slow">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-brand-pink">
                    <BookOpen size={40} strokeWidth={2.5} />
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-pink mb-2 drop-shadow-sm">
                Le Monde des Histoires
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md">
                Des contes illustrés pour rêver et voyager
            </p>
        </header>
    );
}
