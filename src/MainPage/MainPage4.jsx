import {React,useEffect,useState} from 'react';
import Sidebar from 'react-sidebar';
import {useHistory} from 'react-router-dom'
import Geolocation from './GeoLocation/Geolocation.jsx'
import { getDatabase } from "firebase/database";
const MainPage = () => {
  const [data, setData] = useState([]);
  const history=useHistory()
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  useEffect(() => {
    const databaseRef = getDatabase().ref();

    databaseRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    return () => {
      databaseRef.off();
    };
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const Addtask = async () => {
    const databaseRef = getDatabase().ref();

    await databaseRef.push({
      name: "John Doe",
      age: 30
    });
  };

  const Updatetask = async (id) => {
    const databaseRef = getDatabase().ref(`/${id}`);

    await databaseRef.update({
      age: 31
    });
  };

  const Deletetask = async (id) => {
    const databaseRef = getDatabase().ref(`/${id}`);

    await databaseRef.remove();
  };

  const butt=()=>{
    history.push('/ChatPage');
  }
  
  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>

      <Sidebar
        sidebarOpen={sidebarOpen}
        onSetSidebarOpen={setSidebarOpen}
        sidebarContent={<div>
          <div className="d-flex flex-column-reverse">
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"></div>
            <div className="p-2"><button className="button5" onClick={butt}>Click Here to Chat with our Guy</button></div>
            <div className="p-2"><Geolocation/></div>
            
          </div>
        
        </div>}
      />

      <main>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column mb-3">
            <div className="p-2"><h1>Add your task to your Todo list</h1></div>
            <div className="p-2"><button className="add" onClick={Addtask}> Add my task to do</button></div>
            <div className="p-2">
              {
                <ul>
                  {data.map((item, index) => (
                    <li key={index}>
                      {item.name} ({item.age})
                      <button onClick={() => Updatetask(item.id)}>Update</button>
                      <button onClick={() => Deletetask(item.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div className="p-2"><button className="delete" onClick={Deletetask}></button></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
