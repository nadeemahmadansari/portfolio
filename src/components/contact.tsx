import { SectionHeader } from "./section-header";
import { Container } from "./container";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <Container>
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about how I can help you bring it to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground text-lg">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-lg font-medium">
                    nadeem2136@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-lg font-medium">Remote</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
