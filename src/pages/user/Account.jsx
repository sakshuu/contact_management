import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
 import { getAllContacts, getAllDeleteContacts, getAllUpdateContacts } from '../../redux/actions/userAction'
export default function Account() {
    const actionDispatch = useDispatch()
    const { reduxContacts , login,updateContacts,deleteContacts} = useSelector(state => state.allUsers)
     useEffect(() => {
         actionDispatch(getAllContacts(login.id))
     }, [updateContacts,deleteContacts])
     
     const [contactData, setcontactData] = useState({
        show: false,
        name: "",
        mobile: "",
        image: "",
    })
    const handleUpdateData = arg => {
        setcontactData({ show: true, ...arg }) 
    }

    const handleUpdate = (id) => {
        const x = {...contactData} 
        setcontactData({ show : false})   
        actionDispatch(getAllUpdateContacts(id,x))
    }
    
    const handleDelete = (id) => {   
        actionDispatch(getAllDeleteContacts(id))
    }

    return <>
     <div class="container">
     <div class="row">
     <div class="col-6">
{ 
    reduxContacts.map(item => <div class="card my-3">
                <div class="card-body">
                    <img src={item.image}
                        alt=""
                        className='img-fluid rounded-circle'
                        height={100}
                        width={100}/>
                    <h4>{item.name}</h4>
                    <h5>{item.mobile}</h5>
                    <button  onClick={e => handleUpdateData(item)} type="button" class="btn btn-primary">Edit</button>
                    {/* <button onClick={e => handleDelete(item.id)} type="button" class="btn btn-danger">Delete</button> */}
                    <button type="button" data-bs-toggle="modal" class="btn btn-danger" data-bs-target="#myModal">Delete</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">You want to remove this <strong>{item.name}</strong> Contact </h5> 
        
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body d-flex gap-3">
        <button onClick={e => handleDelete(item.id)}
        type="button" class="btn btn-danger" data-bs-dismiss="modal">yes</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



                </div>
            </div>)
        }  
            </div>

            { contactData.show && 
            <div class="col-6 mt-3">
            <div class="card">
            <div class="card-header">Edit Add Contact</div>
                    <div class="card-body">
                        <div>
                            <label for="name" class="form-label">First name</label>
                            <input
                                type="text"
                                value={contactData.name}
                                onChange={e => setcontactData({ ...contactData, name: e.target.value })}
                                class="form-control"
                                id="name"
                                placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <label for="mobile" class="form-label">Mobile</label>
                            <input
                                type="text"
                                value={contactData.mobile}
                                onChange={e => setcontactData({ ...contactData, mobile: e.target.value })}
                                class="form-control"
                                id="mobile"
                                placeholder="Enter  Mobile" />
                        </div>
                        <div>
                            <label for="image" class="form-label">image</label>
                            <input
                                type="text"
                                value={contactData.image}
                                onChange={e => setcontactData({ ...contactData, image: e.target.value })}
                                class="form-control"
                                id="image"
                                placeholder="Enter  Mobile" />
                        </div>
                        <button type="submite"
                            class="btn btn-primary w-100 btn-lg mt-3" onClick={e => handleUpdate(contactData.id)}>Add Contact Update</button>
                    </div>
                </div>

        </div>
}
     </div>
         </div>
        </> 
}