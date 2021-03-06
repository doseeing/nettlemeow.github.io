export default class Post {
  title: string;
  _content: string;
  constructor(title: string, date: string, thumbnail: string) {
    this.title = title;
    this._content = `---\ntitle: ${title}\ndate: ${date}\nthumbnail: ${thumbnail}\n---\n`;
  }
  writeAVVideo(aid: string) {
    this._content += `{% bilibili_video ${aid} %}\n\n`;
  }
  writeText(text: string): void {
    this._content += text + "\n\n";
  }
  writeAVStat(aid: string): void {
    this._content += `{% meow_chart meow_chart_${aid} ${aid} %}\n\n`;
  }
  writeTable(
    columns: Array<string>,
    align: Array<string>,
    data: Array<Array<string>>
  ): void {
    let header = "|";
    columns.forEach(e => {
      header += ` ${e} |`;
    });
    header += "\n";
    let alignLine = "|";
    align.forEach(e => {
      alignLine += " --- |";
    });
    alignLine += "\n";
    let dataLines = "";
    data.forEach(line => {
      let s = "|";
      line.forEach(e => {
        s += ` ${e} |`;
      });
      dataLines += s + "\n";
    });
    this._content += header + alignLine + dataLines;
  }
  getContent() {
    return this._content;
  }
}
