const aeoBullets = [
  {
    title: 'Reddit presence',
    text: 'Reddit is heavily indexed by AI right now. If your competitor gets recommended in relevant threads and you do not, that is exactly why they show up in AI answers and you do not.',
  },
  {
    title: 'Third-party mentions',
    text: 'AI trusts what other people say about you, not what you say about yourself. Reviews on G2, Capterra, ProductHunt all feed AI training data. Your own website saying you are great means almost nothing to it.',
  },
  {
    title: 'Directory listings',
    text: 'G2, Capterra, AlternativeTo, SaaSHub. Every listing is a data point AI pulls from when answering questions about your category. We get you listed everywhere that matters.',
  },
  {
    title: 'Founder authority',
    text: 'When you show up consistently as a voice in your problem space, AI starts associating your name and product with that category. Founder visibility is an AEO signal most people completely ignore.',
  },
]

const AEO = () => (
  <section className="aeo-section">
    <div className="aeo-inner">
      <div className="aeo-left">
        <div className="section-label">Answer Engine Optimisation</div>
        <h2 className="aeo-heading">
          Your buyers are
          <span className="italic-line">searching on ChatGPT.</span>
        </h2>
        <p className="aeo-subtext">
          When someone asks an AI "best tool for X" your product either shows up or it does not.
          AEO is what SEO was in 2010. The founders who move early will own their category before
          everyone else figures out it matters.
        </p>
        <div className="aeo-bullets">
          {aeoBullets.map((b, i) => (
            <div className="aeo-bullet" key={i}>
              <div className="aeo-bullet-title">
                <span className="aeo-bullet-dot" />
                {b.title}
              </div>
              <p className="aeo-bullet-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="aeo-right">
        <div className="chatgpt-mock">
          <p className="chatgpt-label">ChatGPT Query</p>
          <div className="chatgpt-query">
            "best tool for HR teams to find top talent faster"
          </div>
          <p className="chatgpt-response">
            Based on community discussions, review platforms, and founder content, here are the
            most recommended tools for talent acquisition teams right now:
          </p>
          <div className="chatgpt-highlight">
            ✦ Your SaaS product appears here. Because TDL built the right signals before
            your competitor did.
          </div>
          <div className="chatgpt-note">
            <strong>TDL builds AEO as a byproduct of good distribution.</strong> Every Reddit
            comment, LinkedIn post, and directory listing we create feeds the AI signal. No
            separate strategy needed. No extra budget.
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AEO
