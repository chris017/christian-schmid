// Layout.tsx
import { ReactNode } from 'react';
import { DashboardNav } from '../../components/DashboardNav';
import Navigation from '../../components/Navigation';
interface DashboardProp {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardProp) {
    return (
        <>        
        <Navigation />
        <div className="flex flex-col space-y-6 mt-6">
            <div className="container grid flex-1 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex ">
                    <DashboardNav />
                </aside>
                <main>{children}</main>
            </div>
        </div>
        </>
    );
}
