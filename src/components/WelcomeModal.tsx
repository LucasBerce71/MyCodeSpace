import React from 'react';

type TProps = {
    onAccepted: Function;
    onDecline: Function;
};

export const WelcomeModal: React.FC<TProps> = ({ onAccepted, onDecline }) => {
    return (
        <div id="small-modal" className="fixed flex items-center justify-center top-0 left-0 right-50 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative left-50 bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
                            Olá caro usuário, seja bem vindo ao meu CodeSpace 😃👨‍💻
                        </h3>
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Se você não sabe o que esperar dessa sessão de CodeSpace dentro do meu portifólio,
                            chega mais que vou te explicar do que se trata.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Eu implementei essa sessão para você que deseja conhecer um pouco mais
                            do meu setup dev dentro do vscode, e descobrir o que estou usando de 
                            configurações, extensões, temas, e muito mais.
                        </p>

                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Espero que tenha gostado! Agora escolha uma das opções abaixo e seja feliz!
                        </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button 
                            data-modal-hide="small-modal" 
                            type="button" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => onAccepted()}
                        >
                                Entendi, quero conhecer o Codespace
                        </button>
                        <button 
                            data-modal-hide="small-modal" 
                            type="button" 
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            onClick={() => onDecline()}
                        >
                            Não curti, quero voltar ao portifólio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};