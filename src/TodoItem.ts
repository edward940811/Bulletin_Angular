export class TodoItem {
    Top : boolean;
    Type;
    Name: string;
    Date: Date;
    RelatedUrl: string;
    Description : string;
    TodoItem(top,type,name,date){
        this.Top = top;
        this.Type = type;
        this.Name = name;
        this.Date = date;
    }
}