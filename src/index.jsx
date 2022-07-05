import React from 'react';
import  ReactDOM  from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./sass/style.css"
import { v4 as uuidv4 } from 'uuid';
import configureStore from './store/configureStore';
import { addblog,editBlog,removeBlog } from './actions/actionBlog';
import Approuter from './routers/Approuter';
import { Provider } from "react-redux";
import img2 from "../src/img/demo2.jpg"


const store=configureStore();







store.subscribe(()=>{
  console.log(store.getState());
})

  const blog1=store.dispatch(addblog({basliq:"Salam", aciqlama:"Necesen"}))
  const blog2=store.dispatch(addblog({basliq:"Senan",aciqlama:"Necesen"}))
 console.log(blog1.blog.id);
 store.dispatch(removeBlog({id:blog1.blog.id}));
 store.dispatch(editBlog(blog2.blog.id,{title:"The Art of Creating a Ritual for What Matters Most Abs exercises to work the deepest muscle in your core",desc: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.  Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.                   "}))
 store.dispatch(addblog({title:"30 Ethical Fashion Brands You Need to Know Thermal leggings that will make your outdoor workout warm and cozy",desc: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades. Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have   Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp.    "}))






const App = () => {
  return (
    <div> 
    Hello
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store} >
    <Approuter />
    </Provider>
    
  </React.StrictMode>
);


