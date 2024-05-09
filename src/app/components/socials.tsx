export function Socials() {
  return (
    <div className="flex-row gap-2">
      <div className="rounded-full border-solid border-white">
        <a
          href="https://www.instagram.com/diasrodr"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="rounded-full border-solid border-white">
        <a
          href="https://www.github.com/rdias66"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="rounded-full border-solid border-white">
        <a
          href="https://www.linkedin.com/in/rodrigo-dias-45009a242/"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}
