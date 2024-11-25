import { MainStyle, Copo, Section, H2Title, H1Sub, DivCopos } from "./style"

export default function Home() {
    return(
        <MainStyle>
            <section>
                <H2Title>Mais que Café</H2Title>
                <H1Sub>
                    Isso  é <span>Starbucks</span>
                </H1Sub>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <button>SAIBA MAIS</button>
                <DivCopos>
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true" alt="copo amarelo P" />
                    <img src= "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true" alt="copo vermelho P" />
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true"
                    alt="copo laranja P" />
                </DivCopos>
            </section>
            <Section>
                    <Copo src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true" alt="" />
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true" alt="" />
                </Section>
        </MainStyle>
    )
}