import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'
import Contact from './views/Contact.vue'
import LogIn from './views/authentication/LogIn.vue'
import SignUp from './views/authentication/SignUp.vue'
import Blog from './views/Blog.vue'
import NewPost from './components/blog/NewPost.vue'

Vue.use(Router)

export const routes = [

    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact},
    {path: '/login', component: LogIn},
    {path: '/signup', component: SignUp},
    {path: '/blog', component: Blog},
    {path: '/blog/edit', component: NewPost}
  ]