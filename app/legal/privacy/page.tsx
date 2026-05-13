import { SectionHero } from "@/components/SectionHero";
import { site } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <SectionHero eyebrow="Legal" title="Privacy Policy" text="UK privacy policy scaffold for review before newsletter and commerce launch." />
      <section className="px-6 py-16">
        <article className="mx-auto max-w-reading reading-copy">
          <p>This policy is a working placeholder and should be reviewed before payments are enabled.</p>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-ink">Who we are</h2>
          <p>{site.name} is a UK-based publishing and illustration project. Contact details and legal entity information will be completed before launch.</p>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-ink">What we collect</h2>
          <p>Newsletter signups may collect an email address and consent timestamp. Shop checkout data will be processed by the selected commerce provider once enabled.</p>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-ink">Your rights</h2>
          <p>You can ask for access, correction, deletion, or restriction of your personal data by contacting {site.contactEmail}.</p>
        </article>
      </section>
    </>
  );
}
