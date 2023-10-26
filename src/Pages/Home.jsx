import Slide from "@/components/Slide";
import {
  Button,
  Col,
  Container,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
import BallBackground from "@/Components/BallBackground";

import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

import { TfiLocationPin } from "react-icons/tfi";

import setaDireita from "@/shared/icons/seta-direita.svg";
import ModalConvenio from "@/Components/Modal";
import { useState } from "react";
import BallBackgroundBig from "@/Components/BallBackgroundBig";

const Home = () => {
  const [showModalConvenio, setShowModalConvenio] = useState(false);

  const toggle = () => {
    setShowModalConvenio((prev) => !prev);
  };

  return (
    <div className="pagina-home position-relative">
      <div className="hero-slide">
        <Slide />

        <div className="slide-conteudo">
          <h1 className="slide-text">Estética</h1>
          <Button className="button-slide button--primary">Saiba Mais</Button>
        </div>
      </div>

      <Container className="conteiner-boas-vindas">
        <Row className="row-boas-vindas">
          <Col className="apresentacao">
            <div className="titulo">
              <h3>Bem vindo a</h3>
              <h3>Clínica Vascular</h3>
            </div>
            <div className="linha"></div>
            <span>
              Atendimento seguro e inovação que proporcionam os melhores
              serviços na área de Cirurgia de varizes. O Melhor em recursos da
              tecnologia aplicada aos tratamentos de doenças das artérias, veias
              e vasos linfáticos.
            </span>
            <Row>
              <div>
                <div>
                  <h5>Dr. Luis Fernando de Carvalho Bastos</h5>
                  <span>Cirurgião Vascular - CRM/DF 11.886</span>
                </div>
              </div>
              <div>
                <div>
                  <h5>Horário de Funcionamento</h5>
                  <span>Segunda a Sexta - 8hrs às 18hrs</span>
                </div>
              </div>
            </Row>
            <button className="button button--primary">
              <a>
                Agendar uma consulta <AiOutlineArrowRight />
              </a>
            </button>
            <button className="button button--primary">
              <a>
                Agendar uma consulta <AiOutlineArrowRight />
              </a>
            </button>
          </Col>
          <Col
            className="imagens"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div style={{ width: "100%", height: 500 }}>
              <div className="imagens-sobrepostas">
                <img
                  className="img-comprida"
                  src="https://via.placeholder.com/222x378"
                />
                <img
                  className="img-quadrada"
                  src="https://via.placeholder.com/299x183"
                />
              </div>
              <BallBackgroundBig />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="container-apresentacao">
        <div className="background-elemento">
          <Col className="coluna-img">
            <img src="https://via.placeholder.com/700x900" />
          </Col>
          <Col className="coluna-texto">
            <div className="titulo">
              <h3>Dr. Luis Fernando Bastos</h3>
              <h3>Angiologista</h3>
            </div>
            <div className="linha"></div>
            <div className="descricao">
              <p>
                Dr. Luís Fernando de Carvalho Bastos é cirurgião na nossa
                Clínica vascular, formado em medicina pela Escola de Ciências
                Médicas de Alagoas. É membro da Sociedade Brasileira de
                Angiologia e Cirurgia de Varizes e membro do serviço de cirurgia
                vascular do Hospital de Base do Distrito Federal.
              </p>
              <button className="button button--conteudo--text-white">
                <a>
                  Agendar uma consulta <AiOutlineArrowRight />
                </a>
              </button>
            </div>
          </Col>
        </div>
        <BallBackground className="bolinhas-small" />
      </Container>
      <Container className="container-servicos">
        <div className="titulo">
          <div className="titulos">
            <h3 className="titulo-clinica">CLÍNICA VASCULAR BRASÍLIA</h3>
            <h3 className="titulo-servico">Conheça nossos Serviços</h3>
          </div>
          <div className="linha"></div>
          <span className="texto">
            Trabalho com um equipamento inovador, o VeinViewer. Através dele uma
            luz infravermelha, juntamente com tecnologias avançadas, é utilizada
            para exibir uma imagem periférica das veias diretamente na
            superfície da pele.
          </span>
        </div>

        <div className="background-banner">
          <div className="elemento">
            <img src="https://via.placeholder.com/300x400" />
            <div className="conteudo">
              <h3>Titulo</h3>
              <span>texto</span>
            </div>
          </div>
          <div className="elemento">
            <img src="https://via.placeholder.com/300x400" />
            <div className="conteudo">
              <h3>Titulo</h3>
              <span>texto</span>
            </div>
          </div>
          <div className="elemento">
            <img src="https://via.placeholder.com/300x400" />
            <div className="conteudo">
              <h3>Titulo</h3>
              <span>texto</span>
            </div>
          </div>
          <span>(61) 99999-9999</span>
        </div>
      </Container>

      <Container className="container-perguntas-frequentes">
        <div className="titulo">
          <div className="linha"></div>
          <h3>PERGUNTAS FREQUENTES</h3>
          <div className="linha"></div>
        </div>
        <div className="perguntas">
          <Col>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img src={setaDireita} /> Como é feito a cirurgia na Clínica
                Vascular
              </div>
              <div className="resposta">
                Na cirurgia de varizes, são feitos pequenos cortes, quase
                imperceptíveis, sem necessidade de pontos, e que após 60-90
                dias, não terá nenhuma cicatriz residual, desde que o paciente
                siga as instruções. Além disso, já na alta o paciente sairá
                andando, com apenas algumas mínimas limitações para algumas
                atividades mais intensas, para as quais deverá se respeitado o
                tempo determinado. Por exemplo, a depender da técnica utilizada
                durante o ato cirúrgico, uma cirurgia para retirada de safena, o
                tempo de recuperação para voltar a vida normal é de 3 dias.
                Diferente do que muitos ainda pensam, a cirurgia de varizes
                mudou bastante nos últimos anos. Hoje ela é feita com anestesia
                local e sedação, alta hospitalar no mesmo dia e recuperação para
                as atividades diárias, inclusive atividades físicas, entre 3 a
                15 dias.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img src={setaDireita} /> Como é o Pós Operatório da cirurgia de
                varizes?
              </div>
              <div className="resposta">
                A pessoa que faz cirurgia de varizes recebe nos dias
                subseqüentes à cirurgia medicamentos para dor e às vezes
                anti-inflamatórios. Também é recomendado repouso com as pernas
                para cima, com retorno gradual à caminhada, de acordo com as
                orientações do médico que realizou a cirurgia. Alguns médicos
                também indicam a utilização de meias elásticas de compressão. É
                muito importante que a pessoa siga as recomendações do seu
                cirurgião porque cada caso é um caso e para cada caso há uma
                recomendação.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Qual deve ser o
                intervalo entre cada aplicação?
              </div>
              <div className="resposta">
                A quantidade exata vai depender das condições das varizes de
                cada paciente. Mas, em geral, são necessárias de três a cinco
                sessões para a obtenção do resultado desejado. É preciso fazer
                um intervalo de aproximadamente 15 dias entre elas. Cada
                aplicação tem duração de cerca de 20 minutos.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Qual o exame
                responsável para detectar trombose?
              </div>
              <div className="resposta">
                O ultrassom com Doppler é um exame bastante usado para
                diagnosticar doenças que acometem os vasos sanguíneos, em
                especial a trombose. Ele é um teste que usa ondas sonoras de
                alta frequência para medir a quantidade de fluxo sanguíneo
                através de suas artérias e veias, geralmente aquelas que
                fornecem sangue para seus braços e pernas.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Quanto custa os
                tratamentos para varizes?
              </div>
              <div className="resposta">
                Para definir tratamento e seus valores é necessário passar por
                uma consulta com o médico vascular da clínica. A consulta tem
                duração aproximada de 1 hora, na qual realizam-se exames
                complementares com ecodoppler para avaliar as veias safenas,
                varizes e o risco de trombose. A partir daí, é definido quais
                serão as técnicas utilizadas, número de visitas e valores.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} />
                Posso fazer exercícios físicos após o procedimento?
              </div>
              <div className="resposta">
                A prática de exercícios físicos de baixo impacto pode ser
                permitida após 24 horas da sessão de aplicação.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> O tratamento para
                varizes é doloroso?
              </div>
              <div className="resposta">
                O tratamento de varizes pode provocar um certo desconforto. No
                entanto, trata-se de um incômodo tolerável e que desaparece em
                poucos instantes. Na Clínica Vascular dispomos de músicas e
                resfriador de pele para tornar o tratamento o mais confortável
                possível.
              </div>
            </div>
          </Col>
          <Col>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Existe idade para ter
                varizes?
              </div>
              <div className="resposta">
                Não existe uma idade exata para o aparecimento de varizes. Isto
                depende muito da predisposição genética que o paciente possa ter
                associada a alguns hábitos de vida, sendo possível o
                aparecimento já na adolescência ou em idades mais avançadas.
                Apesar de poderem estar presentes desde antes dos 20 anos, em
                mulheres as varizes são mais comuns a partir dos 35 anos de
                idade devido ao tempo de interferência de flutuações hormonais
                do ciclo menstrual, gestação e uso de anticoncepcionais. Outros
                fatores como sobrepeso e obesidade, sedentarismo, tabagismo e
                passar longos períodos em pé influenciam para o aparecimento
                mais precoce das varizes em pessoas com predisposição genética.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> O uso de salto alto
                pode causar varizes?
              </div>
              <div className="resposta">
                A resposta é NÃO. Diferente do que muito se especula, o salto
                alto pode ser um inimigo ortopédico, mas não vascular. As
                varizes são causadas por problemas de circulação e perda do
                tonificação dos vasos, e também por pré-disposição genética,
                portanto, o salto não é o causador desta doença.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Cremes podem melhorar
                as varizes?
              </div>
              <div className="resposta">
                Cremes para pernas não são eficazes no tratamento contra
                varizes. Não existem cremes que eliminam as veias varicosas que
                já estão presentes. A principal finalidade desses produtos, no
                entanto, é proporcionar alívio sintomático a veias varicosas.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Posso pegar sol após o
                procedimento?
              </div>
              <div className="resposta">
                O ideal é não se expor ao sol enquanto os sinais do procedimento
                estejam presentes. Normalmente depois de 5-7 dias desaparecem os
                sinais da aplicação, e o sol já está liberado. Seguimos o mesmo
                raciocínio para o laser para vasinhos, se não tiver nenhum sinal
                pode tomar sol sem problemas. Algumas pessoas tem a pele mais
                sensível, e podem ficar com marcas por mais tempo, para essas
                pessoas o sol vai ter que ser evitado por um período mais longo.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> O que causa as
                varizes?
              </div>
              <div className="resposta">
                São diversos os fatores causadores das varizes, sendo o
                histórico familiar ou a genética, o principal deles. Outros
                fatores causadores das varizes são ficar muito tempo parado na
                mesma posição, seja sentado ou de pé, gestação, sedentarismo,
                tabagismo e sobrepeso.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> Após o procedimento,
                as varizes somem definitivamente?
              </div>
              <div className="resposta">
                Sim, depois de tratados tanto os vasinhos quanto as varizes não
                reaparecerão. No entanto, outras varizes e outros vasinhos podem
                surgir com o passar do tempo. Dependerá de vários fatores,
                principalmente se o paciente tem histórico familiar de varizes.
                No entanto, algumas medidas podem ser tomadas para prevenção,
                como manter uma atividade física regular, manter o peso adequado
                e evitar ficar imóvel em pé ou sentado por muito tempo.
              </div>
            </div>
            <div className="pergunta-resposta">
              <div className="pergunta">
                <img className="img" src={setaDireita} /> É necessário repouso
                após o procedimento?
              </div>
              <div className="resposta">
                O repouso depende do tipo de tratamento realizado. Laser
                transdérmico, espuma e escleroterapia (aplicação) não necessitam
                de repouso. Já o tratamento de veia safena por endolaser é
                recomendado 2 a 3 dias de repouso.
              </div>
            </div>
          </Col>
        </div>
      </Container>

      <Container className="container-banner-beleza">
        <div className="background-banner">
          <img src="https://via.placeholder.com/1500x600" />

          <div className="conteudo">
            <h3>EXALTE A BELEZA DAS SUAS PERNAS</h3>
            <h5>VENHA PARA CLÍNICA VASCULAR</h5>
            <button className="button button--primary">
              <a>AGENDAR CONSULTA</a>
            </button>
          </div>
        </div>
      </Container>

      <Container className="container-podemos-ajudar">
        <span>FALE CONOSCO</span>
        <h3>Como podemos te ajudar hoje?</h3>
        <button className="button button--primary">
          <a>
            <TfiLocationPin /> Ver no Google Maps
          </a>
        </button>
      </Container>

      <Container className="agendamento">
        <div className="linha"></div>
        <h3>AGENDE AGORA SUA CONSULTA</h3>
        <div className="contatos">
          <button className="button button--conteudo--text-white">
            <a>
              <BsWhatsapp /> Whatsapp
            </a>
          </button>
          <button className="button button--conteudo--text-white">
            <a>
              <BsTelephone /> Telefone
            </a>
          </button>
          <button className="button button--conteudo--text-white">
            <a>
              <LuMail /> E-mail
            </a>
          </button>
        </div>
        <div className="linha"></div>
      </Container>

      <div className="nossos-convenios">
        <div className="img-convenios">
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,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" />
        </div>
        <button
          className="button button--primary"
          onClick={() => {
            setShowModalConvenio(true);
          }}
          type="button"
        >
          CONSULTE NOSSOS CONVÊNIOS
        </button>
        <ModalConvenio
          setShowModalConvenio={setShowModalConvenio}
          toggle={toggle}
          showModalConvenio={showModalConvenio}
        >
          <ModalHeader>
            <h3>CONVÊNIOS CLÍNICA VASCULAR</h3>
            <button
              className="close-button button button--primary"
              onClick={() => setShowModalConvenio(false)}
              type="button"
            >
              X
            </button>
            <div className="linha"></div>
          </ModalHeader>
          <ModalBody>
            <Col>
              <span>UNAFISCO</span>
              <span>AMIL</span>
              <span>CAMED</span>
              <span>CASEMBRAPA</span>
              <span>CASEC (CODEVASC)</span>
              <span>E-VIDA (ELETRONORTE)</span>
              <span>GDF SAÚDE</span>
              <span>CASSI</span>
              <span>AFFEGO</span>
              <span>BACEN</span>
              <span>ASETE</span>
              <span>CONAB</span>
              <span>TST SAÚDE</span>
            </Col>
            <Col>
              <span>TRT SAÚDE</span>
              <span>FACEB</span>
              <span>BRB SAÚDE</span>
              <span>FASCAL</span>
              <span>GAMA SAÚDE</span>
              <span>PETROBRÁS - PETRÓLEO</span>
              <span>PLAN ASSISTE - MPF</span>
              <span>PLAN ASSISTE - MPU</span>
              <span>PLAN ASSISTE - MPT</span>
              <span>TRE SAÚDE</span>
              <span>PLAS/JMU - (MPT)</span>
              <span>NOTRE DAME</span>
              <span>GEAP</span>
            </Col>
            <Col>
              <span>POSTAL SAÚDE</span>
              <span>PRÓ - SAÚDE (TJDFT)</span>
              <span>PRÓ - SOCIAL (TRF)</span>
              <span>SAÚDE CAIXA</span>
              <span>SERPRO</span>
              <span>BRADESCO SAÚDE</span>
              <span>UNIMED CENTRAL NACIONAL</span>
              <span>SIS (SENADO)</span>
              <span>STF - MED</span>
              <span>SULAMERICA </span>
              <span>OMINT SAÚDE</span>
              <span>LIFE EMPRESARIAL</span>
            </Col>
          </ModalBody>
        </ModalConvenio>
      </div>
    </div>
  );
};

export default Home;
