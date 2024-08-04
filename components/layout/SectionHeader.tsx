import React from "react";

interface SectionHeaderProps {
  id?: string;
  pretitle: string;
  title: string;
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  pretitle,
  title,
  children,
}) => {
  return (
    <div className="container mx-auto" id={id}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              {pretitle}
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              {title}
            </h2>
            <p className="text-base text-body-color dark:text-dark-6 text-pretty">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
