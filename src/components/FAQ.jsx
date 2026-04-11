import { useState } from 'react'

const faqs = [
  {
    q: 'Do you work with pre-launch founders?',
    a: 'Yes. Pre-launch is actually a great time to start distribution. You can build presence and community before launch so you have an audience ready when you ship.',
  },
  {
    q: 'Can you guarantee a number of users?',
    a: 'No, and we will never pretend we can. What we guarantee is real work, consistent execution, and honest reporting. Distribution compounds over time and results depend on your product, category, and market.',
  },
  {
    q: 'How is TDL different from a regular marketing agency?',
    a: 'Most agencies run ads or produce generic content. We do neither. We do organic distribution — showing up in the places your actual buyers hang out and building credibility there over time.',
  },
  {
    q: 'Do you work with B2C SaaS?',
    a: 'Yes. in fact, that’s the best time to start. we help pre-launch founders build "distribution debt" early by engineering their authority through raw build-logs and community loops. if you wait until launch day to start posting, you’re already behind. we make sure you have an audience waiting before the code is even finished.',
  },
  {
    q: 'How long before I see results?',
    a: 'The first 30 days are about setup, ICP mapping, and early traction signals. Most clients start seeing meaningful engagement by week 3 to 4. Compounding results happen at the 60-to-90-day mark.',
  },
  {
    q: 'What is AEO and why does it matter?',
    a: 'AEO stands for Answer Engine Optimisation. It is about ensuring your product shows up when someone asks ChatGPT or Perplexity for recommendations in your category. It is the new SEO.',
  },
  {
    q: 'What if my product is very niche?',
    a: 'Niche products are often easier to distribute. There is usually a very specific community where your buyers hang out, and it is easier to become the go-to voice there than in broad markets.',
  },
  {
    q: 'How many clients do you work with at once?',
    a: 'We keep our client count low intentionally. At any given time, we work with no more than 8 to 10 active clients so every engagement gets real attention.',
  },
  {
    q: 'Do you need access to our product?',
    a: 'We will want to understand your product deeply. A demo call and continued access to any updates or new features helps a lot. We do not need admin access or technical credentials.',
  },
  {
    q: 'What happens after the 30-day pilot?',
    a: 'You get a full report of what we did, what worked, what we would double down on, and what we would stop. From there you can choose to continue on retainer, take it over yourself, or do nothing. No pressure.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const mid = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, mid)
  const rightFaqs = faqs.slice(mid)

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="label">FAQ</div>
        <h2 className="faq__h2">
          Questions founders
          <em>always ask us.</em>
        </h2>

        <div className="faq__grid">
          <div>
            {leftFaqs.map((item, i) => (
              <div
                className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
                key={i}
                onClick={() => toggle(i)}
              >
                <div className="faq__question">
                  <span>{item.q}</span>
                  <span className="faq__toggle">+</span>
                </div>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {rightFaqs.map((item, i) => {
              const idx = i + mid
              return (
                <div
                  className={`faq__item ${openIndex === idx ? 'faq__item--open' : ''}`}
                  key={idx}
                  onClick={() => toggle(idx)}
                >
                  <div className="faq__question">
                    <span>{item.q}</span>
                    <span className="faq__toggle">+</span>
                  </div>
                  <div className="faq__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
