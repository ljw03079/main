// router/router.js
// 여기서 uri == component 매칭.
import Home from '../components/home.js';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import ContactByNo from '../components/contactByNo.js';

const router = new VueRouter({
  routes: [
    // '/': 최상위 url 요청시 Home으로 연결
    {path: '/', component: Home},
    {path: '/home', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/contact',
     name: 'contact',
     component: Contact,
     children: [{path: ':no', component: ContactByNo}]
    },
    // children: 중첩된 라우팅
    //{path: '/contact/:no', component: ContactByNo}
    // /contact/:no => : 파라미터를 받겠다는 의미 (동적)
  ]
})

export default router;