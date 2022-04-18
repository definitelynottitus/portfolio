import { CardItem } from "./components/CardItem";

export const Works = () => {
    return (
        <div className="bg-slate-600 px-[12%] text-neutral-100">
            <h1 id="Works" className="text-7xl mb-20 scroll-mt-40 font-bold">Projects</h1>
            <ul className="flex gap-5 flex-wrap pb-10 pl-2 pr-2">
                {cardData.map(card => {
                    return (
                        <CardItem
                            id={card.id}
                            key={card.id}
                            title={card.title}
                            bodytext={card.bodytext}
                            categories={card.categories}
                            link={card.link}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

const cardData = [
    {
        id: 'ea_project',
        categories: ['R', 'RShiny'],
        title: "Topic Modeling Dashboard for EA",
        bodytext: "I was the lead data analyst in this group semester project where I used my knowledge in data science to take on the challenge of finding useful player feedback in a compiled text-based dataset for EA's community playtest team. Using R, a text corpus was created using preprocessed raw text data and was used to generate a document feature matrix for modelling. Making use of natural language processing models, such as Latent Dirichlet Allocation and Structural Topic Modeling, we were able to discover hidden trends among player feedback. Lastly, I developed and deployed a front-end user interface using Shiny from Rstudio to allow users to extract insight from any text dataset using natural language processing models.",
        link: "https://titusl.shinyapps.io/topic_modeling_demo/"
    },
    {
        id: "healthcanada",
        categories: ["R", "Python"],
        title: "Canada Drug Shortage Report",
        bodytext: "This report highlights some of the causes of drug shortages in Canada and other statistics around them. I produced this report that is limited to two pages only with government databases as a final project for my undergraduate business class about customer analytics. I found the problem of drug shortage particularly interesting because drug shortage has a large impact on the health of Canadians. If this also piques your interest, please click on the title to view the full report.",
        link: "/Drug_Shortage_Report_By_Titus_Liu.pdf"
    }
]