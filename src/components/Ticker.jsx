const tickerItems = [
  'LinkedIn Content',
  'Twitter Positioning',
  'AEO Optimisation',
  'ProductHunt Launch',
  'Community Building',
  'Organic Growth',
  'Zero Ad Spend',
  'Reddit Strategy',
  'ICP Mapping',
  'SaaS Distribution',
]

const Ticker = () => {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
