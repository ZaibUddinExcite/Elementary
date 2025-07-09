
export interface ElementData {
    number: number;
    symbol: string;
    name: string;
    color: string;
    category: string;
    frequency: number;
}

export interface WorkspaceElement extends ElementData {
    id: number;
    x: number;
    y: number;
}

export interface Compound {
    name: string;
    formula: string;
    commonName: string;
    structure: string;
    emoji: string;
    explanation: string;
    recipe: string;
}

export interface Compounds {
    [key: string]: Compound;
}

export interface Note {
    note: string;
    duration: number;
}
