export function Contact() {
  return (
    <div className="flex flex-col items-center gap-2.5 mt-10">
      <h1 className="uppercase text-4xl font-bold relative pb-4 after:w-full after:h-1.5 after:absolute after:bg-blue-400 after:bottom-0 after:left-0 after:rounded-2xl">
        CONTACT
      </h1>
      <p className="my-4">SEND A MESSAGE TO US</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1494.6304037253756!2d31.220846847689423!3d30.04688145781662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d742740d01%3A0x165a1729ce2ea25b!2z2YXYsdmD2LIg2KfZhNiq2LnZhNmK2YUg2KfZhNmF2K_ZhtmKINio2KfZhNis2LLZitix2Kk!5e0!3m2!1sen!2seg!4v1739292103003!5m2!1sen!2seg"
        width="90%"
        height="550"
        allowFullScreen
        loading="lazy"
        className="rounded-2xl"
      ></iframe>
    </div>
  );
}
