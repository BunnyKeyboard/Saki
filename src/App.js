import React, { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  "Aminoácidos",
  "Peptídeos e proteínas",
  "Enzimas",
  "Carboidratos",
  "Introdução a células",
  "Células procariontes e eucariontes",
  "Vírus e ácidos nucleicos",
  "Organelas citoplasmáticas",
];

const glossary = {
  Amina: {
    definition:
      "Grupo funcional contendo nitrogênio, presente em compostos orgânicos.",
    structure:
      "https://study.com/cimages/multimages/16/diagram_amine_primary.png",
  },
  Glicina: {
    definition:
      "O aminoácido mais simples, com uma cadeia lateral composta apenas por um átomo de hidrogênio.",
    structure:
      "https://quimicafacil.net/wp-content/uploads/2022/12/Glicina-1.png",
  },
  Alanina: {
    definition:
      "Um aminoácido não essencial com uma cadeia lateral metil simples.",
    structure:
      "https://www.explicatorium.com/images/quimica/alanina-formula.png",
  },
  Prolina: {
    definition:
      "Um aminoácido cíclico que desempenha um papel em estruturas proteicas rígidas.",
    structure:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMfpIY_skgQLgeLVT7NcEZ-hAWtv-2rIXIQ&s",
  },
  Valina: {
    definition:
      "Um aminoácido essencial com uma cadeia lateral hidrofóbica em forma de ramificação.",
    structure:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWus-rt97MsYIGO9VC76HBwxMYXyN4EPA-A&s",
  },
  Leucina: {
    definition:
      "Um aminoácido essencial que auxilia no crescimento e reparo muscular.",
    structure:
      "https://www.explicatorium.com/images/quimica/leucina-formula.png",
  },
  Isoleucina: {
    definition:
      "Um aminoácido essencial com propriedades energéticas e metabólicas.",
    structure:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfUxT_ct0Foxn1SlOg1Evc3AdKK9mJDjEUg&s",
  },
  Metionina: {
    definition:
      "Um aminoácido essencial contendo enxofre, precursor da cisteína e outros compostos importantes.",
    structure:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlNCmVX1GC1HKR4F0K3nhAymSfOTubDdq4ITQb_BJOKSOWdZD-tuYMyXmEdge-KVPJC4&usqp=CAU",
  },
  Fenilalanina: {
    definition:
      "Um aminoácido essencial aromático que é precursor de neurotransmissores como dopamina.",
    structure:
      "https://www.explicatorium.com/images/quimica/fenilalanina-formula.png",
  },
  Tirosina: {
    definition:
      "Derivado da fenilalanina, é precursor de hormônios e neurotransmissores importantes.",
    structure:
      "https://structuresearch.merck-chemicals.com/getImage/MDA_CHEM_108371",
  },
  Triptofano: {
    definition:
      "Um aminoácido essencial utilizado na síntese de serotonina e melatonina.",
    structure:
      "https://mundoentrenamiento.com/wp-content/uploads/2022/08/Estructura-L-Triptofano.jpg",
  },
  Aspartato: {
    definition:
      "Um aminoácido não essencial que participa do ciclo de Krebs e na síntese de nucleotídeos.",
    structure:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTLAR33njyYeyOoCta2UWYcJ8GCbpfOIc8A&s",
  },
  Glutamato: {
    definition:
      "Um aminoácido não essencial que atua como um importante neurotransmissor excitatório.",
    structure:
      "https://www.explicatorium.com/images/quimica/glutamato-formula.png",
  },
};

