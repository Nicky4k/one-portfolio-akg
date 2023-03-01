import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contactme = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // send email using EmailJS
  };

  return (
    <div className="h-screen flex relative  flex-col text-center md:text-left md:flex-rpw  max-w-7xl px-10  justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-yellow-500"> Lets Talk.</span>
        </h4>
        <div>
          <div className="flex items-center space-x-5  justify-center">
            <PhoneIcon className="text-yellow-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 9148669104</p>
          </div>
          <div className="flex items-center space-x-5 justify-center py-1">
            <EnvelopeIcon className="text-yellow-500 h-7 w-7 animate-pulse " />
            <p className="text-2xl">ashwinigupta0126@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-yellow-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Bengaluru, India</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInfo"
              type="text"
              name="name"
              id="name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInfo"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInfo"
            type="text"
            name="subject"
            id="subject"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="textAreaHtClip"
            name="message"
            id="message"
          ></textarea>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
