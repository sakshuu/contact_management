import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContactAction } from '../../redux/actions/userAction'
export default function AddContact() {
    const actionDispatch = useDispatch()
    const { login } = useSelector(state => state.allUsers) 
    const intialValue = {
        name: "Hayat",
        mobile: 98989889,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dSrJQ-5BmMQT3M0PkouuQXoSQ-lzBCq9mg&usqp=CAU",
                        }
    const [contactData, setcontactData] = useState(intialValue)
    const handleAddContact = () => {
        console.log(contactData);
        actionDispatch(addContactAction({...contactData, userId: login.id}))
    }
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                <div class="card-header">Add Contact</div>
                    <div class="card-body">
                        <div>
                            <label for="name" class="form-label">Firast name</label>
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
                            <label for="image" class="form-label">Image</label>
                            <input
                                type="text"
                                value={contactData.image}
                                onChange={e => setcontactData({ ...contactData, image: e.target.value })}
                                class="form-control"
                                id="image"
                                placeholder="Enter  Mobile" />
                        </div>
                        <button
                            onClick={handleAddContact}
                            type="button"
                            class="btn btn-primary w-100 btn-lg mt-3">Add Contact</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}

