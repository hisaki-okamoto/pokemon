import type { Routes } from "@angular/router";
import { Detail } from "../detail-page/detail-page";
import { List } from "../list-page/list-page";

export const routes: Routes = [
  { path: "", component: List },
  { path: "detail", component: Detail },
];
