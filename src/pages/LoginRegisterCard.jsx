const LoginRegisterCard =()=>{
    const [isLogin, setIsLogin] = useState(true)
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        passwod: '',
    })



    return(
        
        <div>
            <div>
                <div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <h2>

                        </h2>
                        <p>

                        </p>
                    </div>
                    <button>

                    </button>
                </div>

                {/* Right side form */}
                <div>
                    <AnimatePresence>
                        <div>
                            <h2>

                            </h2>
                            <form >
                                <div>
                                    <label >
                                        
                                    </label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label >

                                    </label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label htmlFor=""></label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label htmlFor=""></label>
                                    <input type="text" />
                                </div>

                                <button>

                                </button>
                            </form>
                            <div>
                                <button>
                                    Reset here
                                </button>
                            </div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default LoginRegisterCard