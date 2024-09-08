const AboutInfo = () => {
  return (
    <div className="flex items-center mt-10 px-20">
      <div className="flex flex-col w-[55%]">
        <div className="text-3xl font-bold text-mine-shaft-900 [&>span]:text-keppel-400">
          Empowering Communities Through{" "}
          <span>Compassion, Unity, and Service</span>
        </div>
        <div className="text-mine-shaft-900 [&>span]:text-keppel-400 [&>span]:font-semibold">
          Welcome to <span>Al Ansar Foundation</span>, where our mission is to
          create lasting impact through dedicated service and unwavering
          compassion. We are committed to supporting communities, fostering
          unity, and providing essential resources to those in need. Join us in
          our journey to make a difference and build a brighter future for all.
        </div>
        <div></div>
      </div>
      <div className="w-[45%] flex items-center justify-center">
        <div>
          <img className="w-[30rem]" src="/images/aboutimg.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutInfo;
