import {
  Home,
  TrendingUp,
  Radio,
  Sparkles,
  Menu as MenuIcon,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const routes = {
  home: "/",
  destaques: "/destaques",
  ao_vivo: "/ao-vivo",
  lancamentos: "/lancamentos",
  menu: "/menu",
} as const;

type RouteKey = keyof typeof routes;

const navItems = [
  { key: "home", label: "Home", Icon: Home, path: routes.home },
  {
    key: "destaques",
    label: "Destaques",
    Icon: TrendingUp,
    path: routes.destaques,
  },
  {
    key: "lancamentos",
    label: "Lançamentos",
    Icon: Sparkles,
    path: routes.lancamentos,
  },
  { key: "menu", label: "Menu", Icon: MenuIcon, path: routes.menu },
] as const;

export default function Sidebar() {
  const { pathname } = useLocation();

  const activeKey =
    (Object.keys(routes) as RouteKey[]).find(
      (key) => routes[key] === pathname
    ) || "home";

  const baseItemClass =
    "flex flex-col items-center justify-center gap-1 text-xs select-none transition-colors duration-200";
  const inactiveText = "text-muted-foreground hover:text-foreground";
  const activeText = "text-foreground";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-muted px-4 pt-2 pb-3"
      aria-label="Barra de navegação"
    >
      <div className="relative mx-auto grid max-w-md grid-cols-5 items-end">
        {navItems.map(({ key, label, Icon, path }) => {
          if (key === "destaques") {
            return (
              <>
                <Link
                  key={key}
                  to={path}
                  className={`${baseItemClass} ${
                    activeKey === key ? activeText : inactiveText
                  }`}
                  aria-label={label}
                  aria-current={activeKey === key ? "page" : undefined}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>

                {/* --- CTA Ao Vivo (Central) --- */}
                <div className="flex flex-col items-center justify-center relative">
                  <Link
                    to={routes.ao_vivo}
                    className={`
                      relative
                      -mt-8
                      w-20 h-20         
                      rounded-full
                      bg-orange-100    
                      text-orange-500        
                      shadow-lg         
                      ring-1 ring-orange-500 
                      flex flex-col items-center justify-center gap-1
                      font-medium text-xs
                      transition-all duration-200
                      ${
                        activeKey === "ao_vivo"
                          ? "bg-orange-200"
                          : "hover:bg-orange-600"
                      }
                    `}
                    aria-label="Ao Vivo"
                    aria-current={activeKey === "ao_vivo" ? "page" : undefined}
                  >
                    <Radio size={24} />
                    <span>Ao Vivo</span>
                    <span
                      className="absolute -top-1 -right-0.5 h-6 w-6 rounded-sm bg-green-200 text-green-500 border-2 border-white text-sm font-semibold flex items-center justify-center"
                      aria-label="Notificações ao vivo"
                    >
                      8
                    </span>
                  </Link>
                </div>
              </>
            );
          }

          return (
            <Link
              key={key}
              to={path}
              className={`${baseItemClass} ${
                activeKey === key ? activeText : inactiveText
              }`}
              aria-label={label}
              aria-current={activeKey === key ? "page" : undefined}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