const content = {
  Aminoácidos: (
    <div>
      <p>
        Aminoácidos são compostos orgânicos que combinam para formar proteínas e
        desempenham papéis cruciais nos processos biológicos. Aqui você pode
        explorar mais sobre suas características e funções principais.
      </p>
      <p>- Eles são unidade estruturais básicas dos peptídeos e proteínas.</p>
      <p>- Existem 20 aminoácidos padrões que formam todas as proteínas</p>
      <p>
        - Eles possuem um grupo carboxil (
        <span>
          COO<sup>-</sup>
        </span>
        ) e um grupo{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Amina"
        >
          amina
        </span>{" "}
        (
        <span>
          H<sub>3</sub>N<sup>+</sup>
        </span>
        ) ligados ao carbono central.
      </p>
      <p>
        - Aminoácidos incomuns: Proteínas específicas - EX:{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Prolina"
        >
          Prolina
        </span>{" "}
        (comum) OH = Hidroxiprolina (incomum)
      </p>
      <p>
        <span>
          H<sub>2</sub>N<sup></sup>
        </span>{" "}
        →{" "}
        <span>
          H<sub>3</sub>N<sup>+</sup>
        </span>{" "}
        (Amina Protonada) Age como base = doa elétrons
      </p>
      <p>
        COOH →{" "}
        <span>
          COO<sup>-</sup>
        </span>{" "}
        (Carboxila Desprotonada) Age como ácido: recebe elétrons
      </p>
      <img
        src="https://cdn.goconqr.com/uploads/node/image/86888760/desktop_608b2e51-78b9-4ab5-bbb5-5210f0fc7c36.jpeg"
        alt="Estrutura Geral dos Aminoácidos"
        className="mt-4 w-32 max-w-xs rounded-lg"
      />
      <p>
        Em meio ácido: todos os grupos protonados (
        <span>
          H<sub>3</sub>N<sup>+</sup>
        </span>
        ) / (COOH)
      </p>
      <p>
        Em meio básico: todos os grupos desprotonados (
        <span>
          H<sub>2</sub>N<sup></sup>
        </span>
        ) / (
        <span>
          COO<sup>-</sup>
        </span>
        )
      </p>
      <p>
        - Todos os aminoácidos comuns, EXCETO a{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Glicina"
        >
          glicina
        </span>{" "}
        possuem carbono ligado a 4 grupos ≠ : Carbono Quiral
      </p>
      <p>
        - Aminoácidos possuem 2 possíveis estereoisômeros (moléculas com as
        mesmas ligações químicas, mas com ‡ configurações), D ou L
      </p>
      <p>Os aminoácidos presentes nas proteínas são estereoisômeros L</p>
      <p>
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Glicina"
        >
          Glicina
        </span>{" "}
        é o único aminoácido que não possui isomeria óptica
      </p>
      <p>⊹ ﹏𓊝﹏𓂁﹏⊹ ˖</p>
      <p>Princípios classificatórios</p>
      <p>1) Quanto a polaridade da cadeia lateral</p>
      <p>
        - Aminoácidos apolares e hidrofóbicos: Cadeia lateral com caráter de
        hidrocarboneto (insolúveis em água){" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Alanina"
        >
          Alanina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Valina"
        >
          Valina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Leucina"
        >
          Leucina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Isoleucina"
        >
          Isoleucina
        </span>{" "}
        - tendem a se aglomerar entre si nas proteínas
      </p>
      <p>Interações hidrofóbicas</p>
      <p>Gly → Estrutura mais simples</p>
      <p>Met → Possui átomo de enxofre - tioeter</p>
      <p>Pro → iminoácido, menor flexibilidade estrutural</p>
      <p>
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Glicina"
        >
          Glicina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Alanina"
        >
          Alanina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Pralina"
        >
          Pralina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Valina"
        >
          Valina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Leucina"
        >
          Leucina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Isoleucina"
        >
          Isoleucina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Metionina"
        >
          Metionina
        </span>
      </p>
      <p>
        - Aminoácidos aromáticos: Relativamente apolares Tirosina pode forma r
        ligações de hidrogênio
      </p>
      <p>
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Fenilalanina"
        >
          Fenilalanina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Tirosina"
        >
          Tirosina
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Triptofano"
        >
          Triptofano
        </span>{" "}
      </p>
      <p>- Aminoácidos polar não-ionizáveis</p>
      <p>
        Possui grupos funcionais capaz de formar ligações de hidrogênio com
        água.
      </p>
      <p>Serina e treonina: grupo hidroxil</p>
      <p>Asparagina e Glutamina: grupo amida</p>
      <p> Cisteína e Tylamina: grupo sulfidril (ligação dissulfeto)</p>
      <p>- Aminoácido polar com carga positiva (PH fisiológico)</p>
      <p>Lisina, segundo grupo amino</p>
      <p>Arginina, grupo guanidina</p>
      <p>Histidina, grupo aromático</p>
      <p>
        Imidazol (pode estar carregada positivamente como não carregada em pH
        7,0)
      </p>
      <p>- Aminoácidos polar com carga negativa (PH fisiológico)</p>
      <p>
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Aspartato"
        >
          Aspartato
        </span>
        ,{" "}
        <span
          className="text-blue-400 underline cursor-pointer"
          data-word="Glutamato"
        >
          Glutamato
        </span>
      </p>
    </div>
  ),
  "Peptídeos e proteínas": (
    <div>
      <p>
        Peptídeos e proteínas são moléculas fundamentais para processos
        biológicos.
      </p>
      <ul>
        <li>Peptídeos: Cadeias curtas de aminoácidos.</li>
        <li>Proteínas: Estruturas maiores e mais complexas.</li>
        <li>Funções: Estrutural, catalítica, transporte, entre outras.</li>
      </ul>
    </div>
  ),
  Enzimas: (
    <div>
      <p>Enzimas são proteínas que atuam como catalisadores biológicos.</p>
      <ul>
        <li>Definição: Aceleram reações químicas.</li>
        <li>Especificidade: Alta especificidade para substratos.</li>
        <li>Importância: Metabolismo e regulação celular.</li>
      </ul>
    </div>
  ),
  Carboidratos: (
    <div>
      <p>Carboidratos são moléculas de energia primária no organismo.</p>
      <ul>
        <li>Classificação: Monossacarídeos, dissacarídeos, polissacarídeos.</li>
        <li>Funções: Energia, reserva e estrutura.</li>
        <li>Exemplos: Glicose, amido, celulose.</li>
      </ul>
    </div>
  ),
  "Introdução a células": (
    <div>
      <p>As células são a unidade básica da vida.</p>
      <ul>
        <li>Estrutura: Membrana plasmática, citoplasma, núcleo.</li>
        <li>Funções: Metabolismo, reprodução, resposta ao ambiente.</li>
      </ul>
    </div>
  ),
  "Células procariontes e eucariontes": (
    <div>
      <p>As células podem ser classificadas em procariontes e eucariontes.</p>
      <ul>
        <li>Procariontes: Sem núcleo definido, ex.: bactérias.</li>
        <li>
          Eucariontes: Com núcleo definido, ex.: células animais e vegetais.
        </li>
        <li>Diferenças: Organelas, tamanho, complexidade.</li>
      </ul>
    </div>
  ),
  "Vírus e ácidos nucleicos": (
    <div>
      <p>
        Vírus são partículas infecciosas e ácidos nucleicos armazenam informação
        genética.
      </p>
      <ul>
        <li>Vírus: DNA ou RNA envoltos por cápsula proteica.</li>
        <li>Ácidos nucleicos: DNA e RNA.</li>
        <li>Função: Transmissão de informação genética.</li>
      </ul>
    </div>
  ),
  "Organelas citoplasmáticas": (
    <div>
      <p>Organelas desempenham funções específicas dentro da célula.</p>
      <ul>
        <li>Exemplos: Mitocôndrias, ribossomos, complexo de Golgi.</li>
        <li>Funções: Energia, síntese de proteínas, transporte.</li>
      </ul>
    </div>
  ),
};

export default function BcmolSite() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const handleHighlightClick = (e) => {
    const word = e.target.getAttribute("data-word");
    const details = glossary[word];
    if (details) {
      const rect = e.target.getBoundingClientRect();
      setTooltip({
        word,
        definition: details.definition,
        structure: details.structure,
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY - 50,
      });
    }
  };

  const closeTooltip = () => setTooltip(null);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {!selectedTopic ? (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>SAKI</h1>
          <p style={{ marginBottom: "2rem" }}>Bases Celulares e Moleculares</p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedTopic("Introdução a células")}
          >
            Explorar
          </button>
        </motion.div>
      ) : (
        <div>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#111",
              padding: "10px",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            {topics.map((topic) => (
              <button
                key={topic}
                style={{
                  margin: "0 5px",
                  padding: "8px 16px",
                  backgroundColor: selectedTopic === topic ? "#333" : "#555",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </nav>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                backgroundColor: "#222",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                {selectedTopic}
              </h2>
              <div onClick={handleHighlightClick}>{content[selectedTopic]}</div>
            </div>
          </div>
          {tooltip && (
            <div
              style={{
                position: "absolute",
                top: tooltip.y,
                left: tooltip.x,
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{tooltip.word}</p>
              <p>{tooltip.definition}</p>
              <img
                src={tooltip.structure}
                alt={tooltip.word}
                style={{ marginTop: "10px", maxWidth: "100px" }}
              />
              <button
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={closeTooltip}
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
