'use client';
import 'katex/dist/katex.min.css';

import { BlockMath, InlineMath } from 'react-katex';


export default function Math() {
    return (
        <article className="prose max-w-none px-6 py-8">
            <h1>Liczby zespolone — notatka ze wzorami</h1>
            <p>Krótkie definicje i tożsamości bez przykładów liczbowych. Zapis w <InlineMath math={'\\LaTeX'} />.</p>


            {/* Jednostka urojona i postać algebraiczna */}
            <section>
                <h2>Jednostka urojona i</h2>
                <BlockMath math={'i^{0}=1'} />
                <BlockMath math={'i^{1}=i'} />
                <BlockMath math={'i^{2}=-1'} />
                <BlockMath math={'i^{3}=-i'} />
                <BlockMath math={'i^{4}=1'} />
            </section>

            <section>
                <h2>Liczba zespolona — postać kanoniczna (algebraiczna)</h2>
                <BlockMath math={'z = a + bi'} />
                <InlineMath math={'a,b \\in \\mathbb{R}'} />
                <p>  <InlineMath math={'a'} /> — część rzeczywista, <InlineMath math={'b'} /> — część urojona.</p>
            </section>


            {/* Działania na postaci algebraicznej */}
            <section>
                <h2>Dodawanie</h2>
                <BlockMath math={'(a+bi) + (c+di) = (a + c) + (b + d)i'} />
            </section>


            <section>
                <h2>Odejmowanie</h2>
                <BlockMath math={'(a+bi) - (c+di) = (a - c) + (b - d)i'} />
            </section>


            <section>
                <h2>Mnożenie</h2>
                <BlockMath math={'(a+bi)(c+di) = (ac - bd) + (ad + bc)i'} />
            </section>


            <section>
                <h2>Sprzężenie zespolone</h2>
                <p>Sprzężenie <InlineMath math={'\\overline{z}'} /> odbija punkt względem osi rzeczywistej.</p>
                <BlockMath math={'z = a+bi \\quad \\Rightarrow \\quad \\overline{z} = a - bi'} />
                <BlockMath math={'z \\cdot \\overline{z} = |z|^{2} = a^{2} + b^{2} \\ge 0'} />

            </section>


            <section>
                <h2>Dzielenie</h2>
                <p>Mnożymy licznik i mianownik przez sprzężenie mianownika.</p>
                <BlockMath math={'\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{(c+di)(c-di)} = \\frac{(ac+bd) + (bc - ad)i}{c^{2}+d^{2}}'} />
            </section>


            {/* Moduł, argument, postać biegunowa i e^{i\varphi} */}
            <section>
                <h2>Moduł to odległość liczby zespolonej od początku układu współrzędnych</h2>
                <BlockMath math={'|z| = \\sqrt{a^{2}+b^{2}}'} />
                <BlockMath math={'\\arg z = \\varphi, \\quad z = |z| (\\cos \\varphi + i \\sin \\varphi)'} />
                <BlockMath math={'a = |z|\\cos \\varphi, \\quad b = |z|\\sin \\varphi'} />
                <h2>Argument to</h2>
                <BlockMath math={'\\cos \\varphi = \\frac{a}{|z|}, \\quad \\sin \\varphi = \\frac{b}{|z|}'} />
                <h2>argument główny  znajduje się w przedziale od 0 do 2pi</h2>   <BlockMath math={'\\operatorname{Arg} z \\in (-\\pi,\\pi]'} />
                <BlockMath math={'\\operatorname{Arg} z \\in [0,2\\pi)'} />
            </section>


            {/* de Moivre + potęgowanie pierwiastkowanie */}
            <section>
                <h2>Wzór de Moivre’a i potęgowanie</h2>
                <BlockMath math={'[|z|(\\cos \\varphi + i \\sin \\varphi)]^{n} = |z|^{n} (\\cos n\\varphi + i \\sin n\\varphi), \\quad n \\in \\\mathbb{Z}'} />
                <p>Pierwiastki stopnia <InlineMath math={'n'} /> z liczby zespolonej:</p>
                <BlockMath math={'z^{1/n} = |z|^{1/n}\\left( \\cos \\frac{\\varphi + 2k\\pi}{n} + i \\sin \\frac{\\varphi + 2k\\pi}{n} \\right),\\quad k=0,1,\\dots,n-1'} />
            </section>


            {/* Tożsamości trygonometryczne potrzebne w ZC */}
            <section>
                <h2>Tożsamości trygonometryczne (użyteczne)</h2>
                <h3>Podstawowe</h3>
                <BlockMath math={'\\sin^{2}x + \\cos^{2}x = 1'} />
                <BlockMath math={'\\cos(-x)=\\cos x, \\quad \\sin(-x)=-\\sin x'} />
                <BlockMath math={'\\sin(x+2\\pi k)=\\sin x, \\quad \\cos(x+2\\pi k)=\\cos x, \\quad k \\in \\\mathbb{Z}'} />
                <h3>Suma i różnica kątów</h3>
                <BlockMath math={'\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta'} />
                <BlockMath math={'\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta'} />
            </section>

            <section>
                <h2>Kąty na osiach (radiany) — skrót</h2>
                <p>
                    Oś <strong>X</strong> = <InlineMath math={'\\cos'} />, oś <strong>Y</strong> = <InlineMath math={'\\sin'} />.
                </p>

                {/* Znaki sin/cos na osiach i w ćwiartkach */}
                <div className="angle-grid">
                    {/* wiersz nagłówków */}
                    <div className="cell">kąt</div>
                    <div className="cell"><InlineMath math={'-\\pi'} /></div>
                    <div className="cell">III</div>
                    <div className="cell"><InlineMath math={'-\\tfrac{\\pi}{2}'} /></div>
                    <div className="cell">IV</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell">I</div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\pi}{2}'} /></div>
                    <div className="cell">II</div>
                    <div className="cell"><InlineMath math={'\\pi'} /></div>

                    {/* cos */}
                    <div className="cell"><InlineMath math={'\\cos'} /></div>
                    <div className="cell"><InlineMath math={'-1'} /></div>
                    <div className="cell">−</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell">+</div>
                    <div className="cell"><InlineMath math={'1'} /></div>
                    <div className="cell">+</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell">−</div>
                    <div className="cell"><InlineMath math={'-1'} /></div>

                    {/* sin */}
                    <div className="cell"><InlineMath math={'\\sin'} /></div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell">−</div>
                    <div className="cell"><InlineMath math={'-1'} /></div>
                    <div className="cell">−</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell">+</div>
                    <div className="cell"><InlineMath math={'1'} /></div>
                    <div className="cell">+</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                </div>

                <h3 style={{ marginTop: 16 }}>Wartości szczególne</h3>
                <div className="special-grid">
                    <div className="cell">kąt</div>
                    <div className="cell"><InlineMath math={'\\sin'} /></div>
                    <div className="cell"><InlineMath math={'\\cos'} /></div>

                    <div className="cell">
                        <InlineMath math={'\\tfrac{\\pi}{6}\\ (30^{\\circ})'} /> — mały
                    </div>
                    <div className="cell"><InlineMath math={'\\tfrac{1}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{3}}{2}'} /></div>

                    <div className="cell">
                        <InlineMath math={'\\tfrac{\\pi}{4}\\ (45^{\\circ})'} /> — średni
                    </div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{2}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{2}}{2}'} /></div>

                    <div className="cell">
                        <InlineMath math={'\\tfrac{\\pi}{3}\\ (60^{\\circ})'} /> — duży
                    </div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{3}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{1}{2}'} /></div>
                </div>
            </section>

            <section>
                <h2>Kąty – zestaw 3 tabelek (zgodne z moją siatką)</h2>

                {/* Tabela I — znaki sin/cos w ćwiartkach */}
                <h3 style={{ marginTop: 12 }}>Tabela I — znaki funkcji w ćwiartkach</h3>
                <div className="quad-grid">
                    <div className="cell"></div>
                    <div className="cell">I</div>
                    <div className="cell">II</div>
                    <div className="cell">III</div>
                    <div className="cell">IV</div>

                    <div className="cell"><InlineMath math={'\\cos\\varphi'} /></div>
                    <div className="cell">+</div>
                    <div className="cell">−</div>
                    <div className="cell">−</div>
                    <div className="cell">+</div>

                    <div className="cell"><InlineMath math={'\\sin\\varphi'} /></div>
                    <div className="cell">+</div>
                    <div className="cell">+</div>
                    <div className="cell">−</div>
                    <div className="cell">−</div>
                </div>

                {/* Tabela II — wzory na kąt w ćwiartkach */}
                <h3 style={{ marginTop: 16 }}>Tabela II — wzory na <InlineMath math={'\\varphi'} /> w ćwiartkach (od kąta odniesienia <InlineMath math={'\\alpha_0'} />)</h3>
                <div className="phi-grid">
                    <div className="cell">Ćwiartka</div>
                    <div className="cell">I</div>
                    <div className="cell">II</div>
                    <div className="cell">III</div>
                    <div className="cell">IV</div>

                    <div className="cell"><InlineMath math={'\\varphi ='} /></div>
                    <div className="cell"><InlineMath math={'\\alpha_0'} /></div>
                    <div className="cell"><InlineMath math={'\\pi - \\alpha_0'} /></div>
                    <div className="cell"><InlineMath math={'\\pi + \\alpha_0'} /></div>
                    <div className="cell"><InlineMath math={'2\\pi - \\alpha_0'} /></div>
                </div>

                {/* Tabela III — wartości szczególne 0°–90° */}
                <h3 style={{ marginTop: 16 }}>Tabela III — wartości szczególne (0°–90°)</h3>
                <div className="spec-grid-5">
                    <div className="cell">kąt</div>
                    <div className="cell">0°</div>
                    <div className="cell">30°</div>
                    <div className="cell">45°</div>
                    <div className="cell">60°</div>
                    <div className="cell">90°</div>

                    <div className="cell">radiany</div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\pi}{6}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\pi}{4}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\pi}{3}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\pi}{2}'} /></div>

                    <div className="cell"><InlineMath math={'\\cos\\varphi'} /></div>
                    <div className="cell"><InlineMath math={'1'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{3}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{2}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{1}{2}'} /></div>
                    <div className="cell"><InlineMath math={'0'} /></div>

                    <div className="cell"><InlineMath math={'\\sin\\varphi'} /></div>
                    <div className="cell"><InlineMath math={'0'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{1}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{2}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'\\tfrac{\\sqrt{3}}{2}'} /></div>
                    <div className="cell"><InlineMath math={'1'} /></div>
                </div>
            </section>





            {/* Reguły potęg (rzeczywiste) */}
            <section>
                <h2>Reguły potęg (dla liczb rzeczywistych)</h2>
                <BlockMath math={'\\sqrt[n]{a} = a^{1/n}'} />
                <BlockMath math={'a^{m/n} = \\sqrt[n]{a^{m}}'} />
                <BlockMath math={'(a^{p})^{q} = a^{pq}'} />
                <BlockMath math={'a^{p} \\cdot a^{q} = a^{p+q}'} />
                <BlockMath math={'a^{-k} = \\frac{1}{a^{k}} \\quad (a \\ne 0)'} />
            </section>
        </article>
    );
}