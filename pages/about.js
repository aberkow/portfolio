import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-prose">
      <h1>I'm Adam. Nice to meet you!</h1>
      <div>
        <p>I'm a web developer based in West Hartford Connecticut. Believe it or not, web development is my second career. Before that, I was a professional musician (performer/educator) for over 10 years. Now, I work full-time for <a href="https://communications.uconn.edu">UConn's office of University Communications</a>  and it's great! Every day I get to work on with an amazing (and small) team (2 other devs, 2 designers,and a project manager). Together we work on sites that get seen and used by thousands of people every day.</p>
        <p>
          My goals for this site are pretty simple.
        </p>
        <ul>
          <li>Share what I've learned so far</li>
          <li>Keep a record of things I've found interesting and/or challenging.</li>
          <li>Take part in the conversation other developers are having.</li>
        </ul>
        <p>
          Because we're such a small team, I've had the good fortune to work on a lot of different kinds of projects. So, what you'll find on this site is going to be a combination of lots of different things!
        </p>
        <p>
          I'd love to chat, share, and learn more about web development and programming. Feel free to reach out by:
        </p>
        <ul>
          <li>
            <Link href="/contact">Email</Link>
          </li>
          <li>
            <a href="https://github.com/aberkow">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/adamjberkowitz">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  )
}