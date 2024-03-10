import React from 'react';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <section className="p-20 pb-10 mt-10 pt-32 bg-black rounded-bl-4xl rounded-br-4xl animate-in slide-in-from-bottom">
      <div className="flex row justify-between items-center">
        <ul className="flex space-x-8 text-gray2 wow fadeIn text-xs">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Why Us</a>
          </li>
          <li>
            <a href="/">Platform</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <p className="text-4xl text-gray-light wow fadeIn">hello@ramos.com</p>
      </div>
      <hr className="border-gray2 h-2 mt-10 mb-10" />

      <div className="grid grid-cols-4 gap-4 wow fadeIn">
        <div className="text-gray-light">
          <p className="text-sm">Warrensville Heights</p>
          <p className="text-gray2 text-xs">
            14418 Vineyard Drive, NC <br /> 44128
          </p>
        </div>
        <div className="text-gray-light wow fadeIn">
          <p className="text-sm">Saint Louis</p>
          <p className="text-gray2 text-xs">
            1366 Penn
            <br /> Street
          </p>
        </div>
        <div className="col-span-2 text-right text-sm text-gray-light">
          <ul className="space-y-7 wow fadeIn">
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        <img
          src="/assets/img/logo.png"
          alt="Ramos Logo"
          className="wow fadeInUp duration-1000 delay-700"
        />

        <div className="text-gray2 flex row justify-end items-center col-span-2">
          <div className=" space-x-20 pr-32 wow fadeIn">
            <a href="/">Privacy policy</a>
            <a href="/">License agreement</a>
          </div>

          <img
            src="/assets/img/barcode.png"
            alt="Scan code"
            className="h-24 wow fadeInUp duration-1000 delay-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
