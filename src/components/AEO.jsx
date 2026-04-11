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
  <section className="aeo">
    <div className="aeo__inner">
      <div className="aeo__left">
        <div className="label">Answer Engine Optimisation</div>
        <h2 className="aeo__h2">
          Your buyers are
          <em>searching on ChatGPT.</em>
        </h2>
        <p className="aeo__sub">
          When someone asks an AI "best tool for X" your product either shows up or it does not.
          AEO is what SEO was in 2010. The founders who move early will own their category before
          everyone else figures out it matters.
        </p>
        <div className="aeo__bullets">
          {aeoBullets.map((b, i) => (
            <div className="aeo__bullet" key={i}>
              <div className="aeo__bullet-head">
                <span className="aeo__dot" />
                {b.title}
              </div>
              <p className="aeo__bullet-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="aeo__right">
        <div className="chatgpt">
          <p className="chatgpt__label">ChatGPT Query</p>
          <div className="chatgpt__query">
            "best tool for HR teams to find top talent faster"
          </div>
          <p className="chatgpt__response">
            Based on community discussions, review platforms, and founder content, here are the
            most recommended tools for talent acquisition teams right now:
          </p>
          <div className="chatgpt__highlight">
            ✦ Your SaaS product appears here. Because TDL built the right signals before
            your competitor did.
          </div>
          <div className="chatgpt__note">
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
