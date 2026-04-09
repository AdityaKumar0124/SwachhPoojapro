import { useState, useEffect } from "react";
import { Menu, X, Leaf, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const mockStr = localStorage.getItem("mock_login");
      if (mockStr) {
        setIsLogged(true);
        if (JSON.parse(mockStr).role === "Admin") setIsAdmin(true);
      }
    };
    checkAuth();
  }, [location.pathname]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Activity", href: "/activity" },
    { label: "Support NGO", href: "/support" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 max-w-6xl">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Leaf className="h-6 w-6" /> SwachhPooja
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.href ? "text-primary" : "text-muted-foreground"}`}>
              {l.label}
            </Link>
          ))}
          
          {isLogged ? (
            <Button asChild size="sm" variant="outline">
              <Link to={isAdmin ? "/admin" : "/dashboard"} className="flex items-center gap-2">
                <UserCircle className="h-4 w-4" /> Dashboard
              </Link>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild size="sm" variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/signup">Join Us</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b pb-4 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 flex flex-col gap-3 pt-2">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={`text-sm font-medium py-2 border-b border-border/50 ${location.pathname === l.href ? "text-primary" : "text-muted-foreground"}`}>
                {l.label}
              </Link>
            ))}
            
            <div className="pt-2 flex flex-col gap-2">
              {isLogged ? (
                <Button asChild size="sm" className="w-full justify-start" onClick={() => setOpen(false)}>
                  <Link to={isAdmin ? "/admin" : "/dashboard"}><UserCircle className="mr-2 h-4 w-4" /> Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="sm" variant="outline" className="w-full justify-start" onClick={() => setOpen(false)}>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild size="sm" className="w-full justify-start" onClick={() => setOpen(false)}>
                    <Link to="/signup">Join Us</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
