const Intro = () => {
    return (
        <div className="flex justify-between items-center flex-col md:flex-row gap-2 p-10 ">
            <div className={'md:px-4  md:w-1/2 w-[100%] h-[50vh] '}>
                <iframe src="https://drive.google.com/file/d/1V27WmcWybtlHrXUaq682C1jaI7dNaZwl/preview" width={'100%'}
                        height={'100%'} allow="autoplay" referrerPolicy={'no-referrer'}></iframe>
            </div>
            <div className="md:w-1/2 flex items-start flex-col ">
                <h2 className="text-xl md:text-2xl font-medium py-2">
                    Located in the heart of Gorkhi-Terelj National Park
                </h2>
                <p className="font-thin font-mono text-lg">
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
                <span className={'text-3xl italic  font-thin font-mono'}>Enjoy your stay!</span>
            </div>
        </div>
    )
}

export default  Intro;