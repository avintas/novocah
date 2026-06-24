import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function MidCta() {
  return (
    <Section className="bg-surface pt-0">
      <Container>
        <div className="border-brand/20 bg-brand-muted rounded-2xl border px-6 py-10 text-center">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
            Our team is ready to help you navigate the home health care process.
            Contact us today for a free consultation and assessment.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Schedule Free Consultation
            </Button>
            <Button href="/services" variant="outline">
              Learn More About Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
