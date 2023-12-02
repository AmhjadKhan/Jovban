const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <img
              className="w-40 h-42 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8au3ZL-f2uP9JO72i9OrFaDwmUzpAL7tnoiD83d8oBqIL-Aqoypt5GCBb8ewbyZNCR5g&usqp=CAU"
              alt="logo"
            />
            <p className="font-bold">
              Take your drem job in website.
              <br />
              Providing reliable tech since 1987
            </p>
          </aside>
          <nav>
            <header className="footer-title font-extrabold">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title font-extrabold">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title font-extrabold">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  
