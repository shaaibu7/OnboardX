import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/435ad68e2741896919820b350185cafe.png"
const LandingPage = () => {
  return (
    <section class="bg-white bg-cover h-screen pt-20 ">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 font-wix text-4xl font-bold tracking-tight leading-none md:text-2xl xl:text-6xl dark:text-black">
            Simplify Employee Onboarding, Amplify Team Success
          </h1>
          <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black font-medium mt-6 font-montserrat">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            to={"register"}
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-blue-950 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Register
          </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Image1} alt="mockup"/>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
