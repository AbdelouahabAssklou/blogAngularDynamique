export class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;

  constructor(title, content, loveIts = 0, created_at = new Date()) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}
