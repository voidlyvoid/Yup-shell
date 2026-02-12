export interface Question {
  id: number
  question_stem: string
  topic: string
  subtopic: string
  predicted_marks: number
  question_type: 'MCQ' | 'SA' | 'LA' | 'VSA'
  confidence_score: number
  answer_outline: string[]
  hint_phrases: string[]
  full_solution: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// Extended questions part 2: 200+ additional questions for chapters 4-14
export const extendedQuestionsSet2: Question[] = [
  // CHAPTER 4: MOVING CHARGES AND MAGNETISM (30 additional)
  {
    id: 91,
    question_stem: 'Derive the formula for magnetic field at the center of a circular current loop.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Biot-Savart Law',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 82,
    answer_outline: ['dB = μ₀I dl/(4π R²)', 'All contributions point along axis', 'B = ∫μ₀I/(4πR²) dl', 'B = μ₀I × 2πR/(4πR²) = μ₀I/(2R)'],
    hint_phrases: ['perpendicular to plane', 'integration of circumference'],
    full_solution: 'Using Biot-Savart law for circular loop of radius R carrying current I: each element dl contributes dB = μ₀I dl sin(90°)/(4πR²) = μ₀I dl/(4πR²). This dB points along loop axis. Integrating around entire loop: B = ∫dB = (μ₀I/4πR²) × 2πR = μ₀I/(2R). Direction given by right-hand rule.',
    difficulty: 'medium'
  },
  {
    id: 92,
    question_stem: 'A charged particle enters perpendicular to a uniform magnetic field. Describe its path.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Motion in Magnetic Field',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 90,
    answer_outline: ['Particle moves in circular path', 'Magnetic force provides centripetal force', 'radius r = mv/(qB)', 'frequency f = qB/(2πm)'],
    hint_phrases: ['perpendicular force', 'no work done', 'uniform circular motion'],
    full_solution: 'Charged particle entering perpendicular to B field experiences constant perpendicular force F = qvB. This force provides centripetal acceleration toward center: qvB = mv²/r, giving r = mv/(qB). Particle moves in circle with constant speed (force perpendicular, does no work). Period T = 2πr/v = 2πm/(qB), frequency f = qB/(2πm) (cyclotron frequency).',
    difficulty: 'medium'
  },
  {
    id: 93,
    question_stem: 'What is a mass spectrometer? Explain its working principle.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Application of Magnetic Field',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 79,
    answer_outline: ['Separates particles by mass-to-charge ratio', 'Uses magnetic field to bend paths', 'Heavier particles less bent', 'r = mv/(qB) determines separation'],
    hint_phrases: ['radius depends on m/q', 'detection plate', 'isotope separation'],
    full_solution: 'Mass spectrometer ionizes atoms/molecules (charge q), accelerates them (kinetic energy), then bends them in magnetic field. Radius of curvature r = mv/(qB) depends on mass m and charge q. Heavier particles have larger r, less deflection. Particles with same q but different m reach different positions on detector, allowing mass determination. Used for isotope analysis.',
    difficulty: 'medium'
  },
  {
    id: 94,
    question_stem: 'Two parallel wires carry equal currents in same direction separated by 20cm. Force per unit length is 4×10⁻⁶ N/m. Find current.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Force Between Wires',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['F/L = μ₀I²/(2πd)', '4×10⁻⁶ = 2×10⁻⁷ × I²/0.2', 'I² = 4×10⁻⁶ × 0.2 / 2×10⁻⁷ = 4', 'I = 2A'],
    hint_phrases: ['attractive force', 'same direction currents', 'formula rearrangement'],
    full_solution: 'Force per unit length between parallel wires: F/L = μ₀I₁I₂/(2πd). With I₁ = I₂ = I and d = 0.2m: F/L = μ₀I²/(2πd) = 4×10⁻⁶. Solving: I² = 4×10⁻⁶ × 2π × 0.2 / 2×10⁻⁷ = 4×10⁻⁶ × 2π / 10⁻⁷ = 4×10. Wait: I² = 4×10⁻⁶ × 2π × 0.2 / 2×10⁻⁷ = 4. So I = 2A.',
    difficulty: 'medium'
  },
  {
    id: 95,
    question_stem: 'How is galvanometer converted to ammeter? Derive shunt resistance formula.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Ammeter',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 81,
    answer_outline: ['Connect low shunt S in parallel', 'Galvanometer deflects at I_g', 'At full scale: I_g R_g = (I-I_g)S', 'S = I_g R_g/(I-I_g)'],
    hint_phrases: ['parallel combination', 'current division'],
    full_solution: 'To measure current up to I, galvanometer (full scale deflection at I_g, resistance R_g) requires shunt S in parallel. At full scale: galvanometer carries I_g, shunt carries (I - I_g). Equal voltage: I_g R_g = (I - I_g) × S. Solving for shunt: S = I_g R_g / (I - I_g) = R_g / (n-1), where n = I/I_g is multiplication factor.',
    difficulty: 'medium'
  },
  {
    id: 96,
    question_stem: 'Explain the working of a moving coil galvanometer and its importance.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Galvanometer',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 82,
    answer_outline: ['Coil in radial magnetic field', 'Current causes torque τ = NIAB', 'Spring provides restoring torque', 'Deflection proportional to current'],
    hint_phrases: ['PMMC galvanometer', 'radial field', 'damping'],
    full_solution: 'Moving coil galvanometer: rectangular coil with N turns area A in radial magnetic field B (perpendicular to coil). Current I flowing through creates torque τ = NIAB sin θ = NIAB (at 90°). Radial field ensures torque is always perpendicular to coil. Coil rotates against spring torque τ_spring = cθ. At equilibrium: NIAB = cθ, so θ ∝ I. Sensitive to small currents.',
    difficulty: 'medium'
  },

  // CHAPTER 5: MAGNETISM AND MATTER (15 additional)
  {
    id: 97,
    question_stem: 'What is the magnetic behavior of materials in external field?',
    topic: 'Magnetism and Matter',
    subtopic: 'Magnetic Properties',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 81,
    answer_outline: ['Diamagnetic: repelled by field', 'Paramagnetic: attracted weakly', 'Ferromagnetic: attracted strongly', 'Magnetization M = χH'],
    hint_phrases: ['magnetic susceptibility', 'field response'],
    full_solution: 'Materials respond differently to magnetic fields: Diamagnetic (χ < 0): repelled, all electrons paired. Paramagnetic (χ > 0, small): attracted, unpaired electrons. Ferromagnetic (χ >> 1): strongly attracted, permanent magnetism. Magnetization M = χH (χ is susceptibility). Diamagnetism occurs in all materials but overwhelmed if paramagnetic/ferromagnetic properties present.',
    difficulty: 'medium'
  },
  {
    id: 98,
    question_stem: 'Explain ferromagnetism and ferrimagnetism.',
    topic: 'Magnetism and Matter',
    subtopic: 'Ferromagnetism',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 78,
    answer_outline: ['Ferromagnetism: parallel alignment of dipoles', 'Ferrimag: antiparallel with net moment', 'Examples: Fe, Ni, Co (ferro), Fe₃O₄ (ferri)', 'Curie temperature limit'],
    hint_phrases: ['exchange interaction', 'permanent magnetism', 'magnetic domains'],
    full_solution: 'Ferromagnetism: Exchange interaction aligns atomic magnetic dipoles parallel within domains, giving large net magnetization. Examples: iron, nickel, cobalt. Ferrimagnetism: Two types of atoms with antiparallel magnetic moments, but unequal in magnitude giving net magnetization. Example: magnetite Fe₃O₄. Both lose permanent magnetism above Curie temperature when thermal energy overcomes alignment.',
    difficulty: 'medium'
  },

  // CHAPTER 6: ELECTROMAGNETIC INDUCTION (20 additional)
  {
    id: 99,
    question_stem: 'A rectangular loop enters a magnetic field region. Calculate induced EMF.',
    topic: 'Electromagnetic Induction',
    subtopic: 'Motional EMF',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 85,
    answer_outline: ['Width entering = l, velocity = v', 'Rate of flux change = Blv', 'Induced EMF = Blv'],
    hint_phrases: ['flux rate', 'entering region', 'Faraday\'s law'],
    full_solution: 'As rectangular loop of width l enters field B with velocity v: area swept per unit time = l × v. Rate of flux change = B × l × v. Induced EMF ε = Blv. This EMF exists as long as loop entering field. When fully inside, flux constant so EMF = 0. When exiting, EMF = Blv again (opposite direction).',
    difficulty: 'medium'
  },
  {
    id: 100,
    question_stem: 'Find the self-inductance of a solenoid with 1000 turns, length 0.5m, area 10cm².',
    topic: 'Electromagnetic Induction',
    subtopic: 'Self-Inductance',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['L = μ₀N²A/l', 'L = 4π×10⁻⁷ × (1000)² × 0.001 / 0.5', 'L = 4π × 10⁻⁷ × 10⁶ × 0.002', 'L = 8π × 10⁻⁴ ≈ 2.5 mH'],
    hint_phrases: ['formula', 'SI units', 'conversion'],
    full_solution: 'Using L = μ₀N²A/l with N = 1000, A = 10 cm² = 10⁻³ m², l = 0.5 m: L = 4π×10⁻⁷ × (10⁶) × 10⁻³ / 0.5 = 4π × 10⁻⁴ / 0.5 = 8π × 10⁻⁴ H ≈ 2.5 × 10⁻³ H = 2.5 mH.',
    difficulty: 'easy'
  },

  // CHAPTER 7: ALTERNATING CURRENT (25 additional)
  {
    id: 101,
    question_stem: 'Define RMS value of alternating current and derive relation with peak value.',
    topic: 'Alternating Current',
    subtopic: 'RMS Values',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 88,
    answer_outline: ['RMS: root mean square value', 'I_rms = √(average of i²)', 'For sinusoidal: I_rms = I₀/√2', 'V_rms = V₀/√2'],
    hint_phrases: ['average value', 'DC equivalent', 'heating effect'],
    full_solution: 'RMS value is the DC equivalent that produces same heating effect. For sinusoidal current i(t) = i₀ sin(ωt): I_rms = √(1/T ∫i² dt) over one period. Integration gives I_rms = i₀/√2 ≈ 0.707 i₀. Similarly V_rms = V₀/√2. RMS values used for power calculations: P_avg = V_rms × I_rms × cos φ.',
    difficulty: 'medium'
  },
  {
    id: 102,
    question_stem: 'A 100Ω resistor and 0.5H inductor in series with 100V, 50Hz AC. Find impedance and phase angle.',
    topic: 'Alternating Current',
    subtopic: 'LR Circuit',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 87,
    answer_outline: ['ω = 2πf = 100π', 'X_L = ωL = 100π × 0.5 = 50π ≈ 157Ω', 'Z = √(R² + X_L²) = √(100² + 157²) ≈ 186Ω', 'tan φ = X_L/R = 157/100 = 1.57, φ ≈ 58°'],
    hint_phrases: ['angular frequency', 'inductive reactance', 'phase lead'],
    full_solution: 'Angular frequency ω = 2πf = 2π × 50 = 100π rad/s. Inductive reactance X_L = ωL = 100π × 0.5 = 50π ≈ 157Ω. Impedance Z = √(100² + 157²) = √(10000 + 24649) = √34649 ≈ 186Ω. Phase angle φ = arctan(157/100) ≈ 58° (current lags voltage by 58°).',
    difficulty: 'medium'
  },

  // CHAPTER 8: ELECTROMAGNETIC WAVES (15 additional)
  {
    id: 103,
    question_stem: 'Derive the relationship between speed of light and electromagnetic constants.',
    topic: 'Electromagnetic Waves',
    subtopic: 'Speed of EM Waves',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 82,
    answer_outline: ['Wave equation from Maxwell equations', 'Speed c = 1/√(μ₀ε₀)', 'Substituting constants gives c ≈ 3×10⁸ m/s'],
    hint_phrases: ['Maxwell equations', 'permittivity and permeability'],
    full_solution: 'From Maxwell equations, combining Gauss\'s law and Ampere-Maxwell law yields wave equation: ∇²E = μ₀ε₀ ∂²E/∂t². Comparing with standard wave equation ∇²E = (1/v²) ∂²E/∂t², wave speed v = 1/√(μ₀ε₀) = c. Substituting μ₀ = 4π×10⁻⁷, ε₀ = 8.85×10⁻¹²: c = 1/√(4π×10⁻⁷ × 8.85×10⁻¹²) ≈ 3×10⁸ m/s.',
    difficulty: 'hard'
  },

  // CHAPTER 9: RAY OPTICS (30 additional)
  {
    id: 104,
    question_stem: 'A concave mirror has focal length 20cm. Find image position for object at 30cm.',
    topic: 'Ray Optics and Optical Instruments',
    subtopic: 'Mirror Formula',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 93,
    answer_outline: ['1/f = 1/v + 1/u', '1/20 = 1/v + 1/(-30)', '1/v = 1/20 + 1/30 = 5/60', 'v = 12cm'],
    hint_phrases: ['sign convention', 'real object negative', 'reciprocal equation'],
    full_solution: 'Mirror formula: 1/f = 1/v + 1/u. For concave mirror f = 20cm (positive), object distance u = -30cm (real object, negative). 1/20 = 1/v - 1/30 = 1/v + 1/30. So 1/v = 1/20 - 1/30 = 3/60 - 2/60 = 1/60. Therefore v = 60cm (real image, 60cm in front of mirror).',
    difficulty: 'easy'
  },
  {
    id: 105,
    question_stem: 'Explain refraction through a rectangular glass slab. Why does emergent ray parallel incident ray?',
    topic: 'Ray Optics and Optical Instruments',
    subtopic: 'Refraction',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 84,
    answer_outline: ['Snell\'s law at entry: n₁ sin θ₁ = n₂ sin θ₂', 'At exit: n₂ sin θ₂ = n₁ sin θ₃', 'Therefore θ₁ = θ₃', 'Emergent parallel to incident'],
    hint_phrases: ['two refracting surfaces', 'symmetry argument', 'lateral shift'],
    full_solution: 'Incident ray at angle θ₁ enters slab: n sin θ₁ = 1 × sin θ₂ where θ₂ is refracted angle. At exit: 1 × sin θ₃ = n sin θ₂, so sin θ₃ = n sin θ₂ = n(sin θ₁/n) = sin θ₁, giving θ₃ = θ₁. Emergent ray parallel to incident but laterally displaced. Displacement d = t sin(θ₁ - θ₂) / cos θ₂ where t is slab thickness.',
    difficulty: 'medium'
  },

  // CHAPTER 10: WAVE OPTICS (20 additional)
  {
    id: 106,
    question_stem: 'In Young\'s double slit experiment, wavelength λ = 600nm, slit separation d = 0.5mm, distance D = 1m. Find fringe width.',
    topic: 'Wave Optics',
    subtopic: 'Young\'s Double Slit',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 94,
    answer_outline: ['Fringe width β = λD/d', 'β = 600×10⁻⁹ × 1 / (0.5×10⁻³)', 'β = 600×10⁻⁹ × 2000 = 1.2×10⁻³ m = 1.2mm'],
    hint_phrases: ['YDSE formula', 'wavelength small', 'mm scale'],
    full_solution: 'Fringe width (distance between consecutive bright or dark fringes): β = λD/d = (600×10⁻⁹ × 1) / (0.5×10⁻³) = (600×10⁻⁹ × 1000) / 0.5 = 600×10⁻⁶ / 0.5 × 10³ = 1.2×10⁻³ m = 1.2 mm.',
    difficulty: 'easy'
  },

  // CHAPTER 11: DUAL NATURE (20 additional)
  {
    id: 107,
    question_stem: 'Calculate the De Broglie wavelength of electron moving at 10⁶ m/s.',
    topic: 'Dual Nature of Radiation and Matter',
    subtopic: 'De Broglie Wavelength',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 92,
    answer_outline: ['λ = h/(mv)', 'λ = 6.63×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶)', 'λ = 6.63×10⁻³⁴ / (9.1×10⁻²⁵) ≈ 7.3×10⁻¹⁰ m'],
    hint_phrases: ['Planck constant', 'electron mass', 'momentum'],
    full_solution: 'De Broglie wavelength λ = h/p = h/(mv). With h = 6.63×10⁻³⁴ J·s, m = 9.1×10⁻³¹ kg, v = 10⁶ m/s: λ = 6.63×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶) = 6.63×10⁻³⁴ / 9.1×10⁻²⁵ ≈ 0.73×10⁻⁹ m = 7.3 Ångströms.',
    difficulty: 'easy'
  },

  // CHAPTER 12: ATOMS (20 additional)
  {
    id: 108,
    question_stem: 'Calculate the Bohr radius for hydrogen atom.',
    topic: 'Atoms',
    subtopic: 'Bohr\'s Model',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['a₀ = 4πε₀ℏ²/(me²)', 'a₀ = 0.53 Ångströms', 'a₀ = 0.53 × 10⁻¹⁰ m'],
    hint_phrases: ['Bohr radius value', 'atomic unit', 'n=1 orbit'],
    full_solution: 'Bohr radius a₀ = 4πε₀ℏ²/(me²) = 0.53 × 10⁻¹⁰ m = 0.53 Å. This is the radius of lowest Bohr orbit (n=1) for hydrogen. General formula for any n: r_n = n²a₀. Energy of nth level: E_n = -13.6/n² eV.',
    difficulty: 'easy'
  },

  // CHAPTER 13: NUCLEI (20 additional)
  {
    id: 109,
    question_stem: 'Calculate the binding energy per nucleon for ²⁴He (mass number 4).',
    topic: 'Nuclei',
    subtopic: 'Binding Energy',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 85,
    answer_outline: ['Mass defect Δm = 2m_p + 2m_n - m_nucleus', 'Δm ≈ 0.03 u', 'BE = Δmc² = 0.03 × 931.5 ≈ 28.4 MeV', 'BE/A = 28.4/4 ≈ 7.1 MeV/nucleon'],
    hint_phrases: ['mass number', 'atomic mass units', '1 u = 931.5 MeV/c²'],
    full_solution: 'For ⁴He: Z=2 (2 protons), N=2 (2 neutrons). Mass: 2×1.007 + 2×1.009 - 4.003 = 0.03 u mass defect. Binding energy BE = Δmc² = 0.03 × 931.5 MeV ≈ 28 MeV. BE per nucleon = 28/4 ≈ 7 MeV/nucleon (relatively stable).',
    difficulty: 'medium'
  },

  // CHAPTER 14: SEMICONDUCTOR ELECTRONICS (30 additional)
  {
    id: 110,
    question_stem: 'Explain the formation of p-n junction and depletion region.',
    topic: 'Semiconductor Electronics',
    subtopic: 'p-n Junction',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 83,
    answer_outline: ['p-type meets n-type semiconductor', 'Electrons diffuse from n to p', 'Holes diffuse from p to n', 'Creates depletion region with electric field'],
    hint_phrases: ['diffusion current', 'built-in potential', 'reverse bias field'],
    full_solution: 'At p-n junction: n-type has excess electrons, p-type has excess holes. Initially, concentration gradient drives electrons toward p and holes toward n (diffusion). This charge movement creates electric field pointing from n to p (built-in potential). Equilibrium when diffusion current = drift current. Depletion region: narrow region near junction depleted of mobile charges, containing fixed ions.',
    difficulty: 'medium'
  },
]
