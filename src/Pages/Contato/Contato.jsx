import React from 'react';
import { useForm } from 'react-hook-form';
import './Contato.css';  // Arquivo para estilização do formulário

const Formulario = () => {
  // Usando o hook do react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função chamada ao submeter o formulário
  const onSubmit = (data) => {
    // Exibir um alerta com as informações enviadas
    alert('Formulário enviado com sucesso!\n' +
      `Nome: ${data.nome}\n` +
      `Email: ${data.email}\n` +
      `Assunto: ${data.assunto}`
    );
  };

  return (
    <>
    <br />
     <div className="form-container">
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* Campo Nome */}
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            id="nome" 
            {...register('nome', { required: 'Nome é obrigatório' })} 
            className="form-input"
          />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        {/* Campo Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            {...register('email', { 
              required: 'Email é obrigatório', 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
                message: 'Email inválido'
              }
            })}
            className="form-input"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Campo Assunto */}
        <div className="form-group">
          <label htmlFor="assunto">Assunto:</label>
          <input 
            type="text" 
            id="assunto" 
            {...register('assunto', { required: 'Assunto é obrigatório' })}
            className="form-input"
          />
          {errors.assunto && <p className="error-message">{errors.assunto.message}</p>}
        </div>

        {/* Botão de Enviar */}
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
    <br />
    </>
   
  );
};

export default Formulario;
