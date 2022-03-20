export class LinkMainMenu{
    constructor(name:string, path:string){
        this._linkName = name;
        this._linkPath = path;
    }

    private _linkName:string;
    get linkName():string{
        return this._linkName;
    }

    private _linkPath:string;
    get linkPath():string{
        return this._linkPath;
    }
}