export class TodoItem {
    id: number;
    setTop: boolean;
    type: string;
    name: string;
    date: Date;
    notify: boolean;
    status?: number;
    description?: string;
    url?: string[];
}
