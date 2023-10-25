import Slide from "@/components/Slide";
import {
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
import BallBackground from "@/Components/BallBackground";

import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

import setaDireita from "@/shared/icons/seta-direita.svg";

const Home = () => {
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
            style={{ display:"none", width: "100%", height: "100%", position: "relative" }}
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
              <div
                className="bolinhas"
                style={{
                  width: 243,
                  height: 78,
                  left: 24,
                  top: 0,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 190,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 43,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 92,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 141,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 8,
                    left: 190,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 238,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 287,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 336,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 0,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
              </div>
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
            <h3>Titulo</h3>
            <span>texto</span>
          </div>
        </div>
      </Container>

      <Container className="container-podemos-ajudar">
        <span>FALE CONOSCO</span>
        <h3>Como podemos te ajudar hoje?</h3>
        <button className="button button--primary">
          <a>
            Agendar uma consulta <AiOutlineArrowRight />
          </a>
        </button>
      </Container>

      <div className="agendamento">
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
      </div>

      <Container className="nossos-convenios">
        <div className="img-convenios">Convenio</div>
      </Container>
    </div>
  );
};

export default Home;
