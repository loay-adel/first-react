import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Form() {
  return (
    <div>
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-2.5 sm:flex-row  mt-10 mb-5 w-full justify-center">
        <div className="w-[60%] ">
          <p className="my-2">
            Flex Template is based on Bootstrap v5.3 and it is provided by
            Goo-Web for free of charge. Slider images and portfolio images are
            from Unsplash website. Thank you for visiting. Please tell your
            friends about our awesome website.
          </p>
          <p className="my-2">
            Hic, suscipit, praesentium earum quod ea distinctio impedit ullam
            deserunt minus dolore quibusdam quis saepe aliquam doloribus
            voluptatibus eum excepturi. Aenean semper erat neque. Nunc et
            scelerisque nunc, in adipiscing magna.
          </p>
          <p className="my-2">
            Duis ullamcorper tortor tellus. Ut diam libero, ultricies non augue
            a, mollis congue risus. Fusce a quam eget nisi luctus imperdiet.
            Consectetur quod at aperiam corporis totam. Nesciunt minima laborum
            sapiente totam facere unde est cum quia.
          </p>
          <p className="my-2">
            Phone: 0111-955-4463 Email: gooweb@gmail.com Address: 10 NBE Bank
            building, Dokki Street, Giza
          </p>
        </div>
        <div className="flex flex-col gap-2.5 sm:w-[30%] items-center max-sm:w-[80%]">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="mail"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="subject"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea className="textarea" placeholder="Bio"></textarea>
          <button className="btn btn-primary w-[50%]">Primary</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between container px-10 mb-2.5">
        <h1>By Loay adel</h1>
        <div className="flex gap-3.5">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaWhatsapp />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <TiSocialFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}
