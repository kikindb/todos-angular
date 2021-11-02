export class Todo {
  public id: string;
  public description: string;
  public isCompleted: boolean;

  constructor(id: string, description: string, isCompleted: boolean) {
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
  }
}