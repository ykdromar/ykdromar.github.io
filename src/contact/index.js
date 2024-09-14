import React from "react";
import { useForm } from "react-hook-form";
import { addData } from "../config/firestore";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mb-4 p-5"
    >
      <h1 className="text-3xl font-bold my-4">Get in touch</h1>
      <form
        onSubmit={handleSubmit((data) => {
          addData("contact", data);
          toast.success("Message sent");
          reset();
        })}
        className="flex flex-col items-center justify-center w-5/6"
      >
        <label className="w-3/5 form-control my-0 px-2 ">
          <div className="label">
            <span className="label-text text-base">What is your name?</span>
          </div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="input input-bordered w-full min-w-48"
          />
        </label>
        <label className="w-3/5 form-control my-0 px-2">
          <div className="label">
            <span className="label-text text-base">What is your email?</span>
          </div>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="input input-bordered w-full min-w-48"
          />
        </label>
        <label className="w-3/5 form-control my-0 px-2">
          <div className="label">
            <span className="label-text text-base">
              What is your mobile number?
            </span>
          </div>
          <input
            type="tel"
            {...register("mobile", { required: true })}
            placeholder="Your Mobile Number"
            className="input input-bordered w-full min-w-48"
          />
        </label>
        <label className="form-control w-3/5 my-0 flex-1 px-2">
          <div className="label">
            <span className="label-text text-base">What is your message?</span>
          </div>
          <textarea
            {...register("message", { required: true })}
            type="text"
            placeholder="Your Message"
            className="input input-bordered w-full h-40 min-w-48"
          />
        </label>
        <button type="submit" className="btn btn-neutral mt-3 mx-5">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
