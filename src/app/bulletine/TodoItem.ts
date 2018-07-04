export class TodoItem {
    id: number;
    isTop: boolean;
    type: string;
    name: string;
    date: Date;
    notify: boolean;
    description?: string;
    url?: string[];
}
