export class Task {
  public id: number | null;
  public title: String;
  public description: String;
  public status: String;
  public createdAt: Date | null;

  constructor(
    id: number | null,
    title: String,
    description: String,
    status: String,
    createdAt: Date | null
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
