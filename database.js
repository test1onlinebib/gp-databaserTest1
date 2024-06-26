//Database og
var verDatabase = "og"
var database = [
    {
        name: "Rækkefølge bestemmer",
        type: "Artikel",
        description: "om Gp",
        theme: ["Banker", "Klima"],
        rating: 0      
    },
    {
        name: "Artikel om Gp 3",
        type: "Artikel",
        description: "om Gp",
        theme: ["Bank", "Penge"],
        rating: 3
        // andre ideer:
        //    nivau
        //    forfatter
        //    sprog
            
    },
    {
        name: "Bog om Gp",
        type: "Bog",
        description: "om Gp",
        theme: ["Bank", "Konto"],
        rating: 7
    },
    {
        name: "Bog om Gp",
        type: "Bog",
        description: "om Gp",
        theme: ["Magt", "Politik"],
        rating: 5
    },
    {
        name: "Film om Gp",
        type: "Film",
        description: "om Gp",
        theme: ["Konto", "Mønter"],
        link: "https://www.godepenge.dk",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1504866538092-9067D0H0IV2X0WUH6ZSX/GP_Logo_hjemmeside2.png?format=1500w"
    },
    {
        name: "Podcast om Gp",
        type: "Podcast",
        description: "om Gp",
        
    },
    {
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-29",
        authors: "Mads Thunestvedt, Andrea Thorup",
        theme: ["Banker", "Klima", "Grøn omstilling", "Pengeskabelse"],
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution, som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.",
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w"
    },
    {
        name: "Hvis du ikke hopper på boligstigen bliver du kørt over af bankernes pengemaskine",
        type: "Artikel",
        rating: 10,
        price: 0.00,
        date: "2021-11-04",
        theme: ["Boligmarkedet", "Pengeskabelse", "Corona", "Bolig bobler"],
        description: "Under corona stiger boligpriserne igen eksplosivt, og før eller siden brister boblen formodentlig. Bankerne skaber nemlig nye penge, når de udsteder lån, og for at undgå en ny krise må vi føre pengeskabelsen tilbage til Nationalbanken, skriver Jonas Jensen-Dharmaratne, der er formand for Gode Penge, og Ib Ravn, lektor ved Aarhus Universitet, i denne kronik",
        link: "https://www.godepenge.dk/analyser/2021/11/4/hvis-du-ikke-hopper-p-boligstigen-bliver-du-krt-over-af-bankernes-pengemaskine",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/01d40260-a092-4e7d-a2f7-9bc740c24666/unsplash-image-ifeqg7RgkiA.jpg?format=1000w"
    },
    {
        name: "How financial bubbles are fueled by money creation a.k.a. bank lending: An explanation for public education",
        type: "Artikel",
        rating: 8,
        price: 0.00,
        date: "2021",
        theme: ["Pengesystem", "Pengeskabelse", "Økonomiske bobler", "English"],
        description: "It is widely acknowledged that the build-up of a financial bubble coincides with and may even be caused by excessive bank credit or lending (e.g., Reinhart and Rogoff, 2009; Kindleberger and Aliber, 2011; Jordà, Schularick and Taylor, 2015). Equally well understood, at least to the readers of this journal, is the fact that commercial bank lending involves money creation (Werner, 1997, 2014a, b; Ryan-Collins et al., 2011; McLeay et al., 2014; Jakab and Kumhoff, 2019).",
        link:"https://static1.squarespace.com/static/587382daebbd1a717d8e9df3/t/6169beeeaa430d291d07932d/1634320111221/How_financial_bubbles_are_fueled_Ib_Ravn.pdf",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634985684931-GQ8880SKK8PEIC1QLHYU/2markus-spiske-qR-Dj7c2ilk-unsplash.jpg?format=500w"
    },
    {
        name: "Banker låner ikke bare penge ud - de skaber dem",
        type: "Artikel",
        rating: 10,
        price: 4.00,
        date: "2021-12-16",
        theme: ["Demokrati", "Pengeskabelse", "Pengesystem", "Banker"],
        description: "Vi tror, vi ved, hvordan banker fungerer – og at systemet er stabilt. Men nyere forskning peger på, at bankernes forunderlige evne til at skabe penge gennem udlånet pumper priserne på fx boligmarkedet op, indtil bankerne og somme tider hele systemet falder sammen. Derfor er det elementært demokratisk behov, at vi får en bedre forståelse af, hvordan penge skabes – og hvordan de er med til at skabe boligbobler og finanskriser.",
        link: "https://www.godepenge.dk/analyser/2021/10/17/banker-lner-ikke-bare-penge-ud-de-skaber-dem",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/1634465043055-HO11FDBTGRUKR7ZVIM7V/photo-1501167786227-4cba60f6d58f.jpg?format=500w"
    }
];
