export class CellsSlide{
    constructor(url:string, title:string, brief:string, background:string){
        this.imgUrl = url;
        this.slideTitle = title;
        this.slideBrief = brief;
        this.titleBackgroundColor = background;
    }

    private _imgUrl:string;
    get imgUrl():string{
        return this._imgUrl;
    }
    set imgUrl(value){
        this._imgUrl = value;
    }

    private _slideTitle:string;
    get slideTitle():string{
        return this._slideTitle;
    }
    set slideTitle(value){
        this._slideTitle = value;
    }

    private _slideBrief:string;
    get slideBrief():string{
        return this._slideBrief;
    }
    set slideBrief(value){
        this._slideBrief = value;
    }

    private _titleBackgroundColor:string;
    get titleBackgroundColor():string{
        return this._titleBackgroundColor;
    }
    set titleBackgroundColor(value){
        this._titleBackgroundColor = value;
    }
}