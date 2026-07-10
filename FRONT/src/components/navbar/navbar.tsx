import { NavigationSheet } from "./navigation-sheet";
import { SignOutButton } from "./signout-button";
import { Button } from "@/components/ui/button"
import { navigate } from "astro:transitions/client";

const Navbar = (initialSession: string | any) => {

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between">

        <div className="font-bold text-xl">
          WattBudget
        </div>

        <nav className="flex items-center gap-4">

          <Button variant="ghost"
            className="hover:bg-blue-100 hover:text-blue-700" onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>

          <Button variant="ghost" onClick={() => navigate('/users')}>
            Utilisateurs
          </Button>

          <Button variant="ghost" onClick={() => navigate('/settings')}>
            Paramètres
          </Button>

          <SignOutButton initialSession={initialSession} />

          {/* <NavigationSheet /> */}

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
