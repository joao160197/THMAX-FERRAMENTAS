import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-950 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8">Fale Conosco</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Telefone</h2>
            <p className="text-gray-700">(11) 2131-1300 | (11) 99189-9415</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">E-mail</h2>
            <p className="text-gray-700">vendas@thmax.com.br</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Endereço</h2>
            <p className="text-gray-700">Rua dos Inocentes, 121 - Socorro, São Paulo - SP, 04764-050</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Horário de Funcionamento</h2>
            <p className="text-gray-700">Segunda a Quinta: 8h - 18h | Sexta: 8h - 17h</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Localização</h2>
          <div className="relative w-full h-72">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-md border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1295699696884!2d-46.71399995904602!3d-23.671323953344036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51c9f91ec217%3A0xf8c19e8396bbc812!2sTH%20Max%20-%20Com%C3%A9rcio%20de%20Ferramentas!5e0!3m2!1spt-BR!2sbr!4v1726179814008!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;