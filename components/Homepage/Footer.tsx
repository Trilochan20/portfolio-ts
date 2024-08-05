const Footer: React.FC = () => {
  return (
    <div className="relative">
      <div className="dark:bg-gray-900 bg-gray-100">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col justify-between pt-5 pb-5 sm:flex-row">
            <p className="text-sm text-gray-500 font-jose">
              © Copyright {new Date().getFullYear()} || All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
