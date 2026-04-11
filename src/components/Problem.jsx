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
  <section className="problem">
    <div className="problem__inner">
      <div className="label label--light">The Problem</div>
      <h2 className="problem__h2">
        Great products die every day.
        <em>Not because they were bad.</em>
      </h2>
      <p className="problem__sub">
        Because nobody found them. Distribution failure looks exactly like product failure.
        Most founders quit the right product for the wrong reason. We are here to make
        sure that never happens to you.
      </p>
      <div className="problem__grid">
        {problems.map((p, i) => (
          <div className="problem__card" key={i}>
            <span className="problem__num">{p.num}</span>
            <h3 className="problem__title">{p.title}</h3>
            <p className="problem__text">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Problem
