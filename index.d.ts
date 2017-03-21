/**
 *  node-steamid typings : https://github.com/DoctorMcKay/node-steamid
 */
declare class SteamID {
    constructor(id: string);

    isValid() : boolean;
    getSteam2RenderedID(useNewFormat: boolean): string;
    steam2(useNewFormat: boolean): string;
    getSteam3RenderedID(): string;
    steam3(): string;
    toString() : string;
    getSteamID64(): string;
}

declare module "steamid" {
    export  = SteamID;
}


