export class Task {
  public id: number;
  public title: String;
  public description: String;
  public status: String;
  public createdAt: Date;

  constructor(
    id: number,
    title: String,
    description: String,
    status: String,
    createdAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
  }

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }
  public getDiscription() {
    return this.description;
  }
  public getStatus() {
    return this.status;
  }
  public getCreatedAt() {
    return this.createdAt;
  }
}
