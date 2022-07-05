import React, { Component } from 'react'

export class Blogform extends Component {
    constructor(props){
        super(props);
        this.state={
          title:props.editblog? props.editblog.title:"",
          desc:props.editblog? props.editblog.desc:"",
          err:""
      }
}
onTitleChange=(e)=>{
    const title=e.target.value;
    this.setState(()=>({title}))
}

onDescChange=(e)=>{
    const desc=e.target.value;
    this.setState(()=>({desc}))
}
onTesdiq=(e)=>{
    e.preventDefault();
    if (!this.state.title || !this.state.desc) {
        this.setState({err: "Xanalari doldurun!"})
    }else{
        this.setState({err:""})
        this.props.onFormSubmit({
            title: this.state.title,
            desc: this.state.desc
        })
    }
}

  render() {


    return (
        <div>
        {this.state.err && (
            <p className='alert alert-danger'>{this.state.err}</p>

        )}
    <form onSubmit={this.onTesdiq}>
    <div className="mb-3">
      <label className="form-label">Add Title</label>
      <input onChange={this.onTitleChange} type="text" value={this.state.title} className="form-control"  />
    </div>
    <div className="mb-3">
      <label  className="form-label">Add Description</label>
      <input onChange={this.onDescChange} type="text" value={this.state.desc} className="form-control" />
    </div>
    
    <button type="submit" className="btn btn-primary">Save</button>
  </form>
  </div>
    )
  }
}

export default Blogform