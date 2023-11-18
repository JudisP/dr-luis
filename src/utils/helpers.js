export const abreNumeroTelefone = () => {
  window.location.href="tel:+55123456789";
}

export const abreWhatsapp = () => {
  window.location.href="https://api.whatsapp.com/send?phone=5561998719320&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Dr.%20Luis%20Fernando!";
}

export const abreEmail = () => {
  window.location.href="mailto:cirurgia.vascularclinica@gmail.com?subject=Agendar Consulta&body=Olá, gostaria de saber mais sobre os serviços do Dr. Luis Fernando Angiologista! %0D%0A %0D%0A Me chamo [escreva seu nome completo], possuo o convênio [escreva seu convênio], meu número para contato é (DDD) [escreva seu número de contato]. %0D%0A %0D%0A Aguardo retorno! %0D%0A %0D%0A[SE POSSÍVEL ANEXE UMA FOTO LEGÍVEL DA SUA CARTEIRA DO CONVÊNIO]";
}