type SectionHeadingProps = {
    title: string;
    subTitle: string;
    isAlternativeDisplay?: boolean;
};

export default function SectionHeading({ title, subTitle, isAlternativeDisplay = false}: SectionHeadingProps){
    
    if (isAlternativeDisplay){
        return <AlternativeHeading title={title} subTitle={subTitle} isAlternativeDisplay={isAlternativeDisplay}/>;
    }
    return <DefaultHeading title={title} subTitle={subTitle} isAlternativeDisplay={isAlternativeDisplay}/>

}

function DefaultHeading({ title, subTitle}: SectionHeadingProps){
    return (
        <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{ title }</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">{ subTitle }</p>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
            </div>
        </div>
    )
}

function AlternativeHeading({ title, subTitle}: SectionHeadingProps){
    return (    
        <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h1>
                <div className="h-1 w-20 bg-pink-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{subTitle}</p>
        </div>
    )
}