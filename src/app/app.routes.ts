import type { Routes } from "@angular/router";
import { backfront } from "../detail-page/backfront/backfront";
import { Detail } from "../detail-page/detail-page";
import { stats } from "../detail-page/stats/stats";
import { type } from "../detail-page/type/type";
import { List } from "../list-page/list-page";

export const routes: Routes = [
  { path: "", component: List },
  { path: "detail", component: Detail },
  { path: "type", component: type },
  { path: "backfront", component: backfront },
  { path: "stats", component: stats },
];
