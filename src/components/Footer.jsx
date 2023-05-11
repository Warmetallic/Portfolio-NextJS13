import FooterLogo from "./FooterLogo";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 px-8 py-3 fixed bottom-0 w-full z-40">
      <div className="max-w-6xl mx-auto flex justify-center items-center space-x-2 pb-2">
        <FooterLogo url={"https://github.com/warmetallic"} />
        <FooterLogo url={"https://www.linkedin.com/in/gleb-kharlamov/"} />
        <FooterLogo url={"https://www.instagram.com/warmetallic/"} />
        <FooterLogo url={"https://vk.com/warmetallic"} />
        <FooterLogo url={"https://t.me/Warmetallic"} />
      </div>
      <div className="justify-center items-center mx-auto max-w-6xl flex">
        <p className="text-sm">Copyright © {date}</p>
      </div>
    </footer>
  );
}

export default Footer;
