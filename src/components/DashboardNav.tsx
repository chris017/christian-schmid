

import { navItems } from "./NavOut";

export function DashboardNav() {
  
  return (
    <nav className="grid items-start gap-2">
      {navItems.slice(1).map((item, index) => (
        <div className="flex">
    <a key={index} href={item.href}>
      <span className="group flex items-center  gap-2 rounded-md p-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
        <item.icon className="mr-2 h-4 w-4 text-primary justify-start" />
        {item.name}
      </span>
    </a>
    </div>
  ))}
    </nav>
  );
}