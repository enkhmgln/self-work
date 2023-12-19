const About = () => {
  return (
    <div className="flex justify-between items-center gap-2 p-10 ">
      <div className=" pt-10 flex justify-center items-start flex-col ">
        <h2 className=" text-2xl font-medium py-1">
          Located in the heart of Gorkhi-Terelj National Park
        </h2>
        <p className=" text-sm font-serif font-thin py-2">
          Located in the heart of Gorkhi-Terelj National Park Set on the banks
          of Terelj River in a remote spot surrounded by wild, tree-covered
          mountains in the Gorkhi-Terelj National Park, Terelj Hotel is a
          comfortable sanctuary with a rejuvenating spa, a stunning heated
          indoor pool surrounded by columns, two restaurants and a cafe all
          within 50 kilometres of Mongolia’s capital city, Ulaanbaatar.
          Impressive marble floors, plush fabrics, antiques and pieces of
          contemporary Mongolian art create a polished edge to this elegant
          property set way off the beaten track. The rooms and suites at Terelj
          Hotel have a veranda with armchairs and warming cashmere blankets are
          provided in winter.
        </p>
        {/* <p>
          Visit the temples and museums at Ulaanbaatar including the Bogdkhan
          Palace Museum and the Gandantegchinlen Monastery. Then, go horse
          riding or trekking in the nearby hills. Discover more about the
          traditional life of the nomads who build gers, sturdy round tents, and
          tend their horses, sheep and camels. Back at Terelj Hotel, enjoy the
          sophisticated atmosphere of the Argali Cocktail Lounge with some
          delicious pre-dinner canapés.
        </p> */}
        <button>Read more</button>
        <span>Enjoy your stay!</span>
      </div>
      <div className="p-10">
        <h2 className="">52 ROOMS | 2 FLOORS | 3 RESTAURANTS</h2>
        <h4>4.8 /5</h4>
        <span>326 reviews</span>
        <div>{/* <Image /> */}</div>
      </div>
    </div>
  );
};

export default About;
