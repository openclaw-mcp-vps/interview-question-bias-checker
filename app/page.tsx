export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Bias Detection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Flag Biased Language in<br />
          <span className="text-[#58a6ff]">Job Interview Questions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your interview questions and get instant AI analysis highlighting gender, age, and cultural bias — with clear explanations and better alternatives.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        {/* Demo preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4 font-semibold">Example Analysis</p>
          <div className="space-y-3">
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-sm text-[#c9d1d9] mb-2">
                <span className="bg-red-900/40 text-red-400 px-1 rounded">"How old are you?"</span>
              </p>
              <p className="text-xs text-[#8b949e]">⚠ Age bias — illegal in many jurisdictions. Ask about experience level instead.</p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-sm text-[#c9d1d9] mb-2">
                <span className="bg-yellow-900/40 text-yellow-400 px-1 rounded">"Are you a culture fit?"</span>
              </p>
              <p className="text-xs text-[#8b949e]">⚠ Cultural bias — vague and exclusionary. Try: "How do you collaborate with diverse teams?"</p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
              <p className="text-sm text-[#c9d1d9] mb-2">
                <span className="bg-green-900/40 text-green-400 px-1 rounded">"Describe a technical challenge you solved."</span>
              </p>
              <p className="text-xs text-[#8b949e]">✓ No bias detected — clear, role-relevant, and inclusive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited question analyses</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Gender, age &amp; cultural bias detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Rewrite suggestions for each flag</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Exportable bias reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What types of bias does it detect?</h3>
            <p className="text-sm text-[#8b949e]">The AI flags gender bias, age discrimination, cultural assumptions, disability-related language, and socioeconomic bias — covering the most common legal and ethical risk areas in hiring.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the analysis work?</h3>
            <p className="text-sm text-[#8b949e]">You paste your interview questions, and our OpenAI-powered engine reviews each one, highlights problematic phrases, explains why they may be biased, and suggests neutral alternatives.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You can cancel at any time from your billing portal. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Interview Bias Checker. All rights reserved.
      </footer>
    </main>
  );
}
