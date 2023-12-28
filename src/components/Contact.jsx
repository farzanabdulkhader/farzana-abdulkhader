import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="md:px-36 lg:px-40 sm:px-24 xs:px-10 px-4  m-auto py-12 h-fit bg-neutral-900">
      <div className="text-neutral-100 m-auto">
        <h1 className="xs:text-xl text-lg text-neutral-100 mb-6 ">
          Hit me up!👇🏻
        </h1>
        <div className="flex items-center justify-start">
          <Link to="mailto:farzanabdulkhader@gmail.com">
            <div className="text-neutral-900 xs:w-10 xs:h-10 xs:text-2xl text-xl w-8 h-8 rounded-full inline-flex items-center justify-center bg-slate-100">
              <MdEmail />
            </div>
          </Link>
          <div className="xs:ps-4 ps-2">
            <p className="font-[600] xs:text-xl text-md">Mail</p>
            <a
              href="mailto:farzanabdulkhader@gmail.com"
              className="inline xs:text-sm text-xs"
            >
              farzanabdulkhader@gmail.com
            </a>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

export default Contact;
