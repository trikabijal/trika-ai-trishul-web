import React from "react";

const data = [
  ["Annotations (text, type, page URL)", "Yes", "No", "No"],
  ["Google email", "Yes (cached)", "Yes (sign-in only)", "Yes"],
  ["Google display name", "Yes (cached)", "Yes (sign-in only)", "Yes"],
  ["Google profile picture", "Yes (cached)", "No", "No"],
  ["Google OAuth token", "No (Chrome manages)", "Yes (one-time, discarded)", "No"],
  ["Heartbeat (userId + timestamp)", "No", "Yes (every 10 min)", "Timestamp only"],
  ["Telemetry events (opt-in only)", "Briefly in memory", "Yes if opted in", "Yes (no page URLs)"],
  ["Extension ID", "N/A", "Yes (telemetry only)", "Yes (events table)"],
];

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-lg font-bold text-primary border-b-2 border-primary pb-2 mb-4">
      {number}. {title}
    </h2>
    {children}
  </section>
);

const BulletList = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <ul className="space-y-2 mb-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
        <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Callout = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-l-4 border-primary bg-trika-light rounded-r-lg px-5 py-4">
    <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{label}</p>
    <div className="text-sm text-foreground leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Header */}
      <header className="trika-gradient px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-primary-foreground/70 uppercase mb-3">Trika.ai</p>
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">Privacy Policy</h1>
          <p className="text-primary-foreground/70 italic text-sm">Annotator Chrome Extension · Effective Date: March 2026</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Summary */}
        <div className="mb-12">
          <Callout label="Summary">
            Your annotation data never leaves your browser. We collect only your Google account
            email and name for login purposes. Profile pictures are fetched locally and never sent
            to our servers. Analytics are off by default and never include page URLs. We do not
            sell your data.
          </Callout>
        </div>

        {/* Data table */}
        <Section number="1" title="Data We Collect — At a Glance">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="trika-gradient text-primary-foreground">
                  {["Data", "Stored locally", "Sent to server", "Stored in server DB"].map((h) => (
                    <th key={h} className="text-left px-3 py-2 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted"}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 border-b border-border text-muted-foreground align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Section 2 */}
        <Section number="2" title="Annotation Data">
          <BulletList items={[
            "All annotations you create — including marked text, annotation type (Query, Information, Important, Follow-up), and associated page URLs — are stored exclusively in your browser using Chrome's local and sync storage APIs.",
            "Annotation data is never transmitted to our servers or any third party under any circumstances.",
            "Chrome sync storage is used solely to allow your annotations to survive extension reinstalls. This data remains within Google's Chrome sync infrastructure and is not accessible to us.",
          ]} />
        </Section>

        {/* Section 3 */}
        <Section number="3" title="Account Information">
          <BulletList items={[
            "When you sign in using Google, the Extension obtains an OAuth access token via Chrome's built-in identity API. This token is sent once to our server, used to retrieve your email address and display name from Google's profile API, and then discarded. The token itself is never stored.",
            "We store the following in our database: a server-generated account ID, your email address, your display name, your subscription plan, account creation date, last login date, and last activity timestamp.",
            "Your Google profile picture is fetched and displayed locally within the Extension only. It is never sent to or stored on our servers.",
            "Your Google credentials and passwords are never accessed or stored by us. Authentication is handled entirely by Google.",
            "We do not access your Google Contacts, Drive, Gmail, Calendar, or any other Google service. Only your basic profile (email and name) is retrieved.",
          ]} />
        </Section>

        {/* Section 4 */}
        <Section number="4" title="Heartbeat">
          <BulletList items={[
            "While you are signed in, the Extension sends a lightweight heartbeat to our server every 10 minutes. This contains only your user ID and a timestamp.",
            "The heartbeat is used solely to update your last activity timestamp. No browsing data, page URLs, or annotation content is included.",
          ]} />
        </Section>

        {/* Section 5 */}
        <Section number="5" title="Usage Analytics">
          <BulletList items={[
            <span>Analytics collection is <strong>off by default</strong>. You must explicitly opt in via the Extension's options page to enable it.</span>,
            "If you opt in, the Extension sends anonymous usage events to our server. These events contain: event name, timestamp, extension ID, and user ID if signed in.",
            "Page URLs are never included in analytics events, regardless of opt-in status.",
            "Analytics data is used solely to understand how the Extension is used and to improve its functionality. It is not used for advertising and is not shared with third parties.",
            "You can opt out at any time via the Extension's options page. Opting out immediately stops all analytics transmission — events are never queued once you have opted out.",
          ]} />
        </Section>

        {/* Section 6 */}
        <Section number="6" title="How We Use Your Information">
          <BulletList items={[
            "Account information is used to authenticate you, manage your subscription plan, and provide access to the Extension's features.",
            "Heartbeat data is used to maintain accurate activity records for subscription management.",
            "Analytics data, if opted in, is used exclusively to improve the Extension.",
            "We do not use any collected information for advertising, automated decision-making, or profiling.",
          ]} />
        </Section>

        {/* Section 7 */}
        <Section number="7" title="Data Storage and Security">
          <BulletList items={[
            "Annotation data is stored locally in your browser and protected by Chrome's built-in security model.",
            "Account data is stored on servers hosted by Railway (railway.app) in a secured PostgreSQL database.",
            "We implement industry-standard security measures to protect your account data from unauthorised access, alteration, or disclosure.",
            "We retain your account information for as long as your account is active. You may request deletion at any time (see Section 9).",
          ]} />
        </Section>

        {/* Section 8 */}
        <Section number="8" title="Data Sharing">
          <p className="text-sm text-muted-foreground mb-3">We do not sell, trade, or rent your personal information to any third party.</p>
          <p className="text-sm text-muted-foreground mb-3">We share data only in the following limited circumstances:</p>
          <BulletList items={[
            <span><strong>Google:</strong> OAuth authentication is processed by Google. Your use of Google sign-in is subject to Google's Privacy Policy at <a href="https://policies.google.com/privacy" className="text-primary underline" target="_blank" rel="noreferrer">policies.google.com/privacy</a>.</span>,
            <span><strong>Railway:</strong> Our server infrastructure is hosted on Railway. Account data is stored on Railway's infrastructure subject to Railway's data processing terms.</span>,
            <span><strong>Legal requirements:</strong> We may disclose information if required by applicable law or in response to valid legal process.</span>,
          ]} />
        </Section>

        {/* Section 9 */}
        <Section number="9" title="Your Rights and Account Deletion">
          <p className="text-sm text-muted-foreground mb-3">
            You have the right to access, correct, or delete the personal data we hold about you.
            If you are located in the European Economic Area, you have additional rights under
            applicable data protection law including the right to data portability and the right
            to object to processing.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            To delete your account and all associated data from our servers, email{" "}
            <a href="mailto:bijal@trika.ai" className="text-primary underline">bijal@trika.ai</a>{" "}
            with the subject line <strong>"Account Deletion Request"</strong>. We will process
            your request within 7 business days and confirm deletion by email.
          </p>
          <p className="text-sm text-muted-foreground">
            To remove annotation data, uninstall the Extension from Chrome. All locally stored
            annotation data will be removed from your device immediately.
          </p>
        </Section>

        {/* Section 10 */}
        <Section number="10" title="Children's Privacy">
          <p className="text-sm text-muted-foreground">
            The Extension is not directed at children under the age of 13. We do not knowingly
            collect personal information from children under 13. Contact{" "}
            <a href="mailto:bijal@trika.ai" className="text-primary underline">bijal@trika.ai</a>{" "}
            if you believe we have inadvertently collected such information.
          </p>
        </Section>

        {/* Section 11 */}
        <Section number="11" title="Changes to This Policy">
          <p className="text-sm text-muted-foreground">
            We may update this Privacy Policy from time to time. When we make material changes,
            we will update the effective date at the top of this document and notify users via
            the Extension's options page or by email. Continued use of the Extension after
            changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        {/* Section 12 */}
        <Section number="12" title="Contact">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bijal Sanghavi<br />
            Trika.ai, Mumbai, India<br />
            <a href="mailto:bijal@trika.ai" className="text-primary underline">bijal@trika.ai</a>
          </p>
        </Section>

        {/* Single purpose statement */}
        <div className="mt-12">
          <Callout label="Chrome Web Store — Single Purpose Statement">
            The Annotator Extension's single purpose is to allow users to annotate text on web
            pages and within LLM chat sessions using a structured taxonomy (Query, Information,
            Important, Follow-up). All permissions requested are used solely to enable this
            annotation functionality and user authentication. The extension does not collect
            browsing history and does not transmit annotation content or page URLs to any server.
          </Callout>
        </div>

      </main>

      <footer className="text-center text-xs text-muted-foreground py-8 border-t border-border">
        Trika.ai · trika.ai · Effective March 2026
      </footer>

    </div>
  );
}
