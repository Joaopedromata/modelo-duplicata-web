import React from 'react'
import { Form, Row, Col } from 'reactstrap';

const Home = () => {
    return (
        <>
           <div class="card">
             <div class="card-body">
                <form action="/usuarios/login" method="post">
                    <label for="email">Email:</label>
                        <input type="email" class="form-control" name="email" required />
                    <label for="senha">Senha:</label>
                         <input type="password" class="form-control" name="senha" required /> 
                     <button type="submit" class="btn btn-success mt-4">Entrar</button>   
                </form>
             </div>
            </div>
        </>
    )
}


export default Home