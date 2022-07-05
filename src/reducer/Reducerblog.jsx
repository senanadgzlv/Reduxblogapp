
//reducer start
const globalState=[]
const blogReducer=((state=globalState, action)=>{
  switch (action.type) {
    case "ADD_BLOG":
      
    return[
   ...state,
   action.blog
   
  ]
  //remove hissesi
case "REMOVE_BLOG":
  return state.filter(({id})=>{
    return id != action.id;
  })

  //edit hissesi
  case "EDIT_BLOG":
    return state.map((blog)=>{
      if(blog.id == action.id){
        return{
          ...blog,
          ...action.update
        }
      }else{
        return blog;
      }
    })


  
    default:
return state;
  }
})

//reducer end
export default blogReducer