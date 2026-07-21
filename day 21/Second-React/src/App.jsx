
import './App.css'
import childA from './ChildA'
let data=[
  {
    title : "cat title",
    desc:"this is cat",
    img:""
  },
  {
    title:"cow title",
    desc:"this is cow",
    img:""
  },
  {
    title:"dog title",
    desc:"this is dog",
    img:""
  }
]
function App() {
  let a = 20;
  return (
    <div>
      <h1 className >H1 tag</h1>
      <ChildA num={a} str={"hii"} isPassed={true} arr={[1,2,3,4,5]}/>
      </div>
  )
  }



export default App
