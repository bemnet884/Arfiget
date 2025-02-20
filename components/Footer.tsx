import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";
import { Laptop } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Laptop className="text-blue-500" />
                <div className="text-2xl font-extrabold text-blue-700 tracking-wide">Arfiget</div>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Services</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Find Freelancers
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Post a Job
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Careers
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Support</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Help Center
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Community Forum
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Contact Us
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Arfiget. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}