import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { userLoginAction } from '../redux/actions/userAction'

export default function Login() {
    const { reduxUsers, login } = useSelector(state => state.allUsers)
    const actionDispatch = useDispatch()
    const navigate = useNavigate()
    const [logindData, setlogindData] = useState({
        email: "john@gmail.com",
        password: "123"
    })

    const handleLogin = () => {
        actionDispatch(userLoginAction(logindData))
    } 
    useEffect(() => {
        // actionDispatch(getAllUserAction())
        if (login) {
            navigate("/user/Account")
        }
    }, [login])
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div>
                            <label for="email" class="form-label">First Email</label>
                            <input
                                type="text"
                                value={logindData.email}
                                onChange={e => setlogindData({ ...logindData, email: e.target.value })}
                                class="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                value={logindData.password}
                                onChange={e => setlogindData({ ...logindData, password: e.target.value })}
                                class="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            class="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        <p class="text-center mt-3">
                            Dont Have Account? <a href="#">Create Account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
