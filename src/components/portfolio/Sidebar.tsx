import { studios } from "@/data/portfolio";
import { Music2 } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-[280px] shrink-0 bg-surface h-screen sticky top-0 overflow-y-auto p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Music2 className="w-5 h-5 text-primary" />
        <span className="font-bold text-sm text-foreground tracking-tight">Portfolio</span>
      </div>

      <nav className="space-y-1">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold px-3 mb-2">
          Studios
        </p>
        {studios.map((studio) => (
          <a
            key={studio.id}
            href={`#${studio.id}`}
            className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors duration-200"
          >
            <span className="truncate">{studio.name}</span>
            <span className="text-[11px] tabular-nums opacity-60">{studio.years.split("–")[0]}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8 px-3">
        <p className="text-[11px] text-muted-foreground">
          © 2024 Chak Hin Yau
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
