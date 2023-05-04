import { Router } from "./router.js"


const router = new Router()
router.add('/', "../pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/explorer", "./pages/explorer.html")
router.add(404, "./pages/404.html")
router.handle()

window.onpopstate = () => { 
  router.handle()
  backgroundAlternate()
}
window.route = () => {
  router.route()
  backgroundAlternate()
}

function backgroundAlternate (){
  const body = document.querySelector('body')
  let {pathname} = window.location
  let currentBackground
  
  switch(pathname) {
  
    case "/explorer":
      currentBackground = "./images/explorer.png"
    break
  
    case "/universe":
      currentBackground = "./images/universe.png"
     break
    
    default:
    currentBackground = "./images/background.png"
  }

  
    body.style.backgroundImage = `url('${currentBackground}')`
    console.log(pathname)
}

backgroundAlternate();


