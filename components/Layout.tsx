import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps { children: ReactNode; }
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main className="p-8">{children}</main>
      <footer className="text-center p-4 bg-blue-900 text-white">
        &copy; {new Date().getFullYear()} Stevenson SODA Chapter
      </footer>
    </>
  );
}
