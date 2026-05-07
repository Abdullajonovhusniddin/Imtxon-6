export default function Culture ( ) {
    const cards = [
        {
            emoji:"😷",
            title:'Covid-19 insurance',
            explanation:'Through True Rich Attended does no end it his',
            continue: 'mother since real had halfdoes no end it'
        },

        {
            emoji:"⏱",
            title:'Flexible working time',
        },

        {
            emoji:"🏡",
            title:'Work from home',
        },

        {
            emoji:"🎉",
            title:'Annual retreats',
        },

        {
            emoji:"💰",
            title:'Learning stipend',
        },

        {
            emoji:"💪",
            title:'Gym membership',
        }
    ]
    return (
        <section className="bg-logoBarColor py-24 my-24">
            <div className="containers">
                <b className="pre-header">OUR WORK & CULTURE</b>
                <h1 className="main-header">
                    Come and join a team of highly <br /> 
                    skilled professionals.
                </h1>
                <p className="paragraph text-paragColor">
                    Through True Rich Attended does no end it his mother since real had half <br /> 
                    every him case in packages enquire we up ecstatic unsatiable saw his giving <br /> 
                    Remain expense you position concluded. 
                </p>
                <div className="grid grid-cols-3 gap-3 mt-16">
                    {cards.map(
                        card => 
                    <div className="bg-secondaryColor p-8">
                        <div className="w-10 h-10 rounded-full bg-[#FFD3AF80] flex items-center justify-center">
                            {card.emoji}
                        </div>
                    <h3 className="font-semibold leading-7 text-primaryColor my-2">
                        {card.title}
                    </h3>
                    <p className="paragraph text-[14px] text-paragColor">
                        Through True Rich Attended does no end it his <br /> 
                        mother since real had halfdoes no end it
                    </p>
                </div>
                    )}
                </div>
            </div>
        </section>
    )
}