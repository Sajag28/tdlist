import { React } from 'react'
import { useHistory } from 'react-router-dom'
const Homepage1 = () => {
  const history = useHistory();
  // const head = () => {
  //   history.push('/MainLogin')
  // }
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex align-items-center">
        <button className="button6" onClick={()=>history.push('/MainLogin')}><h3>Click here to proceed to the content</h3></button>
      </div>
    </div>
  )
}
export default Homepage1;