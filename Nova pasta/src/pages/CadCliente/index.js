import React from 'react'

const CadCliente = () => {
    return (
        <div id="main" class="container-fluid">
        <h3 class="page-header mt-4">Clientes Registrados</h3>
        <hr />
        <form action="">
            <h4 class="page-header mt-1">Informações</h4>
             <div class="row">
                <div class="form-group col-md-4">
                    <label for="campo1">Nome:</label>
                    <input type="text" class="form-control" id="campo1" />
                </div>
                
                <div class="form-group col-md-4">
                    <label for="campo2">CNPJ/CPF:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>
                
                <div class="form-group col-md-4">
                    <label for="campo3">Inscrição:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>
             </div>
            <hr />
            <h4 class="page-header mt-1">Endereço</h4>
            <div class="form-group">
                <label for="campo3">Rua:</label>
                <input type="text" class="form-control" id="campo3" />
            </div>
            <div class="row">
                <div class="form-group col-md-2">
                    <label for="campo1">Número:</label>
                    <input type="text" class="form-control" id="campo1" />
                </div>
                
                <div class="form-group col-md-5">
                    <label for="campo2">Complemento:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>
                
                <div class="form-group col-md-5">
                    <label for="campo3">Bairro:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>
             </div>
             <div class="row">
                <div class="form-group col-md-3">
                    <label for="campo1">CEP:</label>
                    <input type="text" class="form-control" id="campo1" />
                </div>
                
                <div class="form-group col-md-4">
                    <label for="campo2">Cidade:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>
                
                <div class="form-group col-md-4">
                    <label for="campo3">Distrito:</label>
                    <input type="text" class="form-control" id="campo3" />
                </div>

                <div class="form-group col-md-1">
                    <label for="campo3">UF:</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">4
                        <option value="1">MG</option>
                        <option value="2">SP</option>
                        <option value="3">AM</option>
                    </select>
                </div>
             </div>
             <hr />
                
            <div id="actions" class="row mb-4">
                <div class="col-md-12">
                <button type="submit" class="btn btn-primary">Salvar</button>
                <a href="" class="btn btn-default">Cancelar</a>
                </div>
            </div>
        </form>
    </div>
    )
}


export default CadCliente