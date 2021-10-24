import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/pages/Top/Top';
import LaunchLayout from "@/layouts/LaunchLayout/LaunchLayout";

const routes = [
  {
    path: '/',
    component: LaunchLayout,
    children: [
      {
        path: '',
        name: 'Top',
        component: Top,
      }
    ]
  }
]

//ルートから'#'を取り除いている？？
//ルーティング情報を扱っているルーターの生成
//ほぼ定型
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

