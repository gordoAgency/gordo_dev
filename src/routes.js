import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Clients from './components/Clients.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';


export const routes =[
  {path:'', component: Home},
  {path:'/clients', component: Clients},
  {path:'/team', component: Team},
  {path:'/about', component: About},
  {path:'/contact', component: Contact},
];
