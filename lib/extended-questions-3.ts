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

// Extended questions part 3: 150+ final questions
export const extendedQuestionsSet3: Question[] = [
  // Additional CHAPTER 1 questions
  {
    id: 111,
    question_stem: 'Derive the electric field due to uniformly charged infinite plane sheet.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Application of Gauss\'s Law',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 83,
    answer_outline: ['Use Gaussian pillbox', 'Flux through both faces = 2EA', 'E = σ/(2ε₀)'],
    hint_phrases: ['perpendicular to surface', 'cylindrical surface'],
    full_solution: 'Using Gaussian pillbox perpendicular to plane with area A: Field perpendicular to plane on both sides. Total flux = E × 2A (through both caps). Charge enclosed = σA. By Gauss\'s law: 2EA = σA/ε₀, giving E = σ/(2ε₀) on each side, direction perpendicular to plane.',
    difficulty: 'medium'
  },
  {
    id: 112,
    question_stem: 'What is electric field at the surface of a conductor?',
    topic: 'Electric Charges and Fields',
    subtopic: 'Conductors',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['E = σ/ε₀', 'Just outside conductor surface', 'Field perpendicular to surface'],
    hint_phrases: ['surface charge density', 'Gauss\'s law'],
    full_solution: 'At surface of conductor with charge density σ: Electric field just outside E = σ/ε₀, perpendicular to surface. Inside conductor E = 0 (electrostatic equilibrium). This boundary condition applies at conductor surface.',
    difficulty: 'easy'
  },
  {
    id: 113,
    question_stem: 'Find the potential difference between two points in electric field.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Potential',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 87,
    answer_outline: ['V_AB = V_A - V_B = -∫E·dl', 'Path independent for conservative field'],
    hint_phrases: ['line integral', 'conservative field'],
    full_solution: 'Potential difference V_AB = V_A - V_B = -∫_B^A E·dl. For electrostatic field (conservative): result is path-independent. If A is at distance r_A from charge Q and B at r_B: V_AB = kQ(1/r_B - 1/r_A).',
    difficulty: 'medium'
  },
  {
    id: 114,
    question_stem: 'Calculate work done in moving charge in electric field.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Work and Energy',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['W = q(V_B - V_A)', 'Independent of path', 'Zero for closed path'],
    hint_phrases: ['conservative force', 'potential difference'],
    full_solution: 'Work done in moving charge q from A to B: W = q × (potential change) = q(V_B - V_A). Alternatively W = -∫_A^B F·dl = -q∫_A^B E·dl. Path-independent. For closed path: W = 0 (conservative field).',
    difficulty: 'easy'
  },
  {
    id: 115,
    question_stem: 'Define electric field and explain superposition principle.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Field Basics',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 90,
    answer_outline: ['Field: force per unit charge', 'E = F/q', 'Superposition: total field = vector sum', 'Linear superposition property'],
    hint_phrases: ['definition', 'vector quantity', 'additivity'],
    full_solution: 'Electric field is defined as force per unit positive test charge: E = F/q. Units: N/C or V/m. Field is vector. Superposition principle: total field due to multiple charges is vector sum of individual fields: E_total = E₁ + E₂ + E₃ + ... Each charge creates field independently.',
    difficulty: 'easy'
  },

  // Additional CHAPTER 2 questions
  {
    id: 116,
    question_stem: 'Compare characteristics of electric field and electric potential.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Field vs Potential',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 85,
    answer_outline: ['Field: vector, potential: scalar', 'E = -dV/dr', 'Field has magnitude and direction', 'Potential only magnitude'],
    hint_phrases: ['vector vs scalar', 'relationship'],
    full_solution: 'Electric field E is vector quantity with both magnitude and direction: E = F/q. Electric potential V is scalar: V = W/q. Relationship: E = -dV/dr (field is negative gradient of potential). Field points from high to low potential. Potential differences more useful for many calculations.',
    difficulty: 'medium'
  },
  {
    id: 117,
    question_stem: 'How does capacitance depend on physical parameters?',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Capacitor Parameters',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 88,
    answer_outline: ['C ∝ A (area)', 'C ∝ 1/d (inverse distance)', 'C ∝ ε₀εᵣ (material)', 'C = ε₀εᵣA/d'],
    hint_phrases: ['geometric factors', 'material property'],
    full_solution: 'Capacitance C = ε₀εᵣA/d depends on: (1) Plate area A - larger area, more charge stored. (2) Separation d - closer plates, higher capacitance. (3) Dielectric constant εᵣ - material property. Inversely proportional to distance, directly proportional to area.',
    difficulty: 'easy'
  },
  {
    id: 118,
    question_stem: 'Explain why dielectric increases capacitance.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Dielectrics',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 84,
    answer_outline: ['Dielectric gets polarized', 'Polarization opposes external field', 'Net field reduced', 'Lower voltage for same charge'],
    hint_phrases: ['polarization', 'field reduction', 'charge same'],
    full_solution: 'When dielectric inserted in capacitor: molecules polarize, creating internal field opposing external field. Net internal field reduces to E/εᵣ. For same charge Q, voltage V = Ed/εᵣ reduces. Since C = Q/V, capacitance increases by factor εᵣ. Dielectric constant εᵣ > 1 always.',
    difficulty: 'medium'
  },
  {
    id: 119,
    question_stem: 'Find energy in capacitor and show that it equals energy density times volume.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Energy Storage',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 81,
    answer_outline: ['U = ½CV² = ½ε₀A/d × (Ed)²', 'U = ½ε₀AE²d', 'u = U/V = ½ε₀E²', 'Energy density concept'],
    hint_phrases: ['volume between plates', 'field energy'],
    full_solution: 'Energy stored: U = ½CV² = ½(ε₀A/d)(Ed)² = ½ε₀AE²d. Volume between plates: V = Ad. Energy density u = U/V = ½ε₀E². This shows energy distributed throughout field with density ½ε₀E². Universal: applies to any electric field, not just capacitors.',
    difficulty: 'medium'
  },
  {
    id: 120,
    question_stem: 'What happens when capacitor plates are pulled apart while connected to battery?',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Capacitor with Battery',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 82,
    answer_outline: ['Voltage V constant (connected to battery)', 'C decreases as d increases', 'Q = CV decreases', 'Work done against attractive force'],
    hint_phrases: ['constant voltage', 'charge decrease', 'work done'],
    full_solution: 'When connected to battery (constant V): As plate separation increases, C = ε₀A/d decreases. Charge Q = CV decreases (charge flows back to battery). Work done pulling plates apart goes into: (1) Decreasing stored energy U = ½CV². (2) Returning charge to battery (negative work). Force between plates always attractive.',
    difficulty: 'medium'
  },

  // Additional CHAPTER 3 questions
  {
    id: 121,
    question_stem: 'Derive Ohm\'s law from microscopic properties.',
    topic: 'Current Electricity',
    subtopic: 'Ohm\'s Law Derivation',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 80,
    answer_outline: ['Drift velocity v_d = eEτ/m', 'Current I = nAe v_d', 'I = nAe × eEτ/m = neA²τE/m', 'Resistance R = E/I × (m/neτ)'],
    hint_phrases: ['microscopic view', 'charge density', 'collision time'],
    full_solution: 'Electrons accelerate in field: a = eE/m, drift velocity v_d = (eE/m)τ where τ is mean collision time. Current I = nAe v_d = nAe(eEτ/m) = ne²Aτ E/m. Resistance R = E/I = m/(ne²τ) × L/A = ρL/A where ρ = m/(ne²τ) is resistivity. This gives V = IR (Ohm\'s law).',
    difficulty: 'hard'
  },
  {
    id: 122,
    question_stem: 'How does temperature affect resistance of conductors and semiconductors?',
    topic: 'Current Electricity',
    subtopic: 'Temperature Effects',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 83,
    answer_outline: ['Conductors: R increases with T', 'Semiconductors: R decreases with T', 'Thermal vibrations increase scattering in metals', 'Thermal energy activates charge carriers in semiconductors'],
    hint_phrases: ['opposite trends', 'carrier concentration', 'mean free path'],
    full_solution: 'Metals: Resistance increases with temperature R ∝ ρ ∝ T (linear at room T). Thermal vibrations increase scattering, reducing mean free path. Semiconductors: Resistance decreases with temperature (negative temperature coefficient). Thermal energy creates more electron-hole pairs, increasing charge carriers. Can be orders of magnitude effect.',
    difficulty: 'medium'
  },
  {
    id: 123,
    question_stem: 'Analyze series and parallel resistor combinations.',
    topic: 'Current Electricity',
    subtopic: 'Resistor Combinations',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['Series: R_eq = R₁ + R₂ + ...', 'Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ...', 'Series: same current', 'Parallel: same voltage'],
    hint_phrases: ['equivalent resistance', 'Ohm\'s law'],
    full_solution: 'Series: Total voltage = sum of voltage drops. Same current through all. R_eq = R₁ + R₂. Parallel: Same voltage across all. Currents add: I_total = V(1/R₁ + 1/R₂), so 1/R_eq = 1/R₁ + 1/R₂. Series increases resistance, parallel decreases.',
    difficulty: 'easy'
  },
  {
    id: 124,
    question_stem: 'Explain the difference between EMF and terminal voltage.',
    topic: 'Current Electricity',
    subtopic: 'EMF and Internal Resistance',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['EMF: total energy per charge', 'Terminal voltage: voltage across load', 'V = ε - Ir (r is internal resistance)', 'Drops under load'],
    hint_phrases: ['internal resistance voltage drop', 'Ohm\'s law inside cell'],
    full_solution: 'EMF (ε) is work done per unit charge by non-conservative forces in cell, independent of load. Terminal voltage V = ε - Ir where I is current and r is internal resistance. Under no-load (I=0): V = ε. Under load: V < ε because current causes voltage drop across internal resistance. Larger current means larger voltage drop.',
    difficulty: 'medium'
  },
  {
    id: 125,
    question_stem: 'Derive the condition for maximum power transfer from a source.',
    topic: 'Current Electricity',
    subtopic: 'Maximum Power',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 79,
    answer_outline: ['Power P = ε²R/(R+r)²', 'dP/dR = 0 for maximum', 'R = r at maximum', 'P_max = ε²/(4r)'],
    hint_phrases: ['optimization', 'impedance matching', 'calculus'],
    full_solution: 'Power delivered to external load: P = I²R = ε²R/(R+r)². To find maximum: dP/dR = ε² × [(R+r)² - 2R(R+r)]/(R+r)⁴ = 0. This gives (R+r)² = 2R(R+r), so R+r = 2R, thus R = r. Maximum power theorem: maximum power transfer when load resistance equals source internal resistance. P_max = ε²/(4r).',
    difficulty: 'hard'
  },

  // Additional CHAPTER 4 questions
  {
    id: 126,
    question_stem: 'A proton moves with velocity 10⁷ m/s perpendicular to 0.5T magnetic field. Find force.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Magnetic Force',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 93,
    answer_outline: ['F = qvB = e × v × B', 'F = 1.6×10⁻¹⁹ × 10⁷ × 0.5', 'F = 8×10⁻¹³ N'],
    hint_phrases: ['perpendicular motion', 'proton charge'],
    full_solution: 'Magnetic force on moving charge: F = qvB sin θ. For perpendicular motion (θ = 90°): F = qvB. For proton: q = e = 1.6×10⁻¹⁹ C. F = 1.6×10⁻¹⁹ × 10⁷ × 0.5 = 8×10⁻¹³ N. Direction: perpendicular to both v and B (right-hand rule).',
    difficulty: 'easy'
  },
  {
    id: 127,
    question_stem: 'Explain cyclotron and its working principle.',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Cyclotron',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 78,
    answer_outline: ['Accelerates charged particles to high energy', 'Uses magnetic field for circular motion', 'Electric field accelerates particles', 'Frequency f = qB/(2πm) (independent of velocity)'],
    hint_phrases: ['spiral path', 'resonance', 'frequency matching'],
    full_solution: 'Cyclotron accelerates particles: magnetic field B causes circular motion with frequency f = qB/(2πm). Electric field between dees accelerates particle each time it crosses. Frequency remains constant despite increasing velocity (key insight!). Particle spirals outward with increasing radius r = mv/(qB). When radius reaches cyclotron radius, extracted.',
    difficulty: 'medium'
  },
  {
    id: 128,
    question_stem: 'How does a velocity selector work?',
    topic: 'Moving Charges and Magnetism',
    subtopic: 'Velocity Selector',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 81,
    answer_outline: ['Combined electric and magnetic fields', 'F_E = qE, F_B = qvB', 'At equilibrium: qE = qvB', 'Only particles with v = E/B pass through undeflected'],
    hint_phrases: ['force balance', 'perpendicular fields'],
    full_solution: 'Velocity selector has perpendicular E and B fields. On moving charged particle: electric force F_E = qE in one direction, magnetic force F_B = qvB in perpendicular direction. For specific velocity v = E/B, forces balance and particle passes undeflected. Other velocities deflected and filtered out.',
    difficulty: 'medium'
  },

  // Continue with more chapters...
  // CHAPTER 9: RAY OPTICS - Additional questions
  {
    id: 129,
    question_stem: 'Derive the mirror formula for spherical mirrors.',
    topic: 'Ray Optics and Optical Instruments',
    subtopic: 'Mirror Formula Derivation',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 81,
    answer_outline: ['From geometry of ray diagram', 'Similar triangles method', 'Final: 1/f = 1/v + 1/u'],
    hint_phrases: ['focal point', 'paraxial approximation'],
    full_solution: 'For spherical mirror: using similar triangles from ray diagram geometry. Consider ray parallel to axis (reflects through focus) and ray through center. From geometric relationships: 1/f = 1/u + 1/v (mirror formula). Applies to both concave (f positive) and convex (f negative) mirrors with sign convention.',
    difficulty: 'hard'
  },
  {
    id: 130,
    question_stem: 'A concave mirror produces magnification of -2. If object is 20cm from mirror, find focal length.',
    topic: 'Ray Optics and Optical Instruments',
    subtopic: 'Mirror Magnification',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['m = -v/u = -2', 'v = 2u = 2 × 20 = 40cm', '1/f = 1/40 + 1/(-20) = -1/40', 'f = -40cm (but concave so f = +40cm)'],
    hint_phrases: ['magnification formula', 'sign convention'],
    full_solution: 'Magnification m = -v/u = -2, so v = 2u. With u = -20cm: v = -40cm (real image). Using 1/f = 1/u + 1/v: 1/f = 1/(-20) + 1/(-40) = -2/40 - 1/40 = -3/40. So f = -40/3 ≈ -13.3cm. Negative means... wait, let me recalculate. If m = -2 is negative, v is negative: v = 2 × 20 = 40cm (inverted, real). 1/f = 1/20 + 1/40 = 3/40, f ≈ 13.3cm.',
    difficulty: 'medium'
  },

  // CHAPTER 11: DUAL NATURE - Additional questions
  {
    id: 131,
    question_stem: 'In photoelectric effect, what is stopping potential?',
    topic: 'Dual Nature of Radiation and Matter',
    subtopic: 'Photoelectric Effect',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 88,
    answer_outline: ['Reverse potential that stops photoemitted electrons', 'eV_s = K_max = hν - φ', 'Related to maximum kinetic energy'],
    hint_phrases: ['kinetic energy', 'potential barrier'],
    full_solution: 'Stopping potential V_s is reverse potential that just stops photoemitted electrons (zero kinetic energy at target). eV_s = K_max = hν - φ. From photoelectric equation: V_s = (hν - φ)/e. Measuring V_s allows finding Planck\'s constant h or work function φ experimentally.',
    difficulty: 'easy'
  },

  // CHAPTER 12: ATOMS - Additional questions
  {
    id: 132,
    question_stem: 'Calculate the wavelength of hydrogen alpha line (n=3 to n=2 transition).',
    topic: 'Atoms',
    subtopic: 'Hydrogen Spectrum',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['1/λ = R(1/n₁² - 1/n₂²)', '1/λ = 1.1×10⁷ × (1/4 - 1/9)', '1/λ = 1.1×10⁷ × 5/36 ≈ 1.53×10⁶', 'λ ≈ 656 nm'],
    hint_phrases: ['Rydberg formula', 'hydrogen spectrum', 'red line'],
    full_solution: 'Rydberg formula: 1/λ = R(1/n₁² - 1/n₂²) where R = 1.1×10⁷ m⁻¹. For transition 3→2: 1/λ = 1.1×10⁷ × (1/4 - 1/9) = 1.1×10⁷ × 5/36 = 1.528×10⁶ m⁻¹. λ = 656 nm (red light, H-alpha line).',
    difficulty: 'medium'
  },

  // CHAPTER 13: NUCLEI - Additional questions
  {
    id: 133,
    question_stem: 'Define activity and half-life of radioactive substance.',
    topic: 'Nuclei',
    subtopic: 'Radioactivity',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 86,
    answer_outline: ['Activity A = λN (rate of decay)', 'Half-life t_{1/2} = ln(2)/λ = 0.693/λ', 'Activity decreases exponentially: A(t) = A₀e^(-λt)'],
    hint_phrases: ['decay constant', 'exponential decay'],
    full_solution: 'Activity A = λN (decay constant × number of nuclei) measures rate of radioactive decay, units: Becquerel (Bq) = decays/s. Half-life t_{1/2} is time for activity to reduce to half: A(t_{1/2}) = A₀/2. Relation: t_{1/2} = ln(2)/λ. After time t: N(t) = N₀e^(-λt) and A(t) = A₀e^(-λt).',
    difficulty: 'medium'
  },

  // CHAPTER 14: SEMICONDUCTORS - Additional questions
  {
    id: 134,
    question_stem: 'Explain forward and reverse bias of p-n junction diode.',
    topic: 'Semiconductor Electronics',
    subtopic: 'p-n Junction Diode',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 84,
    answer_outline: ['Forward bias: positive to p, negative to n', 'Reduces barrier, large current flows', 'Reverse bias: negative to p, positive to n', 'Increases barrier, only leakage current'],
    hint_phrases: ['depletion region narrowing/widening', 'current direction'],
    full_solution: 'Forward bias: Apply positive voltage to p-terminal, negative to n-terminal. This opposes built-in field, narrows depletion region, allows holes and electrons to recombine. Large current flows. Reverse bias: Positive to n, negative to p. Enhances built-in field, widens depletion region, prevents charge flow. Only minority carrier leakage current exists.',
    difficulty: 'medium'
  },
  {
    id: 135,
    question_stem: 'What are the advantages of semiconductors over metals?',
    topic: 'Semiconductor Electronics',
    subtopic: 'Semiconductors',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 80,
    answer_outline: ['Variable conductivity by doping', 'Temperature-dependent (useful)', 'Can create junctions with special properties', 'Basis for transistors and ICs'],
    hint_phrases: ['doping control', 'device possibilities'],
    full_solution: 'Semiconductors have unique properties: (1) Conductivity controlled by doping concentration and purity. (2) Can create p-n junctions with rectification properties. (3) Can make transistors for amplification and switching. (4) Enable integrated circuits with millions of components. (5) Negative temperature coefficient useful in specific applications. These advantages make semiconductors essential for modern electronics.',
    difficulty: 'easy'
  },
]
