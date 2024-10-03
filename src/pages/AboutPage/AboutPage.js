import React from "react";

const AboutPage = () => {
    const thmax = {
        nome: "THMAX",
        descricao: "Fundada em 2003, a THMAX Ferramentas é uma empresa brasileira que comercializa máquinas, ferramentas e afins. Com um compromisso firme com a qualidade e a excelência, estamos sempre em busca das principais tendências do mercado.",
        missao: "Nossa missão é fornecer ferramentas de alta qualidade, inovadoras e resistentes que capacitem nossos clientes a realizar seus trabalhos com soluções, segurança e eficiência. Buscamos melhorar continuamente nossos produtos para atender às necessidades de nossos clientes, promovendo soluções que agreguem valor ao seu trabalho e contribuam para seu sucesso em diversos setores.",
        servicos: "Oferecemos uma ampla gama de ferramentas manuais e elétricas, projetadas para atender às necessidades de profissionais em diversos setores. Nossos produtos são selecionados para garantir durabilidade, desempenho e segurança."
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-900 p-4 sm:p-6">
            <div className="max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">{thmax.nome}</h1>
                
                <p className="text-base sm:text-lg mb-4">
                    <strong className="text-black font-semibold">Descrição:</strong> {thmax.descricao}
                </p>
                <p className="text-base sm:text-lg mb-4">
                    <strong className="text-black font-semibold">Missão:</strong> {thmax.missao}
                </p>
                <p className="text-base sm:text-lg mb-4">
                    <strong className="text-black font-semibold">Serviços:</strong> {thmax.servicos}
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
