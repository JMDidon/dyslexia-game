import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form';
import CompanionChoice from '@/components/CompanionChoice';
import Game10 from '@/components/Game10';
import GameAssessment from '@/components/GameAssessment';
import ParentsInfo from '@/components/ParentsInfo';
import Welcome from '@/components/Welcome';
import Tips from '@/components/Tips';
import DragAndDrop from '@/components/DragAndDrop';
import GameList from '@/components/GameList';
import Welcome from "@/components/Welcome";
import Portal from '@/components/Portal';
import EndGame from '@/components/EndGame';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/DragAndDrop',
      name: 'DragAndDrop',
      component: DragAndDrop
    },
    {
      path: '/gamelist',
      name: 'gamelist',
      component: GameList
    },
    {
      path: '/companion',
      name: 'CompanionChoice',
      component: CompanionChoice
    },
    {
      path: '/game10',
      name: 'Game10',
      component:Game10
    },
    {
      path: "/gameAssessment",
      name:"GameAssessment",
      component: GameAssessment
    },
    {
      path: "/parentsInfo",
      name:"ParentsInfo",
      component: ParentsInfo
    },
    {
      path: "/portal",
      name:"Portal",
      component: Portal
    },
    {
      path: "/end-game",
      name:"EndGame",
      component: EndGame
    },
  ]
})
