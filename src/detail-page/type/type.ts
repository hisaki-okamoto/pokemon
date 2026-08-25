/** biome-ignore-all lint/complexity/useLiteralKeys:a*/
import { Component, Input, type SimpleChanges } from "@angular/core";
import { type pokemonType, typeColor } from "../../app/utils/typeColor";

@Component({
  selector: "type",
  imports: [],
  standalone: true,
  templateUrl: "./type.html",
  styleUrl: "./type.css",
})
export class Type {
  @Input() dataType: string[] = [];
  getType: string[] = [];
  color: string[] = [];

  keepType: string[] = [];

  colorSet() {
    //前のデータを消す
    this.getType.length = 0;
    //親から受け取ったデータをコピー
    //inputで受け取ると型が違うらしい？
    this.getType = [...this.dataType];
    //再読み込みの時データがうまく受け取れない
    //前に表示してたものをもう一度入れる
    if (this.getType.length === 0) {
      this.getType = this.keepType;
    }
    //データ保持用
    //一度リセットしてからデータを入れる
    this.keepType.length = 0;
    this.keepType = this.getType;
    //一つずつ色データを作る
    for (let i = 0; i < this.getType.length; i++) {
      this.color[i] =
        `background-color:${typeColor(this.dataType[i] as pokemonType)}`;
    }
    //inputのところをリセットしないとタイプが増える
    this.dataType.length = 0;
  }

  ngOnChanges(changeges: SimpleChanges) {
    if (changeges["dataType"]) {
      this.colorSet();
    }
  }
}
