import React from "react";

class ChildComponent extends React.Component{

state = {
  showJob : false
}

hanldeShowJob = ()=>{
  this.setState({
    showJob : !this.state.showJob
  })
}

render()
{
  let {arrJob} = this.props
  let {showJob} = this.state
  console.log(">>><", this.state)
  return(
    <>
    {showJob === false ?
     <div>
        <button onClick={()=>this.hanldeShowJob()}>Hiện chi tiết</button>
     </div>
    :
     <>
     <div className="job-list">{
          arrJob.map((item, index)=>{
            return (
              <div key={index}>
                {console.log(item)}
                {item.job} -
                {item.Salary}
              </div>
            )
          } )
        }
      </div>
      
      <div>
        <button onClick={()=>this.hanldeShowJob()}>Ẩn</button>
      </div>
      </>
     }
      </>
  )}
  
}
// const ChildComponent = (props)=>{
//   const {arrJob} = props
//   return(
//     <>
//         <div>{
//           arrJob.map((item, index)=>{
//             return (
//               <div key={item.id}>
//                 {console.log(item)}
//                 {item.job} -
//                 {item.Salary}
//               </div>
//             )
//           } )
//         }
//         </div>
//         </>
//   )
// }
export default ChildComponent