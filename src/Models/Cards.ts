export type Card = {
    id: string;
    name: string;
    cardText: string;
    flavorText?: string;
    stats?: readonly [number, number];
};

export type CardsDict = {
    [key: string]: Card;
};

export const Cards: CardsDict = {
    "1": {
        id: "1",
        name: "Test1",
        cardText: "TestText TestText TestText TestText",
    },
    "2": {
        id: "2",
        name: "Test2",
        cardText: "TestText TestText TestText TestText",
        flavorText: "FlavorText FlavorText FlavorText"
    },
    "3": {
        id: "3",
        name: "Test3",
        cardText: "TestText TestText TestText TestText",
        stats: [2, 4],
    },
    "4": {
        id: "4",
        name: "Test4",
        cardText: "TestText TestText TestText TestText",
    },
};
