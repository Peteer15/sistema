$( document ).ready(function() {
    buscar_dados()
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 0000-0000');
    $('#celular').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#rg').mask('00.000.000-A', {reverse: true});
    $('#cep_edit').mask('00000-000');
    $('#telefone_edit').mask('(00) 0000-0000');
    $('#celular_edit').mask('(00) 00000-0000');
    $('#cpf_edit').mask('000.000.000-00', {reverse: true});
    $('#rg_edit').mask('00.000.000-A', {reverse: true});
    $("#tb_pessoa_fisica").bootstrapTable({ locate: 'pt-br'})
});

function open_md_cadastro(){
    $('#md_cadastro_pessoa_fisica').modal('show');
}

function buscar_dados(){

    $.ajax({
        type: "POST",
        url: 'rotinas/index.php',
        dataType:"json",
        data: {
            acao : btoa('buscar_dados')
            
        },
        success: function(response){
            if (response.status == true){
                $("#tb_pessoa_fisica").bootstrapTable('load', response.row);
            }else{
                alert_page('Erro!', response.msg, 'warning');
            }
        },
        error: function(e){
            alert_page('Erro!', e, 'warning');
        }
    });

}

function salvar(){

    let nome_completo    = $('#nome').val();
    let data_nascimento  = $('#nascimento').val();
    let cpf              = $('#cpf').val();
    let rg               = $('#rg').val();
    let telefone         = $('#telefone').val();
    let celular          = $('#celular').val();
    let email            = $('#email').val();
    let logradouro       = $('#logradouro').val();
    let bairro           = $('#bairro').val();
    let numero           = $('#numero').val();
    let complemento      = $('#complemento').val();
    let cep              = $('#cep').val();
    let sexo             = $('input[name="sexo"]:checked').val();

    if(nome_completo == ''){
        alert_page('Atenção', 'Campo Nome Obrigatório', 'warning');
        return false;
    }
    if(data_nascimento == ''){
        alert_page('Atenção', 'Campo Data Obrigatório', 'warning');
        return false;
    }
    if(cpf == ''){
        alert_page('Atenção', 'Campo CPF Obrigatório', 'warning');
        return false;
    }
    if(rg == ''){
        alert_page('Atenção', 'Campo RG Obrigatório', 'warning');
        return false;
    }
    if(telefone == ''){
        alert_page('Atenção', 'Campo Telefone Obrigatório', 'warning');
        return false;
    }
    if(celular == ''){
        alert_page('Atenção', 'Campo Celular Obrigatório', 'warning');
        return false;
    }
    if(email == ''){
        alert_page('Atenção', 'Campo Email Obrigatório', 'warning');
        return false;
    }
    if(logradouro == ''){
        alert_page('Atenção', 'Campo Logradouro Obrigatório', 'warning');
        return false;
    }
    if(bairro == ''){
        alert_page('Atenção', 'Campo Bairro Obrigatório', 'warning');
        return false;
    }
    if(numero == ''){
        alert_page('Atenção', 'Campo Número Obrigatório', 'warning');
        return false;
    }
    if(cep == ''){
        alert_page('Atenção', 'Campo Cep Obrigatório', 'warning');
        return false;
    }

    $.ajax({
        type: "POST",
        url: 'rotinas/index.php',
        dataType:"json",
        data: {
            nome_completo   : nome_completo,
            data_nascimento : data_nascimento,
            cpf             : btoa(cpf),
            rg              : rg,
            telefone        : telefone,
            celular         : celular,
            email           : email,
            logradouro      : logradouro,
            bairro          : bairro,
            numero          : numero,
            complemento     : complemento,
            cep             : cep,
            sexo            : sexo,
            acao            : btoa('salvar_formulario')
            
        },
        success: function(response){
            if (response.status == true){
                alert_page('Sucesso!', response.msg ,'success');
                clear_form();
                buscar_dados();
            }else{
                alert_page('Erro!', response.msg, 'warning');
            }
        },
        error: function(e){
            alert_page('Erro!', e, 'warning');
        }
    });
}

