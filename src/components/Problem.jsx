const problems = [
  {
    num: '01',
    title: 'You posted on Reddit. Got removed.',
    text: 'You found a relevant subreddit, shared your product, and got banned or ignored. Reddit is not a megaphone. It is a community. There is a right way to use it and most founders never figure it out.',
  },
  {
    num: '02',
    title: 'You posted content everywhere. Crickets.',
    text: 'You posted on LinkedIn. Tweeted into the void. Nothing happened. Not because your product is bad. Because the message was off and the channel was wrong.',
  },
  {
    num: '03',
    title: 'Your ProductHunt launch flopped.',
    text: 'ProductHunt rewards products that already have believers. It is not a discovery platform. It is amplification. You needed a crowd before you launched, not after. Most founders get this backwards.',
  },
]

const Problem = () => (
  <section className="problem-section">
    <div className="problem-inner">
      <div className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>
        <span style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
        The Problem
      </div>
      <h2 className="problem-heading">
        Great products die every day.
        <span className="italic-line">Not because they were bad.</span>
      </h2>
      <p className="problem-subtext">
        Because nobody found them. Distribution failure looks exactly like product failure.
        Most founders quit the right product for the wrong reason. We are here to make
        sure that never happens to you.
      </p>
      <div className="problem-cards">
        {problems.map((p, i) => (
          <div className="problem-card" key={i}>
            <span className="problem-card-num">{p.num}</span>
            <h3 className="problem-card-title">{p.title}</h3>
            <p className="problem-card-text">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Problem
