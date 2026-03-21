export function Nav() {
  return (
    <nav className="nav">
      <div className="nw">
        BLACK DIAMOND <span>CYBER</span>
      </div>
      <div className="nl">
        <a href="#work">Work</a>
        <a href="#pricing">Pricing</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
      </div>
      <a href="/free-audit" className="nl-audit">Free Audit</a>
      <a href="#book" className="nc">
        Free Consultation
      </a>
    </nav>
  );
}
