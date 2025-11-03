// src/components/CerveAILanding.jsx
import React, { useEffect, useRef } from "react";
// import heroImg from "../assets/hero.png";
// import mockupImg from "../assets/mockup.png";
// import founderImg from "../assets/founder.jpg";

/*
  CerveAI Landing Page (React + Tailwind)
  - Substitua as imagens em src/assets:
      logo.png, hero.png, mockup.png, founder.jpg
  - Cores base usadas via classes Tailwind com valores hex (arbitrary colors)
    -- amarelo (brand): #F5B700
    -- marrom escuro (bg): #2E1F1C
    -- off-white (text): #F7F3F0
*/

export default function CerveAILanding() {
    const reveals = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-6");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        reveals.current.forEach((el) => {
            if (el) obs.observe(el);
        });

        return () => obs.disconnect();
    }, []);

    const setReveal = (el, idx) => {
        reveals.current[idx] = el;
    };

    const imgOnError = (e, fallback) => {
        e.currentTarget.src = fallback;
    };

    return (
        <div className="min-h-screen bg-[#2E1F1C] text-[#F7F3F0] antialiased">
            {/* NAV */}
            <header className="sticky top-0 z-40 backdrop-blur-sm bg-[#2E1F1C]/80 border-b border-black/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src='logo.png'
                            alt="CerveAI"
                            onError={(e) =>
                                imgOnError(e, "https://images.unsplash.com/photo-1542444445-4f8d6a6c2f5c?q=80&w=600&auto=format&fit=crop")
                            }
                            className="w-20 h-20 object-contain rounded-lg shadow-sm transform transition-transform duration-700 hover:-translate-y-1"
                        />
                        <div>
                            <div className="text-[1.05rem] font-extrabold tracking-tight text-[#F5B700]">CerveAI</div>
                            <div className="text-xs text-[#F7F3F0]/70">Recomendação inteligente de cervejas</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#sobre" className="hover:text-[#F5B700] transition-colors">Sobre</a>
                        <a href="#tecnologia" className="hover:text-[#F5B700] transition-colors">Tecnologia</a>
                        <a href="#recomendacao" className="hover:text-[#F5B700] transition-colors">Recomendações</a>
                        <a href="#contato" className="ml-3 inline-block px-4 py-2 rounded-md bg-[#F5B700] text-[#2E1F1C] font-semibold hover:scale-[1.02] transition-transform">Fale conosco</a>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                            className="px-3 py-2 rounded-md bg-[#F5B700] text-[#2E1F1C] font-semibold"
                        >
                            Contato
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1
                            ref={(el) => setReveal(el, 0)}
                            className="reveal opacity-0 translate-y-6 transition duration-700 text-4xl md:text-5xl font-extrabold leading-tight"
                        >
                            Descubra a <span className="text-[#F5B700]">cerveja perfeita</span> para cada momento.
                        </h1>

                        <p
                            ref={(el) => setReveal(el, 1)}
                            className="mt-6 text-[#F7F3F0]/85 max-w-xl reveal opacity-0 translate-y-6 transition duration-700"
                        >
                            CerveAI combina ciência sensorial e aprendizado de máquina: um questionário inteligente que mapeia seu paladar e sugere rótulos artesanais com alto índice de
                            compatibilidade. Integre ao seu bar, e-commerce ou app.
                        </p>

                        <div ref={(el) => setReveal(el, 2)} className="mt-8 flex flex-wrap gap-4 reveal opacity-0 translate-y-6 transition duration-700">
                            <a href="#recomendacao" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F5B700] text-[#2E1F1C] font-semibold shadow-md hover:shadow-lg transform transition hover:-translate-y-1">
                                Como funciona
                            </a>
                        </div>

                        <div ref={(el) => setReveal(el, 3)} className="mt-8 flex gap-6 items-start reveal opacity-0 translate-y-6 transition duration-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#F5B700]/20 flex items-center justify-center">🍺</div>
                            </div>
                            <div>
                                <div className="font-semibold">Perfis reais</div>
                                <div className="text-sm text-[#F7F3F0]/75">Perfis de paladar mapeados com degustadores e usuários reais.</div>
                            </div>

                            <div className="ml-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#F5B700]/20 flex items-center justify-center">⚙️</div>
                                <div>
                                    <div className="font-semibold">Integrações</div>
                                    <div className="text-sm text-[#F7F3F0]/75">API para e-commerce, PDV e apps.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside ref={(el) => setReveal(el, 4)} className="reveal opacity-0 translate-y-6 transition duration-700">
                        <div className="bg-[#2E1F1C]/40 rounded-2xl p-4 backdrop-blur-sm shadow-xl">
                            <img
                                src={"flavor.png"}
                                alt="Hero"
                                onError={(e) =>
                                    imgOnError(e, "https://images.unsplash.com/photo-1542444445-4f8d6a6c2f5c?q=80&w=1200&auto=format&fit=crop")
                                }
                                className="w-full rounded-xl object-cover"
                            />
                            <div className="mt-4 p-4 bg-[#2E1F1C] rounded-lg">
                                <div className="font-bold text-[#F5B700]">Questionário sensorial</div>
                                <div className="text-sm text-[#F7F3F0]/75 mt-1">10 perguntas que medem aroma, corpo, amargor e preferências.</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* SOBRE */}
            <section id="sobre" className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                        <h2 ref={(el) => setReveal(el, 5)} className="reveal opacity-0 translate-y-6 transition duration-700 text-2xl font-bold">Sobre a CerveAI</h2>
                        <p ref={(el) => setReveal(el, 6)} className="mt-4 text-[#F7F3F0]/85 reveal opacity-0 translate-y-6 transition duration-700 max-w-2xl">
                            A CerveAI nasceu da união entre paixão cervejeira e engenharia de dados. Nossos fundadores combinaram conhecimento sensorial e técnicas de machine learning
                            para traduzir preferências subjetivas em recomendações objetivas.
                        </p>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <div ref={(el) => setReveal(el, 7)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                                <div className="text-[#F5B700] font-semibold">Missão</div>
                                <div className="mt-2 text-lg text-[#F7F3F0]/75">Conectar amantes de cerveja a rótulos que combinem com seu paladar.</div>
                            </div>

                            <div ref={(el) => setReveal(el, 8)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                                <div className="text-[#F5B700] font-semibold">Visão</div>
                                <div className="mt-2 text-lg text-[#F7F3F0]/75">Ser a principal referência de recomendação cervejeira por dados e sabor.</div>
                            </div>
                        </div>

                        <div ref={(el) => setReveal(el, 9)} className="mt-6 reveal opacity-0 translate-y-6 transition duration-700">
                            <h3 className="text-[#F5B700] font-semibold">Como chegamos ao resultado</h3>
                            <ol className="mt-3 list-decimal list-inside space-y-2 text-[#F7F3F0]/80">
                                <li><strong>Pesquisa sensorial:</strong> entrevistas com provadores e degustadores.</li>
                                <li><strong>Curadoria:</strong> banco com centenas de rótulos e fichas sensoriais.</li>
                                <li><strong>Modelagem:</strong> pipeline híbrido e validação com testes A/B.</li>
                                <li><strong>Iteração:</strong> feedback do usuário aprimora o modelo continuamente.</li>
                            </ol>
                        </div>
                    </div>

                    <aside ref={(el) => setReveal(el, 10)} className="reveal opacity-0 translate-y-6 transition duration-700">
                        <div className="bg-[#2E1F1C]/30 p-6 rounded-xl shadow-lg">
                            <div className="text-[#F5B700] font-bold">Fundadores</div>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src='{founderImg}'
                                    alt="João Silva"
                                    onError={(e) => imgOnError(e, "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop")}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <div className="font-semibold">João Silva</div>
                                    <div className="text-sm text-[#F7F3F0]/70">Data Scientist & Brew Lover</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="font-semibold">Destaques</div>
                                <ul className="mt-2 text-sm text-[#F7F3F0]/80 space-y-1">
                                    <li>Banco de 800+ rótulos</li>
                                    <li>Taxa de acerto inicial: 78%</li>
                                    <li>Integração com marketplaces</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* TECNOLOGIA */}
            <section id="tecnologia" className="max-w-7xl mx-auto px-6 py-12 bg-[#2E1F1C]">
                <h2 ref={(el) => setReveal(el, 11)} className="reveal opacity-0 translate-y-6 transition duration-700 text-2xl font-bold">Tecnologia & Inovação</h2>

                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div ref={(el) => setReveal(el, 12)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                        <div className="font-semibold text-[#F5B700]">Modelos de Recomendação</div>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">Pipeline híbrido (content-based + collaborative) com explicabilidade.</p>
                    </div>

                    <div ref={(el) => setReveal(el, 13)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                        <div className="font-semibold text-[#F5B700]">Qualidade de Dados</div>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">Fichas sensoriais: IBU, ABV, aromas, notas e regiões.</p>
                    </div>

                    <div ref={(el) => setReveal(el, 14)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                        <div className="font-semibold text-[#F5B700]">APIs & Integrações</div>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">REST API, webhooks e conectores para e-commerces e PDV.</p>
                    </div>
                </div>

                <div ref={(el) => setReveal(el, 15)} className="mt-8 reveal opacity-0 translate-y-6 transition duration-700">
                    <h3 className="text-[#F5B700] font-semibold">Privacidade e Segurança</h3>
                    <p className="mt-2 text-lg text-[#F7F3F0]/75">
                        Dados anonimizados antes do treinamento; autenticação por tokens; práticas seguras de tratamento de PII.
                    </p>
                </div>
            </section>

            {/* RECOMENDAÇÃO detalhada */}
            <section id="recomendacao" className="max-w-7xl mx-auto px-6 py-12">
                <h2 ref={(el) => setReveal(el, 16)} className="reveal opacity-0 translate-y-6 transition duration-700 text-2xl font-bold">Como entregamos recomendações</h2>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div ref={(el) => setReveal(el, 17)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                        <h4 className="font-semibold text-lg">Perfil sensorial</h4>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">Perguntas objetivas sobre aroma, corpo, amargor e preferência por lúpulo/frutas/especiarias.</p>
                        <ul className="mt-3 list-disc list-inside text-lg text-[#F7F3F0]/80 space-y-1">
                            <li>Escala de intensidade (suave → intenso)</li>
                            <li>Preferência por estilos (IPA, Stout, Pilsen)</li>
                            <li>Contexto: acompanhar prato, social, solo</li>
                        </ul>
                    </div>

                    <div ref={(el) => setReveal(el, 18)} className="card p-6 reveal opacity-0 translate-y-6 transition duration-700">
                        <h4 className="font-semibold text-lg">Ranking & Explicabilidade</h4>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">
                            Cada sugestão traz um score e uma explicação (por exemplo: notas cítricas, amargor médio, corpo leve — ideal para churrasco).
                        </p>
                        <div className="mt-4 bg-[#2E1F1C]/30 p-4 rounded-md">
                            <div className="font-semibold text-[#F5B700] text-lg">Exemplo de output</div>
                            <div className="mt-2 text-lg text-[#F7F3F0]/90">
                                <strong>Rótulo:</strong> Cerveja X IPA — <strong>Score:</strong> 92%<br />
                                <small className="text-[#F7F3F0]/70 text-sm">Motivo: notas cítricas, amargor médio-alto e corpo leve — combina com petiscos.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARCEIROS */}
            <section className="max-w-7xl mx-auto px-6 py-10 bg-[#2E1F1C]">
                <h3 ref={(el) => setReveal(el, 19)} className="reveal opacity-0 translate-y-6 transition duration-700 text-xl font-semibold">Parceiros & Eventos</h3>
                <div className="mt-6 flex flex-wrap gap-4">
                    {["Cervejaria A", "Festival X", "MarketPlace Y", "Bar Z"].map((p, i) => (
                        <div key={p} ref={(el) => setReveal(el, 20 + i)} className="reveal opacity-0 translate-y-6 transition duration-700 card px-5 py-4 rounded-lg">
                            <div className="font-semibold">{p}</div>
                            <div className="text-sm text-[#F7F3F0]/75">Parceria estratégica</div>
                        </div>
                    ))}
                </div>
            </section>


            {/* FAQ */}
            <section className="max-w-7xl mx-auto px-6 py-10 bg-[#2E1F1C]/20 rounded-t-lg">
                <div>
                    <h3 ref={(el) => setReveal(el, 28)} className="reveal opacity-0 translate-y-6 transition duration-700 text-xl font-semibold">Perguntas Frequentes</h3>
                    <div className="mt-4 grid gap-4">
                        <details ref={(el) => setReveal(el, 29)} className="card p-4 reveal opacity-0 translate-y-6 transition duration-700">
                            <summary className="font-semibold cursor-pointer text-lg">Como funciona o questionário?</summary>
                            <div className="mt-2 text-lg text-[#F7F3F0]/75">São perguntas objetivas que levam 1–2 minutos para preencher.</div>
                        </details>

                        <details ref={(el) => setReveal(el, 30)} className="card p-4 reveal opacity-0 translate-y-6 transition duration-700">
                            <summary className="font-semibold cursor-pointer text-lg">Vocês usam meus dados para treinar modelos?</summary>
                            <div className="mt-2 text-lg text-[#F7F3F0]/75">Apenas com consentimento; dados são anonimizados.</div>
                        </details>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contato" className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="card p-6">
                        <h3 className="text-2xl font-bold">Fale com a CerveAI</h3>
                        <p className="mt-2 text-lg text-[#F7F3F0]/75">Envie sua demanda, parceria ou dúvida sobre integração.</p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Obrigado! Mensagem enviada (mock).");
                            }}
                            className="mt-6 grid gap-3"
                        >
                            <input name="name" placeholder="Seu nome" required className="bg-[#2E1F1C]/60 border border-[#ffffff]/6 rounded-md px-3 py-2 text-[#F7F3F0]" />
                            <input name="email" placeholder="Seu e-mail" required className="bg-[#2E1F1C]/60 border border-[#ffffff]/6 rounded-md px-3 py-2 text-[#F7F3F0]" />
                            <textarea name="message" placeholder="Como podemos ajudar?" rows="4" className="bg-[#2E1F1C]/60 border border-[#ffffff]/6 rounded-md px-3 py-2 text-[#F7F3F0]" />
                            <div className="flex gap-3">
                                <button type="submit" className="btn-primary">Enviar mensagem</button>
                                <a className="self-center text-sm text-[#F7F3F0]/85" href="mailto:contato@cerveai.example">Ou envie por e-mail</a>
                            </div>
                        </form>
                    </div>

                    <aside className="p-6">
                        <div className="font-semibold text-[#F5B700]">Contato direto</div>
                        <div className="mt-2 text-sm text-[#F7F3F0]/75">
                            contato@cerveai.example<br />
                            +55 (67) 99999-9999
                        </div>

                        <div className="mt-6">
                            <div className="font-semibold">Endereço</div>
                            <div className="text-sm text-[#F7F3F0]/75">Campo Grande - MS, Brasil</div>
                        </div>

                        <div className="mt-6">
                            <div className="font-semibold">Siga-nos</div>
                            <div className="flex gap-3 mt-2">
                                <a className="text-[#F5B700]" href="#">LinkedIn</a>
                                <a className="text-[#F5B700]" href="#">Instagram</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#2E1F1C] border-t border-black/20 mt-8">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <div className="font-bold text-[#F5B700]">CerveAI</div>
                        <div className="text-sm text-[#F7F3F0]/70">© {new Date().getFullYear()} CerveAI — Onde o sabor encontra a inteligência.</div>
                    </div>
                    <div className="text-sm text-[#F7F3F0]/70">Política de privacidade · Termos · Contato</div>
                </div>
            </footer>
        </div>
        
    );
}
