import React from 'react';

interface FooterProps {
  data: {
    name: string;
    contact: string;
    address: string;
    languages: string[];

    ui_labels: {
      footer: {
        title: string;
        subtitle: string;
        button: string;
        contact_title: string;
      };
    };
  };
}

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#0067b8_0%,#018ee4_50%,#6ae5fc_100%)] text-transparent bg-clip-text">
    {children}
  </span>
);

const Footer: React.FC<FooterProps> = ({ data }) => {
  const [email, phone] = data.contact.split(' | ');
  const footer = data.ui_labels.footer;

  return (
    <footer id="contact" className="pb-12 sm:py-20 sm:pb-4 bg-[#F7F7F7] text-[#333131]">
      <div className="max-w-3xl mx-auto pb-18 px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-[#333131] sm:text-4xl mb-4">
            <GradientText>{footer.title}</GradientText>
          </h2>

          <h2 className="text-lg font-medium sm:text-lg text-[#333131]">
            {footer.subtitle}
          </h2>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-[4px] text-white bg-black hover:bg-gray-200 hover:text-[#333131] transition-colors">
            {footer.button}
          </a>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-16 flex flex-col items-center text-center">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              {footer.contact_title}
            </h4>

            <div className="mt-2 text-gray-600 flex flex-col space-y-1 text-sm items-center">
              <a href={`mailto:${email}`} className="text-sm font-regular text-[#0067B8] underline">
                {email}
              </a>

              <p className="mt-2 text-sm text-gray-600">
                {data.address}
              </p>

              <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm font-regular text-[#0067B8] underline">
                {phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 py-5 flex items-center justify-center text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;