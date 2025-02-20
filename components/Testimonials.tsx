import React from 'react'
import { Icons } from './icons';
import { Button } from './ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Testimonials = () => (
  <section className="relative py-24 sm:py-32 bg-white">
    <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
      <div>
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Success Stories
        </h2>
        <h1 className="text-center">What Our Users Say</h1>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {/* first freelancer review */}
        <div className="flex flex-auto flex-col gap-4 bg-blue-50 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
          <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
          </div>

          <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-blue-950 text-center lg:text-left text-pretty">
            This platform transformed my freelancing career! I've connected with clients worldwide and secured consistent projects. The process is smooth, and payments are secure.
          </p>

          <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
            <Image
              src="/images/user-2.png"
              className="rounded-full object-cover"
              alt="Freelancer"
              width={48}
              height={48}
            />
            <div className="flex flex-col items-center sm:items-start">
              <p className="font-semibold flex items-center">
                Emily Carter
                <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
              </p>
              <p className="text-sm text-gray-600">@emilydesigns</p>
            </div>
          </div>
        </div>

        {/* second client review */}
        <div className="flex flex-auto flex-col gap-4 bg-blue-100 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
          <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
            <Star className="size-5 text-blue-600 fill-blue-600" />
          </div>

          <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-blue-950 text-center lg:text-left text-pretty">
            Finding top-tier freelancers has never been easier. The platform ensures quality work, timely delivery, and a seamless hiring process. Highly recommended for businesses!
          </p>

          <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
            <Image
              src="/images/user-1.png"
              className="rounded-full object-cover"
              alt="Client"
              width={48}
              height={48}
            />
            <div className="flex flex-col items-center sm:items-start">
              <p className="font-semibold flex items-center">
                James Rodriguez
                <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
              </p>
              <p className="text-sm text-gray-600">@jamesinnovate</p>
            </div>
          </div>
        </div>
      </div>

      <Button
        className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
      >
        Get Started Today
      </Button>
    </MaxWidthWrapper>
  </section>

);

export default Testimonials