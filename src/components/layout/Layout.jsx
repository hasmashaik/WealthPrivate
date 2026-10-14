
// src/components/layout/Layout.jsx
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Auto-Hide Fixed Header */}
      <Header />

      {/* 
        pt-[80px] = height of the fixed Header.
        Pushes NavBar and content below the header initially.
      */}
      <main className="pt-[80px]">
        <NavBar />
        {children}
      </main>

      <Footer />
    </div>
  );
}