import React from 'react';

const services = ['Marketing', 'Graphic Design', 'App Development', 'Web Development'];
const about = ['About', 'Careers', 'History', 'Our Team'];
const support = ['FAQs', 'Contact', 'Live Chat'];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'GitHub', href: '#', icon: 'github' },
  { name: 'Dribbble', href: '#', icon: 'dribbble' },
];

const Footer = () => {
  return (
    <footer className="bg-[#101828] w-full text-gray-100 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Email Subscription */}
        <div className="mx-auto max-w-md text-center">
          <strong className="text-xl font-bold text-gray-300 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@doe.com"
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
              />
              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Footer Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-32">
          {/* About Text & Socials */}
          <div className="max-w-sm mx-auto text-center lg:text-left">
            <p className="text-gray-500 lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod
              eveniet aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {socialLinks.map(({ name, href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="text-gray-500 hover:text-gray-300 transition"
                >
                  {/* You should replace this with actual icon components */}
                  <svg className="w-6 h-6 fill-current" aria-hidden="true">
                    <use xlinkHref={`#icon-${icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <FooterColumn title="Services" links={services} />
            <FooterColumn title="About" links={about} />
            <FooterColumn title="Support" links={support} />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <strong className="font-medium text-gray-200">{title}</strong>
      <ul className="mt-6 space-y-1">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
