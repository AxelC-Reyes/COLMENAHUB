import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ProfessionsList = ({ setCurrentScreen, setSelectedProfessional, category }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Datos de ejemplo organizados por categoría
  const professionsData = {
    professionals: [
     "Abogado", "Académico", "Actor/actriz", "Administrador", "Administrador de redes informáticas",  
  "Agrónomo", "Alergólogo", "Anatomista", "Anestesista", "Antologista",  
  "Antropólogo", "Arabista", "Árbitro", "Archivero", "Arqueólogo",  
  "Arquitecto", "Asistente Técnico Sanitario (ATS)", "Astrólogo", "Astronauta", "Astrónomo",  
  "Autor", "Bacteriólogo", "Bailarín", "Baloncestista", "Banquero",  
  "Bibliógrafo", "Bibliotecario", "Biofísico", "Biógrafo", "Biólogo",  
  "Bioquímico", "Botánico", "Cardiólogo", "Cartógrafo", "Catador de vinos",  
  "Científico", "Cineasta", "Cirujano", "Citólogo", "Climatólogo",  
  "Community Manager", "Consejero", "Conservador", "Contable", "Copywriter",  
  "Corredor de bolsa", "Cosmógrafo", "Criminalista", "Cronólogo", "Decorador",  
  "Delineante", "Demógrafo", "Dentista", "Deportista profesional", "Dermatólogo",  
  "Detective", "Dibujante", "Dietista", "Diplomático", "Director de colegio o instituto",  
  "Director de orquesta", "Diseñador de interiores", "Diseñador gráfico", "Documentalista", "Economista",  
  "Ecólogo", "Educador", "Egiptólogo", "Electricista", "Electrónico",  
  "Empresario", "Endocrinólogo", "Enfermero", "Entomólogo", "Entrenador",  
  "Enólogo", "Epidemiólogo", "Escritor", "Escultor", "Especialista de cine",  
  "Espeleólogo", "Estadista", "Estadístico", "Esteticista", "Estilista",  
  "Estomatólogo", "Etimólogo", "Etnógrafo", "Etnólogo", "Explorador",  
  "Farmacéutico", "Farmacólogo", "Filólogo", "Filosofo", "Fiscal",  
  "Físico", "Fisiólogo", "Fisioterapeuta", "Fonetista", "Foniatra",  
  "Fonólogo", "Forense", "Fotógrafo", "Funcionario", "Futbolista profesional",  
  "Ganadero", "Gemólogo", "Genetista", "Geobotánica", "Geodesta",  
  "Geofísico", "Geógrafo", "Geólogo", "Geomántico", "Geómetra",  
  "Geoquímico", "Gerente", "Geriatra", "Gerontólogo", "Gimnasta",  
  "Ginecólogo", "Grabador", "Graduado Social", "Grafólogo", "Gramático",  
  "Guía Turístico", "Guionista", "Hematólogo", "Hepatólogo", "Hidrogeólogo",  
  "Hidrógrafo", "Hidrólogo", "Higienista", "Hispanista", "Historiador",  
  "Homeópata", "Ilustrador", "Informador turístico", "Informático", "Ingeniero",  
  "Inmunólogo", "Inspector", "Instructor de natación", "Inventor", "Investigador",  
  "Jardinero", "Jefe", "Jinete", "Juez", "Karateca",  
  "Kinesiólogo", "Latinista", "Lexicógrafo", "Lexicólogo", "Lingüista",  
  "Locutor", "Logopeda", "Lotero", "Maestro", "Manager",  
  "Maquillador", "Matemático", "Médico", "Meteorólogo", "Micólogo",  
  "Microcirujano", "Mineralogista", "Modelo", "Músico", "Nanotecnólogo",  
  "Narrador", "Naturólogo", "Nefrólogo", "Neonatólogo", "Neumólogo",  
  "Neuroanatomista", "Neurobiólogo", "Neurocirujano", "Neuroembriólogo", "Neurofisiólogo",  
  "Neurólogo", "Notario", "Novelista", "Nutricionista", "Obstetra",  
  "Oceanógrafo", "Odontólogo", "Oftalmólogo", "Oncólogo", "Óptico",  
  "Optometrista", "Organizador de eventos", "Orientador", "Ornitólogo", "Ortopédico",  
  "Osteólogo", "Osteópata", "Otorrinolaringólogo", "Paleobiólogo", "Paleobotánico",  
  "Paleógrafo", "Paleólogo", "Paleontólogo", "Pedagogo", "Pediatra",  
  "Pedicuro", "Peluquero", "Perito", "Personal trainer", "Periodista",  
  "Piloto de avión", "Podólogo", "Policía", "Prehistoriador", "Proctólogo",  
  "Procurador", "Profesor", "Programador", "Protésico", "Psicoanalista",  
  "Psicopedagogo", "Psicoterapeuta", "Psiquiatra", "Publicista", "Publicitario",  
  "Puericultor", "Químico", "Quiropráctico", "Radioastrónomo", "Radiofonista",  
  "Radiólogo", "Radiotécnico", "Radiotelefonista", "Radioterapeuta", "Rector",  
  "Redactor", "Reportero", "Rotulista", "Sacerdote", "Secretario/a",  
  "Sexólogo", "Sismólogo", "Sociólogo", "Sumiller", "Tatuador",  
  "Taxidermista", "Técnico informático", "Tele comunicador", "Telefonista", "Tenista",  
  "Teólogo", "Terapeuta", "Tintorero", "Tocoginecólogo", "Tocólogo",  
  "Topógrafo", "Toxicólogo", "Trabajador social", "Traductor", "Transcriptor",  
  "Traumatólogo", "Ufólogo", "Urólogo", "Veterinario", "Virólogo",  
  "Vulcanólogo", "Xilógrafo", "Zoólogo", "Zootécnico"
    ],
    contractors: [
      "Afilador", "Albañil", "Alfarero", "Alguero", "Almacenero",  
  "Apicultor", "Armero", "Artista", "Atleta", "Avicultor",  
  "Azafato o Auxiliar de vuelo", "Barbero", "Barista", "Barman", "Barrendero",  
  "Bedel", "Bombero", "Boxeador", "Buzo", "Cajero",  
  "Camarera de pisos", "Camarero", "Camionero", "Cantante", "Cantero",  
  "Carnicero", "Carpintero", "Cartero", "Castrador", "Celador",  
  "Cerero", "Cerrajero", "Chófer", "Ciclista", "Cocinero",  
  "Comadrón", "Conserje", "Constructor", "Creador de contenidos", "Cristalero",  
  "Domador", "Ebanista", "Encofrador", "Encuestador", "Enterrador",  
  "Escolta", "Feriante", "Ferretero", "Flautista", "Florista",  
  "Frutero", "Fumigador", "Funerario", "Granjero", "Gruista",  
  "Guarda Bosques", "Guardaespaldas", "Guarda jurado", "Guardia Civil", "Heladero",  
  "Herbolario", "Herrero", "Hilador", "Hortelano", "Horticultor",  
  "Hostelero", "Hotelero", "Humorista", "Jornalero", "Joyero",  
  "Juguetero", "Lamparero", "Lavaplatos", "Lechero", "Legionario",  
  "Librero", "Limpiabotas", "Limpiacristales", "Limpiador", "Manicurista",  
  "Manporrero", "Maquinista", "Marinero", "Mecánico", "Mensajero",  
  "Militar", "Mimógrafo", "Molinero", "Monitor de actividades de ocio y tiempo libre",  
  "Monitor de esquí", "Monja/e", "Nadador profesional", "Niñera/o", "Novillero",  
  "Obrero", "Oficinista", "Ordenanza", "Orfebre", "Panadero",  
  "Pastelero", "Pastor", "Percebeiro", "Pescadero", "Pescador",  
  "Pintor", "Piscicultor", "Portero", "Repartidor", "Repostero",  
  "Sastre", "Sexador de pollos", "Socorrista", "Soldado", "Soldador",  
  "Tapicero", "Tarotista", "Taxista", "Titiritero", "Torero",  
  "Tornero", "Transportista", "Utilero", "Vendedor", "Verdulero",  
  "Vidente", "Vigilante de seguridad", "Viticultor", "Zapatero"
    ]
  };

  const professions = category === 'professionals' 
    ? professionsData.professionals 
    : professionsData.contractors;

  const filteredProfessions = professions.filter(profession =>
    profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProfession = (profession) => {
    setSelectedProfessional({ 
      name: profession,
      category: category
    });
    setCurrentScreen('profile');
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {category === 'professionals' ? 'Profesionistas' : 'Contratistas'} disponibles
        </h1>
        
        <div className="mb-8">
          <SearchBar 
            placeholder={`Buscar ${category === 'professionals' ? 'profesionistas' : 'contratistas'}...`} 
            onSearch={setSearchTerm}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProfessions.map((profession, index) => (
            <div 
              key={index}
              onClick={() => handleSelectProfession(profession)}
              className="p-4 border border-gray-200 rounded-lg hover:bg-honey-7549 hover:text-white cursor-pointer transition-colors shadow-sm"
            >
              <div className="font-medium">{profession}</div>
              <div className="text-sm text-gray-500 hover:text-white">
                {category === 'professionals' ? 'Profesional certificado' : 'Servicio especializado'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionsList;

// DONE
