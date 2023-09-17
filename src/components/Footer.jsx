import favicon from '../assets/images/favicon.svg';

const Footer = () => {
  return (
    <div className="bg-[#faf1ed]">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 text-gray-800">
          <div className="col-span-12 lg:col-span-8 space-y-2 text-dark">
            <div className="flex space-x-3">
              <img src={favicon} alt="" className="h-10 w-10" />
              <div>
                <p className="text-xs">
                  © 2023 Your News Hub All rights reserved.
                </p>
                <div className="flex flex-wrap">
                  {[
                    "Terms of Use",
                    "Privacy and Cookies Statement",
                    "Cookie consent",
                    "How the site works",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[0.8em] md:text-sm font-bold underline mr-2"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-[0.7em] md:text-xs w-full space-y-3">
              <p>
                Stay updated with the latest news from around the world. Your
                trusted source for breaking news, analysis, exclusive
                interviews, and more.
              </p>
              <p>
                Our team of dedicated journalists is committed to delivering
                accurate and timely information to our readers. Explore our
                extensive coverage of politics, business, technology, sports,
                entertainment, and more.
              </p>
              <p>
                Join our community of informed readers and be part of the
                conversation. Your News Hub is your gateway to the world's top
                stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
