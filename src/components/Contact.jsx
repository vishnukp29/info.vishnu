import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IoIosCall, IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ReactWhatsapp from "react-whatsapp";

//Form schema
const formSchema = Yup.object({
  from_name: Yup.string().min(3).max(25).required("Please enter your name"),
  from_email: Yup.string().required("Please enter your email"),
  message: Yup.string().required("Please enter your Message"),
});

const initialValues = {
  from_name: "",
  from_email: "",
  message: "",
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("Sending email");
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_udgfu9o",
        "template_v9ums58",
        form.current,
        "9xUZ5oJfcEbBZ_Ev6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset()
  };

  const showAlert = () => {
    toast.success("Thank You For your Interest, We will get back to you soon");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,

      onSubmit: (values, action) => {
        console.log("onsubmit alert");
        action.resetForm();
        sendEmail();
        showAlert();
      },
    });

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Your Name"
              value={values.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="text-red-400 mb-2">
              {errors.from_name && touched.from_name ? (
                <p className="form-error">{errors.from_name} *</p>
              ) : null}
            </div>

            <input
              type="Email"
              name="from_email"
              id="from_email"
              placeholder="Your Email Address"
              value={values.from_email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="text-red-400 mb-2">
              {errors.from_email && touched.from_email ? (
                <p className="form-error">{errors.from_email}</p>
              ) : null}
            </div>

            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={10}
            ></textarea>
            <div className="text-red-400 mb-2">
              {errors.message && touched.message ? (
                <p className="form-error">{errors.message}</p>
              ) : null}
            </div>

            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
              
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <IoLocation />
              </div>
              <a
                href="https://www.google.com/maps/@12.972407,77.5047799,3a,75y,129.54h,110.55t/data=!3m6!1e1!3m4!1sHOx3jaTNg4SWHMlZkkmFkw!2e0!7i13312!8i6656?authuser=0&entry=ttu"
                className="md:text-base text-sm  break-words"
              >
                Bangalore
              </a>
            </div>

            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
              <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <IoIosMail />
              </div>
              <p
                className="md:text-base text-sm  break-words cursor-pointer">
                vishnukp2529@gmail.com
              </p>
            </div>

            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
              <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <IoLogoWhatsapp />
              </div>
              <ReactWhatsapp
                number="+91-9995-316-806"
                message="Hello !!!"
                className="md:text-base text-sm  break-words"
              >
                +91 9995 316 806{" "}
              </ReactWhatsapp>
            </div>

            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
              <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <IoIosCall />
              </div>
              <a
                href="tel:+91-7012-118-496"
                className="md:text-base text-sm  break-words"
              >
                +91 7012 118 496
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
