export class Plussallat {
    name: string;
    height: number;
    color: string;
    constructor(name: string, height: number, color: string, colors:string[]) {
        if (name == '' || typeof name != "string" || name == undefined || name == null) {
            throw new Error(`A név nics megfelelően megadva! : ${name}`);
        };
        if (typeof height != "number" || height == undefined || height == null || height <= 0 || height > 50) {
            throw new Error(`A magasság nics megfelelően megadva! : ${height}`);
        };
        if (typeof color != "string" || color == undefined || color == null || (!colors.includes(color))) {
            throw new Error(`A szín nics megfelelően megadva! : ${color}`);
        };
        this.name = name;
        this.height = height;
        this.color = color
    };
    toString () {
        return(`Név: ${this.name}, Magasság: ${this.height}, Szín: ${this.color}`);
    };
};