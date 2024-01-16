import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" relative lg:mt-[10.88rem] mt-[4rem] padding-x ">
      <Image
        src="/assets/image/bubble.svg"
        alt=""
        width={400}
        height={400}
        className="absolute right-0 lg:-top-[11rem] bottom-0 z-[1] md:w-[35%] w-[50%]"
      />
      <div className="flex-between lg:flex-row flex-col-reverse w-full">
        <div className="lg:w-[60%] w-full lg:mt-0 mt-[3rem]">
          <h2 className="lg:mb-10 mb-2 font-bold lg:text-4xl md:text-2xl text-[1.35rem] lg:text-start text-center">Who Are We?</h2>
          <p className=" lg:text-xl md:text-base text-[0.9rem] md:leading-[1.75rem] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            nisi vel dui dignissim laoreet. Fusce eu turpis vel urna fermentum
            tincidunt. Sed id velit sed nisl cursus vestibulum. Duis tincidunt
            urna ac justo cursus, a efficitur urna feugiat. Suspendisse potenti.
            Quisque vel augue in purus volutpat vestibulum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nulla facilisi. Proin vehicula, purus ut convallis
            feugiat, quam odio convallis ligula, nec venenatis nunc elit vel ex.
            Sed interdum, ligula vel efficitur feugiat, odio turpis lacinia
            mauris, et vestibulum nulla quam a ex.
            <br />
            <br />
            Phasellus nec dictum elit. Curabitur a risus ac lacus fringilla
            congue. In hac habitasse platea dictumst. Sed imperdiet, ligula vel
            congue dictum, dui metus aliquet nisl, vitae bibendum tellus metus
            id velit. Aenean non eros vitae elit tincidunt tincidunt. Maecenas
            vestibulum sapien vitae efficitur malesuada. Vivamus auctor, libero
            et tincidunt dictum, odio justo viverra odio, eu feugiat nisl libero
            nec metus. Nunc auctor eros ac odio imperdiet, a interdum odio
            facilisis. Sed aliquet elit nec mauris varius, vel fermentum elit
            sodales.
          </p>
        </div>
        <div className="lg:w-[35%] w-full flex-center md:flex-col flex-row">
          <div className=" flex-center relative md:ml-8">
            <Image
              src="/assets/image/hero-logo.png"
              alt="Tekskillup"
              width={220}
              height={250}
              className="md:w-full w-[65%]"
            />
            <div className=" rounded-2xl absolute md:-right-[.38rem] right-4 top-[42%] h-[50%] md:w-[30%] w-[25%] bg-white"></div>
          </div>
          <span className=" font-bold lg:text-[5rem] md:text-[3rem] text-[1.8rem] relative md:right-0 right-4 lg:top-0 top-2">Tekskillup</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;