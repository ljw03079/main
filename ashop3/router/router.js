// router.js

import Form from '../components/form.js';
import Main from '../components/main.js';


const router = new VueRouter({
  // mode: 'history' => url: 'http://127.0.0.1:5500/#/form'에서 #없이 'http://127.0.0.1:5500/form' 형태로 변경
  mode: 'history',
  routes: [
    {path: '/', name: "main", component: Main},
    {path: '/form', name: "form", component: Form},
    // 이외의 잘못된 요청이 들어오면 redirect
    {path: '*', redirect: '/'}
  ]
})

export default router