

export interface BarElement {
    id: number,
    title: string,
    clicked: boolean
}

export interface Elementt {
    checkClicked: CallableFunction,
    data: {
        id: number,
        title: String,
        clicked: boolean
    },
}

export interface Education {
    data: {
        id: number,
        location: string,
        diploma: string,
        date: string,
    },
}
export interface Experience {
    data: {
        id: number,
        company: string,
        task: string,
        date: string,
        description: String,
        _hoverOn:boolean
    },
}

export interface Service {
    data: {
        id: number,
        title: string,
        path: JSX.Element
    },
}

export interface Skill {
    data: {
        id: number,
        title: string,
        level: number,
    },
}

export interface Work {
    data: {
        id: number,
        title: string,
        text: string,
        language: [],
    },
}