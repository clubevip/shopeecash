import {
  TermsContainer,
  TermsContent,
  TermsSecao,
} from '@/styles/termosdeuso.styles'

// eslint-disable-next-line camelcase
import { Be_Vietnam_Pro } from 'next/font/google'
import Head from 'next/head'

const Vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso</title>
        <meta name="description" content="Terapeuta Transforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <TermsContainer className={Vietnam.className}>
        <TermsContent>
          <p>
            <b>Esta política de Termos de Uso é válida a partir de Jul 2023.</b>
          </p>
          <p>
            <b>TERMOS DE USO — Terapeuta Transforma</b>
          </p>
          <p>
            Terapeuta Transforma, pessoa jurídica de direito privado descreve,
            através deste documento, as regras de uso do site
            https://www.terapeutatransforma.com.br e qualquer outro site, loja
            ou aplicativo operado pelo proprietário.
          </p>
          <p>
            Ao navegar neste website, consideramos que você está de acordo com
            os Termos de Uso abaixo.
          </p>
          <p>
            Caso você não esteja de acordo com as condições deste contrato,
            pedimos que não faça mais uso deste website, muito menos cadastre-se
            ou envie os seus dados pessoais.
          </p>
          <p>
            Se modificarmos nossos Termos de Uso, publicaremos o novo texto
            neste website, com a data de revisão atualizada. Podemos alterar
            este documento a qualquer momento. Caso haja alteração significativa
            nos termos deste contrato, podemos informá-lo por meio das
            informações de contato que tivermos em nosso banco de dados ou por
            meio de notificações.
          </p>
          <p>
            A utilização deste website após as alterações significa que você
            aceitou os Termos de Uso revisados. Caso, após a leitura da versão
            revisada, você não esteja de acordo com seus termos, favor encerrar
            o seu acesso.
          </p>
          <TermsSecao>
            <li>Seção 1 - Usuário</li>
            <p>
              A utilização deste website atribui de forma automática a condição
              de Usuário e implica a plena aceitação de todas as diretrizes e
              condições incluídas nestes Termos.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 2 - Adesão em conjunto com a Política de Privacidade</li>
            <p>
              A utilização deste website acarreta a adesão aos presentes Termos
              de Uso e a versão mais atualizada da Política de Privacidade de
              Terapeuta Transforma.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 3 - Condições de acesso</li>
            <p>
              Em geral, o acesso ao website da Terapeuta Transforma possui
              caráter gratuito e não exige prévia inscrição ou registro.
            </p>
            <p>
              Contudo, para usufruir de algumas funcionalidades, o usuário
              poderá precisar efetuar um cadastro, criando uma conta de usuário
              com login e senha próprios para acesso.
            </p>
            <p>
              É de total responsabilidade do usuário fornecer apenas informações
              corretas, autênticas, válidas, completas e atualizadas, bem como
              não divulgar o seu login e senha para terceiros.
            </p>
            <p>
              Partes deste website oferecem ao usuário a opção de publicar
              comentários em determinadas áreas. Terapeuta Transforma não
              consente com a publicação de conteúdos que tenham natureza
              discriminatória, ofensiva ou ilícita, ou ainda infrinjam direitos
              de autor ou quaisquer outros direitos de terceiros.
            </p>
            <p>
              A publicação de quaisquer conteúdos pelo usuário deste website,
              incluindo mensagens e comentários, implica em licença
              não-exclusiva, irrevogável e irretratável, para sua utilização,
              reprodução e publicação pela Terapeuta Transforma no seu website,
              plataformas e aplicações de internet, ou ainda em outras
              plataformas, sem qualquer restrição ou limitação.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 4 - Cookies</li>
            <p>
              Informações sobre o seu uso neste website podem ser coletadas a
              partir de cookies. Cookies são informações armazenadas diretamente
              no computador que você está utilizando. Os cookies permitem a
              coleta de informações tais como o tipo de navegador, o tempo
              despendido no website, as páginas visitadas, as preferências de
              idioma, e outros dados de tráfego anônimos. Nós e nossos
              prestadores de serviços utilizamos informações para proteção de
              segurança, para facilitar a navegação, exibir informações de modo
              mais eficiente, e personalizar sua experiência ao utilizar este
              website, assim como para rastreamento online. Também coletamos
              informações estatísticas sobre o uso do website para aprimoramento
              contínuo do nosso design e funcionalidade, para entender como o
              website é utilizado e para auxiliá-lo a solucionar questões
              relevantes.
            </p>
            <p>
              Caso não deseje que suas informações sejam coletadas por meio de
              cookies, há um procedimento simples na maior parte dos navegadores
              que permite que os cookies sejam automaticamente rejeitados, ou
              oferece a opção de aceitar ou rejeitar a transferência de um
              cookie (ou cookies) específico(s) de um site determinado para o
              seu computador. Entretanto, isso pode gerar inconvenientes no uso
              do website.
            </p>
            <p>
              As definições que escolher podem afetar a sua experiência de
              navegação e o funcionamento que exige a utilização de cookies.
              Neste sentido, rejeitamos qualquer responsabilidade pelas
              consequências resultantes do funcionamento limitado deste website
              provocado pela desativação de cookies no seu dispositivo
              (incapacidade de definir ou ler um cookie).
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 5 - Propriedade Intelectual</li>
            <p>
              Todos os elementos de Terapeuta Transforma são de propriedade
              intelectual da mesma ou de seus licenciados. Estes Termos ou a
              utilização do website não concede a você qualquer licença ou
              direito de uso dos direitos de propriedade intelectual da
              Terapeuta Transforma ou de terceiros.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 6 - Links para sites de terceiros</li>
            <p>
              Este website poderá, de tempos a tempos, conter links de
              hipertexto que redirecionará você para sites das redes dos nossos
              parceiros, anunciantes, fornecedores etc. Se você clicar em um
              desses links para qualquer um desses sites, lembre-se que cada
              site possui as suas próprias práticas de privacidade e que não
              somos responsáveis por essas políticas. Consulte as referidas
              políticas antes de enviar quaisquer Dados Pessoais para esses
              sites.
            </p>
            <p>
              Não nos responsabilizamos pelas políticas e práticas de coleta,
              uso e divulgação (incluindo práticas de proteção de dados) de
              outras organizações, tais como Facebook, Apple, Google, Microsoft,
              ou de qualquer outro desenvolvedor de software ou provedor de
              aplicativo, loja de mídia social, sistema operacional, prestador
              de serviços de internet sem fio ou fabricante de dispositivos,
              incluindo todos os Dados Pessoais que divulgar para outras
              organizações por meio dos aplicativos, relacionadas a tais
              aplicativos, ou publicadas em nossas páginas em mídias sociais.
              Nós recomendamos que você se informe sobre a política de
              privacidade e termos de uso de cada site visitado ou de cada
              prestador de serviço utilizado.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 7 - Prazos e alterações</li>
            <p>O funcionamento deste website se dá por prazo indeterminado.</p>
            <p>
              O website no todo ou em cada uma das suas seções, pode ser
              encerrado, suspenso ou interrompido unilateralmente por Terapeuta
              Transforma, a qualquer momento e sem necessidade de prévio aviso.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 8 - Dados pessoais</li>
            <p>
              Durante a utilização deste website, certos dados pessoais serão
              coletados e tratados por Terapeuta Transforma e/ou pelos
              Parceiros. As regras relacionadas ao tratamento de dados pessoais
              de Terapeuta Transforma estão estipuladas na Política de
              Privacidade.
            </p>
          </TermsSecao>
          <TermsSecao>
            <li>Seção 9 - Contato</li>
            <p>
              Caso você tenha qualquer dúvida sobre os Termos de Uso, por favor,
              entre em contato pelo e-mail contato@ajudahoje.com.br.
            </p>
          </TermsSecao>
        </TermsContent>
      </TermsContainer>
    </>
  )
}
