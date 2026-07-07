import ListCard from '../components/ListCard';
import { useState,useEffect } from 'react';
import {deleteUser, getUsers,getUserById} from '../services/user_services';
import UserForm from '../components/UserForm';

export default function User(){
  const [users,setUsers] = useState([]);
  const [selectedUser,setSelectedUser] = useState(null);
  //const [isEditing,setIsEditing] = useState(false);
  async function loadUsers(){
    try{
      const response = await getUsers();
      setUsers(response.data.data);
    }
    catch(error){
      console.log(error.message)
    }
  }
  async function handleDelete(id){
    try{
      await deleteUser(id);
      //fetchUsers();
      await loadUsers();
    }
    catch(error){
      console.log(error.message);
    }
  }
  async function handleEdit(id){
    try{
      const response = await getUserById(id);
      setSelectedUser(response.data.data);
    }
    catch(error){
      console.log(error.message);
    }
  }
  useEffect(()=>{
    loadUsers();
  },[]);


  return(
    <>
    <div className="flex w-full h-screen justify-center items-center font-mono">
      <div className="bg-gray-100 w-1/3 p-5">
      <div className="text-center underline my-1.5">Users List</div>
      <UserForm
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        fetchUser={loadUsers}
      />
      <div className='pt-5'>
      {/*{users.map((user)=>(<ListCard key={user._id} data={user} onDelete={handleDelete}/>))}*/}
      {users.length === 0 ? (
        <div className='text-center'>No Users Found</div>
      ): (users.map((user)=>(
        <ListCard key={user._id} data={user} onDelete={handleDelete} onEdit={handleEdit}/>
      )))}
      </div>
    </div>
    </div>
    </>
  );
}

