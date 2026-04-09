const steps = [
  {
    num: 'Step 01',
    title: 'Map the customer',
    text: 'Who are they really? Where do they complain online? What words do they use when they are frustrated? We spend the first week on this. Most agencies skip it. We think it is the most important thing we do.',
  },
  {
    num: 'Step 02',
    title: 'Find the channels',
    text: 'We find the specific subreddits, LinkedIn spaces, and Twitter conversations where your actual buyers are spending time. Not other founders. Your buyers.',
  },
  {
    num: 'Step 03',
    title: 'Show up consistently',
    text: 'Show up. Read. Comment. Post things that actually help people. Build real credibility as a community member before ever mentioning your product. This is the boring part that actually works.',
  },
  {
    num: 'Step 04',
    title: 'Convert and compound',
    text: 'Conversations become calls. Calls become pilots. Pilots become paying users. And every piece of content, every comment, every post, keeps working after we post it.',
  },
]

const Process = () => (
  <section className="process-section" id="process">
    <div className="process-inner">
      <div className="process-header">
        <div className="section-label">Process</div>
        <h2 className="process-heading">How TDL works</h2>
        <p className="process-subtext">
          Every engagement starts with a 30-day pilot. You see exactly what we do and how
          we do it before committing to anything longer. We think that is the fairest way to start.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step" key={i}>
            <div className="step-label">
              <span className="step-line" />
              <span className="step-num">{step.num}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Process
