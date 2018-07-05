export class TodoItem {
    id: number;
    top: boolean;
    type: string;
    name: string;
    date: Date;
    notify: boolean;
    description?: string;
    url?: string[];
}
