import type { Routes } from "@angular/router";
import { Backfront } from "../detail-page/backfront/backfront";
import { Detail } from "../detail-page/detail-page";
import { Stats } from "../detail-page/stats/stats";
import { Text } from "../detail-page/textSprite/textSprite";
import { Type } from "../detail-page/type/type";
import { List } from "../list-page/list-page";

export const routes: Routes = [
  { path: "", component: List },
  { path: "detail", component: Detail },
  { path: "type", component: Type },
  { path: "backfront", component: Backfront },
  { path: "stats", component: Stats },
  { path: "text", component: Text },
];
