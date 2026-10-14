
// src/components/layout/Layout.jsx
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Auto-Hide Fixed Header */}
      <Header />

      
      <main className="pt-[80px]">
        <NavBar />
        {children}
      </main>

      <Footer />
    </div>
  );
}