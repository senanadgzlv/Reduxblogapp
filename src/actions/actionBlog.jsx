import { v4 as uuidv4 } from 'uuid';


//action start 
 export const addblog=({title,desc})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuidv4(),
    title:title,
    desc:desc,
   
  }
});

export const removeBlog=({id})=>({
type:"REMOVE_BLOG",
id:id
})


export const editBlog=(id,update)=>({
  type: "EDIT_BLOG",
  id,
  update,
  
})
//action end