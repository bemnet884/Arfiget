import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-extrabold text-blue-700 tracking-wide">Ethio-freelancer</div>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Services</h3>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Find Freelancers
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Post a Job
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Careers
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Blog
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Support</h3>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Help Center
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Community Forum
              </Link>
              <Link
                href="/"
                className="text-sm text-muted-foreground"
              >
                Contact Us
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Ethio-freelancer. All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}