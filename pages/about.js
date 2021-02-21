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
        <h2>Things I use</h2>
        <p>Here are some of the tools I use for web development.</p>
        <ul>
          <li>Hardware</li>
          <ul>
            <li>MacBook Pro</li>
            <li><a href="https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.920-009166.html">Logitech Ergo K860 keyboard</a></li>
            <li><a href="https://www.logitech.com/en-us/products/mice/mx-master-3-mac-wireless-mouse.910-005693.html?crid=7">Logitech MX Mouse</a></li>
          </ul>
          <li>Software</li>
          <ul>
            <li><a href="https://www.docker.com">Docker</a></li>
            <li><a href="https://brew.sh/">Homebrew</a></li>
            <li><a href="https://iterm2.com/version3.html">iTerm</a></li>
            <li><a href="https://www.sequelpro.com/">Sequel Pro</a></li>
            <li><a href="https://panic.com/transmit/">Transmit</a></li>
            <li><a href="https://code.visualstudio.com/">VSCode</a></li>
            <li><a href="https://ohmyz.sh/">zsh</a></li>
          </ul>
          <li>Other interesting stuff</li>
          <ul>
            <li><a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono Font</a></li>
            <li><a href="https://monokai.pro/">Monokai Pro VSCode Theme</a></li>
          </ul>
        </ul>
      </div>
    </div>
  )
}