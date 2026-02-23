import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import { useState } from "react";

export function HamburgerMenu({ links }: { links: { href: string, label: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon-lg" className="sm:hidden" onClick={() => setOpen(!open)}><Menu /></Button>
      <div className={`sm:hidden z-40 fixed top-14 left-0 h-screen w-screen bg-background/97 ${open ? 'block' : 'hidden'}`}>
        <ul className="items-center gap-4 flex flex-col">
          {
            links.map((link) => (
              <li className="w-full">
                <a
                  href={link.href}
                  className="text-xl font-semibold text-foreground w-full px-4"
                >
                  {link.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="fixed bottom-4 px-2">
          <ModeToggle />
        </div>
      </div>
    </>
  )
}