function editar(){
    let id               = $('#valor_id_editar').val();
    let nome_completo    = $('#nome_edit').val();
    let data_nascimento  = $('#nascimento_edit').val();
    let cpf              = $('#cpf_edit').val();
    let rg               = $('#rg_edit').val();
    let telefone         = $('#telefone_edit').val();
    let celular          = $('#celular_edit').val();
    let email            = $('#email_edit').val();
    let logradouro       = $('#logradouro_edit').val();
    let bairro           = $('#bairro_edit').val();
    let numero           = $('#numero_edit').val();
    let complemento      = $('#complemento_edit').val();
    let cep              = $('#cep_edit').val();
    let sexo             = $('input[name="sexo_edit"]:checked').val();

    if(nome_completo == ''){
        alert_page('Atenção', 'Campo Nome Obrigatório', 'warning');
        return false;
    }
    if(data_nascimento == ''){
        alert_page('Atenção', 'Campo Data Obrigatório', 'warning');
        return false;
    }
    if(cpf == ''){
        alert_page('Atenção', 'Campo CPF Obrigatório', 'warning');
        return false;
    }
    if(rg == ''){
        alert_page('Atenção', 'Campo RG Obrigatório', 'warning');
        return false;
    }
    if(telefone == ''){
        alert_page('Atenção', 'Campo Telefone Obrigatório', 'warning');
        return false;
    }
    if(celular == ''){
        alert_page('Atenção', 'Campo Celular Obrigatório', 'warning');
        return false;
    }
    if(email == ''){
        alert_page('Atenção', 'Campo Email Obrigatório', 'warning');
        return false;
    }
    if(logradouro == ''){
        alert_page('Atenção', 'Campo Logradouro Obrigatório', 'warning');
        return false;
    }
    if(bairro == ''){
        alert_page('Atenção', 'Campo Bairro Obrigatório', 'warning');
        return false;
    }
    if(numero == ''){
        alert_page('Atenção', 'Campo Número Obrigatório', 'warning');
        return false;
    }
    if(cep == ''){
        alert_page('Atenção', 'Campo Cep Obrigatório', 'warning');
        return false;
    }

    $.ajax({
        type: "POST",
        url: 'rotinas/index.php',
        dataType:"json",
        data: {
            id              : id,
            nome_completo   : nome_completo,
            data_nascimento : data_nascimento,
            cpf             : btoa(cpf),
            rg              : rg,
            telefone        : telefone,
            celular         : celular,
            email           : email,
            logradouro      : logradouro,
            bairro          : bairro,
            numero          : numero,
            complemento     : complemento,
            cep             : cep,
            sexo            : sexo,
            acao            : btoa('update_formulario')
            
        },
        success: function(response){
            if (response.status == true){
                alert_page('Sucesso!', response.msg ,'success');
                $('#md_editar_pessoa_fisica').modal('hide');
                buscar_dados();
            }else{
                alert_page('Erro!', response.msg, 'warning');
            }
        },
        error: function(e){
            alert_page('Erro!', e, 'warning');
        }
    });
}

function excluir(){

    let id = $('#valor_id_excluir').val();

    $.ajax({
        type: "POST",
        url: 'rotinas/index.php',
        dataType:"json",
        data: {
            id            : id,
            acao          : btoa('excluir_formulario')
        },
        success: function(response){
            if (response.status == true){
                alert_page('Sucesso!', response.msg ,'success');
                $('#valor_id_excluir').val('');
                $('#md_excluir_pessoa_fisica').modal('hide');
                buscar_dados();

            }else{
                alert_page('Erro!', response.msg, 'warning');
            }
        },
        error: function(e){
            alert_page('Erro!', e, 'warning');
        }
    });

}

function editar_formulario(id){
    $('#md_editar_pessoa_fisica').modal('show');
    $('#valor_id_editar').val(id);

    $.ajax({
        type: "POST",
        url: 'rotinas/index.php',
        dataType:"json",
        data: {
            id            : id,
            acao          : btoa('editar_formulario')
        },
        success: function(response){
            if (response.status == true){
                mostrar_dados(response.row)
            }else{
                alert_page('Erro!', response.msg, 'danger');
            }
        },
        error: function(e){
            alert_page('Erro!', e, 'warning');
        }
    });
}

function excluir_formulario(id){
    $('#md_excluir_pessoa_fisica').modal('show');
    $('#valor_id_excluir').val(id);
}

function clear_form(){
    $('#nome').val('');
    $('#nascimento').val('');
    $('#cpf').val('');
    $('#rg').val('');
    $('#telefone').val('');
    $('#celular').val('');
    $('#email').val('');
    $('#logradouro').val('');
    $('#bairro').val('');
    $('#numero').val('');
    $('#complemento').val('');
    $('#cep').val('');
    $('#masculino').prop('checked', true);
}

function mostrar_dados(row){


    $('#nome_edit').val(row[0].nome_completo);
    $('#nascimento_edit').val(row[0].data_nascimento);
    $('#cpf_edit').val(row[0].cpf);
    $('#rg_edit').val(row[0].rg);
    $('#telefone_edit').val(row[0].telefone);
    $('#celular_edit').val(row[0].celular);
    $('#email_edit').val(row[0].email);
    $('#logradouro_edit').val(row[0].logradouro);
    $('#bairro_edit').val(row[0].bairro);
    $('#numero_edit').val(row[0].numero);
    $('#complemento_edit').val(row[0].complemento);
    $('#cep_edit').val(row[0].cep);

    if (row[0].sexo == 'M'){
        $('#masculino_edit').prop('checked', true);
    }else{
        $('#feminino_edit').prop('checked', true);
    }
        
}