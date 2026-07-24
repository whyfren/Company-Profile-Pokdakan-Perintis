import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-3xl" />
    </div>

      {/* Navbar */}
      <header className="container mx-auto flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-bold">Lorem Inc.</h1>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>

        <Button>Get Started</Button>
      </header>

      {/* Hero */}
      <section className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center px-6">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit">
              🚀 New Generation Platform
            </Badge>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Build Better
              <br />
              Digital Products.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, doloremque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus, molestiae.
            </p>

            <div className="mt-10 flex gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-3xl font-bold">120+</p>
                <span className="text-sm text-muted-foreground">
                  Projects
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold">98%</p>
                <span className="text-sm text-muted-foreground">
                  Satisfaction
                </span>
              </div>

              <div>
                <p className="text-3xl font-bold">24/7</p>
                <span className="text-sm text-muted-foreground">
                  Support
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-lg rounded-3xl border bg-card p-6 shadow-2xl">
              <div className="mb-4 h-6 w-32 rounded bg-muted" />

              <div className="space-y-4">
                <div className="h-28 rounded-xl bg-primary/10" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-muted" />
                  <div className="h-32 rounded-xl bg-muted" />
                </div>
                <div className="h-24 rounded-xl bg-muted" />
              </div>

              <div className="absolute -right-6 -top-6 rounded-2xl border bg-background p-4 shadow-lg">
                <p className="text-sm text-muted-foreground">
                  Monthly Growth
                </p>
                <h2 className="text-3xl font-bold">+42%</h2>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-background p-4 shadow-lg">
                <p className="text-sm text-muted-foreground">
                  Active Users
                </p>
                <h2 className="text-3xl font-bold">12.8K</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}