import Vue from 'vue'
import VueRouter from 'vue-router'


// 懒加载
const Index = () => import("views/find/Index")
const Profile = () => import("views/profile/Profile")
const Friend = () => import("views/friend/Friend")
const Shopping = () => import("views/shopping/Shopping")
const Music = () => import("views/music/Music")
const Phone = () => import("views/phone/Phone")

const Recomm = () => import("views/find/child/recommend/Recomm")
const Rank = () => import("views/find/child/rank/Rank")
const Song = () => import("views/find/child/music/Song")
const Radio = () => import("views/find/child/radio/Radio")
const Pelope = () => import("views/find/child/musicer/Pelope")
const NewMusic = () => import("views/find/child/newmusic/NewMusic")

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect:"/index"
   
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '',
        redirect: 'recomm'
      },
      {
        path: 'recomm',
        component: Recomm
      },
      {
        path: 'rank',
        component: Rank
      },
      {
        path: 'song',
        component: Song
      },
      {
        path: 'radio',
        component: Radio
      },
      {
        path: 'pelope',
        component: Pelope
      },
      {
        path: 'newmusic',
        component: NewMusic
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/friend',
    component: Friend,
  },
  {
    path: '/shopping',
    component: Shopping,
  },
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/phone',
    component: Phone,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
