import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function DifferenceCta() {
  return (
    <Section className="bg-surface-muted pt-0">
      <Container>
        <div className="bg-brand rounded-2xl px-6 py-12 text-center">
          <h2 className="text-brand-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience the California Healthcare Management Group Difference
          </h2>
          <p className="text-brand-foreground/90 mx-auto mt-3 max-w-2xl">
            Join thousands of families who trust us for their home health care
            needs. Our commitment to excellence ensures you receive the highest
            quality care in the comfort of your home.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="white">
              Get Started Today
            </Button>
            <Button href="/about" variant="outlineOnDark">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
